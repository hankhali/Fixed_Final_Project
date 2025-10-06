// Ping Pong Game Implementation
export interface GameConfig {
  canvasWidth: number;
  canvasHeight: number;
  paddleWidth: number;
  paddleHeight: number;
  ballSize: number;
  paddleSpeed: number;
  ballSpeed: number;
  maxScore: number;
  // Customization
  theme?: 'neon' | 'retro' | 'dark' | 'space' | 'classic';
  powerUpsEnabled?: boolean;
  attacksEnabled?: boolean; // reserved for future use
  powerUpTypes?: Array<'paddle_size' | 'ball_speed' | 'slow_opponent' | 'shrink_opponent' | 'curve_ball' | 'multi_ball' | 'reverse_controls' | 'shield' | 'magnet'>;
  // Player-specific power-ups
  player1PowerUps?: { [key: string]: number }; // power-up type -> remaining uses
  player2PowerUps?: { [key: string]: number }; // power-up type -> remaining uses
}

export interface Player {
  id: string;
  name: string;
  score: number;
  y: number;
  isAI?: boolean;
  temporaryPaddleBoostUntilMs?: number;
  temporaryPaddleSlowUntilMs?: number;
  temporaryPaddleShrinkUntilMs?: number;
  temporaryReverseControlsUntilMs?: number;
  temporaryShieldUntilMs?: number;
  temporaryMagnetUntilMs?: number;
}

export interface Ball {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  speed: number;
  radius: number;
  lastHitBy?: string;
}

export interface PowerUpCollectible {
  id: string;
  type: PowerUpType;
  x: number;
  y: number;
  radius: number;
  spawnTime: number;
  duration: number; // How long it stays on field before disappearing
  collected: boolean;
  glowPhase: number; // For animation
}

export type PowerUpType = 
  | 'paddle_size_boost' | 'paddle_speed_boost' | 'ball_speed_slow' | 'ball_speed_fast'
  | 'shrink_opponent' | 'curve_ball' | 'multi_ball' | 'reverse_controls' 
  | 'shield' | 'magnet' | 'freeze_opponent' | 'invisible_ball';

export interface GameState {
  isPlaying: boolean;
  isPaused: boolean;
  isGameOver: boolean;
  winner: Player | null;
  startTime: number;
  elapsedTime: number;
}

interface PowerUp {
  x: number;
  y: number;
  radius: number;
  type: 'paddle_size' | 'ball_speed' | 'slow_opponent' | 'shrink_opponent' | 'curve_ball' | 'multi_ball' | 'reverse_controls' | 'shield' | 'magnet';
  active: boolean;
  collector?: 'player1' | 'player2';
}

// AI System Interfaces
interface AIGameState {
  ball: Ball;
  extraBalls: Ball[];
  player1: Player;
  player2: Player;
  powerUps: PowerUp[];
  timestamp: number;
}

interface BallPrediction {
  x: number;
  y: number;
  timeToReach: number;
  willHitPaddle: boolean;
  bounces: number;
}

// @ts-ignore
interface AIStrategy {
  mode: 'defensive' | 'aggressive' | 'balanced';
  targetY: number;
  confidence: number;
  shouldCollectPowerUp: boolean;
  targetPowerUp?: PowerUp;
}

interface AIPersonality {
  reactionDelay: number;        // 100-300ms delay
  predictionAccuracy: number;   // 0.7-0.95 (70%-95% accuracy)
  speedVariation: number;       // 0.8-1.2 speed multiplier
  aggressiveness: number;       // 0.3-0.8 (how aggressive in returns)
  powerUpPriority: number;      // 0.4-0.9 (likelihood to go for power-ups)
}

export class PongGame {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private config: GameConfig;
  private player1: Player;
  private player2: Player;
  private ball: Ball;
  private gameState: GameState;
  private keys: { [key: string]: boolean } = {};
  private animationId: number | null = null;
  private onGameEnd?: (winner: Player, gameTime: number) => void;
  private onScoreUpdate?: (player1Score: number, player2Score: number) => void;
  private powerUps: PowerUp[] = [];
  private nextHitCurveFor: 'player1' | 'player2' | null = null;
  private extraBalls: Ball[] = [];
  // Removed unused collectedPowerUps property
  
  // Collectible Power-ups System - DISABLED
  // private collectiblePowerUps: PowerUpCollectible[] = [];
  // private lastCollectibleSpawnAtMs = 0;
  // private collectibleSpawnInterval = 3000;
  // private collectibleLifetime = 20000;

  // [ADDED BY HANIEH]
  public matchId?: number;
  public tournamentId?: number;

  // Advanced AI System Properties
  // @ts-ignore
  private aiGameState: AIGameState | null = null;
  // private aiLastUpdateTime = 0; // Unused
  // private aiUpdateInterval = 1000; // Unused
  private aiPersonality: AIPersonality = {
    predictionAccuracy: 0.8,
    aggressiveness: 0.5,
    powerUpPriority: 0.3,
    reactionDelay: 100,
    speedVariation: 0.9
  };
  // private aiCurrentStrategy: AIStrategy; // Unused variable
  // private aiReactionQueue: Array<{action: 'up' | 'down' | 'stop', executeAt: number}> = []; // Unused variable
  // @ts-ignore
  private aiPredictionHistory: BallPrediction[] = [];
  private aiDifficulty: 'easy' | 'medium' | 'hard' = 'medium';

  constructor(canvas: HTMLCanvasElement, config?: Partial<GameConfig>) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!;
    
    // Default configuration
    this.config = {
      canvasWidth: 800,
      canvasHeight: 400,
      paddleWidth: 12,
      paddleHeight: 80,
      ballSize: 8,
      paddleSpeed: 6,
      ballSpeed: 4,
      maxScore: 5,
      theme: 'neon',
      powerUpsEnabled: true,
      attacksEnabled: false,
      powerUpTypes: ['paddle_size', 'ball_speed'],
      ...config
    };
    
    // Configuration applied

    // Set canvas size
    this.canvas.width = this.config.canvasWidth;
    this.canvas.height = this.config.canvasHeight;

    // Initialize players
    this.player1 = {
      id: 'player1',
      name: 'Player 1',
      score: 0,
      y: this.config.canvasHeight / 2 - this.config.paddleHeight / 2
    };

    this.player2 = {
      id: 'player2',
  name: (config && (config as any).gameMode === 'ai') ? 'AI Opponent' : 'Player 2',
  score: 0,
  y: this.config.canvasHeight / 2 - this.config.paddleHeight / 2,
  isAI: (config && (config as any).gameMode === 'ai') ? true : false
    };

    // Initialize ball
    this.ball = {
      x: this.config.canvasWidth / 2,
      y: this.config.canvasHeight / 2,
      velocityX: this.config.ballSpeed * (Math.random() > 0.5 ? 1 : -1),
      velocityY: this.config.ballSpeed * (Math.random() > 0.5 ? 1 : -1),
      speed: this.config.ballSpeed,
      radius: this.config.ballSize
    };

    // Initialize game state
    this.gameState = {
      isPlaying: false,
      isPaused: false,
      isGameOver: false,
      winner: null,
      startTime: 0,
      elapsedTime: 0
    };

    // Game state initialized

    this.setupEventListeners();
    this.render();

    // Initialize AI personality based on difficulty
    this.initializeAIPersonality();
    // this.aiCurrentStrategy = { // This line was commented out in the original file
    //   mode: 'balanced',
    //   targetY: this.config.canvasHeight / 2,
    //   confidence: 0.5,
    //   shouldCollectPowerUp: false
    // };
  }

  // Public Methods
  public startGame(): void {
    this.gameState.isPlaying = true;
    this.gameState.isPaused = false;
    this.gameState.isGameOver = false;
    this.gameState.startTime = Date.now();
    this.resetBall();
    this.animationId = null;
    this.gameLoop();
  }

  public pauseGame(): void {
    this.gameState.isPaused = !this.gameState.isPaused;
    if (!this.gameState.isPaused) {
      this.gameLoop();
    }
  }

  public resetGame(): void {
    this.gameState.isPlaying = false;
    this.gameState.isPaused = false;
    this.gameState.isGameOver = false;
    this.gameState.winner = null;
    this.player1.score = 0;
    this.player2.score = 0;
    this.player1.temporaryPaddleBoostUntilMs = undefined;
    this.player2.temporaryPaddleBoostUntilMs = undefined;
    this.player1.temporaryPaddleSlowUntilMs = undefined;
    this.player2.temporaryPaddleSlowUntilMs = undefined;
    this.player1.temporaryPaddleShrinkUntilMs = undefined;
    this.player2.temporaryPaddleShrinkUntilMs = undefined;
    this.player1.temporaryReverseControlsUntilMs = undefined;
    this.player2.temporaryReverseControlsUntilMs = undefined;
    this.player1.temporaryShieldUntilMs = undefined;
    this.player2.temporaryShieldUntilMs = undefined;
    this.player1.temporaryMagnetUntilMs = undefined;
    this.player2.temporaryMagnetUntilMs = undefined;
    this.powerUps = [];
    this.nextHitCurveFor = null;
    this.extraBalls = [];
    this.resetBall();
    this.resetPaddles();
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    this.render();
  }

  public setPlayer2AI(isAI: boolean): void {
    this.player2.isAI = isAI;
  }

  public setPlayerNames(player1Name: string, player2Name: string): void {
    this.player1.name = player1Name;
    this.player2.name = player2Name;
    // Force a re-render to immediately update the names on canvas
    this.render();
  }

  public onGameEndCallback(callback: (winner: Player, gameTime: number) => void): void {
    this.onGameEnd = callback;
  }

  public onScoreUpdateCallback(callback: (player1Score: number, player2Score: number) => void): void {
    this.onScoreUpdate = callback;
  }

  public updateConfig(newConfig: Partial<GameConfig>): void {
    Object.assign(this.config, newConfig);
    
    // Apply visual changes immediately
    if (newConfig.theme) {
      // The theme will be applied in the next render cycle automatically
    }
  }

  public getGameState(): GameState {
    return { ...this.gameState };
  }

  public getPlayers(): { player1: Player; player2: Player } {
    return {
      player1: { ...this.player1 },
      player2: { ...this.player2 }
    };
  }

  // Private Methods
  private setupEventListeners(): void {
    // Keyboard controls
    document.addEventListener('keydown', (e) => {
      const key = e.key.toLowerCase();
      this.keys[key] = true;
      // Prevent default for game control keys
      if (["arrowup", "arrowdown", "w", "s", " "].includes(key)) {
        e.preventDefault();
      }
      // Game controls
      if (key === ' ') {
        if (this.gameState.isPaused) {
          this.resetGame();
        } else {
          this.pauseGame();
        }
      }
      
      // Player 1 power-up activation (A key)
      if (key === 'a') {
        if (this.gameState.isPlaying && this.config.powerUpsEnabled) {
          this.activateCollectedPowerUp('player1');
        }
      }
      
      // Player 2 power-up activation (T key)
      if (key === 't') {
        if (this.gameState.isPlaying && this.config.powerUpsEnabled) {
          this.activateCollectedPowerUp('player2');
        }
      }
      if (key === 'r') {
        this.resetGame();
      }
      // if (key === 'p') {
      //   // Manual spawn collectible for testing
      //   this.spawnCollectiblePowerUp();
      //   console.log('🧪 Manual collectible spawn triggered!');
      // }
      if (key === 'x') {
        // TEST: Add power-up directly to Player 1 inventory
        this.addPowerUpToInventory('paddle_size_boost', 'player1');
      }
      if (key === 'z') {
        // TEST: Add power-up directly to Player 2 inventory
        this.addPowerUpToInventory('ball_speed_fast', 'player2');
      }
    });

    document.addEventListener('keyup', (e) => {
      this.keys[e.key.toLowerCase()] = false;
    });

    // Mouse/Touch controls for mobile
  // Removed mouse and touch controls for player 2. Only arrow keys control player 2 now.
  }

  private gameLoop(): void {
    if (!this.gameState.isPlaying || this.gameState.isPaused || this.gameState.isGameOver) {
      return;
    }

    this.update();
    this.render();
    this.animationId = requestAnimationFrame(() => this.gameLoop());
  }

  private update(): void {
    // Update elapsed time
    this.gameState.elapsedTime = Date.now() - this.gameState.startTime;

    // Update paddles
    this.updatePaddles();
    this.updateBall();
    
    // Update power-ups
    this.updatePowerUps();
    
    // Update collectible power-ups system - DISABLED
    // this.updateCollectiblePowerUps();
    
    // Update extra balls
    this.updateExtraBalls();

    // Check for scoring
    this.checkScoring();

    // Check for game end
    this.checkGameEnd();
  }

  private getEffectivePaddleSpeed(player: Player): number {
    let base = this.config.paddleSpeed;
    
    // Paddle speed calculation
    
    const now = Date.now();
    if (player.temporaryPaddleSlowUntilMs && now < player.temporaryPaddleSlowUntilMs) {
      base *= 0.6;
    }
    return base;
  }

  private updatePaddles(): void {
    const p1Speed = this.getEffectivePaddleSpeed(this.player1);
    const p2Speed = this.getEffectivePaddleSpeed(this.player2);
  
    // Player 1 controls (W/S)
    const p1Reverse = this.player1.temporaryReverseControlsUntilMs && Date.now() < this.player1.temporaryReverseControlsUntilMs;
    if (this.keys['w']) {
      this.player1.y -= p1Reverse ? -p1Speed : p1Speed;
    }
    if (this.keys['s']) {
      this.player1.y += p1Reverse ? -p1Speed : p1Speed;
    }
  
    // Player 2 controls (Arrow Up/Down)
    if (!this.player2.isAI) {
      const p2Reverse = this.player2.temporaryReverseControlsUntilMs && Date.now() < this.player2.temporaryReverseControlsUntilMs;
      if (this.keys['arrowup']) {
        this.player2.y -= p2Reverse ? -p2Speed : p2Speed;
      }
      if (this.keys['arrowdown']) {
        this.player2.y += p2Reverse ? -p2Speed : p2Speed;
      }
    } else {
      this.updateAI(p2Speed);
      
      // Handle AI power-ups
      if (this.config.powerUpsEnabled) {
        this.handleAIPowerUps();
      }
    }
  
    // Clamp paddles to canvas bounds
    this.clampPaddle(this.player1);
    this.clampPaddle(this.player2);
  }

  private updateAI(aiSpeed: number): void {
    // Simple AI: just follow the ball's Y position
    const ballY = this.ball.y;
    const paddleCenterY = this.player2.y + this.getPaddleHeight(this.player2) / 2;
    const difference = ballY - paddleCenterY;
    
    if (Math.abs(difference) > 10) { // Dead zone to prevent jittering
      if (difference > 0) {
        this.player2.y += aiSpeed;
      } else {
        this.player2.y -= aiSpeed;
      }
    }
  }

  // private updateAIGameState(): void {
  //   // Unused function - commented out to fix TypeScript error
  // }

  // private analyzeGameSituation(): void {
  //   // Unused function
  // }

  // @ts-ignore
  private predictBallTrajectory(ball: Ball): BallPrediction {
    // Simulate ball movement with physics
    let x = ball.x;
    let y = ball.y;
    let vx = ball.velocityX;
    let vy = ball.velocityY;
    let bounces = 0;
    let timeSteps = 0;
    const maxSteps = 1000; // Prevent infinite loops
    
    const paddleX = this.config.canvasWidth - this.config.paddleWidth * 2;
    
    // Add prediction error based on AI personality
    const errorFactor = 1 - this.aiPersonality.predictionAccuracy;
    const predictionError = (Math.random() - 0.5) * errorFactor * 100;
    
    while (x > paddleX && x < this.config.canvasWidth && timeSteps < maxSteps) {
      x += vx;
      y += vy;
      timeSteps++;
      
      // Handle wall bounces
      if (y <= 0 || y >= this.config.canvasHeight) {
        vy = -vy;
        y = Math.max(0, Math.min(y, this.config.canvasHeight));
        bounces++;
      }
      
      // Stop if ball is moving away from AI
      if (vx < 0) break;
    }
    
    return {
      x: x,
      y: y + predictionError,
      timeToReach: timeSteps,
      willHitPaddle: x >= paddleX && x <= this.config.canvasWidth,
      bounces: bounces
    };
  }

  // @ts-ignore
  private determineAIStrategy(prediction: BallPrediction): void {
    const scoreGap = this.player2.score - this.player1.score;
    const ballComingTowardsAI = this.ball.velocityX > 0;
    
    // Determine mode based on game state
    let mode: 'defensive' | 'aggressive' | 'balanced' = 'balanced';
    
    if (scoreGap < -2) {
      mode = 'aggressive'; // Behind, need to be more aggressive
    } else if (scoreGap > 2) {
      mode = 'defensive'; // Ahead, play it safe
    } else if (!ballComingTowardsAI) {
      mode = 'balanced'; // Ball going away, prepare position
    }
    
    // Calculate target position
    let targetY = this.config.canvasHeight / 2; // Default center position
    
    if (prediction.willHitPaddle && ballComingTowardsAI) {
      // Position to intercept the ball
      targetY = prediction.y;
      
      // Add strategic positioning based on aggressiveness
      if (mode === 'aggressive') {
        // Try to hit at an angle
        const paddleHeight = this.getPaddleHeight(this.player2);
        const offset = (Math.random() - 0.5) * paddleHeight * this.aiPersonality.aggressiveness;
        targetY += offset;
      }
    }
    
    // Power-up logic removed for simplicity
    
    // this.aiCurrentStrategy = { // This line was commented out in the original file
    //   mode,
    //   targetY: Math.max(0, Math.min(targetY, this.config.canvasHeight)),
    //   confidence: prediction.willHitPaddle ? 0.8 : 0.4,
    //   shouldCollectPowerUp,
    //   targetPowerUp
    // };
  }


  // private planAIActions(prediction: BallPrediction): void {
  //   // Unused function - commented out to fix TypeScript error
  // }

  // private processAIReactionQueue(now: number): void {
  //   // Unused function
  // }

  // private executeAIKeyboardInput(aiSpeed: number): void {
  //   // Unused function
  // }

  private clampPaddle(player: Player): void {
    const paddleHeight = this.getPaddleHeight(player);
    player.y = Math.max(0, Math.min(player.y, this.config.canvasHeight - paddleHeight));
  }

  private updateBall(): void {
    // Check for magnet effect
    const p1Magnet = this.player1.temporaryMagnetUntilMs && Date.now() < this.player1.temporaryMagnetUntilMs;
    const p2Magnet = this.player2.temporaryMagnetUntilMs && Date.now() < this.player2.temporaryMagnetUntilMs;
    
    if (p1Magnet) {
      // Attract ball towards player 1 paddle
      const p1CenterY = this.player1.y + this.getPaddleHeight(this.player1) / 2;
      const magnetForce = 0.3;
      const dy = p1CenterY - this.ball.y;
      this.ball.velocityY += dy * magnetForce * 0.01;
    }
    
    if (p2Magnet) {
      // Attract ball towards player 2 paddle
      const p2CenterY = this.player2.y + this.getPaddleHeight(this.player2) / 2;
      const magnetForce = 0.3;
      const dy = p2CenterY - this.ball.y;
      this.ball.velocityY += dy * magnetForce * 0.01;
    }

    this.ball.x += this.ball.velocityX;
    this.ball.y += this.ball.velocityY;

    // Ball collision with top and bottom walls
    if (this.ball.y <= this.config.ballSize / 2 || this.ball.y >= this.config.canvasHeight - this.config.ballSize / 2) {
      this.ball.velocityY = -this.ball.velocityY;
      this.ball.y = Math.max(this.config.ballSize / 2, Math.min(this.ball.y, this.config.canvasHeight - this.config.ballSize / 2));
    }

    // Ball collision with paddles
    this.checkPaddleCollision();
  }

  private checkPaddleCollision(): void {
    const ballLeft = this.ball.x - this.config.ballSize / 2;
    const ballRight = this.ball.x + this.config.ballSize / 2;
    const ballTop = this.ball.y - this.config.ballSize / 2;
    const ballBottom = this.ball.y + this.config.ballSize / 2;

    // Player 1 paddle collision
    const p1X = this.config.paddleWidth;
    const p1Y = this.player1.y;
    const p1Height = this.getPaddleHeight(this.player1);
    const p1Right = p1X + this.config.paddleWidth;

    if (ballLeft <= p1Right && ballRight >= p1X && ballBottom >= p1Y && ballTop <= p1Y + p1Height) {
      if (this.ball.velocityX < 0) { // Only bounce if moving toward paddle
        // Check for shield protection
        const p1Shield = this.player1.temporaryShieldUntilMs && Date.now() < this.player1.temporaryShieldUntilMs;
        if (p1Shield) {
          // Shield deflects ball with extra power
          this.ball.velocityX = -this.ball.velocityX * 1.2;
          this.ball.velocityY *= 1.1;
        } else {
          this.ball.velocityX = -this.ball.velocityX;
        }
        this.ball.x = p1Right + this.config.ballSize / 2; // Prevent sticking
        this.addSpin('player1');
        this.ball.lastHitBy = 'player1';
      }
    }

    // Player 2 paddle collision
    const p2Right = this.config.canvasWidth - this.config.paddleWidth;
    const p2X = p2Right - this.config.paddleWidth;
    const p2Y = this.player2.y;
    const p2Height = this.getPaddleHeight(this.player2);

    if (ballLeft <= p2Right && ballRight >= p2X && ballBottom >= p2Y && ballTop <= p2Y + p2Height) {
      if (this.ball.velocityX > 0) { // Only bounce if moving toward paddle
        // Check for shield protection
        const p2Shield = this.player2.temporaryShieldUntilMs && Date.now() < this.player2.temporaryShieldUntilMs;
        if (p2Shield) {
          // Shield deflects ball with extra power
          this.ball.velocityX = -this.ball.velocityX * 1.2;
          this.ball.velocityY *= 1.1;
        } else {
          this.ball.velocityX = -this.ball.velocityX;
        }
        this.ball.x = p2X - this.config.ballSize / 2; // Prevent sticking
        this.addSpin('player2');
        this.ball.lastHitBy = 'player2';
      }
    }
  }

  private addSpin(hitter: 'player1' | 'player2'): void {
    // Increase ball speed slightly after each paddle hit
    const speedIncrease = 1.05;
    this.ball.velocityX *= speedIncrease;
    this.ball.velocityY *= speedIncrease;

    // Add some randomness to prevent repetitive gameplay
    let extra = (Math.random() - 0.5) * 0.5;
    if (this.nextHitCurveFor === hitter) {
      extra = (Math.random() - 0.5) * 1.5; // stronger curve for next hit
      this.nextHitCurveFor = null; // consume
    }
    this.ball.velocityY += extra;
  }

  private checkScoring(): void {
    if (this.ball.x < 0) {
      // Player 2 scores
      this.player2.score++;
      this.onScoreUpdate?.(this.player1.score, this.player2.score);
      this.resetBall(1); // Ball goes toward player 1
    } else if (this.ball.x > this.config.canvasWidth) {
      // Player 1 scores
      this.player1.score++;
      this.onScoreUpdate?.(this.player1.score, this.player2.score);
      this.resetBall(-1); // Ball goes toward player 2
    }
  }

  private checkGameEnd(): void {
    if (this.player1.score >= this.config.maxScore || this.player2.score >= this.config.maxScore) {
      this.gameState.isGameOver = true;
      this.gameState.isPlaying = false;
      this.gameState.winner = this.player1.score >= this.config.maxScore ? this.player1 : this.player2;
      
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
        this.animationId = null;
      }

      this.onGameEnd?.(this.gameState.winner, this.gameState.elapsedTime);
    }
  }

  private resetBall(direction?: number): void {
    this.ball.x = this.config.canvasWidth / 2;
    this.ball.y = this.config.canvasHeight / 2;
    this.ball.radius = this.config.ballSize;
    
    const dir = direction || (Math.random() > 0.5 ? 1 : -1);
    this.ball.velocityX = this.config.ballSpeed * dir;
    this.ball.velocityY = this.config.ballSpeed * (Math.random() > 0.5 ? 1 : -1);
    
    // Ball reset with configured speed
  }

  private resetPaddles(): void {
    this.player1.y = this.config.canvasHeight / 2 - this.getPaddleHeight(this.player1) / 2;
    this.player2.y = this.config.canvasHeight / 2 - this.getPaddleHeight(this.player2) / 2;
  }

  private render(): void {
    // Clear canvas
    this.ctx.fillStyle = '#080820';
    this.ctx.fillRect(0, 0, this.config.canvasWidth, this.config.canvasHeight);

    // Draw background effects
    this.drawBackground();

    // Draw center line
    this.drawCenterLine();

    // Draw paddles
    this.drawPaddle(this.config.paddleWidth, this.player1.y, this.player1);
    this.drawPaddle(this.config.canvasWidth - this.config.paddleWidth * 2, this.player2.y, this.player2);

    // Draw ball
    this.drawBall();

    // Draw extra balls
    this.drawExtraBalls();

    // Draw power-ups - DISABLED
    // if (this.config.powerUpsEnabled) {
    //   this.drawPowerUps();
    //   this.drawCollectiblePowerUps();
    // }

    // Draw scores
    this.drawScores();

    // Power-up inventory display removed per user request

    // Power-up instructions removed

    // Draw game state messages
    this.drawGameStateMessages();
  }

  private drawBackground(): void {
    const theme = this.config.theme || 'neon';
    const time = Date.now() * 0.002;
    
    // Clear with theme-specific base color
    this.ctx.fillStyle = this.getThemeBackgroundColor(theme);
    this.ctx.fillRect(0, 0, this.config.canvasWidth, this.config.canvasHeight);
    
    // Add theme-specific effects
    this.ctx.save();
    
    switch (theme) {
      case 'retro':
        // DRAMATIC ORANGE/YELLOW RETRO THEME
        this.ctx.fillStyle = 'rgba(255, 140, 0, 0.2)';
        this.ctx.fillRect(0, 0, this.config.canvasWidth, this.config.canvasHeight);
        
        // Animated orange grid
        for (let x = 0; x < this.config.canvasWidth; x += 30) {
          this.ctx.strokeStyle = `rgba(255, 165, 0, ${0.5 + 0.4 * Math.sin(time + x)})`;
          this.ctx.lineWidth = 4;
          this.ctx.beginPath();
          this.ctx.moveTo(x, 0);
          this.ctx.lineTo(x, this.config.canvasHeight);
          this.ctx.stroke();
        }
        for (let y = 0; y < this.config.canvasHeight; y += 30) {
          this.ctx.strokeStyle = `rgba(255, 215, 0, ${0.5 + 0.4 * Math.cos(time + y)})`;
          this.ctx.lineWidth = 4;
          this.ctx.beginPath();
          this.ctx.moveTo(0, y);
          this.ctx.lineTo(this.config.canvasWidth, y);
          this.ctx.stroke();
        }
        break;
        
      case 'dark':
        // DRAMATIC PURPLE/BLACK DARK THEME
        this.ctx.fillStyle = 'rgba(75, 0, 130, 0.4)';
        this.ctx.fillRect(0, 0, this.config.canvasWidth, this.config.canvasHeight);
        
        // Dark purple vignette
        const darkGradient = this.ctx.createRadialGradient(
          this.config.canvasWidth / 2, this.config.canvasHeight / 2, 0,
          this.config.canvasWidth / 2, this.config.canvasHeight / 2, 
          Math.max(this.config.canvasWidth, this.config.canvasHeight) / 1.5
        );
        darkGradient.addColorStop(0, 'rgba(138, 43, 226, 0.3)');
        darkGradient.addColorStop(1, 'rgba(25, 25, 112, 0.8)');
        this.ctx.fillStyle = darkGradient;
        this.ctx.fillRect(0, 0, this.config.canvasWidth, this.config.canvasHeight);
        break;
        
      case 'space':
        // DRAMATIC BLUE/PURPLE SPACE THEME
        this.ctx.fillStyle = 'rgba(30, 27, 75, 0.5)';
        this.ctx.fillRect(0, 0, this.config.canvasWidth, this.config.canvasHeight);
        
        // Space gradient
        const spaceGradient = this.ctx.createLinearGradient(0, 0, this.config.canvasWidth, this.config.canvasHeight);
        spaceGradient.addColorStop(0, 'rgba(123, 104, 238, 0.4)');
        spaceGradient.addColorStop(0.5, 'rgba(72, 61, 139, 0.5)');
        spaceGradient.addColorStop(1, 'rgba(25, 25, 112, 0.6)');
        this.ctx.fillStyle = spaceGradient;
        this.ctx.fillRect(0, 0, this.config.canvasWidth, this.config.canvasHeight);
        
        // Animated stars
        for (let i = 0; i < 50; i++) {
          const x = (i * 137) % this.config.canvasWidth;
          const y = (i * 211) % this.config.canvasHeight;
          const alpha = 0.5 + 0.5 * Math.sin(time + i);
          this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          this.ctx.fillRect(x, y, 3, 3);
        }
        break;
        
      case 'classic':
        // DRAMATIC WHITE/GRAY CLASSIC THEME
        this.ctx.fillStyle = 'rgba(240, 248, 255, 0.95)';
        this.ctx.fillRect(0, 0, this.config.canvasWidth, this.config.canvasHeight);
        
        // Classic checkerboard pattern
        const tileSize = 40;
        for (let x = 0; x < this.config.canvasWidth; x += tileSize) {
          for (let y = 0; y < this.config.canvasHeight; y += tileSize) {
            if ((Math.floor(x / tileSize) + Math.floor(y / tileSize)) % 2 === 0) {
              this.ctx.fillStyle = 'rgba(200, 200, 200, 0.4)';
              this.ctx.fillRect(x, y, tileSize, tileSize);
            }
          }
        }
        break;
        
      default: // neon
        // DRAMATIC CYAN/MAGENTA NEON THEME
        this.ctx.fillStyle = 'rgba(0, 255, 247, 0.15)';
        this.ctx.fillRect(0, 0, this.config.canvasWidth, this.config.canvasHeight);
        
        // Animated neon grid
        for (let x = 0; x < this.config.canvasWidth; x += 40) {
          this.ctx.strokeStyle = `rgba(0, 255, 247, ${0.4 + 0.5 * Math.sin(time + x)})`;
          this.ctx.lineWidth = 4;
          this.ctx.beginPath();
          this.ctx.moveTo(x, 0);
          this.ctx.lineTo(x, this.config.canvasHeight);
          this.ctx.stroke();
        }
        for (let y = 0; y < this.config.canvasHeight; y += 40) {
          this.ctx.strokeStyle = `rgba(255, 0, 234, ${0.4 + 0.5 * Math.cos(time + y)})`;
          this.ctx.lineWidth = 4;
          this.ctx.beginPath();
          this.ctx.moveTo(0, y);
          this.ctx.lineTo(this.config.canvasWidth, y);
          this.ctx.stroke();
        }
        break;
    }
    
    this.ctx.restore();
  }
  
  private getThemeBackgroundColor(theme: string): string {
    switch (theme) {
      case 'retro': return '#2d1810';      // Dark brown/orange
      case 'dark': return '#0f0f23';       // Very dark purple
      case 'space': return '#1e1b4b';      // Dark blue
      case 'classic': return '#f8f9fa';    // Light gray
      default: return '#080820';           // Dark blue (neon)
    }
  }
  
  private getThemeAccentColor(theme: string): string {
    switch (theme) {
      case 'retro': return '#ff8c00';      // Bright orange
      case 'dark': return '#9932cc';       // Dark orchid
      case 'space': return '#7b68ee';      // Medium slate blue
      case 'classic': return '#696969';    // Dim gray
      default: return '#00fff7';           // Cyan (neon)
    }
  }

  private drawCenterLine(): void {
    const theme = this.config.theme || 'neon';
    this.ctx.strokeStyle = this.getThemeAccentColor(theme);
    this.ctx.lineWidth = 3;
    this.ctx.setLineDash([15, 10]);
    this.ctx.beginPath();
    this.ctx.moveTo(this.config.canvasWidth / 2, 0);
    this.ctx.lineTo(this.config.canvasWidth / 2, this.config.canvasHeight);
    this.ctx.stroke();
    this.ctx.setLineDash([]);
  }

  private drawPaddle(x: number, y: number, player: Player): void {
  // Premium paddle: neon glow, inner shadow, and gradient
  this.ctx.save();
  this.ctx.shadowColor = '#00fff7';
  this.ctx.shadowBlur = 30;
  const paddleHeight = this.getPaddleHeight(player);
  const gradient = this.ctx.createLinearGradient(x, y, x + this.config.paddleWidth, y + paddleHeight);
  gradient.addColorStop(0, '#00fff7');
  gradient.addColorStop(0.5, '#fff');
  gradient.addColorStop(1, '#ff00ea');
  this.ctx.fillStyle = gradient;
  this.ctx.fillRect(x, y, this.config.paddleWidth, paddleHeight);
  // Inner shadow
  this.ctx.globalAlpha = 0.3;
  this.ctx.fillStyle = '#222';
  this.ctx.fillRect(x + 2, y + 2, this.config.paddleWidth - 4, paddleHeight - 4);
  this.ctx.globalAlpha = 1;
  
  // Power-up visual indicators
  const now = Date.now();
  if (player.temporaryPaddleBoostUntilMs && now < player.temporaryPaddleBoostUntilMs) {
    // Paddle size boost - green glow
    this.ctx.shadowColor = '#00ff88';
    this.ctx.shadowBlur = 20;
    this.ctx.strokeStyle = '#00ff88';
    this.ctx.lineWidth = 3;
    this.ctx.strokeRect(x - 2, y - 2, this.config.paddleWidth + 4, paddleHeight + 4);
  }
  
  if (player.temporaryPaddleSlowUntilMs && now < player.temporaryPaddleSlowUntilMs) {
    // Slow opponent - blue glow
    this.ctx.shadowColor = '#4444ff';
    this.ctx.shadowBlur = 15;
    this.ctx.strokeStyle = '#4444ff';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(x - 1, y - 1, this.config.paddleWidth + 2, paddleHeight + 2);
  }
  
  if (player.temporaryShieldUntilMs && now < player.temporaryShieldUntilMs) {
    // Shield - cyan glow
    this.ctx.shadowColor = '#00ffff';
    this.ctx.shadowBlur = 25;
    this.ctx.strokeStyle = '#00ffff';
    this.ctx.lineWidth = 4;
    this.ctx.strokeRect(x - 3, y - 3, this.config.paddleWidth + 6, paddleHeight + 6);
  }
  
  if (player.temporaryMagnetUntilMs && now < player.temporaryMagnetUntilMs) {
    // Magnet - yellow glow
    this.ctx.shadowColor = '#ffff00';
    this.ctx.shadowBlur = 20;
    this.ctx.strokeStyle = '#ffff00';
    this.ctx.lineWidth = 3;
    this.ctx.strokeRect(x - 2, y - 2, this.config.paddleWidth + 4, paddleHeight + 4);
  }
  
  this.ctx.restore();
  }

  private getPaddleHeight(player: Player): number {
    const base = this.config.paddleHeight;
    const now = Date.now();
    let height = base;
    if (player.temporaryPaddleBoostUntilMs && now < player.temporaryPaddleBoostUntilMs) {
      height *= 1.5;
    }
    if (player.temporaryPaddleShrinkUntilMs && now < player.temporaryPaddleShrinkUntilMs) {
      height *= 0.7;
    }
    return height;
  }

  private drawBall(): void {
    // Premium ball: animated neon glow and gradient
    this.ctx.save();
    this.ctx.shadowColor = '#ff00ea';
    this.ctx.shadowBlur = 25 + 10 * Math.abs(Math.sin(Date.now() * 0.005));
    const gradient = this.ctx.createRadialGradient(
      this.ball.x, this.ball.y, 0,
      this.ball.x, this.ball.y, this.config.ballSize
    );
    gradient.addColorStop(0, '#fff');
    gradient.addColorStop(0.4, '#ff00ea');
    gradient.addColorStop(1, '#00fff7');
    this.ctx.fillStyle = gradient;
    this.ctx.beginPath();
    this.ctx.arc(this.ball.x, this.ball.y, this.config.ballSize, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.restore();
  }

  private drawExtraBalls(): void {
    for (const ball of this.extraBalls) {
      this.ctx.save();
      this.ctx.shadowColor = '#ff8800';
      this.ctx.shadowBlur = 15;
      const gradient = this.ctx.createRadialGradient(
        ball.x, ball.y, 0,
        ball.x, ball.y, ball.radius
      );
      gradient.addColorStop(0, '#ff8800');
      gradient.addColorStop(0.7, '#ff6600');
      gradient.addColorStop(1, '#ff4400');
      this.ctx.fillStyle = gradient;
      this.ctx.beginPath();
      this.ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    }
  }





  private updatePowerUps(): void {
    // Despawn inactive
    this.powerUps = this.powerUps.filter(p => p.active);
  }

  
  //   if (availableTypes.length === 0) return;
  //   
  //   const randomType = availableTypes[Math.floor(Math.random() * availableTypes.length)];
  //   
  //   // Spawn anywhere on the field (avoiding paddle areas)
  //   const paddleZone = 80; // Avoid 80px from each side where paddles are







  private initializeAIPersonality(): void {
    const personalities = {
      'easy': { 
        speed: 0.3, accuracy: 0.4, reactionTime: 300, aggressiveness: 0.2, powerUpPriority: 0.1,
        reactionDelay: 300, predictionAccuracy: 0.4, speedVariation: 0.3
      },
      'medium': { 
        speed: 0.6, accuracy: 0.7, reactionTime: 200, aggressiveness: 0.5, powerUpPriority: 0.3,
        reactionDelay: 200, predictionAccuracy: 0.7, speedVariation: 0.2
      },
      'hard': { 
        speed: 0.9, accuracy: 0.9, reactionTime: 100, aggressiveness: 0.8, powerUpPriority: 0.6,
        reactionDelay: 100, predictionAccuracy: 0.9, speedVariation: 0.1
      }
    };
    
    this.aiPersonality = personalities[this.aiDifficulty];
  }

  public setAIDifficulty(difficulty: 'easy' | 'medium' | 'hard'): void {
    this.aiDifficulty = difficulty;
    this.initializeAIPersonality();
  }

  private activateCollectedPowerUp(_player: 'player1' | 'player2'): void {
    // Simplified power-up activation
    // TODO: Implement power-up activation logic if needed
  }

  private addPowerUpToInventory(_type: string, _collector: 'player1' | 'player2'): void {
    // Simplified inventory system
    // TODO: Implement power-up inventory logic if needed
  }

  private updateExtraBalls(): void {
    // Simplified extra balls update
    // TODO: Implement extra balls logic if needed
  }

  // Removed unused applyPowerUp method

  private handleAIPowerUps(): void {
    // Simplified AI power-up handling
    // TODO: Implement AI power-up logic if needed
  }

  private drawScores(): void {
    if (!this.ctx) return;
    
    this.ctx.fillStyle = '#00ffff';
    this.ctx.font = '32px Arial';
    this.ctx.textAlign = 'center';
    
    // Draw player names and scores
    const centerX = this.canvas.width / 2;
    const topY = 50;
    
    // Player 1 (left side)
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`${this.player1.name}: ${this.player1.score}`, centerX - 50, topY);
    
    // Player 2 (right side)  
    this.ctx.textAlign = 'left';
    this.ctx.fillText(`${this.player2.name}: ${this.player2.score}`, centerX + 50, topY);
    
    // Reset text alignment
    this.ctx.textAlign = 'center';
  }

  private drawGameStateMessages(): void {
    // Draw game state messages like "Press SPACE to pause" etc.
    if (!this.gameState.isPlaying && !this.gameState.isGameOver) {
      this.ctx.fillStyle = '#ffffff';
      this.ctx.font = '24px Arial';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('Press SPACE to start', this.config.canvasWidth / 2, this.config.canvasHeight / 2);
    }
    
    if (this.gameState.isGameOver && this.gameState.winner) {
      this.ctx.fillStyle = '#00ff00';
      this.ctx.font = '32px Arial';
      this.ctx.textAlign = 'center';
      this.ctx.fillText(`${this.gameState.winner.name} Wins!`, this.config.canvasWidth / 2, this.config.canvasHeight / 2);
      this.ctx.font = '18px Arial';
      this.ctx.fillText('Press R to restart', this.config.canvasWidth / 2, this.config.canvasHeight / 2 + 40);
    }
  }

  // Cleanup method
  public destroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    
    // Remove event listeners (if needed for cleanup)
    // Note: In a real implementation, you might want to store listener references
    // for proper cleanup
  }
}

// Game Factory Functions
export function createPongGame(
  canvas: HTMLCanvasElement,
  config?: Partial<GameConfig>
): PongGame {
  return new PongGame(canvas, config);
}

export function create1v1Game(canvas: HTMLCanvasElement, overrides?: Partial<GameConfig>): PongGame {
  const defaultConfig: Partial<GameConfig> = {
    ballSpeed: 8,
    paddleSpeed: 10,
    powerUpsEnabled: false
  };
  
  const finalConfig = { ...defaultConfig, ...overrides };
  const game = new PongGame(canvas, finalConfig);
  
  game.setPlayer2AI(false);
  game.setPlayerNames('Player 1', 'Player 2');
  
  return game;
}

export function createAIGame(
  canvas: HTMLCanvasElement, 
  difficulty: 'easy' | 'medium' | 'hard' = 'medium',
  overrides?: Partial<GameConfig>
): PongGame {
  const difficultyConfig = {
    'easy': { ballSpeed: 5, paddleSpeed: 8, aiSpeed: 0.3 },
    'medium': { ballSpeed: 8, paddleSpeed: 10, aiSpeed: 0.6 },
    'hard': { ballSpeed: 12, paddleSpeed: 12, aiSpeed: 0.9 }
  };
  
  const defaultConfig: Partial<GameConfig> = {
    ...difficultyConfig[difficulty],
    powerUpsEnabled: false
  };
  
  const finalConfig = { ...defaultConfig, ...overrides };
  const game = new PongGame(canvas, finalConfig);
  
  game.setPlayer2AI(true);
  game.setAIDifficulty(difficulty);
  game.setPlayerNames('Player 1', 'AI Opponent');
  
  return game;
}
