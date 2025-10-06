var Ne=Object.defineProperty;var Me=(t,e,a)=>e in t?Ne(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var R=(t,e,a)=>Me(t,typeof e!="symbol"?e+"":e,a);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const ae={en:{nav:{home:"HOME",games:"GAMES",logout:"LOGOUT",profile:"PROFILE",account:"ACCOUNT"},language:{confirmTitle:"Language Preference",confirmMessage:"Would you like to set English as your preferred language?",yes:"Yes, set as preferred",no:"Cancel",setSuccess:"Language preference saved!"},fontControls:{label:"Font size:",decrease:"DECREASE FONT SIZE",increase:"INCREASE FONT SIZE"},home:{title:"NEON PONG",tagline:"THE ULTIMATE RETRO-FUTURISTIC ARCADE EXPERIENCE.",description:"Challenge your friends in a fast-paced game of skill and reflexes.",registerNow:"REGISTER NOW",meetTheTeam:"MEET THE TEAM"},games:{title:"Games",subtitle:"Choose your battle",back:"Back",oneVsOne:{title:"1v1 Battle",subtitle:"Face your opponent",description:"Challenge a friend or random player to an intense one-on-one ping pong match. Quick games, instant action!",features:{instant:"Instant matchmaking",ranked:"Ranked competitive play",skill:"Skill-based matching"},playNow:"PLAY NOW",findMatch:"FIND MATCH"},ai:{title:"AI Challenge",subtitle:"Face the machine",description:"Test your skills against our advanced AI opponents with different difficulty levels.",features:{adaptive:"Adaptive difficulty",practice:"Perfect for practice",skills:"Improve your skills"},playNow:"PLAY AI"},tournaments:{title:"TOURNAMENTS",subtitle:"Elite competition awaits",description:"Join exclusive tournaments and compete against the best players for ultimate glory.",features:{strategic:"Strategic bracket system",prestige:"Prestige rewards",competition:"Elite competition"},joinTournament:"JOIN TOURNAMENT",createTournament:"CREATE TOURNAMENT"},stats:{activePlayers:"ACTIVE PLAYERS",ongoingMatches:"ONGOING MATCHES",tournaments:"LIVE TOURNAMENTS"},loginRequired:{title:"Access Required",description:"Login to unlock all game modes and compete with players worldwide",button:"LOGIN TO PLAY"}},profile:{title:"USER PROFILE",tabs:{dashboard:"DASHBOARD",settings:"PROFILE SETTINGS",statistics:"STATISTICS",friends:"FRIENDS",history:"MATCH HISTORY"},dashboard:{welcome:"WELCOME BACK, PRO PLAYER!",overview:"Here's your gaming overview and performance insights",rank:"Current Rank",of:"of",players:"players",winRate:"Win Rate",streak:"Current Streak",best:"Best:",playTime:"Total Play Time",avg:"Avg:",analytics:"PERFORMANCE ANALYTICS",weekly:"Weekly Performance",wins:"Wins",losses:"Losses",rating:"Skill Rating Progression",recent:"Recent Matches",viewAll:"VIEW ALL MATCHES",advanced:"Advanced Statistics",avgScore:"AVERAGE SCORE",perfectGames:"PERFECT GAMES",comebacks:"COMEBACKS",achievements:"ACHIEVEMENTS & GOALS",winStreakMaster:"Win Streak Master",winStreakDesc:"Win 10 games in a row",centuryClub:"Century Club",centuryDesc:"Play 100 total games",perfectPlayer:"Perfect Player",perfectDesc:"Win a game 5-0",socialButterfly:"Social Butterfly",socialDesc:"Add 10 friends"},settings:{changeAvatar:"CHANGE AVATAR",username:"USERNAME",displayName:"DISPLAY NAME",skillLevel:"SKILL LEVEL",beginner:"BEGINNER",intermediate:"INTERMEDIATE",expert:"EXPERT",bio:"BIO (OPTIONAL)",bioPlaceholder:"Tell others about yourself...",advancedSettings:"ADVANCED SETTINGS",newPassword:"New Password",passwordPlaceholder:"Leave blank to keep current",confirmPassword:"Confirm Password",confirmPasswordPlaceholder:"Confirm your new password",gameHistory:"GAME HISTORY",clearHistory:"Clear History",accountDeletion:"ACCOUNT DELETION",deleteAccount:"Delete Account",deleteWarning:"⚠️ This action cannot be undone",warningTitle:"Warning: Permanent Action",warningDescription:"Once you delete your profile, there is no going back. This action cannot be undone and will permanently remove:",saveChanges:"SAVE CHANGES"},statistics:{title:"PLAYER STATISTICS",gamesPlayed:"GAMES PLAYED",wins:"WINS",losses:"LOSSES",winRate:"WIN RATE"},friends:{title:"FRIENDS LIST",addFriend:"ADD FRIEND",online:"Online",lastSeen:"Last seen",challenge:"CHALLENGE"},history:{title:"MATCH HISTORY",victory:"Victory",defeat:"Defeat",match1v1:"1v1 Match",tournament:"Tournament",min:"min"}},auth:{login:{title:"Login to Neon Pong",username:"USERNAME",password:"PASSWORD",button:"LOGIN",backToHome:"BACK TO HOME",noAccount:"Don't have an account?",createAccount:"Create an ACCOUNT"},register:{title:"Register for Neon Pong",email:"EMAIL",username:"USERNAME",password:"PASSWORD",confirmPassword:"CONFIRM PASSWORD",button:"REGISTER",backToHome:"BACK TO HOME",hasAccount:"Already have an account?",signIn:"Sign in to existing ACCOUNT"}},common:{loading:"Loading...",neonPong:"Neon Pong"},languages:{english:"English",french:"Français",spanish:"Español"}},fr:{nav:{home:"ACCUEIL",games:"JEUX",logout:"DÉCONNEXION",profile:"PROFIL",account:"COMPTE"},language:{confirmTitle:"Préférence de langue",confirmMessage:"Voulez-vous définir le français comme votre langue préférée ?",yes:"Oui, définir comme préférée",no:"Annuler",setSuccess:"Préférence de langue sauvegardée !"},fontControls:{label:"Taille de police:",decrease:"DIMINUER LA TAILLE",increase:"AUGMENTER LA TAILLE"},home:{title:"NEON PONG",tagline:"L'EXPÉRIENCE ARCADE RÉTRO-FUTURISTE ULTIME.",description:"Défiez vos amis dans un jeu rapide d'adresse et de réflexes.",registerNow:"S'INSCRIRE MAINTENANT",meetTheTeam:"RENCONTRER L'ÉQUIPE"},games:{title:"MODES DE JEU",subtitle:"Choisissez votre chemin vers la gloire",back:"Retour",oneVsOne:{title:"COMBATS 1V1",subtitle:"Matchs rapides, action instantanée",description:"Lancez-vous dans des combats un contre un à rythme effréné. Perfectionnez vos compétences et grimpez l'échelle classée.",features:{instant:"Matchmaking instantané",ranked:"Progression classée",skill:"Correspondance par compétence"},playNow:"JOUER MAINTENANT",findMatch:"TROUVER UN MATCH"},ai:{title:"Défi IA",subtitle:"Affrontez la machine",description:"Testez vos compétences contre nos adversaires IA avancés avec différents niveaux de difficulté.",features:{adaptive:"Difficulté adaptative",practice:"Parfait pour s'entraîner",skills:"Améliorez vos compétences"},playNow:"JOUER CONTRE IA"},tournaments:{title:"TOURNOIS",subtitle:"La compétition d'élite vous attend",description:"Rejoignez des tournois exclusifs et affrontez les meilleurs joueurs pour la gloire ultime.",features:{strategic:"Système de bracket stratégique",prestige:"Récompenses de prestige",competition:"Compétition d'élite"},joinTournament:"REJOINDRE TOURNOI",createTournament:"CRÉER TOURNOI"},stats:{activePlayers:"JOUEURS ACTIFS",ongoingMatches:"MATCHS EN COURS",tournaments:"TOURNOIS EN DIRECT"},loginRequired:{title:"Accès Requis",description:"Connectez-vous pour débloquer tous les modes de jeu et affronter des joueurs du monde entier",button:"SE CONNECTER POUR JOUER"}},profile:{title:"PROFIL UTILISATEUR",tabs:{dashboard:"TABLEAU DE BORD",settings:"PARAMÈTRES DU PROFIL",statistics:"STATISTIQUES",friends:"AMIS",history:"HISTORIQUE DES MATCHS"},dashboard:{welcome:"BON RETOUR, JOUEUR PRO !",overview:"Voici votre aperçu de jeu et vos informations de performance",rank:"Rang Actuel",of:"sur",players:"joueurs",winRate:"Taux de Victoire",streak:"Série Actuelle",best:"Meilleur:",playTime:"Temps de Jeu Total",avg:"Moy:",analytics:"ANALYSES DE PERFORMANCE",weekly:"Performance Hebdomadaire",wins:"Victoires",losses:"Défaites",rating:"Progression du Classement",recent:"Matchs Récents",viewAll:"VOIR TOUS LES MATCHS",advanced:"Statistiques Avancées",avgScore:"SCORE MOYEN",perfectGames:"JEUX PARFAITS",comebacks:"RETOURS",achievements:"SUCCÈS ET OBJECTIFS",winStreakMaster:"Maître des Séries",winStreakDesc:"Gagner 10 jeux d'affilée",centuryClub:"Club du Centenaire",centuryDesc:"Jouer 100 jeux au total",perfectPlayer:"Joueur Parfait",perfectDesc:"Gagner un jeu 5-0",socialButterfly:"Papillon Social",socialDesc:"Ajouter 10 amis"},settings:{changeAvatar:"CHANGER L'AVATAR",username:"NOM D'UTILISATEUR",displayName:"NOM D'AFFICHAGE",skillLevel:"NIVEAU DE COMPÉTENCE",beginner:"DÉBUTANT",intermediate:"INTERMÉDIAIRE",expert:"EXPERT",bio:"BIO (OPTIONNEL)",bioPlaceholder:"Parlez de vous aux autres...",advancedSettings:"PARAMÈTRES AVANCÉS",newPassword:"Nouveau mot de passe",passwordPlaceholder:"Laisser vide pour conserver l'actuel",confirmPassword:"Confirmer le mot de passe",confirmPasswordPlaceholder:"Confirmez votre nouveau mot de passe",gameHistory:"HISTORIQUE DU JEU",clearHistory:"Effacer l'historique",accountDeletion:"SUPPRESSION DU COMPTE",deleteAccount:"Supprimer le compte",deleteWarning:"⚠️ Cette action ne peut pas être annulée",warningTitle:"Attention : Action permanente",warningDescription:"Une fois que vous supprimez votre profil, il n'y a pas de retour en arrière. Cette action ne peut pas être annulée et supprimera définitivement :",saveChanges:"SAUVEGARDER LES MODIFICATIONS"},statistics:{title:"STATISTIQUES DU JOUEUR",gamesPlayed:"JEUX JOUÉS",wins:"VICTOIRES",losses:"DÉFAITES",winRate:"TAUX DE VICTOIRE"},friends:{title:"LISTE D'AMIS",addFriend:"AJOUTER UN AMI",online:"En ligne",lastSeen:"Vu pour la dernière fois",challenge:"DÉFIER"},history:{title:"HISTORIQUE DES MATCHS",victory:"Victoire",defeat:"Défaite",match1v1:"Match 1v1",tournament:"Tournoi",min:"min"}},auth:{login:{title:"Connexion à Neon Pong",username:"NOM D'UTILISATEUR",password:"MOT DE PASSE",button:"CONNEXION",backToHome:"RETOUR À L'ACCUEIL",noAccount:"Vous n'avez pas de compte ?",createAccount:"Créer un COMPTE"},register:{title:"S'inscrire à Neon Pong",email:"EMAIL",username:"NOM D'UTILISATEUR",password:"MOT DE PASSE",confirmPassword:"CONFIRMER LE MOT DE PASSE",button:"S'INSCRIRE",backToHome:"RETOUR À L'ACCUEIL",hasAccount:"Vous avez déjà un compte ?",signIn:"Se connecter au COMPTE existant"}},common:{loading:"Chargement...",neonPong:"Neon Pong"},languages:{english:"English",french:"Français",spanish:"Español"}},es:{nav:{home:"INICIO",games:"JUEGOS",logout:"CERRAR SESIÓN",profile:"PERFIL",account:"CUENTA"},language:{confirmTitle:"Preferencia de idioma",confirmMessage:"¿Te gustaría establecer el español como tu idioma preferido?",yes:"Sí, establecer como preferido",no:"Cancelar",setSuccess:"¡Preferencia de idioma guardada!"},fontControls:{label:"Tamaño de fuente:",decrease:"DISMINUIR TAMAÑO",increase:"AUMENTAR TAMAÑO"},home:{title:"NEON PONG",tagline:"LA EXPERIENCIA ARCADE RETRO-FUTURISTA DEFINITIVA.",description:"Desafía a tus amigos en un juego rápido de habilidad y reflejos.",registerNow:"REGISTRARSE AHORA",meetTheTeam:"CONOCER AL EQUIPO"},games:{title:"MODOS DE JUEGO",subtitle:"Elige tu camino hacia la gloria",back:"Volver",oneVsOne:{title:"BATALLAS 1V1",subtitle:"Partidas rápidas, acción instantánea",description:"Sumérgete en batallas uno contra uno de ritmo acelerado. Perfecciona tus habilidades y escala la clasificación.",features:{instant:"Emparejamiento instantáneo",ranked:"Progresión clasificada",skill:"Emparejamiento por habilidad"},playNow:"JUGAR AHORA",findMatch:"BUSCAR PARTIDA"},ai:{title:"Desafío IA",subtitle:"Enfrenta a la máquina",description:"Pon a prueba tus habilidades contra nuestros oponentes IA avanzados con diferentes niveles de dificultad.",features:{adaptive:"Dificultad adaptativa",practice:"Perfecto para practicar",skills:"Mejora tus habilidades"},playNow:"JUGAR CONTRA IA"},tournaments:{title:"TORNEOS",subtitle:"La competencia élite te espera",description:"Únete a torneos exclusivos y compite contra los mejores jugadores por la gloria definitiva.",features:{strategic:"Sistema de bracket estratégico",prestige:"Recompensas de prestigio",competition:"Competencia élite"},joinTournament:"UNIRSE A TORNEO",createTournament:"CREAR TORNEO"},stats:{activePlayers:"JUGADORES ACTIVOS",ongoingMatches:"PARTIDAS EN CURSO",tournaments:"TORNEOS EN VIVO"},loginRequired:{title:"Acceso Requerido",description:"Inicia sesión para desbloquear todos los modos de juego y competir con jugadores de todo el mundo",button:"INICIAR SESIÓN PARA JUGAR"}},profile:{title:"PERFIL DE USUARIO",tabs:{dashboard:"PANEL DE CONTROL",settings:"CONFIGURACIÓN DEL PERFIL",statistics:"ESTADÍSTICAS",friends:"AMIGOS",history:"HISTORIAL DE PARTIDAS"},dashboard:{welcome:"¡BIENVENIDO DE VUELTA, JUGADOR PRO!",overview:"Aquí está tu resumen de juego e información de rendimiento",rank:"Rango Actual",of:"de",players:"jugadores",winRate:"Tasa de Victoria",streak:"Racha Actual",best:"Mejor:",playTime:"Tiempo Total de Juego",avg:"Prom:",analytics:"ANÁLISIS DE RENDIMIENTO",weekly:"Rendimiento Semanal",wins:"Victorias",losses:"Derrotas",rating:"Progresión de Clasificación",recent:"Partidas Recientes",viewAll:"VER TODAS LAS PARTIDAS",advanced:"Estadísticas Avanzadas",avgScore:"PUNTUACIÓN PROMEDIO",perfectGames:"JUEGOS PERFECTOS",comebacks:"REMONTAS",achievements:"LOGROS Y OBJETIVOS",winStreakMaster:"Maestro de Rachas",winStreakDesc:"Ganar 10 juegos seguidos",centuryClub:"Club del Centenario",centuryDesc:"Jugar 100 juegos en total",perfectPlayer:"Jugador Perfecto",perfectDesc:"Ganar un juego 5-0",socialButterfly:"Mariposa Social",socialDesc:"Agregar 10 amigos"},settings:{changeAvatar:"CAMBIAR AVATAR",username:"NOMBRE DE USUARIO",displayName:"NOMBRE PARA MOSTRAR",skillLevel:"NIVEL DE HABILIDAD",beginner:"PRINCIPIANTE",intermediate:"INTERMEDIO",expert:"EXPERTO",bio:"BIO (OPCIONAL)",bioPlaceholder:"Cuéntales a otros sobre ti...",advancedSettings:"CONFIGURACIÓN AVANZADA",newPassword:"Nueva contraseña",passwordPlaceholder:"Dejar en blanco para mantener la actual",confirmPassword:"Confirmar contraseña",confirmPasswordPlaceholder:"Confirma tu nueva contraseña",gameHistory:"HISTORIAL DEL JUEGO",clearHistory:"Borrar historial",accountDeletion:"ELIMINACIÓN DE CUENTA",deleteAccount:"Eliminar cuenta",deleteWarning:"⚠️ Esta acción no se puede deshacer",warningTitle:"Advertencia: Acción permanente",warningDescription:"Una vez que elimines tu perfil, no hay vuelta atrás. Esta acción no se puede deshacer y eliminará permanentemente:",saveChanges:"GUARDAR CAMBIOS"},statistics:{title:"ESTADÍSTICAS DEL JUGADOR",gamesPlayed:"JUEGOS JUGADOS",wins:"VICTORIAS",losses:"DERROTAS",winRate:"TASA DE VICTORIA"},friends:{title:"LISTA DE AMIGOS",addFriend:"AGREGAR AMIGO",online:"En línea",lastSeen:"Visto por última vez",challenge:"DESAFIAR"},history:{title:"HISTORIAL DE PARTIDAS",victory:"Victoria",defeat:"Derrota",match1v1:"Partida 1v1",tournament:"Torneo",min:"min"}},auth:{login:{title:"Iniciar Sesión en Neon Pong",username:"NOMBRE DE USUARIO",password:"CONTRASEÑA",button:"INICIAR SESIÓN",backToHome:"VOLVER AL INICIO",noAccount:"¿No tienes una cuenta?",createAccount:"Crear una CUENTA"},register:{title:"Registrarse en Neon Pong",email:"EMAIL",username:"NOMBRE DE USUARIO",password:"CONTRASEÑA",confirmPassword:"CONFIRMAR CONTRASEÑA",button:"REGISTRARSE",backToHome:"VOLVER AL INICIO",hasAccount:"¿Ya tienes una cuenta?",signIn:"Iniciar sesión en CUENTA existente"}},common:{loading:"Cargando...",neonPong:"Neon Pong"},languages:{english:"English",french:"Français",spanish:"Español"}}};class Pe{constructor(){R(this,"currentLanguage","en");R(this,"listeners",[]);const e=localStorage.getItem("neonPongLanguage");e&&ae[e]&&(this.currentLanguage=e)}getCurrentLanguage(){return this.currentLanguage}setLanguage(e){ae[e]&&(this.currentLanguage=e,localStorage.setItem("neonPongLanguage",e),this.notifyListeners())}setLanguageWithConfirmation(e){if(!ae[e])return;const a=ae[e],n=document.createElement("div");n.className="language-confirm-dialog",n.innerHTML=`
      <div class="language-confirm-overlay">
        <div class="language-confirm-content">
          <div class="language-confirm-header">
            <h3>${a.language.confirmTitle}</h3>
          </div>
          <div class="language-confirm-message">
            <p>${a.language.confirmMessage}</p>
          </div>
          <div class="language-confirm-buttons">
            <button class="language-confirm-yes btn-primary">
              ${a.language.yes}
            </button>
            <button class="language-confirm-no btn-secondary">
              ${a.language.no}
            </button>
          </div>
        </div>
      </div>
    `;const s=document.createElement("style");s.textContent=`
      .language-confirm-dialog {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        font-family: 'Orbitron', monospace;
      }
      
      .language-confirm-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease-out;
      }
      
      .language-confirm-content {
        background: linear-gradient(135deg, rgba(0, 230, 255, 0.1), rgba(255, 0, 255, 0.1));
        border: 2px solid #00E6FF;
        border-radius: 15px;
        padding: 30px;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 20px 40px rgba(0, 230, 255, 0.3);
        animation: slideUp 0.3s ease-out;
      }
      
      .language-confirm-header h3 {
        color: #00E6FF;
        margin: 0 0 20px 0;
        font-size: 1.4rem;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
      
      .language-confirm-message p {
        color: #fff;
        margin: 0 0 30px 0;
        font-size: 1.1rem;
        text-align: center;
        line-height: 1.6;
      }
      
      .language-confirm-buttons {
        display: flex;
        gap: 15px;
        justify-content: center;
      }
      
      .language-confirm-buttons button {
        padding: 12px 24px;
        border: none;
        border-radius: 8px;
        font-family: 'Orbitron', monospace;
        font-weight: 600;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      
      .language-confirm-yes {
        background: linear-gradient(135deg, #00E6FF, #0099CC);
        color: #000;
      }
      
      .language-confirm-yes:hover {
        background: linear-gradient(135deg, #00CCFF, #0088BB);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 230, 255, 0.4);
      }
      
      .language-confirm-no {
        background: linear-gradient(135deg, #FF0080, #CC0066);
        color: #fff;
      }
      
      .language-confirm-no:hover {
        background: linear-gradient(135deg, #FF0099, #DD0077);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(255, 0, 128, 0.4);
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes slideUp {
        from { 
          opacity: 0;
          transform: translateY(30px);
        }
        to { 
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,document.head.appendChild(s),document.body.appendChild(n);const o=n.querySelector(".language-confirm-yes"),i=n.querySelector(".language-confirm-no"),l=()=>{document.body.removeChild(n),document.head.removeChild(s)};o.addEventListener("click",()=>{this.setLanguage(e),l(),window.showMessage&&setTimeout(()=>{window.showMessage(a.language.setSuccess,"success")},100)}),i.addEventListener("click",l),n.addEventListener("click",r=>{(r.target===n||r.target===n.querySelector(".language-confirm-overlay"))&&l()});const d=r=>{r.key==="Escape"&&(l(),document.removeEventListener("keydown",d))};document.addEventListener("keydown",d)}getTranslations(){return ae[this.currentLanguage]}translate(e){const a=e.split(".");let n=this.getTranslations();for(const s of a)n=n==null?void 0:n[s];return n||e}addListener(e){this.listeners.push(e)}removeListener(e){this.listeners=this.listeners.filter(a=>a!==e)}notifyListeners(){this.listeners.forEach(e=>e())}}const U=new Pe,Re={submitResult:async(t,e)=>O("/ai/finish",{method:"POST",body:JSON.stringify({playerScore:t,aiScore:e})})},Le={start:async t=>O("/onevone/start",{method:"POST",body:JSON.stringify({player2Username:t})}),submitResult:async(t,e,a)=>O("/onevone/finish",{method:"POST",body:JSON.stringify({matchId:t,player1Score:e,player2Score:a})})},be="";async function O(t,e){try{const a=`${be}${t}`,n={...e.headers};e.method!=="DELETE"&&e.body&&(n["Content-Type"]="application/json");const s=sessionStorage.getItem("token");s&&(n.Authorization=`Bearer ${s}`);const o=await fetch(a,{...e,headers:n});if(!o.ok){const l=await o.json().catch(()=>({}));throw new Error(l.error||`API error: ${o.status} ${o.statusText}`)}return{data:await o.json(),error:null,loading:!1}}catch(a){return console.error("API request failed:",a),{data:null,error:a instanceof Error?a.message:"Unknown error occurred",loading:!1}}}const B={users:{register:async(t,e,a)=>O("/api/register",{method:"POST",body:JSON.stringify({username:t,password:e,email:a})}),setAlias:async t=>O("/set-alias",{method:"POST",body:JSON.stringify({alias:t})}),login:async(t,e)=>O("/api/login",{method:"POST",body:JSON.stringify({username:t,password:e})}),logout:async()=>O("/logout",{method:"POST"}),updateProfile:async t=>O("/me",{method:"PATCH",body:JSON.stringify(t)}),getMyProfile:async()=>await O("/me",{method:"GET"}),getOthersProfile:async t=>await O(`/users/${t}`,{method:"GET"}),searchForFriends:async()=>O("/search-friends",{method:"GET"}),addFriends:async t=>O("/add-friends",{method:"POST",body:JSON.stringify({friendId:t})}),removeFriend:async t=>O(`/friends/${t}`,{method:"DELETE"}),currentStatus:async t=>{try{return await O(`/friends-status/${t}`,{method:"GET"})}catch(e){throw console.error("[❌ API SERVICE] currentStatus error:",e),e}},sendRequestResponse:async(t,e)=>O(`/friend/requests/${t}/respond`,{method:"POST",body:JSON.stringify({action:e})}),listRequests:async()=>O("/friend/requests",{method:"GET"}),listSentRequests:async()=>O("/friend/requests/sent",{method:"GET"}),uploadAvatar:async t=>{const e=sessionStorage.getItem("token"),a=new FormData;a.append("avatar",t);const n=await fetch(`${be}/uploads`,{method:"POST",headers:e?{Authorization:`Bearer ${e}`}:{},body:a});if(!n.ok){const s=await n.json().catch(()=>({}));throw new Error(s.error||`API error: ${n.status} ${n.statusText}`)}return n.json()},removeAvatar:async()=>O("/me/avatar",{method:"DELETE"})},tournaments:{create:async(t,e,a,n)=>O("/tournaments",{method:"POST",body:JSON.stringify({name:t,min_players:e,max_players:a,creator_alias:n})}),join:async(t,e)=>O("/tournament/join",{method:"POST",body:JSON.stringify({tournamentId:t,tournamentAlias:e})}),start:async t=>O(`/tournaments/${t}/start`,{method:"POST"}),getById:async t=>O(`/tournaments/${t}`,{method:"GET"}),updateProfile:async t=>O("/me",{method:"PATCH",body:JSON.stringify(t)}),getMatchHistory:async t=>{const e=await O("/me",{method:"GET"});return e.data&&e.data.matchHistory?{data:{matches:t?e.data.matchHistory.filter(n=>n.gameType==="tournament"):e.data.matchHistory},error:null,loading:!1}:{data:{matches:[]},error:null,loading:!1}},finish:async(t,e)=>{const{matchId:a,userScore:n,opponentScore:s}=e;return O(`/tournaments/${t}/finish`,{method:"POST",body:JSON.stringify({matchId:a,userScore:n,opponentScore:s})})}}},Y=Object.freeze(Object.defineProperty({__proto__:null,ai:Re,apiService:B,fetchApi:O,onevone:Le},Symbol.toStringTag,{value:"Module"}));function Oe(t={}){const e=document.createElement("div");e.className="profile-settings";const a=U.getTranslations(),n={username:"",displayName:"",bio:"",avatar:"",...t},s=document.createElement("form");s.className="profile-form",s.noValidate=!0;const o=document.createElement("div");o.className="form-section";const i=document.createElement("div");i.className="avatar-section";const l=document.createElement("label");l.className="form-label",l.textContent="Customize Avatar";const d=document.createElement("div");d.className="avatar-container";const r=document.createElement("div");r.className="avatar-preview-container",r.style.display="flex",r.style.flexDirection="column",r.style.alignItems="center";const m=document.createElement("div");m.className="avatar-preview",!n.avatar||n.avatar==="default.jpg"?m.innerHTML='<img src="/uploads/default.jpg" alt="Default Avatar" class="avatar-img" />':m.innerHTML=`<img src="/uploads/${n.avatar}" alt="Avatar" class="avatar-img" />`;const c=document.createElement("input");c.type="file",c.accept="image/*",c.className="avatar-input",c.hidden=!0,c.addEventListener("change",async()=>{var P;const T=(P=c.files)==null?void 0:P[0];if(T)try{console.log("[DEBUG] Starting avatar upload for file:",T.name);const C=await B.users.uploadAvatar(T);if(console.log("[DEBUG] Avatar upload response:",C),C.error)console.error("[DEBUG] Avatar upload failed with error:",C.error),q(`Failed to upload avatar: ${C.error}`,"error");else{console.log("[DEBUG] Avatar upload successful, updating preview");const A=C.file;m.innerHTML=`<img src="/uploads/${A}" alt="Avatar" class="avatar-img" />`,q("Avatar uploaded successfully!","success");const H=document.querySelector(".avatar-img");H&&(H.src=`/uploads/${A}`,console.log("[DEBUG] Updated main avatar display")),g.style.display="block"}}catch(C){console.error("[DEBUG] Avatar upload exception:",C),console.error("[DEBUG] Exception details:",C.message||C),q("Error uploading avatar.","error")}});const f=document.createElement("button");f.type="button",f.className="secondary-button",f.textContent=a.profile.settings.changeAvatar,f.style.marginTop="1rem",f.style.display="block",f.style.marginLeft="auto",f.style.marginRight="auto",f.addEventListener("click",()=>c.click());const g=document.createElement("button");g.type="button",g.className="danger-button remove-avatar-btn",g.textContent="Remove Avatar",g.style.marginTop="0.5rem",g.style.display="block",g.style.marginLeft="auto",g.style.marginRight="auto";const w=n.avatar&&n.avatar!=="default.jpg";g.style.display=w?"block":"none",g.addEventListener("click",()=>{De("Remove Avatar","Are you sure you want to remove your avatar? This will reset it to the default avatar.",()=>u())});async function u(){var T;try{const P=await B.users.removeAvatar();if(P.error){q(`Failed to remove avatar: ${P.error}`,"error");return}m.innerHTML='<img src="/uploads/default.jpg" alt="Default Avatar" class="avatar-img" />';const C=document.querySelector(".avatar-img");C&&(C.src="/uploads/default.jpg"),g.style.display="none";const A=((T=P.data)==null?void 0:T.message)||"Avatar removed successfully! Reset to default avatar.";q(A,"success")}catch(P){console.error("Avatar removal error:",P),q("Error removing avatar. Please try again.","error")}}r.appendChild(m);const p=document.createElement("div");p.className="avatar-button-container",p.style.display="flex",p.style.flexDirection="column",p.style.gap="0.5rem",p.style.alignItems="center",p.appendChild(f),p.appendChild(g),d.appendChild(r),d.appendChild(p),d.appendChild(c),i.appendChild(l),i.appendChild(d),o.appendChild(i);const v=Q({label:a.profile.settings.username,name:"username",type:"text",value:n.username,required:!0,placeholder:"Enter your username"}),h=Q({label:a.profile.settings.displayName,name:"displayName",type:"text",value:n.displayName,required:!0,placeholder:"Enter your display name"}),E=Q({name:"bio",type:"textarea",label:a.profile.settings.bio,placeholder:a.profile.settings.bioPlaceholder,value:n.bio||""}),I=document.createElement("div");I.className="settings-button-container",I.innerHTML=`
    <button type="button" class="settings-button advanced-toggle-button">
      <span class="button-icon"><i class="fas fa-sliders-h"></i></span>
      <span class="button-text">${a.profile.settings.advancedSettings}</span>
      <span class="button-arrow"><i class="fas fa-chevron-down"></i></span>
    </button>
  `;const k=document.createElement("div");k.className="advanced-content",k.style.display="none";const b=Q({label:"Current Password",name:"oldPassword",type:"password",placeholder:"Enter your current password",autoComplete:"current-password"}),S=Q({label:a.profile.settings.newPassword,name:"newPassword",type:"password",placeholder:a.profile.settings.passwordPlaceholder,autoComplete:"new-password"}),x=Q({label:a.profile.settings.confirmPassword,name:"confirmPassword",type:"password",placeholder:a.profile.settings.confirmPasswordPlaceholder,autoComplete:"new-password"});k.appendChild(b),k.appendChild(S),k.appendChild(x);const y=I.querySelector(".advanced-toggle-button"),N=I.querySelector(".fa-chevron-down");y==null||y.addEventListener("click",()=>{const T=k.style.display!=="none";k.style.display=T?"none":"block",N&&(N.className=T?"fas fa-chevron-down":"fas fa-chevron-up")});const M=document.createElement("div");return M.className="settings-button-container",M.innerHTML=`
    <button type="submit" class="settings-button save-changes-button">
      <span class="button-icon"><i class="fas fa-save"></i></span>
      <span class="button-text">${a.profile.settings.saveChanges}</span>
      <span class="button-check"><i class="fas fa-check"></i></span>
    </button>
  `,s.appendChild(o),s.appendChild(v),s.appendChild(h),s.appendChild(E),s.appendChild(I),s.appendChild(k),s.appendChild(M),s.addEventListener("submit",async T=>{var W,ee;T.preventDefault();const P=new FormData(s),C={},A=P.get("displayName");A&&A!==n.displayName&&(C.display_name=A);const H=P.get("bio");typeof H=="string"&&(C.bio=H);const D=P.get("oldPassword"),$=P.get("newPassword"),K=P.get("confirmPassword");if(D&&$&&K&&(C.oldPassword=D,C.newPassword=$,C.confirmPassword=K),C.oldPassword&&C.newPassword&&C.confirmPassword){if(console.log("[hanieh debug] PATCH /me payload:",{oldPassword:C.oldPassword,newPassword:C.newPassword,confirmPassword:C.confirmPassword}),C.newPassword!==C.confirmPassword){q("New password and confirmation do not match.","error");return}try{const z=await B.users.updateProfile({oldPassword:C.oldPassword,password:C.newPassword});if(z.error){q(`Failed to update password: ${z.error}`,"error");return}q(((W=z.data)==null?void 0:W.message)||"Password updated successfully!","success");const V=s.querySelector(".save-changes-button");V&&(V.classList.add("success"),setTimeout(()=>V.classList.remove("success"),2e3))}catch(z){console.error("Error updating password:",z),q("Failed to update password. Please try again.","error")}return}try{const z=await B.users.updateProfile(C);if(z.error){q(`Failed to update profile: ${z.error}`,"error");return}q(((ee=z.data)==null?void 0:ee.message)||"Profile updated successfully!","success");const V=s.querySelector(".save-changes-button");V&&(V.classList.add("success"),setTimeout(()=>V.classList.remove("success"),2e3))}catch(z){console.error("Error updating profile:",z),q("Failed to update profile. Please try again.","error")}}),e.appendChild(s),e}function Q({label:t,name:e,type:a,value:n="",required:s=!1,placeholder:o="",autoComplete:i="",className:l=""}){const d=document.createElement("div");d.className=`form-group ${l}`.trim();const r=document.createElement("label");r.className="form-label",r.htmlFor=e,r.textContent=t;let m;if(a==="textarea"){const c=document.createElement("textarea");c.id=e,c.name=e,c.value=n,c.placeholder=o,c.required=s,c.rows=3,m=c}else{const c=document.createElement("input");c.type=a,c.id=e,c.name=e,c.value=n,c.placeholder=o,c.required=s,i&&(c.autocomplete=i),m=c}return m.className="form-input",d.appendChild(r),d.appendChild(m),d}const q=window.showMessage||((t,e)=>{console.log(`${e.toUpperCase()}: ${t}`)});function De(t,e,a){const n=document.createElement("div");n.className="confirmation-modal",n.innerHTML=`
    <div class="confirmation-modal-content">
      <div class="confirmation-modal-header">
        <div class="confirmation-modal-icon">
          <i class="fas fa-exclamation-triangle"></i>
        </div>
        <h3 class="confirmation-modal-title">${t}</h3>
      </div>
      <div class="confirmation-modal-message">
        ${e}
      </div>
      <div class="confirmation-modal-actions">
        <button class="confirmation-btn confirmation-btn-cancel">Cancel</button>
        <button class="confirmation-btn confirmation-btn-confirm">Remove</button>
      </div>
    </div>
  `,document.body.appendChild(n),setTimeout(()=>n.classList.add("show"),10);const s=n.querySelector(".confirmation-btn-cancel"),o=n.querySelector(".confirmation-btn-confirm"),i=()=>{n.classList.remove("show"),setTimeout(()=>{document.body.removeChild(n)},300)};s.addEventListener("click",i),o.addEventListener("click",()=>{i(),a()}),n.addEventListener("click",d=>{d.target===n&&i()});const l=d=>{d.key==="Escape"&&(i(),document.removeEventListener("keydown",l))};document.addEventListener("keydown",l)}const Ue="modulepreload",Be=function(t){return"/"+t},fe={},_=function(e,a,n){let s=Promise.resolve();if(a&&a.length>0){let i=function(r){return Promise.all(r.map(m=>Promise.resolve(m).then(c=>({status:"fulfilled",value:c}),c=>({status:"rejected",reason:c}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),d=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=i(a.map(r=>{if(r=Be(r),r in fe)return;fe[r]=!0;const m=r.endsWith(".css"),c=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${c}`))return;const f=document.createElement("link");if(f.rel=m?"stylesheet":Ue,m||(f.as="script"),f.crossOrigin="",f.href=r,d&&f.setAttribute("nonce",d),document.head.appendChild(f),m)return new Promise((g,w)=>{f.addEventListener("load",g),f.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${r}`)))})}))}function o(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return s.then(i=>{for(const l of i||[])l.status==="rejected"&&o(l.reason);return e().catch(o)})};function Ee(){var w;let t=document.getElementById("tournament-bracket-modal");t&&t.remove();const e=document.createElement("div");e.id="tournament-bracket-modal",e.className="modal-overlay";const a=document.createElement("div");if(a.className="tournament-container",a.innerHTML=`
    <button class="close-btn">×</button>
    <div class="bracket-preview">
      <svg viewBox="0 0 100 100">
        <path d="M20 20 L40 20 L40 35 L60 35 M40 35 L40 50 L20 50 M20 70 L40 70 L40 65 L60 65 M40 65 L40 80 L20 80 M60 35 L60 50 L80 50 M60 65 L60 50"/>
      </svg>
    </div>
    <h1 class="title">TOURNAMENT</h1>
    <p class="subtitle">4-PLAYER BRACKET SETUP</p>
    <div class="tournament-title-container">
      <input type="text" id="tournamentTitle" class="tournament-title-input" placeholder="Enter tournament title" maxlength="30" value="My Awesome Tournament">
    </div>
    <div class="players-grid">
      <div class="player-slot">
        <span class="player-number">P1</span>
        <input type="text" class="player-input" placeholder="Player 1" maxlength="20">
      </div>
      <div class="player-slot">
        <span class="player-number">P2</span>
        <input type="text" class="player-input" placeholder="Player 2" maxlength="20">
      </div>
      <div class="player-slot">
        <span class="player-number">P3</span>
        <input type="text" class="player-input" placeholder="Player 3" maxlength="20">
      </div>
      <div class="player-slot">
        <span class="player-number">P4</span>
        <input type="text" class="player-input" placeholder="Player 4" maxlength="20">
      </div>
    </div>
    <div class="vs-indicator">VS</div>
    <button class="start-button" id="startBtn">⚡ Generate Bracket ⚡</button>
  `,e.appendChild(a),document.body.appendChild(e),!document.getElementById("tournament-modal-styles")){const u=document.createElement("style");u.id="tournament-modal-styles",u.textContent=`
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');
      .tournament-container {
        font-family: 'JetBrains Mono', monospace;
        background: rgba(20, 20, 30, 0.95);
        border: 2px solid #00fff7;
        border-radius: 32px;
        padding: 48px 32px;
        max-width: 600px;
        width: 100%;
        position: relative;
        backdrop-filter: blur(18px) saturate(180%);
        box-shadow: 0 0 60px 0 #00fff7, 0 0 0 4px #222 inset;
        animation: slideIn 0.7s cubic-bezier(0.25,0.46,0.45,0.94);
        border-image: linear-gradient(135deg, #00fff7 0%, #ff00ea 100%) 1;
        overflow: hidden;
      }
      .close-btn {
        position: absolute;
        top: 18px;
        right: 28px;
        background: none;
        border: none;
        color: #00fff7;
        font-size: 32px;
        cursor: pointer;
        transition: all 0.2s;
        font-family: 'JetBrains Mono', monospace;
        text-shadow: 0 0 12px #00fff7, 0 0 2px #fff;
      }
      .close-btn:hover {
        color: #ff00ea;
        transform: rotate(90deg) scale(1.2);
        text-shadow: 0 0 24px #ff00ea;
      }
      .title {
        color: #00fff7;
        font-size: 38px;
        font-weight: 800;
        text-align: center;
        margin-bottom: 18px;
        text-shadow: 0 0 32px #00fff7, 0 0 8px #ff00ea;
        letter-spacing: 3px;
        background: linear-gradient(90deg, #00fff7 0%, #ff00ea 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .subtitle {
        color: #fff;
        text-align: center;
        margin-bottom: 24px;
        font-size: 16px;
        letter-spacing: 2px;
        opacity: 0.7;
      }
      .tournament-title-container {
        width: 100%;
        margin-bottom: 20px;
        text-align: center;
      }
      .tournament-title-input {
        width: 80%;
        max-width: 400px;
        background: rgba(255,255,255,0.1);
        border: 2px solid #00fff7;
        border-radius: 12px;
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        font-family: 'JetBrains Mono', monospace;
        padding: 12px 20px;
        text-align: center;
        outline: none;
        transition: all 0.3s ease;
        box-shadow: 0 0 15px rgba(0, 255, 247, 0.3);
      }
      .tournament-title-input:focus {
        border-color: #ff00ea;
        box-shadow: 0 0 25px rgba(255, 0, 234, 0.5);
        transform: scale(1.02);
      }
      .tournament-title-input::placeholder {
        color: rgba(255, 255, 255, 0.5);
        font-weight: 400;
      }
      .players-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 32px;
        margin-bottom: 48px;
        width: 100%;
        position: relative;
        padding-top: 20px;
      }
      .player-slot {
        position: relative;
        background: linear-gradient(135deg, rgba(0,255,247,0.08), rgba(255,0,234,0.08));
        border: 2px solid #222;
        border-radius: 18px;
        padding: 32px 20px;
        min-height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-shadow: 0 0 24px 0 #00fff7 inset;
        transition: box-shadow 0.3s, border-color 0.3s;
        opacity: 0;
        transform: translateY(24px);
        animation: fadeInUp 0.5s ease-out forwards;
      }
      .player-slot:nth-child(1) { animation-delay: 0.1s; }
      .player-slot:nth-child(2) { animation-delay: 0.2s; }
      .player-slot:nth-child(3) { animation-delay: 0.3s; }
      .player-slot:nth-child(4) { animation-delay: 0.4s; }
      .player-slot.filled {
        border-color: #00fff7;
        box-shadow: 0 0 32px 0 #ff00ea inset;
        background: linear-gradient(135deg, rgba(0,255,247,0.18), rgba(255,0,234,0.18));
      }
      .player-slot.duplicate-error {
        border-color: #ef4444;
        box-shadow: 0 0 32px 0 #ef4444 inset;
        background: linear-gradient(135deg, rgba(239,68,68,0.18), rgba(220,38,38,0.18));
        display: flex !important;
        visibility: visible !important;
        opacity: 1 !important;
        position: relative !important;
      }
      .player-number {
        position: absolute;
        top: -12px;
        left: 20px;
        background: linear-gradient(135deg, #00fff7, #ff00ea);
        color: #222;
        font-size: 12px;
        font-weight: 700;
        padding: 6px 14px;
        border-radius: 20px;
        letter-spacing: 1px;
        box-shadow: 0 4px 16px #00fff7;
        z-index: 10;
      }
      .player-input {
        background: rgba(255,255,255,0.08);
        border: none;
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        font-family: 'JetBrains Mono', monospace;
        outline: none;
        width: 100%;
        text-align: center;
        letter-spacing: 2px;
        border-radius: 8px;
        padding: 10px 0;
        box-shadow: 0 0 8px #00fff7 inset;
        transition: box-shadow 0.2s;
      }
      .player-input:focus {
        box-shadow: 0 0 16px #ff00ea inset;
      }
      .player-input::placeholder {
        color: #00fff7;
        font-weight: 400;
        opacity: 0.5;
      }
      .player-input.duplicate-input {
        box-shadow: 0 0 16px #ef4444 inset;
        border: 1px solid #ef4444;
      }
      .error-message {
        background: rgba(239, 68, 68, 0.1);
        border: 2px solid #ef4444;
        border-radius: 12px;
        padding: 16px;
        margin: 20px 0;
        animation: fadeInShake 0.5s ease-out;
      }
      .error-content {
        display: flex;
        align-items: center;
        gap: 12px;
        color: #fff;
        font-weight: 600;
      }
      .error-icon {
        font-size: 20px;
        color: #ef4444;
      }
      .error-text {
        flex: 1;
        font-size: 14px;
        line-height: 1.4;
      }
      .vs-indicator {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: linear-gradient(90deg, #00fff7 0%, #ff00ea 100%);
        color: #fff;
        font-size: 18px;
        font-weight: 800;
        padding: 10px 22px;
        border-radius: 32px;
        border: 2px solid #00fff7;
        pointer-events: none;
        z-index: 10;
        box-shadow: 0 0 24px #ff00ea;
        backdrop-filter: blur(8px);
      }
      .start-button {
        width: 100%;
        background: linear-gradient(90deg, #00fff7 0%, #ff00ea 100%);
        border: none;
        border-radius: 18px;
        padding: 22px;
        color: #222;
        font-size: 20px;
        font-weight: 800;
        font-family: 'JetBrains Mono', monospace;
        cursor: pointer;
        transition: all 0.3s;
        text-transform: uppercase;
        letter-spacing: 3px;
        position: relative;
        overflow: hidden;
        box-shadow: 0 8px 32px #00fff7, 0 0 0 2px #ff00ea inset;
      }
      .start-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
        transition: left 0.5s;
      }
      .start-button:hover {
        transform: translateY(-3px) scale(1.04);
        box-shadow: 0 15px 40px #ff00ea, 0 0 0 2px #00fff7 inset;
      }
      .start-button:hover::before {
        left: 100%;
      }
      .start-button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
        background: linear-gradient(90deg, #666 0%, #888 100%);
      }
      .start-button:disabled:hover {
        transform: none;
        box-shadow: 0 8px 25px #ff00ea;
      }
      .bracket-preview {
        position: absolute;
        top: -10px;
        right: -10px;
        width: 80px;
        height: 80px;
        opacity: 0.12;
        pointer-events: none;
      }
      .bracket-preview svg {
        width: 100%;
        height: 100%;
        stroke: #00fff7;
        fill: none;
        stroke-width: 2;
      }
      @media (max-width: 640px) {
        .tournament-container { padding: 18px; margin: 10px; }
        .players-grid { gap: 14px; }
        .player-slot { padding: 14px 8px; min-height: 80px; }
        .title { font-size: 24px; }
        .player-input { font-size: 14px; }
      }
      @media (max-width: 480px) {
        .players-grid { grid-template-columns: 1fr; gap: 8px; }
        .vs-indicator { display: none; }
      }
      @keyframes slideIn {
        from { opacity: 0; transform: translateY(30px) scale(0.9); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
      @keyframes fadeInUp {
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes slideOut {
        to { opacity: 0; transform: translateY(-30px) scale(0.9); }
      }
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
      }
      @keyframes fadeInShake {
        0% { opacity: 0; transform: translateY(-10px) scale(0.9); }
        50% { opacity: 1; transform: translateY(0) scale(1.02); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }
      
      /* Player Selection Styles */
      .player-selection-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        margin: 32px 0;
        padding: 20px;
      }
      
      .player-selection-card {
        background: linear-gradient(135deg, rgba(0,255,247,0.1), rgba(255,0,234,0.1));
        border: 2px solid #333;
        border-radius: 16px;
        padding: 24px;
        cursor: pointer;
        transition: all 0.3s ease;
        text-align: center;
        position: relative;
        min-height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      .player-selection-card:hover {
        border-color: #00fff7;
        box-shadow: 0 0 20px rgba(0, 255, 247, 0.3);
        transform: translateY(-2px);
      }
      
      .player-selection-card.selected {
        border-color: #00fff7;
        background: linear-gradient(135deg, rgba(0,255,247,0.2), rgba(255,0,234,0.2));
        box-shadow: 0 0 30px rgba(0, 255, 247, 0.5);
        transform: scale(1.05);
      }
      
      .player-selection-number {
        position: absolute;
        top: -12px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #00fff7, #ff00ea);
        color: #222;
        font-size: 12px;
        font-weight: 700;
        padding: 6px 14px;
        border-radius: 20px;
        letter-spacing: 1px;
      }
      
      .player-selection-name {
        font-size: 18px;
        font-weight: 600;
        color: #fff;
        margin: 8px 0;
        letter-spacing: 1px;
      }
      
      .player-selection-indicator {
        font-size: 24px;
        opacity: 0.7;
        transition: all 0.3s ease;
      }
      
      .player-selection-card.selected .player-selection-indicator {
        opacity: 1;
        transform: scale(1.2);
      }
      
      .selection-buttons {
        display: flex;
        gap: 16px;
        margin-top: 32px;
      }
      
      .back-button {
        flex: 1;
        background: rgba(255, 255, 255, 0.1);
        border: 2px solid #666;
        border-radius: 12px;
        padding: 16px 24px;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        font-family: 'JetBrains Mono', monospace;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      
      .back-button:hover {
        border-color: #888;
        background: rgba(255, 255, 255, 0.15);
      }
      
      .confirm-selection-button {
        flex: 2;
        background: linear-gradient(90deg, #00fff7 0%, #ff00ea 100%);
        border: none;
        border-radius: 12px;
        padding: 16px 24px;
        color: #222;
        font-size: 16px;
        font-weight: 700;
        font-family: 'JetBrains Mono', monospace;
        cursor: pointer;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 2px;
        opacity: 0.5;
      }
      
      .confirm-selection-button:not(:disabled) {
        opacity: 1;
      }
      
      .confirm-selection-button:not(:disabled):hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 255, 247, 0.4);
      }
    `,document.head.appendChild(u)}const n=a.querySelectorAll(".player-input"),s=a.querySelector("#startBtn"),o=a.querySelectorAll(".player-slot");function i(u,p){u.value.trim()?p.classList.add("filled"):p.classList.remove("filled")}function l(){const u=Array.from(n).map(h=>h.value.trim().toLowerCase()).filter(h=>h!==""),p=[],v=new Set;for(const h of u)v.has(h)?p.push(h):v.add(h);return p}function d(u){var E;const p=a.querySelector(".error-message");p&&p.remove();const v=document.createElement("div");v.className="error-message",v.innerHTML=`
      <div class="error-content">
        <span class="error-icon">⚠️</span>
        <span class="error-text">${u}</span>
      </div>
    `;const h=a.querySelector(".start-button");h&&((E=h.parentNode)==null||E.insertBefore(v,h)),setTimeout(()=>{v.parentNode&&v.remove()},5e3)}function r(u){n.forEach((p,v)=>{o[v].classList.remove("duplicate-error"),p.classList.remove("duplicate-input")}),u.length>0&&n.forEach((p,v)=>{const h=p.value.trim().toLowerCase();u.includes(h)&&(o[v].classList.add("duplicate-error"),p.classList.add("duplicate-input"))})}function m(){const u=Array.from(n).every(h=>h.value.trim()!==""),p=l(),v=p.length>0;if(r(p),!v){const h=a.querySelector(".error-message");h&&h.remove()}s.disabled=!u||v,v?(s.innerHTML="❌ DUPLICATE NAMES FOUND",s.style.background="linear-gradient(90deg, #ef4444 0%, #dc2626 100%)"):u?(s.innerHTML="🏆 START TOURNAMENT 🏆",s.style.background="linear-gradient(90deg, #00fff7 0%, #ff00ea 100%)"):(s.innerHTML="⚡ GENERATE BRACKET ⚡",s.style.background="linear-gradient(90deg, #00fff7 0%, #ff00ea 100%)")}n.forEach((u,p)=>{u.addEventListener("input",()=>{i(u,o[p]),m()}),u.addEventListener("keypress",v=>{if(v.key==="Enter"){const h=n[p+1];h?h.focus():s.disabled||c()}})});async function c(){if(s.disabled)return;const u=Array.from(n).map(v=>v.value.trim()),p=l();if(p.length>0){const v=p.map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(", ");d(`Duplicate names found: ${v}. Each player must have a unique name.`);return}if(u.some(v=>v==="")){d("All player names must be filled in.");return}f(u)}function f(u){const p=e.querySelector(".tournament-container");if(!p)return;p.innerHTML=`
      <button class="close-btn">×</button>
      <div class="bracket-preview">
        <svg viewBox="0 0 100 100">
          <path d="M20 20 L40 20 L40 35 L60 35 M40 35 L40 50 L20 50 M20 70 L40 70 L40 65 L60 65 M40 65 L40 80 L20 80 M60 35 L60 50 L80 50 M60 65 L60 50"/>
        </svg>
      </div>
      <h1 class="title">WHICH PLAYER ARE YOU?</h1>
      <p class="subtitle">SELECT YOUR TOURNAMENT ALIAS</p>
      <div class="player-selection-grid">
        ${u.map((b,S)=>`
          <div class="player-selection-card" data-player="${b}" data-index="${S}">
            <div class="player-selection-number">P${S+1}</div>
            <div class="player-selection-name">${b}</div>
            <div class="player-selection-indicator">👤</div>
          </div>
        `).join("")}
      </div>
      <div class="selection-buttons">
        <button class="back-button" id="backBtn">← Back to Edit Players</button>
        <button class="confirm-selection-button" id="confirmBtn" disabled>Create Tournament</button>
      </div>
    `;let v=null;const h=p.querySelectorAll(".player-selection-card"),E=p.querySelector("#confirmBtn"),I=p.querySelector("#backBtn"),k=p.querySelector(".close-btn");h.forEach(b=>{b.addEventListener("click",()=>{h.forEach(S=>S.classList.remove("selected")),b.classList.add("selected"),v=b.dataset.player||null,E&&(E.disabled=!1,E.style.opacity="1")})}),I&&I.addEventListener("click",()=>{e.remove(),Ee()}),k&&k.addEventListener("click",()=>{e.remove()}),E&&E.addEventListener("click",()=>{v&&g(u,v)})}async function g(u,p){const v=e.querySelector("#confirmBtn");v&&(v.innerHTML="🔥 CREATING TOURNAMENT... 🔥",v.style.background="linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%)");try{console.log("[🚀 FRONTEND DEBUG] Starting tournament creation process..."),console.log("[🚀 FRONTEND DEBUG] Players array:",u),console.log("[🚀 FRONTEND DEBUG] Selected creator alias:",p);const{apiService:h}=await _(async()=>{const{apiService:b}=await Promise.resolve().then(()=>Y);return{apiService:b}},void 0),E=`Tournament ${new Date().toLocaleTimeString()}`;console.log("[🚀 FRONTEND DEBUG] Tournament parameters:",{name:E,creatorAlias:p,min_players:4,max_players:4}),console.log("[🚀 FRONTEND DEBUG] Calling apiService.tournaments.create...");const I=await h.tournaments.create(E,4,4,p);console.log("[✅ FRONTEND SUCCESS] Tournament creation response:",I);const k=I.data.tournamentId;console.log("[🚀 FRONTEND DEBUG] Tournament ID:",k),window.currentTournamentId=k,console.log("[🚀 FRONTEND DEBUG] Starting guest player joins..."),console.log("[🚀 FRONTEND DEBUG] Creator alias (already joined):",p);for(let b=0;b<u.length;b++){if(u[b]===p){console.log(`[🚀 FRONTEND DEBUG] Skipping creator ${u[b]} - already joined`);continue}try{console.log(`[🚀 FRONTEND DEBUG] Joining guest: ${u[b]} to tournament ${k}`);const S=await h.tournaments.join(k,u[b]);console.log(`[✅ FRONTEND SUCCESS] Player ${u[b]} joined:`,S)}catch(S){console.log(`[❌ FRONTEND ERROR] Player ${u[b]} join failed:`,S)}}console.log("[🚀 FRONTEND DEBUG] All players processed, showing matchmaking..."),e.remove(),await $e(u,k)}catch(h){console.error("Error creating tournament:",h),s.innerHTML="❌ ERROR - TRY AGAIN",s.style.background="linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #b91c1c 100%)",setTimeout(()=>{s.innerHTML="🏆 START TOURNAMENT 🏆",s.style.background="linear-gradient(90deg, #00fff7 0%, #ff00ea 100%)"},2e3)}}s.addEventListener("click",c),m(),n[0].focus(),(w=a.querySelector(".close-btn"))==null||w.addEventListener("click",()=>{a.style.animation="slideOut 0.4s ease-in",setTimeout(()=>e.remove(),400)})}async function $e(t,e){return new Promise(async a=>{const n=document.createElement("div");n.id="matchmaking-overlay",n.className="modal-overlay";const s=document.createElement("div");if(s.className="slot-machine-container",s.innerHTML=`
      <div class="matchmaking-header">
        <h1 class="matchmaking-title">🎰 TOURNAMENT MATCHMAKING 🎰</h1>
        <p class="matchmaking-subtitle">Using advanced backend matchmaking algorithms...</p>
      </div>
      
      <div class="matches-container">
        <!-- Match 1 -->
        <div class="match-picker">
          <h3 class="match-title">SEMIFINAL MATCH 1</h3>
          <div class="slot-machine-match">
            <div class="player-slot" data-slot="match1-player1">
              <div class="slot-reel">
                ${t.map(r=>`<div class="slot-name">${r}</div>`).join("")}
              </div>
            </div>
            <div class="vs-divider">VS</div>
            <div class="player-slot" data-slot="match1-player2">
              <div class="slot-reel">
                ${t.map(r=>`<div class="slot-name">${r}</div>`).join("")}
              </div>
            </div>
          </div>
        </div>
        
        <!-- Match 2 -->
        <div class="match-picker">
          <h3 class="match-title">SEMIFINAL MATCH 2</h3>
          <div class="slot-machine-match">
            <div class="player-slot" data-slot="match2-player1">
              <div class="slot-reel">
                ${t.map(r=>`<div class="slot-name">${r}</div>`).join("")}
              </div>
            </div>
            <div class="vs-divider">VS</div>
            <div class="player-slot" data-slot="match2-player2">
              <div class="slot-reel">
                ${t.map(r=>`<div class="slot-name">${r}</div>`).join("")}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="matchmaking-status">
        <div class="status-text">⚙️ Backend system calculating optimal matches...</div>
      </div>
    `,n.appendChild(s),document.body.appendChild(n),!document.getElementById("matchmaking-styles")){const r=document.createElement("style");r.id="matchmaking-styles",r.textContent=`
        .slot-machine-container {
          background: rgba(15, 23, 42, 0.95);
          border: 2px solid #00fff7;
          border-radius: 24px;
          padding: 40px;
          max-width: 1000px;
          width: 100%;
          backdrop-filter: blur(20px);
          box-shadow: 0 0 50px rgba(0, 255, 247, 0.3);
          animation: slideInScale 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .matches-container {
          display: flex;
          gap: 40px;
          justify-content: center;
          margin: 40px 0;
        }
        
        .match-picker {
          flex: 1;
          max-width: 400px;
        }
        
        .match-title {
          color: #00fff7;
          font-size: 1.2em;
          font-weight: 700;
          text-align: center;
          margin-bottom: 20px;
          text-shadow: 0 0 10px rgba(0, 255, 247, 0.5);
        }
        
        .slot-machine-match {
          display: flex;
          align-items: center;
          gap: 20px;
          background: rgba(30, 41, 59, 0.8);
          border: 2px solid rgba(0, 255, 247, 0.3);
          border-radius: 16px;
          padding: 30px 20px;
        }
        
        .player-slot {
          flex: 1;
          height: 80px;
          background: rgba(0, 0, 0, 0.5);
          border: 2px solid #00fff7;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
        }
        
        .slot-reel {
          display: flex;
          flex-direction: column;
          animation: slotSpin 3s ease-out;
          transform: translateY(0);
        }
        
        .slot-name {
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 1.1em;
          font-weight: 600;
          background: linear-gradient(135deg, rgba(0, 255, 247, 0.1), rgba(255, 0, 234, 0.1));
          border-bottom: 1px solid rgba(0, 255, 247, 0.2);
        }
        
        .vs-divider {
          color: #ff00ea;
          font-size: 1.5em;
          font-weight: 800;
          text-shadow: 0 0 15px rgba(255, 0, 234, 0.8);
          min-width: 50px;
          text-align: center;
        }
        
        @keyframes slotSpin {
          0% { transform: translateY(0); }
          70% { transform: translateY(-400px); }
          100% { transform: translateY(-320px); }
        }
        
        .matchmaking-header {
          text-align: center;
          margin-bottom: 40px;
        }
        
        .matchmaking-title {
          font-size: 2.5em;
          font-weight: 800;
          background: linear-gradient(135deg, #00fff7, #ff00ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 10px;
          text-shadow: 0 0 30px rgba(0, 255, 247, 0.5);
        }
        
        .matchmaking-subtitle {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.1em;
          margin-bottom: 0;
        }
        
        .matchmaking-status {
          text-align: center;
          margin-top: 30px;
        }
        
        .status-text {
          color: #fff;
          font-size: 1.1em;
          font-weight: 500;
        }
        
        .players-analysis {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }
        
        .player-card {
          background: rgba(30, 41, 59, 0.8);
          border: 1px solid rgba(0, 255, 247, 0.3);
          border-radius: 16px;
          padding: 20px;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .player-card.analyzing {
          border-color: #00fff7;
          box-shadow: 0 0 20px rgba(0, 255, 247, 0.4);
          transform: scale(1.05);
        }
        
        .player-avatar {
          font-size: 2em;
          margin-bottom: 10px;
        }
        
        .player-name {
          color: #fff;
          font-weight: 600;
          margin-bottom: 15px;
          font-size: 1.1em;
        }
        
        .analysis-bar {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 10px;
        }
        
        .analysis-fill {
          height: 100%;
          background: linear-gradient(90deg, #00fff7, #ff00ea);
          width: 0%;
          transition: width 2s ease;
        }
        
        .skill-rating {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9em;
        }
        
        .matchmaking-progress {
          margin-bottom: 30px;
        }
        
        .progress-bar {
          width: 100%;
          height: 12px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          overflow: hidden;
          margin-bottom: 15px;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #00fff7, #ff00ea);
          width: 0%;
          transition: width 0.5s ease;
        }
        
        .progress-text {
          text-align: center;
          color: #fff;
          font-weight: 500;
        }
        
        .matchmaking-status {
          display: flex;
          justify-content: space-between;
          gap: 10px;
        }
        
        .status-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 15px 10px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }
        
        .status-item.active {
          background: rgba(0, 255, 247, 0.2);
          border: 1px solid #00fff7;
          box-shadow: 0 0 15px rgba(0, 255, 247, 0.3);
        }
        
        .status-item.completed {
          background: rgba(34, 197, 94, 0.2);
          border: 1px solid #22c55e;
        }
        
        .status-icon {
          font-size: 1.5em;
          margin-bottom: 8px;
        }
        
        .status-text {
          color: #fff;
          font-size: 0.9em;
          text-align: center;
        }
        
        @keyframes slideInScale {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @media (max-width: 768px) {
          .matches-container {
            flex-direction: column;
            gap: 30px;
          }
          .slot-machine-match {
            flex-direction: column;
            gap: 15px;
          }
          .vs-divider {
            transform: rotate(90deg);
          }
        }
      `,document.head.appendChild(r)}const o=document.createElement("style");o.id="spinning-styles",o.textContent=`
      .slot-reel.spinning {
        animation: slotSpinContinuous 0.1s linear infinite;
      }
      
      @keyframes slotSpinContinuous {
        0% { transform: translateY(0); }
        100% { transform: translateY(-80px); }
      }
    `,document.head.appendChild(o);const i=s.querySelectorAll(".slot-reel");i.forEach((r,m)=>{setTimeout(()=>{r.classList.add("spinning")},m*200)});let l=null;e&&(l=(async()=>{try{console.log("[🚀 FRONTEND API] Calling backend tournament start API for tournament:",e);const{apiService:r}=await _(async()=>{const{apiService:c}=await Promise.resolve().then(()=>Y);return{apiService:c}},void 0),m=await r.tournaments.start(e);if(console.log("[🚀 FRONTEND API] ✅ Backend API call successful! Response:",m),m.data&&m.data.matches){const c=m.data.matches;return console.log("[🚀 FRONTEND API] ✅ Backend provided matches:",c),window.globalBackendMatches=c,console.log("[🚀 FRONTEND API] ✅ Stored backend matches globally for slot machine use"),c}else return console.error("[🚀 FRONTEND API] ❌ Backend API success but no matches found in response:",m),[]}catch(r){return console.error("[🚀 FRONTEND API] ❌ Backend API call failed with error:",r),console.error("[🚀 FRONTEND API] This will trigger frontend fallback randomization"),[]}})());function d(r,m){const c=s.querySelector(`[data-slot="${r}"] .slot-reel`);c&&(c.innerHTML=`<div class="slot-name" style="height: 80px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 1.1em; font-weight: 600; background: linear-gradient(135deg, rgba(0, 255, 247, 0.1), rgba(255, 0, 234, 0.1));">${m}</div>`,c.style.transform="translateY(0px)",c.style.transition="all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",console.log(`[DEBUG] Setting ${r} to ${m} - content replaced`))}setTimeout(async()=>{i.forEach(c=>{c.classList.remove("spinning"),c.style.animation="none"});let r=[];if(l)try{r=await l,console.log("[DEBUG] Awaited backend matches:",r)}catch(c){console.error("[DEBUG] Error waiting for backend matches:",c)}if(r.length>=2){const c=r[0],f=r[1];window.globalBackendMatches=r,console.log("[🎯 FRONTEND] ✅ Using BACKEND randomization! Backend Fisher-Yates shuffle was successful."),console.log("[🎯 FRONTEND] Backend provided matches:",r),d("match1-player1",c.player1.tournament_alias),d("match1-player2",c.player2.tournament_alias),d("match2-player1",f.player1.tournament_alias),d("match2-player2",f.player2.tournament_alias),console.log("[🎯 FRONTEND] Final pairings from backend:"),console.log(`[🎯 FRONTEND] Match 1: ${c.player1.tournament_alias} vs ${c.player2.tournament_alias}`),console.log(`[🎯 FRONTEND] Match 2: ${f.player1.tournament_alias} vs ${f.player2.tournament_alias}`)}else{console.log("[⚠️ FRONTEND] ❌ Backend failed! Using FRONTEND fallback randomization."),console.log("[⚠️ FRONTEND] Backend matches were:",r),console.log("[⚠️ FRONTEND] Players before frontend shuffle:",t);const c=[...t];for(let f=c.length-1;f>0;f--){const g=Math.floor(Math.random()*(f+1));[c[f],c[g]]=[c[g],c[f]]}console.log("[⚠️ FRONTEND] Players after frontend Fisher-Yates shuffle:",c),d("match1-player1",c[0]),d("match1-player2",c[1]),d("match2-player1",c[2]),d("match2-player2",c[3]),console.log("[⚠️ FRONTEND] Final pairings from frontend fallback:"),console.log(`[⚠️ FRONTEND] Match 1: ${c[0]} vs ${c[1]}`),console.log(`[⚠️ FRONTEND] Match 2: ${c[2]} vs ${c[3]}`)}const m=s.querySelector(".status-text");m&&(m.textContent="🎉 Perfect matches found! Enjoy the results..."),setTimeout(()=>{m&&(m.textContent="🏆 Loading tournament bracket..."),setTimeout(()=>{n.remove(),we(t),a()},1500)},3e3)},5e3)})}function we(t){async function e(u){const{apiService:p}=await _(async()=>{const{apiService:h}=await Promise.resolve().then(()=>Y);return{apiService:h}},void 0),v=await p.tournaments.getById(u);return v.data&&v.data.data&&v.data.data.matches?v.data.data.matches:[]}function a(){var h;let u=document.getElementById("game-over-modal");u&&u.remove();const p=document.createElement("div");p.id="game-over-modal",p.className="modal-overlay";const v=document.createElement("div");if(v.className="game-over-modal-content",v.innerHTML=`
      <h2 style="text-align:center;margin-bottom:1.5rem;">Game is over</h2>
      <p style="text-align:center;margin-bottom:2rem;">Click below to return to the bracket and play the next match.</p>
      <button id="back-to-bracket-btn" class="btn btn-primary" style="width:100%;font-size:1.1em;">Back to Bracket</button>
    `,p.appendChild(v),document.body.appendChild(p),(h=v.querySelector("#back-to-bracket-btn"))==null||h.addEventListener("click",()=>{p.remove();const E=document.getElementById("app");E&&(E.innerHTML=""),we(t)}),!document.getElementById("game-over-modal-styles")){const E=document.createElement("style");E.id="game-over-modal-styles",E.textContent=`
        .modal-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(20,20,30,0.85); z-index: 9999; display: flex; align-items: center; justify-content: center; }
        .game-over-modal-content { background: #222; border-radius: 24px; padding: 48px 32px; max-width: 400px; width: 100%; box-shadow: 0 0 40px #00fff7; color: #fff; text-align: center; }
        .game-over-modal-content h2 { font-size: 2rem; color: #00fff7; margin-bottom: 1rem; }
        .game-over-modal-content .btn { margin-top: 2rem; }
      `,document.head.appendChild(E)}}let n=document.getElementById("tournament-bracket-ui");n&&n.remove();const s=document.createElement("div");s.id="tournament-bracket-ui",s.innerHTML=`
    <div class="tournament-container">
      <div class="tournament-header">
        <h1 class="tournament-title"><span class="trophy">🏆</span> TOURNAMENT BRACKET</h1>
        <p class="tournament-subtitle">✨ 4-Player Single Elimination Championship ✨</p>
      </div>
      <div class="bracket-container">
        <div class="semifinals-column">
          <div class="match" data-match="1">
            <div class="match-header">🥊 Match 1 - Semifinal</div>
            <div class="match-players">
              <div class="player" data-player="${t[0]}">${t[0]}</div>
              <div class="vs-divider">VS</div>
              <div class="player" data-player="${t[1]}">${t[1]}</div>
            </div>
            <div class="start-match-btn-container">
              <button class="btn btn-primary start-match-btn" data-match="1">Start Match</button>
            </div>
          </div>
          <div class="match" data-match="2">
            <div class="match-header">🥊 Match 2 - Semifinal</div>
            <div class="match-players">
              <div class="player" data-player="${t[2]}">${t[2]}</div>
              <div class="vs-divider">VS</div>
              <div class="player" data-player="${t[3]}">${t[3]}</div>
            </div>
            <div class="start-match-btn-container">
              <button class="btn btn-primary start-match-btn" data-match="2">Start Match</button>
            </div>
          </div>
        </div>
        <div class="bracket-lines">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <path class="connection-line" id="line1" d="M 25 25 L 50 25 L 50 50 L 75 50" />
            <path class="connection-line" id="line2" d="M 25 75 L 50 75 L 50 50 L 75 50" />
          </svg>
        </div>
        <div class="final-column">
          <div class="match final-match" data-match="final">
            <div class="match-header">🏆 CHAMPIONSHIP FINAL 🏆</div>
            <div class="match-players">
              <div class="player placeholder" data-from="match1">Winner of Match 1</div>
              <div class="vs-divider">VS</div>
              <div class="player placeholder" data-from="match2">Winner of Match 2</div>
            </div>
            <div class="start-match-btn-container">
              <button class="btn btn-primary start-match-btn" data-match="final">Start Final</button>
            </div>
          </div>
        </div>
      </div>
      <!-- controls removed -->
    </div>
  `;const o=s.querySelectorAll(".start-match-btn"),i=s.querySelector('.start-match-btn[data-match="2"]'),l=s.querySelector('.start-match-btn[data-match="final"]');i&&(i.disabled=!0,i.style.opacity="0.5",i.title="Finish Match 1 first"),l&&(l.disabled=!0,l.style.opacity="0.5",l.title="Finish both semifinals first"),o.forEach(u=>{u.addEventListener("click",()=>{const p=u.getAttribute("data-match");console.log("[DEBUG] Start Match button clicked:",{matchNum:p,btn:u});let v="",h="";if(p==="1")v=t[0],h=t[1];else if(p==="2")v=t[2],h=t[3];else if(p==="final"){const E=window.globalMatchResults;if(E&&E[1]&&E[2])v=E[1],h=E[2];else{console.error("[ERROR] Cannot start final - missing semifinal winners");return}}console.log("[DEBUG] About to call startGame with:",{playerA:v,playerB:h,matchNum:p}),r(v,h,p)})});function d(){i&&c[1]&&(i.disabled=!1,i.style.opacity="1",i.title="")}async function r(u,p,v){console.log("[DEBUG] TournamentModal startGame called with:",{playerA:u,playerB:p,matchNum:v});try{const h=window.globalBackendMatches;let E;if(v==="1"&&(h!=null&&h[0]))E=h[0].matchId;else if(v==="2"&&(h!=null&&h[1]))E=h[1].matchId;else if(v==="final")if(h!=null&&h[2])E=h[2].matchId;else{console.log("[DEBUG] Final match not found in stored matches, fetching latest from backend...");const k=window.currentTournamentId;if(!k)throw new Error("Tournament ID not found");try{const b=await e(k);console.log("[DEBUG] Latest matches from backend:",b),window.globalBackendMatches=b;const S=b.find(x=>x.round==="final");if(S)E=S.matchId;else{console.log("[DEBUG] Final match not found, attempting to trigger creation..."),console.log("[DEBUG] Available matches structure:",JSON.stringify(b,null,2));const x=b.find(T=>{var P,C;return T.round==="semifinal"&&T.matchNumber===1||T.matchId===((P=b[0])==null?void 0:P.matchId)||T.id===((C=b[0])==null?void 0:C.id)}),y=b.find(T=>{var P,C;return T.round==="semifinal"&&T.matchNumber===2||T.matchId===((P=b[1])==null?void 0:P.matchId)||T.id===((C=b[1])==null?void 0:C.id)});console.log("[DEBUG] Semifinal 1 data:",JSON.stringify(x,null,2)),console.log("[DEBUG] Semifinal 2 data:",JSON.stringify(y,null,2));const N=x&&(x.winner||x.winnerId||x.status==="completed"||x.finished===!0||x.player1Score!==void 0&&x.player2Score!==void 0),M=y&&(y.winner||y.winnerId||y.status==="completed"||y.finished===!0||y.player1Score!==void 0&&y.player2Score!==void 0);if(console.log("[DEBUG] Semifinals completion status:",{semifinal1Complete:N,semifinal2Complete:M,semifinal1Fields:x?Object.keys(x):"not found",semifinal2Fields:y?Object.keys(y):"not found"}),N&&M){console.log("[DEBUG] Both semifinals completed, trying to create final match...");try{const{apiService:T}=await _(async()=>{const{apiService:A}=await Promise.resolve().then(()=>Y);return{apiService:A}},void 0);await T.tournaments.start(k),console.log("[DEBUG] Called tournament start to trigger final match creation");const P=await e(k),C=P.find(A=>A.round==="final");if(C)E=C.matchId,console.log("[DEBUG] Successfully created and found final match with ID:",E),window.globalBackendMatches=P;else throw new Error("Failed to create final match - backend issue")}catch(T){throw console.error("[DEBUG] Error triggering final match creation:",T),new Error("Final match not yet available - complete both semifinals first")}}else throw console.log("[DEBUG] Semifinals not completed yet:",{semifinal1:x!=null&&x.winner?"completed":"pending",semifinal2:y!=null&&y.winner?"completed":"pending"}),new Error("Final match not yet available - complete both semifinals first")}}catch(b){throw console.error("[DEBUG] Error fetching latest matches:",b),new Error("Final match not yet available - complete both semifinals first")}}else throw new Error(`No matchId found for match ${v}. Tournament backend integration failed.`);console.log("[DEBUG] Using backend matchId:",E);const I=document.getElementById("app");if(I){let k=document.getElementById("game-container-wrapper");k?k.innerHTML="":(k=document.createElement("div"),k.id="game-container-wrapper",k.className="game-container-wrapper",I.innerHTML="",I.appendChild(k)),window.currentTournamentMatch=!0,window.gamePageSuppressModal=!0,window.gamePageMode="tournament",window.localTournamentMatchId=E,window.localTournamentPlayers={playerA:u,playerB:p},v==="final"?window.tournamentGameSpeed="very-fast":window.tournamentGameSpeed="medium",console.log("[DEBUG] TournamentModal: Setting flags before game creation:",{gamePageMode:window.gamePageMode,suppressGamePageResultSubmission:!1,localTournamentMatchId:window.localTournamentMatchId,matchId:E}),_(async()=>{const{create1v1GamePage:b}=await Promise.resolve().then(()=>He);return{create1v1GamePage:b}},void 0).then(({create1v1GamePage:b})=>{const S=b(k,()=>{console.log("[DEBUG] TournamentModal onNavigateBack callback triggered"),setTimeout(()=>{if(S.game){const x=S.game.getPlayers().player1.score,y=S.game.getPlayers().player2.score;if(console.log("[DEBUG] DIRECT: Game scores detected:",{player1Score:x,player2Score:y,playerA:u,playerB:p}),x>=5||y>=5){const N=x>y?u:p;window.globalMatchResults||(window.globalMatchResults={}),window.globalMatchResults[v]=N,console.log("[DEBUG] DIRECT: Updated globalMatchResults:",window.globalMatchResults),(async()=>{try{const M=window.currentTournamentId,T=await fetch(`/api/tournaments/${M}/finish`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${sessionStorage.getItem("token")}`},body:JSON.stringify({matchId:E,userScore:x,opponentScore:y})});if(T.ok)console.log("[DEBUG] Tournament match result submitted to backend successfully");else throw new Error(`HTTP ${T.status}`)}catch(M){console.error("[DEBUG] Error submitting tournament result to backend:",M)}})(),v==="final"&&(console.log("🏆🏆🏆 TOURNAMENT CHAMPION: "+N+" 🏆🏆🏆"),setTimeout(()=>{const M=document.createElement("div");M.className="modal-overlay",M.style.cssText=`
                        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                        background: rgba(0,0,0,0.8); display: flex; align-items: center;
                        justify-content: center; z-index: 10000;
                      `,M.innerHTML=`
                        <div style="
                          background: linear-gradient(135deg, #FFD700, #FFA500);
                          padding: 40px; border-radius: 20px; text-align: center;
                          box-shadow: 0 0 30px rgba(255,215,0,0.5);
                          border: 3px solid #FFD700;
                        ">
                          <h1 style="color: #8B4513; font-size: 3em; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
                            🏆 TOURNAMENT CHAMPION! 🏆
                          </h1>
                          <h2 style="color: #8B4513; font-size: 2.5em; margin: 20px 0; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);">
                            ${N}
                          </h2>
                          <p style="color: #8B4513; font-size: 1.3em; margin: 20px 0;">
                            Congratulations on winning the tournament!
                          </p>
                          <button onclick="
                            this.parentElement.parentElement.remove();
                            // Close tournament modal if open
                            const tournamentModal = document.getElementById('tournament-bracket-modal');
                            if (tournamentModal) tournamentModal.remove();
                            // Navigate back to tournaments page
                            if (window.navigateTo) window.navigateTo('/tournament');
                            else window.location.hash = '/tournament';
                          " 
                                  style="
                                    background: #228B22; color: white; border: none;
                                    padding: 15px 30px; font-size: 1.2em; border-radius: 10px;
                                    cursor: pointer; margin-top: 20px;
                                    transition: all 0.3s ease;
                                  "
                                  onmouseover="this.style.background='#32CD32'"
                                  onmouseout="this.style.background='#228B22'">
                            🏠 Back to Tournaments �
                          </button>
                        </div>
                      `,document.body.appendChild(M)},1e3)),console.log("[DEBUG] DIRECT: Winner will be displayed when bracket is shown")}}},100),a()});setTimeout(()=>{S.setPlayerNames&&(S.setPlayerNames(u,p),console.log("[DEBUG] Player names set:",{playerA:u,playerB:p}))},50),setTimeout(()=>{S.game&&(console.log("[DEBUG] Setting matchId on game:",E),S.game.matchId=E,S.game.tournamentId=void 0,console.log("[DEBUG] Game object after setting IDs:",{matchId:S.game.matchId,tournamentId:S.game.tournamentId}))},100),S.game&&S.game.onGameEndCallback(async(x,y)=>{var N;try{const M=x.name,T=(N=S.game)==null?void 0:N.getPlayers(),P=(T==null?void 0:T.player1.score)||0,C=(T==null?void 0:T.player2.score)||0;console.log("[DEBUG] Local tournament match ended. Winner:",M,"Scores:",P,C);const{apiService:A}=await _(async()=>{const{apiService:D}=await Promise.resolve().then(()=>Y);return{apiService:D}},void 0),H=window.globalTournamentId;if(H?(await A.tournaments.finish(H,{matchId:E,player1Score:P,player2Score:C,winner:M}),console.log("[DEBUG] Match result submitted to backend via tournaments.finish")):console.error("[ERROR] No globalTournamentId found for result submission"),window.globalMatchResults||(window.globalMatchResults={}),window.globalMatchResults[v||"unknown"]=M,v==="1"){c[1]=M;const D=document.querySelector('.start-match-btn[data-match="1"]');D&&(D.disabled=!0,D.style.opacity="0.5",D.title="Match 1 is finished"),d()}else if(v==="2"){c[2]=M;const D=document.querySelector('.start-match-btn[data-match="2"]');D&&(D.disabled=!0,D.style.opacity="0.5",D.title="Match 2 is finished")}g(),console.log("[DEBUG] Bracket updated. Match winners:",c),window.dispatchEvent(new Event("reloadDashboardStats"))}catch(M){console.error("Error handling local tournament match result:",M),alert("Error saving match result. Please try again.")}}),setTimeout(()=>{delete window.currentTournamentMatch,delete window.gamePageSuppressModal,delete window.gamePageMode,delete window.localTournamentMatchId,delete window.localTournamentPlayers,delete window.suppressGamePageResultSubmission,delete window.tournamentGameSpeed},1e3)})}}catch(h){console.error("Error starting local tournament match:",h),console.error("Full error details:",h.message||h);const E=sessionStorage.getItem("token");if(console.log("[DEBUG] Auth token present:",!!E),!E){alert("Error: You must be logged in to play tournament matches. Please log in and try again.");return}const I=h.message||String(h);console.error("[DEBUG] Tournament match creation failed:",I),alert(`Error starting match: ${I}. Please make sure you are logged in and try again.`)}}if(!document.getElementById("tournament-bracket-styles")){const u=document.createElement("style");u.id="tournament-bracket-styles",u.textContent=`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      .tournament-container { font-family: 'Inter', sans-serif; background: none; max-width: 1000px; width: 100%; color: white; }
      .tournament-header { text-align: center; margin-bottom: 60px; }
      .tournament-title { font-size: 42px; font-weight: 700; background: linear-gradient(135deg, #00d4ff, #0ea5e9); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 10px; }
      .tournament-subtitle { font-size: 16px; color: rgba(255,255,255,0.6); font-weight: 500; }
      .bracket-container { display: flex; align-items: center; justify-content: center; gap: 100px; position: relative; min-height: 500px; }
      .semifinals-column { display: flex; flex-direction: column; gap: 60px; }
      .final-column { display: flex; align-items: center; }
      .match { background: rgba(30,41,59,0.9); border: 2px solid rgba(59,130,246,0.4); border-radius: 16px; backdrop-filter: blur(10px); transition: all 0.3s; overflow: hidden; width: 280px; animation: slideIn 0.7s ease-out forwards; opacity: 0; transform: translateY(40px); }
      .match:hover { border-color: rgba(0,212,255,0.7); transform: translateY(-3px); box-shadow: 0 15px 30px rgba(0,212,255,0.2); }
      .match-header { background: linear-gradient(135deg, rgba(59,130,246,0.8), rgba(147,51,234,0.8)); padding: 14px 20px; text-align: center; font-weight: 700; font-size: 13px; letter-spacing: 1.5px; text-transform: uppercase; }
      .match-players { padding: 24px; }
      .player { display: flex; align-items: center; justify-content: center; padding: 18px 20px; background: rgba(15,23,42,0.7); border: 2px solid rgba(71,85,105,0.4); border-radius: 12px; margin-bottom: 14px; font-weight: 600; font-size: 16px; transition: all 0.3s; cursor: pointer; min-height: 65px; position: relative; }
      .player:last-child { margin-bottom: 0; }
      .player:hover { background: rgba(59,130,246,0.15); border-color: rgba(59,130,246,0.6); transform: translateX(8px); }
      .player.winner { background: rgba(34,197,94,0.2); border-color: rgba(34,197,94,0.7); color: #10b981; transform: translateX(8px); }
      .player.winner::after { content: '✓'; position: absolute; right: 15px; font-size: 20px; color: #10b981; }
      .player.placeholder { color: rgba(255,255,255,0.4); font-style: italic; cursor: default; border-style: dashed; }
      .player.placeholder:hover { background: rgba(15,23,42,0.7); border-color: rgba(71,85,105,0.4); transform: none; }
      .vs-divider { text-align: center; font-weight: 700; color: rgba(147,51,234,0.9); font-size: 14px; margin: 12px 0; letter-spacing: 2px; }
      .match.final-match { border-color: rgba(255,215,0,0.7); background: rgba(30,41,59,0.95); width: 320px; }
      .match.final-match:hover { border-color: rgba(255,215,0,0.9); box-shadow: 0 15px 30px rgba(255,215,0,0.3); }
      .match.final-match .match-header { background: linear-gradient(135deg, rgba(255,215,0,0.9), rgba(245,158,11,0.9)); color: #1a1a2e; font-size: 14px; }
      .bracket-lines { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: -1; }
      .bracket-lines svg { width: 100%; height: 100%; }
      .connection-line { stroke: rgba(59,130,246,0.5); stroke-width: 3; fill: none; transition: all 0.3s; }
      .connection-line.active { stroke: rgba(0,212,255,0.9); stroke-width: 4; filter: drop-shadow(0 0 8px rgba(0,212,255,0.4)); }
      .controls { text-align: center; margin-top: 50px; display: flex; gap: 20px; justify-content: center; }
      .btn { padding: 14px 28px; border: none; border-radius: 12px; font-weight: 600; cursor: pointer; transition: all 0.3s; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; }
      .btn-primary { background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; }
      .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(59,130,246,0.3); }
      .btn-secondary { background: rgba(71,85,105,0.7); color: white; border: 2px solid rgba(148,163,184,0.4); }
      .btn-secondary:hover { background: rgba(71,85,105,0.9); transform: translateY(-2px); }
      @media (max-width: 768px) { .bracket-container { flex-direction: column; gap: 50px; } .tournament-title { font-size: 32px; } .match { width: 100%; max-width: 300px; } .match.final-match { width: 100%; max-width: 320px; } .bracket-lines { display: none; } .controls { flex-direction: column; align-items: center; gap: 15px; } }
      .match { animation: slideIn 0.7s ease-out forwards; opacity: 0; transform: translateY(40px); }
      .semifinals-column .match:nth-child(1) { animation-delay: 0.2s; }
      .semifinals-column .match:nth-child(2) { animation-delay: 0.4s; }
      .final-column .match { animation-delay: 0.6s; }
      @keyframes slideIn { to { opacity: 1; transform: translateY(0); } }
    `,document.head.appendChild(u)}const m=document.getElementById("app");if(m?(m.innerHTML="",m.appendChild(s)):document.body.appendChild(s),console.log("[DEBUG] Checking for stored winners:",window.globalMatchResults),window.globalMatchResults){const u=window.globalMatchResults;if(u[1]){const p=s.querySelector('[data-match="1"]');if(p){const v=document.createElement("div");v.className="match-winner",v.innerHTML=`<strong>🏆 Winner: ${u[1]}</strong>`,v.style.cssText="color: #4CAF50; font-weight: bold; text-align: center; margin-top: 10px; font-size: 1.1em;",p.appendChild(v);const h=s.querySelector('[data-from="match1"]');h&&(h.textContent=u[1],h.classList.remove("placeholder"),h.style.color="#4CAF50");const E=s.querySelector('.start-match-btn[data-match="2"]');E&&(E.disabled=!1,E.style.opacity="1",E.title="");const I=s.querySelector('.start-match-btn[data-match="1"]');I&&(I.disabled=!0,I.style.opacity="0.5",I.textContent="Match Complete",I.title="This match is already complete")}}if(u[2]){const p=s.querySelector('[data-match="2"]');if(p){const v=document.createElement("div");v.className="match-winner",v.innerHTML=`<strong>🏆 Winner: ${u[2]}</strong>`,v.style.cssText="color: #4CAF50; font-weight: bold; text-align: center; margin-top: 10px; font-size: 1.1em;",p.appendChild(v);const h=s.querySelector('[data-from="match2"]');h&&(h.textContent=u[2],h.classList.remove("placeholder"),h.style.color="#4CAF50");const E=s.querySelector('.start-match-btn[data-match="2"]');if(E&&(E.disabled=!0,E.style.opacity="0.5",E.textContent="Match Complete",E.title="This match is already complete"),u[1]&&u[2]){const I=s.querySelector('.start-match-btn[data-match="final"]');I&&(I.disabled=!1,I.style.opacity="1",I.title="")}}}if(u.final){const p=s.querySelector('[data-match="final"]');if(p){const v=document.createElement("div");v.className="tournament-champion",v.innerHTML=`<h2 style="color: #FFD700; text-align: center; margin-top: 20px;">🏆 CHAMPION: ${u.final} 🏆</h2>`,p.appendChild(v);const h=s.querySelector('.start-match-btn[data-match="final"]');h&&(h.disabled=!0,h.style.opacity="0.5",h.textContent="Tournament Complete",h.title="Tournament has ended - Champion crowned!")}}}let c={};function f(u,p){const v=u.getAttribute("data-player")||"";c[p]=v,g();const h=`line${p}`,E=document.getElementById(h);E&&(E.classList.add("active"),setTimeout(()=>{const I=document.getElementById(h);I&&I.classList.add("active")},100))}function g(){const u=s.querySelectorAll(".final-match .player");c[1]&&(u[0].textContent=c[1],u[0].classList.remove("placeholder"),u[0].setAttribute("data-player",c[1]),u[0].onclick=()=>f(u[0],"final")),c[2]&&(u[1].textContent=c[2],u[1].classList.remove("placeholder"),u[1].setAttribute("data-player",c[2]),u[1].onclick=()=>f(u[1],"final")),c.final&&setTimeout(()=>{w(c.final)},600)}function w(u){alert(`🏆🎉 TOURNAMENT CHAMPION 🎉🏆

${u.toUpperCase()}

Congratulations on your victory!

🥇 You are the ultimate champion! 🥇`)}}function Ge(){const t=document.createElement("div");t.className="friends-section";const e=document.createElement("h2");e.className="friends-title",e.textContent="FRIENDS LIST",t.appendChild(e);const a=document.createElement("div");a.className="add-friend-section";const n=document.createElement("input");n.type="text",n.placeholder="Search users by username...",n.className="search-friend-input";const s=document.createElement("button");s.className="primary-button",s.textContent="Search",a.appendChild(n),a.appendChild(s),t.appendChild(a);const o=document.createElement("div");o.className="search-results",t.appendChild(o),s.onclick=()=>{const b=n.value.trim();if(!b){o.innerHTML="<div class='search-empty'>Enter a username to search.</div>";return}o.innerHTML="Searching...",B.users.searchForFriends().then(S=>{var N;const y=(((N=S.data)==null?void 0:N.users)||[]).filter(M=>M.username.toLowerCase().includes(b.toLowerCase()));y.length===0?o.innerHTML="<div class='search-empty'>No users found.</div>":(o.innerHTML="",y.forEach(M=>{const T=document.createElement("div");T.className="search-user-card",T.innerHTML=`
            <span class='search-username'>${M.username}</span>
            <button class='primary-button'>Send Friend Request</button>
          `,T.querySelector(".primary-button").onclick=()=>{B.users.addFriends(parseInt(M.id)).then(P=>{var C;v(((C=P.data)==null?void 0:C.message)||"Request sent!"),w()})},o.appendChild(T)}))})};const i=document.createElement("div");i.className="friends-list",t.appendChild(i);const l=document.createElement("div");l.className="pending-requests-section";const d=document.createElement("h3");d.textContent="Friend Requests",l.appendChild(d);const r=document.createElement("div");r.className="pending-list",l.appendChild(r),t.appendChild(l);function m(){console.log("[🔄 FRIENDS STATUS] Starting loadFriends()..."),i.innerHTML="",B.users.getMyProfile().then(async b=>{var x,y,N,M,T;console.log("[📋 FRIENDS STATUS] getMyProfile response:",b);const S=((y=(x=b.data)==null?void 0:x.user)==null?void 0:y.friends)||[];if(console.log("[👥 FRIENDS STATUS] Raw friends data:",S),console.log("[📊 FRIENDS STATUS] Number of friends found:",S.length),S.length===0)console.log("[❌ FRIENDS STATUS] No friends found, showing empty message"),i.innerHTML="<div class='no-friends'>No friends yet. Start by adding some friends!</div>";else{const P=(M=(N=b.data)==null?void 0:N.user)==null?void 0:M.id;console.log("[🆔 FRIENDS STATUS] Current user ID:",P);let C=S;if(P){console.log("[🌐 FRIENDS STATUS] Making API call to /friends-status/"+P);try{const A=await B.users.currentStatus(P);console.log("[✅ FRIENDS STATUS] API call successful! Response:",A);const H=((T=A.data)==null?void 0:T.friends)||[];console.log("[📡 FRIENDS STATUS] Status friends from backend:",H),console.log("[📊 FRIENDS STATUS] Number of status friends:",H.length),C=S.map(D=>{const $=H.find(K=>K.id===D.id);return console.log(`[🔗 FRIENDS STATUS] Merging friend ${D.username} (ID: ${D.id}):`,{originalFriend:D,statusFriend:$,finalStatus:($==null?void 0:$.current_status)||"offline",lastSeen:$==null?void 0:$.last_seen}),{...D,current_status:($==null?void 0:$.current_status)||"offline",last_seen:$==null?void 0:$.last_seen}}),console.log("[🎯 FRIENDS STATUS] Final merged friends with status:",C)}catch(A){console.error("[❌ FRIENDS STATUS] Error fetching friend statuses:",A),console.error("[🔍 FRIENDS STATUS] Error details:",(A==null?void 0:A.message)||A)}}else console.log("[⚠️ FRIENDS STATUS] No current user ID, skipping status fetch");console.log("[🎨 FRIENDS STATUS] Starting UI rendering for",C.length,"friends"),C.forEach((A,H)=>{console.log(`[🖼️ FRIENDS STATUS] Rendering friend ${H+1}/${C.length}:`,A);const D=document.createElement("div");D.className="friend-card";const $=A.current_status==="online"?"status-online":"status-offline",K=A.current_status==="online"?"Online":"Offline";console.log(`[🎯 FRIENDS STATUS] Friend ${A.username} status: ${A.current_status} -> ${K} (class: ${$})`);let W="";if(A.current_status==="offline"&&A.last_seen){console.log(`[⏰ FRIENDS STATUS] Processing last_seen for ${A.username}:`,A.last_seen);const z=new Date(A.last_seen),V=new Date,he=V.getTime()-z.getTime(),te=Math.floor(he/(1e3*60)),re=Math.floor(te/60),ge=Math.floor(re/24);console.log(`[📊 FRIENDS STATUS] Time calculations for ${A.username}:`,{originalLastSeen:A.last_seen,parsedLastSeen:z.toISOString(),now:V.toISOString(),diffMs:he,diffMins:te,diffHours:re,diffDays:ge}),te<1?W="Just now":te<60?W=`${te}m ago`:re<24?W=`${re}h ago`:W=`${ge}d ago`,console.log(`[⏰ FRIENDS STATUS] Final lastSeenText for ${A.username}:`,W)}else console.log(`[⏰ FRIENDS STATUS] No last_seen processing for ${A.username} (status: ${A.current_status}, last_seen: ${A.last_seen})`);const ee=`
            <div class="friend-info">
              <div class="friend-avatar">
                <img src="/uploads/${A.avatar||"default.jpg"}" alt="${A.username}" class="friend-avatar-img" />
                <div class="status-indicator ${$}"></div>
              </div>
              <div class="friend-details">
                <span class="friend-username">${A.username}</span>
                <div class="friend-status-container">
                  <span class="friend-status ${$}">${K}</span>
                  ${W?`<span class="last-seen">${W}</span>`:""}
                </div>
              </div>
            </div>
            <button class="remove-friend-btn">Remove</button>
          `;console.log(`[🏗️ FRIENDS STATUS] Generated HTML for ${A.username}:`,ee),D.innerHTML=ee,console.log(`[🔗 FRIENDS STATUS] Adding event listener for remove button (friend ID: ${A.id})`),D.querySelector(".remove-friend-btn").onclick=()=>u(A.id),console.log("[📋 FRIENDS STATUS] Appending friend card to friendsList"),i.appendChild(D),console.log(`[✅ FRIENDS STATUS] Successfully rendered friend: ${A.username}`)}),console.log("[🎉 FRIENDS STATUS] Completed rendering all friends!")}})}const c=document.createElement("div");c.className="sent-requests-section";const f=document.createElement("h3");f.textContent="Sent Friend Requests",c.appendChild(f);const g=document.createElement("div");g.className="sent-list",c.appendChild(g),t.appendChild(c);function w(){r.innerHTML="",B.users.listRequests().then(b=>{var x,y,N,M;console.log("[hanieh debug] FULL pending requests API response:",b),console.log("[hanieh debug] typeof res.data:",typeof b.data),console.log("[hanieh debug] pendingRequests:",(x=b.data)==null?void 0:x.pendingRequests);let S=[];Array.isArray((y=b.data)==null?void 0:y.pendingRequests)?S=b.data.pendingRequests:Array.isArray((M=(N=b.data)==null?void 0:N.pendingRequests)==null?void 0:M.pendingRequests)&&(S=b.data.pendingRequests.pendingRequests),S.length>0?S.forEach(T=>{const P=document.createElement("div");P.className="pending-card",P.innerHTML=`
            <span>From: ${T.sender_username} (${T.sender_id})</span>
            <button class="accept-btn">Accept</button>
            <button class="reject-btn">Reject</button>
          `,P.querySelector(".accept-btn").onclick=()=>p(T.id,"accepted"),P.querySelector(".reject-btn").onclick=()=>p(T.id,"rejected"),r.appendChild(P)}):r.innerHTML="<div class='no-pending'>No friend requests.</div>"}),g.innerHTML="",B.users.listSentRequests().then(b=>{var x;const S=((x=b.data)==null?void 0:x.sentRequests)||[];S.length>0?S.forEach(y=>{const N=document.createElement("div");N.className="sent-card",N.innerHTML=`<span>To: ${y.receiver_username} (${y.receiver_id})</span> <span class='sent-status'>Pending</span>`,g.appendChild(N)}):g.innerHTML="<div class='no-sent'>No sent requests.</div>"})}function u(b){B.users.removeFriend(b).then(S=>{var x;v(((x=S.data)==null?void 0:x.message)||"Response sent!"),v("Friend removed successfully."),m()})}function p(b,S){B.users.sendRequestResponse(b,S).then(x=>{var y;v(((y=x.data)==null?void 0:y.message)||"Response sent!"),w(),m()})}function v(b){let S=document.querySelector(".custom-message-bar");S||(S=document.createElement("div"),S.className="custom-message-bar",document.body.appendChild(S)),S.textContent=b,S.style.display="block",setTimeout(()=>{S.style.display="none"},2500)}let h;function E(){h&&clearInterval(h),h=setInterval(()=>{console.log("[hanieh debug] Auto-refreshing friend statuses..."),m()},3e4)}function I(){h&&clearInterval(h)}const k=new MutationObserver(b=>{b.forEach(S=>{S.removedNodes.forEach(x=>{x===t&&(console.log("[hanieh debug] Friends section removed, stopping status refresh"),I())})})});return t.parentNode&&k.observe(t.parentNode,{childList:!0}),m(),w(),E(),t}class Se{constructor(e,a){R(this,"canvas");R(this,"ctx");R(this,"config");R(this,"player1");R(this,"player2");R(this,"ball");R(this,"gameState");R(this,"keys",{});R(this,"animationId",null);R(this,"onGameEnd");R(this,"onScoreUpdate");R(this,"powerUps",[]);R(this,"nextHitCurveFor",null);R(this,"extraBalls",[]);R(this,"matchId");R(this,"tournamentId");R(this,"aiGameState",null);R(this,"aiPersonality",{predictionAccuracy:.8,aggressiveness:.5,powerUpPriority:.3,reactionDelay:100,speedVariation:.9});R(this,"aiPredictionHistory",[]);R(this,"aiDifficulty","medium");this.canvas=e,this.ctx=e.getContext("2d"),this.config={canvasWidth:800,canvasHeight:400,paddleWidth:12,paddleHeight:80,ballSize:8,paddleSpeed:6,ballSpeed:4,maxScore:5,theme:"neon",powerUpsEnabled:!0,attacksEnabled:!1,powerUpTypes:["paddle_size","ball_speed"],...a},this.canvas.width=this.config.canvasWidth,this.canvas.height=this.config.canvasHeight,this.player1={id:"player1",name:"Player 1",score:0,y:this.config.canvasHeight/2-this.config.paddleHeight/2},this.player2={id:"player2",name:a&&a.gameMode==="ai"?"AI Opponent":"Player 2",score:0,y:this.config.canvasHeight/2-this.config.paddleHeight/2,isAI:!!(a&&a.gameMode==="ai")},this.ball={x:this.config.canvasWidth/2,y:this.config.canvasHeight/2,velocityX:this.config.ballSpeed*(Math.random()>.5?1:-1),velocityY:this.config.ballSpeed*(Math.random()>.5?1:-1),speed:this.config.ballSpeed,radius:this.config.ballSize},this.gameState={isPlaying:!1,isPaused:!1,isGameOver:!1,winner:null,startTime:0,elapsedTime:0},this.setupEventListeners(),this.render(),this.initializeAIPersonality()}startGame(){this.gameState.isPlaying=!0,this.gameState.isPaused=!1,this.gameState.isGameOver=!1,this.gameState.startTime=Date.now(),this.resetBall(),this.animationId=null,this.gameLoop()}pauseGame(){this.gameState.isPaused=!this.gameState.isPaused,this.gameState.isPaused||this.gameLoop()}resetGame(){this.gameState.isPlaying=!1,this.gameState.isPaused=!1,this.gameState.isGameOver=!1,this.gameState.winner=null,this.player1.score=0,this.player2.score=0,this.player1.temporaryPaddleBoostUntilMs=void 0,this.player2.temporaryPaddleBoostUntilMs=void 0,this.player1.temporaryPaddleSlowUntilMs=void 0,this.player2.temporaryPaddleSlowUntilMs=void 0,this.player1.temporaryPaddleShrinkUntilMs=void 0,this.player2.temporaryPaddleShrinkUntilMs=void 0,this.player1.temporaryReverseControlsUntilMs=void 0,this.player2.temporaryReverseControlsUntilMs=void 0,this.player1.temporaryShieldUntilMs=void 0,this.player2.temporaryShieldUntilMs=void 0,this.player1.temporaryMagnetUntilMs=void 0,this.player2.temporaryMagnetUntilMs=void 0,this.powerUps=[],this.nextHitCurveFor=null,this.extraBalls=[],this.resetBall(),this.resetPaddles(),this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null),this.render()}setPlayer2AI(e){this.player2.isAI=e}setPlayerNames(e,a){this.player1.name=e,this.player2.name=a,this.render()}onGameEndCallback(e){this.onGameEnd=e}onScoreUpdateCallback(e){this.onScoreUpdate=e}updateConfig(e){Object.assign(this.config,e),e.theme}getGameState(){return{...this.gameState}}getPlayers(){return{player1:{...this.player1},player2:{...this.player2}}}setupEventListeners(){document.addEventListener("keydown",e=>{const a=e.key.toLowerCase();this.keys[a]=!0,["arrowup","arrowdown","w","s"," "].includes(a)&&e.preventDefault(),a===" "&&(this.gameState.isPaused?this.resetGame():this.pauseGame()),a==="a"&&this.gameState.isPlaying&&this.config.powerUpsEnabled&&this.activateCollectedPowerUp("player1"),a==="t"&&this.gameState.isPlaying&&this.config.powerUpsEnabled&&this.activateCollectedPowerUp("player2"),a==="r"&&this.resetGame(),a==="x"&&this.addPowerUpToInventory("paddle_size_boost","player1"),a==="z"&&this.addPowerUpToInventory("ball_speed_fast","player2")}),document.addEventListener("keyup",e=>{this.keys[e.key.toLowerCase()]=!1})}gameLoop(){!this.gameState.isPlaying||this.gameState.isPaused||this.gameState.isGameOver||(this.update(),this.render(),this.animationId=requestAnimationFrame(()=>this.gameLoop()))}update(){this.gameState.elapsedTime=Date.now()-this.gameState.startTime,this.updatePaddles(),this.updateBall(),this.updatePowerUps(),this.updateExtraBalls(),this.checkScoring(),this.checkGameEnd()}getEffectivePaddleSpeed(e){let a=this.config.paddleSpeed;const n=Date.now();return e.temporaryPaddleSlowUntilMs&&n<e.temporaryPaddleSlowUntilMs&&(a*=.6),a}updatePaddles(){const e=this.getEffectivePaddleSpeed(this.player1),a=this.getEffectivePaddleSpeed(this.player2),n=this.player1.temporaryReverseControlsUntilMs&&Date.now()<this.player1.temporaryReverseControlsUntilMs;if(this.keys.w&&(this.player1.y-=n?-e:e),this.keys.s&&(this.player1.y+=n?-e:e),this.player2.isAI)this.updateAI(a),this.config.powerUpsEnabled&&this.handleAIPowerUps();else{const s=this.player2.temporaryReverseControlsUntilMs&&Date.now()<this.player2.temporaryReverseControlsUntilMs;this.keys.arrowup&&(this.player2.y-=s?-a:a),this.keys.arrowdown&&(this.player2.y+=s?-a:a)}this.clampPaddle(this.player1),this.clampPaddle(this.player2)}updateAI(e){const a=this.ball.y,n=this.player2.y+this.getPaddleHeight(this.player2)/2,s=a-n;Math.abs(s)>10&&(s>0?this.player2.y+=e:this.player2.y-=e)}predictBallTrajectory(e){let a=e.x,n=e.y,s=e.velocityX,o=e.velocityY,i=0,l=0;const d=1e3,r=this.config.canvasWidth-this.config.paddleWidth*2,m=1-this.aiPersonality.predictionAccuracy,c=(Math.random()-.5)*m*100;for(;a>r&&a<this.config.canvasWidth&&l<d&&(a+=s,n+=o,l++,(n<=0||n>=this.config.canvasHeight)&&(o=-o,n=Math.max(0,Math.min(n,this.config.canvasHeight)),i++),!(s<0)););return{x:a,y:n+c,timeToReach:l,willHitPaddle:a>=r&&a<=this.config.canvasWidth,bounces:i}}determineAIStrategy(e){const a=this.player2.score-this.player1.score,n=this.ball.velocityX>0;let s="balanced";if(a<-2?s="aggressive":a>2?s="defensive":n||(s="balanced"),this.config.canvasHeight/2,e.willHitPaddle&&n&&(e.y,s==="aggressive")){const o=this.getPaddleHeight(this.player2);(Math.random()-.5)*o*this.aiPersonality.aggressiveness}}clampPaddle(e){const a=this.getPaddleHeight(e);e.y=Math.max(0,Math.min(e.y,this.config.canvasHeight-a))}updateBall(){const e=this.player1.temporaryMagnetUntilMs&&Date.now()<this.player1.temporaryMagnetUntilMs,a=this.player2.temporaryMagnetUntilMs&&Date.now()<this.player2.temporaryMagnetUntilMs;if(e){const n=this.player1.y+this.getPaddleHeight(this.player1)/2,s=.3,o=n-this.ball.y;this.ball.velocityY+=o*s*.01}if(a){const n=this.player2.y+this.getPaddleHeight(this.player2)/2,s=.3,o=n-this.ball.y;this.ball.velocityY+=o*s*.01}this.ball.x+=this.ball.velocityX,this.ball.y+=this.ball.velocityY,(this.ball.y<=this.config.ballSize/2||this.ball.y>=this.config.canvasHeight-this.config.ballSize/2)&&(this.ball.velocityY=-this.ball.velocityY,this.ball.y=Math.max(this.config.ballSize/2,Math.min(this.ball.y,this.config.canvasHeight-this.config.ballSize/2))),this.checkPaddleCollision()}checkPaddleCollision(){const e=this.ball.x-this.config.ballSize/2,a=this.ball.x+this.config.ballSize/2,n=this.ball.y-this.config.ballSize/2,s=this.ball.y+this.config.ballSize/2,o=this.config.paddleWidth,i=this.player1.y,l=this.getPaddleHeight(this.player1),d=o+this.config.paddleWidth;e<=d&&a>=o&&s>=i&&n<=i+l&&this.ball.velocityX<0&&(this.player1.temporaryShieldUntilMs&&Date.now()<this.player1.temporaryShieldUntilMs?(this.ball.velocityX=-this.ball.velocityX*1.2,this.ball.velocityY*=1.1):this.ball.velocityX=-this.ball.velocityX,this.ball.x=d+this.config.ballSize/2,this.addSpin("player1"),this.ball.lastHitBy="player1");const r=this.config.canvasWidth-this.config.paddleWidth,m=r-this.config.paddleWidth,c=this.player2.y,f=this.getPaddleHeight(this.player2);e<=r&&a>=m&&s>=c&&n<=c+f&&this.ball.velocityX>0&&(this.player2.temporaryShieldUntilMs&&Date.now()<this.player2.temporaryShieldUntilMs?(this.ball.velocityX=-this.ball.velocityX*1.2,this.ball.velocityY*=1.1):this.ball.velocityX=-this.ball.velocityX,this.ball.x=m-this.config.ballSize/2,this.addSpin("player2"),this.ball.lastHitBy="player2")}addSpin(e){this.ball.velocityX*=1.05,this.ball.velocityY*=1.05;let n=(Math.random()-.5)*.5;this.nextHitCurveFor===e&&(n=(Math.random()-.5)*1.5,this.nextHitCurveFor=null),this.ball.velocityY+=n}checkScoring(){var e,a;this.ball.x<0?(this.player2.score++,(e=this.onScoreUpdate)==null||e.call(this,this.player1.score,this.player2.score),this.resetBall(1)):this.ball.x>this.config.canvasWidth&&(this.player1.score++,(a=this.onScoreUpdate)==null||a.call(this,this.player1.score,this.player2.score),this.resetBall(-1))}checkGameEnd(){var e;(this.player1.score>=this.config.maxScore||this.player2.score>=this.config.maxScore)&&(this.gameState.isGameOver=!0,this.gameState.isPlaying=!1,this.gameState.winner=this.player1.score>=this.config.maxScore?this.player1:this.player2,this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null),(e=this.onGameEnd)==null||e.call(this,this.gameState.winner,this.gameState.elapsedTime))}resetBall(e){this.ball.x=this.config.canvasWidth/2,this.ball.y=this.config.canvasHeight/2,this.ball.radius=this.config.ballSize;const a=e||(Math.random()>.5?1:-1);this.ball.velocityX=this.config.ballSpeed*a,this.ball.velocityY=this.config.ballSpeed*(Math.random()>.5?1:-1)}resetPaddles(){this.player1.y=this.config.canvasHeight/2-this.getPaddleHeight(this.player1)/2,this.player2.y=this.config.canvasHeight/2-this.getPaddleHeight(this.player2)/2}render(){this.ctx.fillStyle="#080820",this.ctx.fillRect(0,0,this.config.canvasWidth,this.config.canvasHeight),this.drawBackground(),this.drawCenterLine(),this.drawPaddle(this.config.paddleWidth,this.player1.y,this.player1),this.drawPaddle(this.config.canvasWidth-this.config.paddleWidth*2,this.player2.y,this.player2),this.drawBall(),this.drawExtraBalls(),this.drawScores(),this.drawGameStateMessages()}drawBackground(){const e=this.config.theme||"neon",a=Date.now()*.002;switch(this.ctx.fillStyle=this.getThemeBackgroundColor(e),this.ctx.fillRect(0,0,this.config.canvasWidth,this.config.canvasHeight),this.ctx.save(),e){case"retro":this.ctx.fillStyle="rgba(255, 140, 0, 0.2)",this.ctx.fillRect(0,0,this.config.canvasWidth,this.config.canvasHeight);for(let i=0;i<this.config.canvasWidth;i+=30)this.ctx.strokeStyle=`rgba(255, 165, 0, ${.5+.4*Math.sin(a+i)})`,this.ctx.lineWidth=4,this.ctx.beginPath(),this.ctx.moveTo(i,0),this.ctx.lineTo(i,this.config.canvasHeight),this.ctx.stroke();for(let i=0;i<this.config.canvasHeight;i+=30)this.ctx.strokeStyle=`rgba(255, 215, 0, ${.5+.4*Math.cos(a+i)})`,this.ctx.lineWidth=4,this.ctx.beginPath(),this.ctx.moveTo(0,i),this.ctx.lineTo(this.config.canvasWidth,i),this.ctx.stroke();break;case"dark":this.ctx.fillStyle="rgba(75, 0, 130, 0.4)",this.ctx.fillRect(0,0,this.config.canvasWidth,this.config.canvasHeight);const n=this.ctx.createRadialGradient(this.config.canvasWidth/2,this.config.canvasHeight/2,0,this.config.canvasWidth/2,this.config.canvasHeight/2,Math.max(this.config.canvasWidth,this.config.canvasHeight)/1.5);n.addColorStop(0,"rgba(138, 43, 226, 0.3)"),n.addColorStop(1,"rgba(25, 25, 112, 0.8)"),this.ctx.fillStyle=n,this.ctx.fillRect(0,0,this.config.canvasWidth,this.config.canvasHeight);break;case"space":this.ctx.fillStyle="rgba(30, 27, 75, 0.5)",this.ctx.fillRect(0,0,this.config.canvasWidth,this.config.canvasHeight);const s=this.ctx.createLinearGradient(0,0,this.config.canvasWidth,this.config.canvasHeight);s.addColorStop(0,"rgba(123, 104, 238, 0.4)"),s.addColorStop(.5,"rgba(72, 61, 139, 0.5)"),s.addColorStop(1,"rgba(25, 25, 112, 0.6)"),this.ctx.fillStyle=s,this.ctx.fillRect(0,0,this.config.canvasWidth,this.config.canvasHeight);for(let i=0;i<50;i++){const l=i*137%this.config.canvasWidth,d=i*211%this.config.canvasHeight,r=.5+.5*Math.sin(a+i);this.ctx.fillStyle=`rgba(255, 255, 255, ${r})`,this.ctx.fillRect(l,d,3,3)}break;case"classic":this.ctx.fillStyle="rgba(240, 248, 255, 0.95)",this.ctx.fillRect(0,0,this.config.canvasWidth,this.config.canvasHeight);const o=40;for(let i=0;i<this.config.canvasWidth;i+=o)for(let l=0;l<this.config.canvasHeight;l+=o)(Math.floor(i/o)+Math.floor(l/o))%2===0&&(this.ctx.fillStyle="rgba(200, 200, 200, 0.4)",this.ctx.fillRect(i,l,o,o));break;default:this.ctx.fillStyle="rgba(0, 255, 247, 0.15)",this.ctx.fillRect(0,0,this.config.canvasWidth,this.config.canvasHeight);for(let i=0;i<this.config.canvasWidth;i+=40)this.ctx.strokeStyle=`rgba(0, 255, 247, ${.4+.5*Math.sin(a+i)})`,this.ctx.lineWidth=4,this.ctx.beginPath(),this.ctx.moveTo(i,0),this.ctx.lineTo(i,this.config.canvasHeight),this.ctx.stroke();for(let i=0;i<this.config.canvasHeight;i+=40)this.ctx.strokeStyle=`rgba(255, 0, 234, ${.4+.5*Math.cos(a+i)})`,this.ctx.lineWidth=4,this.ctx.beginPath(),this.ctx.moveTo(0,i),this.ctx.lineTo(this.config.canvasWidth,i),this.ctx.stroke();break}this.ctx.restore()}getThemeBackgroundColor(e){switch(e){case"retro":return"#2d1810";case"dark":return"#0f0f23";case"space":return"#1e1b4b";case"classic":return"#f8f9fa";default:return"#080820"}}getThemeAccentColor(e){switch(e){case"retro":return"#ff8c00";case"dark":return"#9932cc";case"space":return"#7b68ee";case"classic":return"#696969";default:return"#00fff7"}}drawCenterLine(){const e=this.config.theme||"neon";this.ctx.strokeStyle=this.getThemeAccentColor(e),this.ctx.lineWidth=3,this.ctx.setLineDash([15,10]),this.ctx.beginPath(),this.ctx.moveTo(this.config.canvasWidth/2,0),this.ctx.lineTo(this.config.canvasWidth/2,this.config.canvasHeight),this.ctx.stroke(),this.ctx.setLineDash([])}drawPaddle(e,a,n){this.ctx.save(),this.ctx.shadowColor="#00fff7",this.ctx.shadowBlur=30;const s=this.getPaddleHeight(n),o=this.ctx.createLinearGradient(e,a,e+this.config.paddleWidth,a+s);o.addColorStop(0,"#00fff7"),o.addColorStop(.5,"#fff"),o.addColorStop(1,"#ff00ea"),this.ctx.fillStyle=o,this.ctx.fillRect(e,a,this.config.paddleWidth,s),this.ctx.globalAlpha=.3,this.ctx.fillStyle="#222",this.ctx.fillRect(e+2,a+2,this.config.paddleWidth-4,s-4),this.ctx.globalAlpha=1;const i=Date.now();n.temporaryPaddleBoostUntilMs&&i<n.temporaryPaddleBoostUntilMs&&(this.ctx.shadowColor="#00ff88",this.ctx.shadowBlur=20,this.ctx.strokeStyle="#00ff88",this.ctx.lineWidth=3,this.ctx.strokeRect(e-2,a-2,this.config.paddleWidth+4,s+4)),n.temporaryPaddleSlowUntilMs&&i<n.temporaryPaddleSlowUntilMs&&(this.ctx.shadowColor="#4444ff",this.ctx.shadowBlur=15,this.ctx.strokeStyle="#4444ff",this.ctx.lineWidth=2,this.ctx.strokeRect(e-1,a-1,this.config.paddleWidth+2,s+2)),n.temporaryShieldUntilMs&&i<n.temporaryShieldUntilMs&&(this.ctx.shadowColor="#00ffff",this.ctx.shadowBlur=25,this.ctx.strokeStyle="#00ffff",this.ctx.lineWidth=4,this.ctx.strokeRect(e-3,a-3,this.config.paddleWidth+6,s+6)),n.temporaryMagnetUntilMs&&i<n.temporaryMagnetUntilMs&&(this.ctx.shadowColor="#ffff00",this.ctx.shadowBlur=20,this.ctx.strokeStyle="#ffff00",this.ctx.lineWidth=3,this.ctx.strokeRect(e-2,a-2,this.config.paddleWidth+4,s+4)),this.ctx.restore()}getPaddleHeight(e){const a=this.config.paddleHeight,n=Date.now();let s=a;return e.temporaryPaddleBoostUntilMs&&n<e.temporaryPaddleBoostUntilMs&&(s*=1.5),e.temporaryPaddleShrinkUntilMs&&n<e.temporaryPaddleShrinkUntilMs&&(s*=.7),s}drawBall(){this.ctx.save(),this.ctx.shadowColor="#ff00ea",this.ctx.shadowBlur=25+10*Math.abs(Math.sin(Date.now()*.005));const e=this.ctx.createRadialGradient(this.ball.x,this.ball.y,0,this.ball.x,this.ball.y,this.config.ballSize);e.addColorStop(0,"#fff"),e.addColorStop(.4,"#ff00ea"),e.addColorStop(1,"#00fff7"),this.ctx.fillStyle=e,this.ctx.beginPath(),this.ctx.arc(this.ball.x,this.ball.y,this.config.ballSize,0,Math.PI*2),this.ctx.fill(),this.ctx.restore()}drawExtraBalls(){for(const e of this.extraBalls){this.ctx.save(),this.ctx.shadowColor="#ff8800",this.ctx.shadowBlur=15;const a=this.ctx.createRadialGradient(e.x,e.y,0,e.x,e.y,e.radius);a.addColorStop(0,"#ff8800"),a.addColorStop(.7,"#ff6600"),a.addColorStop(1,"#ff4400"),this.ctx.fillStyle=a,this.ctx.beginPath(),this.ctx.arc(e.x,e.y,e.radius,0,Math.PI*2),this.ctx.fill(),this.ctx.restore()}}updatePowerUps(){this.powerUps=this.powerUps.filter(e=>e.active)}initializeAIPersonality(){const e={easy:{speed:.3,accuracy:.4,reactionTime:300,aggressiveness:.2,powerUpPriority:.1,reactionDelay:300,predictionAccuracy:.4,speedVariation:.3},medium:{speed:.6,accuracy:.7,reactionTime:200,aggressiveness:.5,powerUpPriority:.3,reactionDelay:200,predictionAccuracy:.7,speedVariation:.2},hard:{speed:.9,accuracy:.9,reactionTime:100,aggressiveness:.8,powerUpPriority:.6,reactionDelay:100,predictionAccuracy:.9,speedVariation:.1}};this.aiPersonality=e[this.aiDifficulty]}setAIDifficulty(e){this.aiDifficulty=e,this.initializeAIPersonality()}activateCollectedPowerUp(e){}addPowerUpToInventory(e,a){}updateExtraBalls(){}handleAIPowerUps(){}drawScores(){if(!this.ctx)return;this.ctx.fillStyle="#00ffff",this.ctx.font="32px Arial",this.ctx.textAlign="center";const e=this.canvas.width/2,a=50;this.ctx.textAlign="right",this.ctx.fillText(`${this.player1.name}: ${this.player1.score}`,e-50,a),this.ctx.textAlign="left",this.ctx.fillText(`${this.player2.name}: ${this.player2.score}`,e+50,a),this.ctx.textAlign="center"}drawGameStateMessages(){!this.gameState.isPlaying&&!this.gameState.isGameOver&&(this.ctx.fillStyle="#ffffff",this.ctx.font="24px Arial",this.ctx.textAlign="center",this.ctx.fillText("Press SPACE to start",this.config.canvasWidth/2,this.config.canvasHeight/2)),this.gameState.isGameOver&&this.gameState.winner&&(this.ctx.fillStyle="#00ff00",this.ctx.font="32px Arial",this.ctx.textAlign="center",this.ctx.fillText(`${this.gameState.winner.name} Wins!`,this.config.canvasWidth/2,this.config.canvasHeight/2),this.ctx.font="18px Arial",this.ctx.fillText("Press R to restart",this.config.canvasWidth/2,this.config.canvasHeight/2+40))}destroy(){this.animationId&&cancelAnimationFrame(this.animationId)}}function ne(t,e){const n={...{ballSpeed:8,paddleSpeed:10,powerUpsEnabled:!1},...e},s=new Se(t,n);return s.setPlayer2AI(!1),s.setPlayerNames("Player 1","Player 2"),s}function Fe(t,e="medium",a){const o={...{...{easy:{ballSpeed:5,paddleSpeed:8,aiSpeed:.3},medium:{ballSpeed:8,paddleSpeed:10,aiSpeed:.6},hard:{ballSpeed:12,paddleSpeed:12,aiSpeed:.9}}[e],powerUpsEnabled:!1},...a},i=new Se(t,o);return i.setPlayer2AI(!0),i.setAIDifficulty(e),i.setPlayerNames("Player 1","AI Opponent"),i}class pe{constructor(e,a){R(this,"tournamentAliases",{});R(this,"container");R(this,"game",null);R(this,"gameCanvas",null);R(this,"gameMode","1v1");R(this,"isFullscreen",!1);R(this,"onNavigateBack");R(this,"suppressModal",!1);this.container=e,this.onNavigateBack=a}renderTournamentGame(){this.tournamentAliases={},this.gameMode="tournament",this.renderGameInterface(),window.requestAnimationFrame(()=>this.showTournamentAliasModal())}setPlayerNames(e,a){this.game&&this.game.setPlayerNames(e,a);const n=document.getElementById("player1-name"),s=document.getElementById("player2-name");n&&(n.textContent=e),s&&(s.textContent=a);const o=document.querySelector(".controls-info");o&&(o.innerHTML=`
        <strong>${e}:</strong> W/S<br>
        ${this.gameMode==="1v1"||this.gameMode==="tournament"?`<strong>${a}:</strong> Arrow Keys`:"<strong>AI:</strong> Automated"}
      `),console.log("[DEBUG] Player names updated in UI:",{player1Name:e,player2Name:a})}showTournamentAliasModal(){const e=document.getElementById("tournament-alias-modal"),a=document.getElementById("tournament-alias-input"),n=document.getElementById("submit-tournament-alias-btn"),s=document.getElementById("tournament-alias-error");e&&a&&n&&s&&(e.style.display="flex",a.value="",s.style.display="none",n.onclick=()=>{const o=a.value.trim();if(!o){s.textContent="You must enter an alias to play in this tournament!",s.style.display="block";return}const i="player1";this.tournamentAliases[i]=o,e.style.display="none",this.initializeGame()})}render1v1Game(){console.log("[DEBUG] render1v1Game called. gameMode:",this.gameMode,"currentTournamentMatch:",window.currentTournamentMatch,"suppressModal:",this.suppressModal),this.gameMode==="tournament"||this.suppressModal||window.currentTournamentMatch?(console.log("[DEBUG] Tournament match detected or suppressModal true, skipping modal and starting game directly"),this.gameMode="tournament",this.renderGameInterface(),window.requestAnimationFrame(()=>{var n;if(this.gameCanvas=document.getElementById("game-canvas"),!this.gameCanvas){console.error("[DEBUG] Tournament: Game canvas not found!");return}let e={};const a=window.tournamentGameSpeed;a==="very-fast"?(e={ballSpeed:8,paddleSpeed:10},console.log("[DEBUG] Final match: Using very fast speed settings")):a==="medium"&&(e={ballSpeed:5,paddleSpeed:7},console.log("[DEBUG] Semi-final match: Using medium speed settings")),this.gameCanvas&&(this.game=ne(this.gameCanvas,e)),this.game&&(this.game.matchId=0),this.game&&(this.game.tournamentId=this.getTournamentIdFromContext()),this.setupGameCallbacks(),console.log("[DEBUG] Tournament: Game started with matchId 0 and tournamentId",(n=this.game)==null?void 0:n.tournamentId)})):(this.gameMode="1v1",this.renderGameInterface(),console.log("[DEBUG] Showing opponent username modal for direct 1v1"),_(async()=>{const{showOpponentUsernameModal:e}=await import("./OpponentUsernameModal-BXJsOOJm.js");return{showOpponentUsernameModal:e}},[]).then(({showOpponentUsernameModal:e})=>{e(a=>{this.initializeGameWithOpponent(a)})}))}initializeGameWithOpponent(e){this.gameCanvas=document.getElementById("game-canvas"),this.gameCanvas&&_(async()=>{const{onevone:a}=await Promise.resolve().then(()=>Y);return{onevone:a}},void 0).then(({onevone:a})=>{a.start(e).then(n=>{const{data:s,error:o}=n;let i=document.getElementById("username-modal"),l=i?i.querySelector("#username-error"):null;if(o||!(s!=null&&s.matchId)){!i||!l?_(async()=>{const{showOpponentUsernameModal:c}=await import("./OpponentUsernameModal-BXJsOOJm.js");return{showOpponentUsernameModal:c}},[]).then(({showOpponentUsernameModal:c})=>{c(f=>{this.initializeGameWithOpponent(f)}),setTimeout(()=>{let f=document.getElementById("username-modal"),g=f?f.querySelector("#username-error"):null;g&&(g.textContent="Could not start 1v1 match: "+(o||"No matchId"),g.style.display="block")},100)}):(l.textContent="Could not start 1v1 match: "+(o||"No matchId"),l.style.display="block");return}i&&document.body.removeChild(i),l&&(l.style.display="none"),this.gameCanvas&&(this.game=ne(this.gameCanvas)),this.game&&(this.game.matchId=s.matchId),this.game&&(this.game.tournamentId=void 0);const d=window.currentUser,r=(d==null?void 0:d.username)||"Player 1",m=e;this.setPlayerNames(r,m),console.log("[DEBUG] 1v1 player names set:",{player1Name:r,player2Name:m}),this.setupGameCallbacks()})})}renderAIGame(e="medium"){this.gameMode="ai",this.renderGameInterface(),window.requestAnimationFrame(()=>this.initializeAIGame(e))}renderGameInterface(){this.container.innerHTML=`
      <div class="game-page">
        <!-- Game Header -->
        <div class="game-header">
          <div class="game-controls">
            <button id="back-btn" class="game-btn secondary">
              <i class="fas fa-arrow-left"></i>
              Back
            </button>
            <div class="game-info">
              <h2 class="game-title">
                ${this.gameMode==="1v1"?"1v1 Battle":this.gameMode==="tournament"?"Tournament":"AI Challenge"}
              </h2>
              <div class="game-status" id="game-status">Ready to Play</div>
            </div>
            <div style="display:flex; gap:.5rem;">
              <button id="fullscreen-btn" class="game-btn secondary">
                <i class="fas fa-expand"></i>
              </button>
            </div>
          </div>
        </div>

        ''

        <!-- Tournament alias modal -->
        <div id="tournament-alias-modal" class="modal" style="display:none;">
          <div class="modal-content">
            <h2>Enter your alias for this tournament</h2>
            <input type="text" id="tournament-alias-input" placeholder="Your alias" />
            <button id="submit-tournament-alias-btn" class="game-btn primary">Save Alias</button>
            <div id="tournament-alias-error" class="error-message" style="display:none;"></div>
          </div>
        </div>

        <!-- Game Container -->
        <div class="game-container" id="game-container">
          <div class="game-canvas-wrapper">
            <canvas id="game-canvas" class="game-canvas"></canvas>
            <!-- Game Overlay -->
            <div class="game-overlay" id="game-overlay">
              <div class="game-overlay-content">
                <div class="game-logo">
                  <i class="fas fa-gamepad"></i>
                </div>
                <h3>Ready to Play!</h3>
                <p class="controls-info">
                  <strong>Player 1:</strong> W/S<br>
                  ${this.gameMode==="1v1"?"<strong>Player 2:</strong> Arrow Keys":"<strong>AI:</strong> Automated"}
                </p>
                <button id="start-game-btn" class="game-btn primary">
                  <i class="fas fa-play"></i>
                  Start Game
                </button>
              </div>
            </div>
          </div>

          <!-- Game Stats -->
          <div class="game-stats" id="game-stats">
            <div class="stat-card">
              <div class="stat-label">Player 1</div>
              <div class="stat-value" id="player1-score">0</div>
              <div class="stat-name" id="player1-name">Player 1</div>
            </div>
            <div class="stat-card">
              <div class="stat-label">Player 2</div>
              <div class="stat-value" id="player2-score">0</div>
              <div class="stat-name" id="player2-name">Player 2</div>
            </div>
          </div>
                    <!-- Tournament alias modal -->
                    <div id="tournament-alias-modal" class="modal" style="display:none;">
                      <div class="modal-content">
                        <h2>Enter your alias for this tournament</h2>
                        <input type="text" id="tournament-alias-input" placeholder="Your alias" />
                        <button id="submit-tournament-alias-btn" class="game-btn primary">Save Alias</button>
                        <div id="tournament-alias-error" class="error-message" style="display:none;"></div>
                      </div>
                    </div>
    `,this.setupEventListeners()}initializeGame(){if(console.log("Initializing game..."),this.gameCanvas=document.getElementById("game-canvas"),console.log("Canvas found:",this.gameCanvas),!this.gameCanvas){console.error("Canvas not found!");return}let e={};if(this.gameMode==="tournament"){const a=this.getTournamentIdFromContext(),n=window.tournamentGameSpeed;n==="very-fast"?(e={ballSpeed:8,paddleSpeed:10},console.log("[DEBUG] Final match: Using very fast speed settings")):n==="medium"&&(e={ballSpeed:5,paddleSpeed:7},console.log("[DEBUG] Semi-final match: Using medium speed settings")),this.gameCanvas&&(this.game=ne(this.gameCanvas,e)),this.game&&(this.game.matchId=0),this.game&&(this.game.tournamentId=a),this.setupGameCallbacks(),console.log("[hanieh added] Tournament game created with tournamentId:",a);const s=document.getElementById("username-modal");s&&(s.style.display="none")}else if(this.gameMode==="1v1"){const a=document.getElementById("username-modal"),n=document.getElementById("opponent-username-input"),s=document.getElementById("submit-username-btn"),o=document.getElementById("username-error"),i=document.getElementById("close-username-modal");a&&n&&s&&o&&i&&(a.style.display="flex",n.value="",o.style.display="none",s.onclick=()=>{const l=n.value.trim();if(!l){o.textContent="You must enter a valid username for your opponent!",o.style.display="block";return}a.style.display="none",_(async()=>{const{onevone:d}=await Promise.resolve().then(()=>Y);return{onevone:d}},void 0).then(({onevone:d})=>{d.start(l).then(r=>{var g;const{data:m,error:c}=r;if(c){o.textContent="Could not start 1v1 match: "+c,o.style.display="block",a.style.display="flex";return}const f=m==null?void 0:m.matchId;if(!f){o.textContent="Could not start 1v1 game: No valid matchId from backend.",o.style.display="block",a.style.display="flex";return}if(this.gameCanvas){this.gameCanvas&&(this.game=ne(this.gameCanvas,e)),this.game&&(this.game.matchId=f),this.game&&(this.game.tournamentId=void 0);const w=window.currentUser,u=(w==null?void 0:w.username)||"Player 1",p=l;this.setPlayerNames(u,p),console.log("[DEBUG] 1v1 player names set (initializeGame):",{player1Name:u,player2Name:p}),this.setupGameCallbacks(),console.log("[hanieh added] 1v1 game created with matchId:",(g=this.game)==null?void 0:g.matchId)}else o.textContent="Game canvas not found.",o.style.display="block",a.style.display="flex"})})},i.onclick=()=>{a.style.display="none"})}else this.gameCanvas&&(this.game=ne(this.gameCanvas,e)),this.game&&(this.game.matchId=0),this.game&&(this.game.tournamentId=1),this.setupGameCallbacks(),console.log("Game created:",this.game)}initializeAIGame(e){if(this.gameCanvas=document.getElementById("game-canvas"),!this.gameCanvas)return;const n={};this.game=Fe(this.gameCanvas,e,n),this.game.matchId=Date.now(),this.game&&(this.game.tournamentId=1),this.setupGameCallbacks()}getTournamentIdFromContext(){return 1}setupGameCallbacks(){this.game&&(this.game.onScoreUpdateCallback((e,a)=>{this.updateScores(e,a)}),this.game.onGameEndCallback((e,a)=>{this.showGameEndModal(e,a),this.gameMode==="tournament"&&typeof this.onNavigateBack=="function"&&this.onNavigateBack()}))}openSettingsModal(){}setupEventListeners(){const e=document.getElementById("back-btn");e==null||e.addEventListener("click",()=>{this.cleanup(),this.onNavigateBack&&this.onNavigateBack()});const a=document.getElementById("fullscreen-btn");a==null||a.addEventListener("click",()=>{this.toggleFullscreen()});const n=document.getElementById("start-game-btn");n==null||n.addEventListener("click",()=>{this.startGame()});const s=document.getElementById("pause-btn");s==null||s.addEventListener("click",()=>{var i;(i=this.game)==null||i.pauseGame()});const o=document.getElementById("reset-btn");o==null||o.addEventListener("click",()=>{var i;(i=this.game)==null||i.resetGame(),this.hideGameEndModal(),this.showGameOverlay()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&(this.isFullscreen?this.exitFullscreen():(this.cleanup(),this.onNavigateBack&&this.onNavigateBack()))})}startGame(){if(console.log("Starting game...",this.game),!this.game){console.error("Game not initialized!");return}this.hideGameOverlay();const e=document.getElementById("game-overlay");e&&(e.style.display="none"),this.gameCanvas&&(this.gameCanvas.style.display="block",this.gameCanvas.width=800,this.gameCanvas.height=400),this.game.startGame(),this.updateGameStatus("Playing..."),console.log("Game started successfully")}updateScores(e,a){const n=document.getElementById("player1-score"),s=document.getElementById("player2-score");n&&(n.textContent=e.toString()),s&&(s.textContent=a.toString())}showGameEndModal(e,a){var m,c,f,g;const n=(m=this.game)==null?void 0:m.matchId,s=(c=this.game)==null?void 0:c.tournamentId,o=(f=this.game)==null?void 0:f.getPlayers().player1.score,i=(g=this.game)==null?void 0:g.getPlayers().player2.score;console.log("[DEBUG] Preparing to submit match result [UPDATED 16:38]:",{matchId:n,tournamentId:s,player1Score:o,player2Score:i,game:this.game,gameMode:this.gameMode,suppressSubmission:window.suppressGamePageResultSubmission,allWindowFlags:{currentTournamentMatch:window.currentTournamentMatch,gamePageSuppressModal:window.gamePageSuppressModal,gamePageMode:window.gamePageMode,localTournamentMatchId:window.localTournamentMatchId,suppressGamePageResultSubmission:window.suppressGamePageResultSubmission}});const l=window.suppressGamePageResultSubmission,d=this.gameMode==="tournament",r=window.localTournamentMatchId;if(l||d||r){console.log("[DEBUG] Result submission suppressed - handled externally",{suppressFlag:l,gameMode:this.gameMode,isTournament:d,hasTournamentMatchId:r}),window.tournamentResultHandler&&typeof n=="number"&&typeof o=="number"&&typeof i=="number"&&(console.log("[DEBUG] Calling tournament result handler"),window.tournamentResultHandler(n,o,i));return}if(typeof n=="number"&&typeof o=="number"&&typeof i=="number")if(this.gameMode==="1v1")_(async()=>{const{onevone:w}=await Promise.resolve().then(()=>Y);return{onevone:w}},void 0).then(({onevone:w})=>{w.submitResult(n,o,i).then(({data:u,error:p})=>{p?console.error("[hanieh added] Error sending 1v1 match result:",p):(console.log("[hanieh added] 1v1 match result sent to backend:",u),window.dispatchEvent(new Event("reloadDashboardStats")))}).catch(u=>{console.error("[hanieh added] Error sending 1v1 match result:",u)})});else if(this.gameMode==="ai")_(async()=>{const{ai:w}=await Promise.resolve().then(()=>Y);return{ai:w}},void 0).then(({ai:w})=>{w.submitResult(o,i).then(({data:u,error:p})=>{p?console.error("[hanieh added] Error sending AI match result:",p):(console.log("[hanieh added] AI match result sent to backend:",u),window.dispatchEvent(new Event("reloadDashboardStats")))}).catch(u=>{console.error("[hanieh added] Error sending AI match result:",u)})});else if(this.gameMode==="tournament"){const w=window.currentTournamentId||s;w?_(async()=>{const{apiService:u}=await Promise.resolve().then(()=>Y);return{apiService:u}},void 0).then(({apiService:u})=>{console.log("[DEBUG] Sending tournament match result:",{tournamentId:w,matchId:n,userScore:o,opponentScore:i}),u.tournaments.finish(w,{matchId:n,userScore:o,opponentScore:i}).then(({data:p,error:v})=>{v?console.error("[DEBUG] Error sending tournament match result:",v):(console.log("[DEBUG] Tournament match result sent successfully:",p),window.dispatchEvent(new Event("reloadDashboardStats")))}).catch(p=>{console.error("[DEBUG] Error sending tournament match result (catch):",p)})}):console.error("[DEBUG] No tournament ID found for tournament match")}else console.warn("[ADDED] Missing tournamentId for tournament match result",{matchId:n,tournamentId:s,player1Score:o,player2Score:i,game:this.game});else console.warn("[ADDED] Missing matchId or scores, cannot send match result to backend",{matchId:n,tournamentId:s,player1Score:o,player2Score:i,game:this.game})}hideGameEndModal(){}showGameOverlay(){const e=document.getElementById("game-overlay");e&&(e.style.display="flex"),this.updateGameStatus("Ready to Play")}hideGameOverlay(){const e=document.getElementById("game-overlay");e&&(e.style.display="none")}updateGameStatus(e){const a=document.getElementById("game-status");a&&(a.textContent=e)}toggleFullscreen(){const e=document.getElementById("game-container"),a=document.getElementById("fullscreen-btn");!e||!a||(this.isFullscreen?this.exitFullscreen():(e.requestFullscreen&&e.requestFullscreen(),this.isFullscreen=!0,a.innerHTML='<i class="fas fa-compress"></i>'))}exitFullscreen(){document.exitFullscreen&&document.exitFullscreen(),this.isFullscreen=!1;const e=document.getElementById("fullscreen-btn");e&&(e.innerHTML='<i class="fas fa-expand"></i>')}cleanup(){this.game&&(this.game.destroy(),this.game=null),this.isFullscreen&&this.exitFullscreen()}}function oe(t,e){const a=new pe(t,e);return console.log("[DEBUG] create1v1GamePage called. Flags:",{currentTournamentMatch:window.currentTournamentMatch,suppressModal:a.suppressModal,gameMode:a.gameMode,globalSuppressModal:window.gamePageSuppressModal,globalGameMode:window.gamePageMode}),window.currentTournamentMatch?(a.gameMode="tournament",a.suppressModal=!0,a.renderGameInterface(),window.requestAnimationFrame(()=>a.initializeGame()),a):a.gameMode==="tournament"||a.suppressModal?(a.gameMode="tournament",a.suppressModal=!0,a.renderGameInterface(),window.requestAnimationFrame(()=>a.initializeGame()),a):(a.suppressModal=!1,a.render1v1Game(),a)}function xe(t,e="medium",a){const n=new pe(t,a);return n.renderAIGame(e),n}const He=Object.freeze(Object.defineProperty({__proto__:null,GamePage:pe,create1v1GamePage:oe,createAIGamePage:xe},Symbol.toStringTag,{value:"Module"}));window.messageTimeout=null;let J=null;function ze(){const t=U.getTranslations(),e=document.querySelector('.navbar-link[href="/"]'),a=document.querySelector('.navbar-link[href="/tournament"]'),n=document.querySelector('.navbar-link[href="/ACCOUNT"], .navbar-link[href="/logout"]'),s=document.querySelector('.navbar-link[href="/profile"]');e&&(e.textContent=t.nav.home),a&&(a.textContent=t.nav.games),s&&(s.textContent=t.nav.profile),n&&(n.textContent=F?t.nav.logout:t.nav.account);const o=document.querySelector(".navbar-logo");o&&(o.textContent=t.common.neonPong);const i=document.querySelector(".font-size-controls .sr-only");i&&(i.textContent=t.fontControls.label);const l=document.querySelector(".font-size-btn i.fa-minus");if(l&&l.parentElement){const m=l.parentElement.querySelector(".sr-only");m&&(m.textContent=t.fontControls.decrease),l.parentElement.setAttribute("title",t.fontControls.decrease)}const d=document.querySelector(".font-size-btn i.fa-plus");if(d&&d.parentElement){const m=d.parentElement.querySelector(".sr-only");m&&(m.textContent=t.fontControls.increase),d.parentElement.setAttribute("title",t.fontControls.increase)}const r=document.getElementById("app");r&&ie(r)}function G(t){console.log("[Navigation] Starting navigation to:",t),Te(),setTimeout(()=>{console.log("[Navigation] Processing navigation to:",t),window.history.pushState({},"",t);const e=document.getElementById("app");e&&(console.log("[Navigation] Setting up routes for:",t),ie(e),document.title=Ce(t),console.log("[Navigation] Navigation completed for:",t)),j()},300)}function Ce(t){switch(t){case"/":return"Home - Neon Pong";case"/tournament":return"Games - Neon Pong";case"/register":return"Register - Neon Pong";case"/login":return"Login - Neon Pong";case"/profile":return"Profile - Neon Pong";case"/logout":return"Logged Out - Neon Pong";default:return"Page Not Found - Neon Pong"}}function Te(){let t=document.getElementById("loading-overlay");t||(t=Ae()),t.classList.remove("hidden")}function Ae(){const t=document.createElement("div");return t.id="loading-overlay",t.className="loading-overlay",t.innerHTML='<div class="spinner"></div>',document.body.appendChild(t),t}function j(){const t=document.getElementById("loading-overlay");t&&t.classList.add("hidden")}function L(t,e="info"){const a=document.querySelector(".message");a&&setTimeout(()=>a.remove(),300),window.messageTimeout&&clearTimeout(window.messageTimeout);const n=document.createElement("div");n.className=`message ${e}-message`;let s="";e==="success"?s="fas fa-check-circle":e==="error"?s="fas fa-exclamation-circle":s="fas fa-info-circle";const o=document.createElement("i");o.className=s;const i=document.createElement("div");i.className="message-content",i.textContent=t;const l=document.createElement("button");l.className="close-button",l.innerHTML="&times;",l.setAttribute("aria-label","Close message"),l.addEventListener("click",()=>{n.classList.add("removing"),setTimeout(()=>n.remove(),300),window.messageTimeout&&clearTimeout(window.messageTimeout)}),n.appendChild(o),n.appendChild(i),n.appendChild(l),n.setAttribute("role","status"),n.setAttribute("aria-live","polite"),n.setAttribute("aria-atomic","true"),document.body.appendChild(n),window.messageTimeout=window.setTimeout(()=>{n.classList.add("removing"),setTimeout(()=>n.remove(),300)},4e3)}let se=!1,X=.8,F=!1;window.isLoggedIn=F;function qe(){se=!se,document.body.classList.toggle("high-contrast",se),localStorage.setItem("highContrast",se.toString())}function ve(t){const s=Math.max(.8,Math.min(2,X+(t?.1:-.1)));if(s!==X){X=s,document.documentElement.style.setProperty("--font-size-multiplier",X.toString()),document.body.style.display="none",document.body.offsetHeight,document.body.style.display="";const o=document.querySelector(".font-size-display");if(o){const i=Math.round(X*100),l=`Font size set to ${i}%`;o.textContent=`${i}%`,localStorage.setItem("fontSizeMultiplier",X.toString()),o.classList.add("active"),setTimeout(()=>o.classList.remove("active"),500);const d=document.getElementById("a11y-announcement");d?(d.textContent=l,setTimeout(()=>d.textContent="",1e3)):L(l,"info")}}}function _e(){localStorage.getItem("highContrast")==="true"&&(se=!0,document.body.classList.add("high-contrast"));const e=parseFloat(localStorage.getItem("fontSizeMultiplier")||"0.8");e>=.8&&e<=1.5&&(X=e),document.documentElement.style.setProperty("--font-size-multiplier",X.toString())}typeof document<"u"&&document.addEventListener("DOMContentLoaded",_e);function ce(){const t=U.getTranslations(),e=document.querySelector('.navbar-link[href="/profile"]');let a=document.querySelector('.navbar-link[href="/ACCOUNT"]');a||(a=document.querySelector('.navbar-link[href="/logout"]')),e&&(e.style.display=F?"flex":"none"),a&&(a.textContent=F?t.nav.logout:t.nav.account,a.href=F?"/logout":"/ACCOUNT")}function ue(t,e,a){F=!0,J={id:a||Date.now(),username:t},window.isLoggedIn=F,window.currentUser=J,sessionStorage.setItem("isLoggedIn","true"),sessionStorage.setItem("currentUser",JSON.stringify(J)),e&&sessionStorage.setItem("token",e),ce(),L(`WELCOME BACK, ${t.toUpperCase()}!`,"success"),G("/profile")}function Ie(){ke(),F=!1,J=null,window.isLoggedIn=F,window.currentUser=J,sessionStorage.removeItem("isLoggedIn"),sessionStorage.removeItem("currentUser"),sessionStorage.removeItem("token"),ce(),L("Logged out successfully!","success"),G("/")}async function ke(){try{sessionStorage.getItem("token")&&(console.log("[🚪 LOGOUT] Calling logout API..."),await B.users.logout(),console.log("[✅ LOGOUT] Logout API call successful"))}catch(t){console.error("[❌ LOGOUT] Logout API call failed:",t)}}function We(){const t=sessionStorage.getItem("isLoggedIn"),e=sessionStorage.getItem("currentUser"),a=sessionStorage.getItem("token");t==="true"&&e&&a?(F=!0,J=JSON.parse(e),window.isLoggedIn=F,window.currentUser=J,ce()):t==="true"&&(!e||!a)&&(F=!1,J=null,window.isLoggedIn=F,window.currentUser=J,sessionStorage.removeItem("isLoggedIn"),sessionStorage.removeItem("currentUser"),sessionStorage.removeItem("token"))}function Ve(){console.log("[Google OAuth] Checking for token in URL hash..."),console.log("[Google OAuth] Current hash:",window.location.hash);const t=window.location.hash;if(t&&t.includes("token=")){const e=t.match(/token=([^&]+)/);if(e){const a=decodeURIComponent(e[1]);try{const n=JSON.parse(atob(a.split(".")[1]));n.id&&n.username&&(ue(n.username,a,n.id),window.location.hash="",L("Google Sign-In successful!","success"))}catch(n){console.error("Error processing Google OAuth token:",n),L("Error processing Google Sign-In. Please try again.","error"),window.location.hash=""}}}}function je(){const t=U.getTranslations(),e=document.createElement("nav");e.className="navbar",e.setAttribute("aria-label","Main navigation");const a=document.createElement("a");a.className="navbar-logo",a.textContent=t.common.neonPong,a.href="/",a.addEventListener("click",y=>{y.preventDefault(),G("/")});const n=document.createElement("div");n.id="mobile-menu",n.className="menu-toggle",n.setAttribute("aria-expanded","false"),n.setAttribute("aria-controls","navbarLinksContainer");for(let y=0;y<3;y++){const N=document.createElement("span");N.className="bar",n.appendChild(N)}const s=document.createElement("div");s.id="navbarLinksContainer",s.className="navbar-links-container";const o=document.createElement("div");o.className="navbar-links",o.setAttribute("role","menubar");const i=document.createElement("a");i.href="/",i.className="navbar-link",i.textContent=t.nav.home,i.setAttribute("role","menuitem"),i.addEventListener("click",y=>{y.preventDefault(),G("/")});const l=document.createElement("a");l.href="/tournament",l.className="navbar-link",l.textContent=t.nav.games,l.setAttribute("role","menuitem"),l.addEventListener("click",y=>{y.preventDefault(),G("/tournament")});const d=document.createElement("a");d.href="/ACCOUNT",d.className="navbar-link",d.textContent=t.nav.account,d.setAttribute("role","menuitem"),d.addEventListener("click",y=>{if(y.preventDefault(),F)Ie();else{const N=window.location.pathname;G((N==="/login"||N==="/register")&&N==="/login"?"/register":"/login")}}),o.appendChild(i),o.appendChild(l),o.appendChild(d);const r=document.createElement("a");r.href="/profile",r.className="navbar-link",r.textContent=t.nav.profile,r.setAttribute("role","menuitem"),r.style.display="none",r.addEventListener("click",y=>{y.preventDefault(),G("/profile")}),o.appendChild(r);const m=document.createElement("div");m.className="language-selector",m.setAttribute("aria-label","Language selection");const c=document.createElement("button");c.className="language-btn",c.innerHTML='🌐 <span class="language-text">EN</span> <i class="fas fa-chevron-down" aria-hidden="true"></i>',c.setAttribute("aria-label","Select language"),c.setAttribute("aria-expanded","false");const f=document.createElement("div");f.className="language-dropdown",f.setAttribute("role","menu");const g=[{code:"en",name:"English",flag:"🇺🇸"},{code:"fr",name:"Français",flag:"🇫🇷"},{code:"es",name:"Español",flag:"🇪🇸"}];g.forEach(y=>{const N=document.createElement("button");N.className="language-option",N.innerHTML=`${y.flag} ${y.name}`,N.setAttribute("role","menuitem"),N.dataset.lang=y.code,N.addEventListener("click",()=>{const M=U.getCurrentLanguage();if(y.code===M){f.style.display="none",c.setAttribute("aria-expanded","false");return}U.setLanguageWithConfirmation(y.code),f.style.display="none",c.setAttribute("aria-expanded","false")}),f.appendChild(N)}),c.addEventListener("click",()=>{const y=f.style.display==="block";f.style.display=y?"none":"block",c.setAttribute("aria-expanded",(!y).toString())}),document.addEventListener("click",y=>{m.contains(y.target)||(f.style.display="none",c.setAttribute("aria-expanded","false"))}),m.appendChild(c),m.appendChild(f),U.addListener(()=>{const y=U.getCurrentLanguage();g.find(M=>M.code===y)&&(c.innerHTML=`🌐 <span class="language-text">${y.toUpperCase()}</span> <i class="fas fa-chevron-down" aria-hidden="true"></i>`),ze()});const w=U.getCurrentLanguage();g.find(y=>y.code===w)&&(c.innerHTML=`🌐 <span class="language-text">${w.toUpperCase()}</span> <i class="fas fa-chevron-down" aria-hidden="true"></i>`);const p=document.createElement("div");p.className="accessibility-controls",p.setAttribute("aria-label","Accessibility controls");const v=document.createElement("button");v.className="accessibility-btn",v.innerHTML='<i class="fas fa-adjust" aria-hidden="true"></i>',v.setAttribute("aria-label","Toggle high contrast mode"),v.setAttribute("title","Toggle high contrast mode"),v.addEventListener("click",qe);const h=document.createElement("div");h.className="font-size-controls",h.setAttribute("aria-label","Font size controls");const E=document.createElement("span");E.className="sr-only",E.textContent=t.fontControls.label,h.appendChild(E);const I=document.createElement("button");I.className="font-size-btn",I.innerHTML=`<i class="fas fa-minus" aria-hidden="true"></i> <span class="sr-only">${t.fontControls.decrease}</span>`,I.setAttribute("aria-label",t.fontControls.decrease),I.setAttribute("title",t.fontControls.decrease),I.addEventListener("click",y=>{y.preventDefault(),ve(!1)});const k=document.createElement("span");k.className="font-size-display",k.textContent="A",k.setAttribute("aria-hidden","true");const b=document.createElement("button");b.className="font-size-btn",b.innerHTML=`<i class="fas fa-plus" aria-hidden="true"></i> <span class="sr-only">${t.fontControls.increase}</span>`,b.setAttribute("aria-label",t.fontControls.increase),b.setAttribute("title",t.fontControls.increase),b.addEventListener("click",y=>{y.preventDefault(),ve(!0)}),h.appendChild(I),h.appendChild(k),h.appendChild(b);const S=document.createElement("a");S.href="#main-content",S.className="skip-to-content",S.textContent="Skip to main content",S.setAttribute("tabindex","0");const x=document.createElement("div");return x.className="controls-container",x.appendChild(m),x.appendChild(h),x.appendChild(v),p.appendChild(x),s.appendChild(o),s.appendChild(p),e.prepend(S),e.appendChild(a),e.appendChild(n),e.appendChild(s),n.addEventListener("click",()=>{s.classList.toggle("active"),n.classList.toggle("active");const y=n.classList.contains("active");n.setAttribute("aria-expanded",String(y))}),o.querySelectorAll(".navbar-link").forEach(y=>{y.addEventListener("click",()=>{window.innerWidth<=768&&(s.classList.remove("active"),n.classList.remove("active"),n.setAttribute("aria-expanded","false"))})}),document.addEventListener("click",y=>{window.innerWidth<=768&&!s.contains(y.target)&&!n.contains(y.target)&&s.classList.contains("active")&&(s.classList.remove("active"),n.classList.remove("active"),n.setAttribute("aria-expanded","false"))}),e}function de(){return document.createElement("footer")}function ye(){const t=U.getTranslations(),e=document.createElement("div");e.className="page",e.setAttribute("role","main"),e.id="home";const a=document.createElement("section");a.className="hero-section content-section";const n=document.createElement("img");n.className="ping-pong-paddle";const s=document.createElement("h1");s.className="hero-title",s.textContent=t.home.title;const o=document.createElement("h2");o.className="hero-subtitle",o.textContent=t.home.tagline;const i=document.createElement("p");i.className="hero-description",i.textContent=t.home.description;const l=document.createElement("div");l.className="hero-cta";const d=document.createElement("button");d.className="primary-button register-cta-button",d.innerHTML=`<i class="fas fa-user-plus"></i> ${t.home.registerNow}`,d.addEventListener("click",()=>G("/register")),l.appendChild(d),a.appendChild(n),a.appendChild(s),a.appendChild(o),a.appendChild(i),a.appendChild(l),e.appendChild(a);const r=document.createElement("section");r.id="team",r.className="content-section";const m=document.createElement("h2");m.className="section-title",m.textContent=t.home.meetTheTeam,r.appendChild(m);const c=document.createElement("div");return c.className="team-grid",[{name:"Hanieh",avatar:"/pic1.png"},{name:"Mira",avatar:"/pic2.png"},{name:"Fatima Fidha",avatar:"/pic3.png"}].forEach(g=>{const w=document.createElement("div");w.className="team-member-card";const u=document.createElement("img");u.src=g.avatar,u.alt=`Avatar of ${g.name}`,u.className="team-member-avatar";const p=document.createElement("p");p.className="team-member-name",p.textContent=g.name,w.appendChild(u),w.appendChild(p),c.appendChild(w)}),r.appendChild(c),e.appendChild(r),e.appendChild(de()),e}function Ye(){const t=U.getTranslations(),e=document.createElement("div");e.className="page content-section",e.id="games-page",e.setAttribute("role","main");const a=document.createElement("div");a.className="games-hero-section",a.innerHTML=`
    <div class="hero-background-effects">
      <div class="floating-orb orb-1"></div>
      <div class="floating-orb orb-2"></div>
      <div class="floating-orb orb-3"></div>
      <div class="grid-overlay"></div>
    </div>
    
    <div class="games-hero-content">
      <div class="hero-icon">
        <div class="icon-glow"></div>
        <i class="fas fa-gamepad"></i>
      </div>
      
      <h1 class="games-hero-title">
        <span class="title-main">${t.games.title}</span>
        <span class="title-sub">${t.games.subtitle}</span>
      </h1>
      
      <div class="games-stats-bar">
        <div class="stat-item">
          <span class="stat-number">1,247</span>
          <span class="stat-label">${t.games.stats.activePlayers}</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-number">89</span>
          <span class="stat-label">${t.games.stats.ongoingMatches}</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-number">12</span>
          <span class="stat-label">${t.games.stats.tournaments}</span>
        </div>
      </div>
    </div>
  `;const n=document.createElement("div");if(n.className="game-modes-section",F&&J){let s=function(){var m;const r=document.createElement("div");r.className="ai-difficulty-modal",r.innerHTML=`
        <div class="modal-content">
          <div class="modal-header">
            <h3>🤖 Choose AI Difficulty</h3>
            <p>Select the challenge level for your AI opponent</p>
          </div>
          <div class="difficulty-options">
            <button class="difficulty-btn easy" data-difficulty="easy">
              <div class="difficulty-icon">🟢</div>
              <div class="difficulty-info">
                <h4>Easy</h4>
                <p>Perfect for beginners</p>
                <small>Slower reactions, more mistakes</small>
              </div>
            </button>
            <button class="difficulty-btn medium" data-difficulty="medium">
              <div class="difficulty-icon">🟡</div>
              <div class="difficulty-info">
                <h4>Medium</h4>
                <p>Balanced challenge</p>
                <small>Moderate skill level</small>
              </div>
            </button>
            <button class="difficulty-btn hard" data-difficulty="hard">
              <div class="difficulty-icon">🔴</div>
              <div class="difficulty-info">
                <h4>Hard</h4>
                <p>Expert level</p>
                <small>Fast reactions, strategic play</small>
              </div>
            </button>
          </div>
          <div class="modal-actions">
            <button class="cancel-btn" id="cancel-ai-btn">Cancel</button>
          </div>
        </div>
      `,document.body.appendChild(r),r.querySelectorAll(".difficulty-btn").forEach(c=>{c.addEventListener("click",f=>{const g=f.currentTarget.dataset.difficulty;o(g),document.body.removeChild(r)})}),(m=r.querySelector("#cancel-ai-btn"))==null||m.addEventListener("click",()=>{document.body.removeChild(r)})},o=function(r){const m=document.getElementById("app");if(m){let c=document.getElementById("game-container-wrapper");c?c.innerHTML="":(c=document.createElement("div"),c.id="game-container-wrapper",c.className="game-container-wrapper",m.innerHTML="",m.appendChild(c)),xe(c,r,()=>{G("/tournament")}),L(`🤖 Starting AI Challenge (${r})...`,"info")}};n.innerHTML=`
      <div class="game-modes-header">

      </div>
      <div class="game-modes-container">
        <!-- 1v1 Battle Mode -->
        <div class="game-mode-card onevsone">
          <div class="card-background">
            <div class="card-glow"></div>
            <div class="card-particles"></div>
          </div>
          
          <div class="mode-header">
            <div class="mode-icon">
              <div class="icon-rings">
                <div class="ring ring-1"></div>
                <div class="ring ring-2"></div>
              </div>
              <i class="fas fa-bolt"></i>
            </div>
            <div class="mode-title">
              <h2>${t.games.oneVsOne.title}</h2>
              <p>${t.games.oneVsOne.subtitle}</p>
            </div>
          </div>
          
          <div class="mode-content">
            <p class="mode-description">${t.games.oneVsOne.description}</p>
            
            <div class="mode-features">
              <div class="feature-item">
                <i class="fas fa-zap"></i>
                <span>${t.games.oneVsOne.features.instant}</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-chart-line"></i>
                <span>${t.games.oneVsOne.features.ranked}</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-balance-scale"></i>
                <span>${t.games.oneVsOne.features.skill}</span>
              </div>
            </div>
            
            <div class="mode-actions">
              <button class="premium-game-btn" id="play-1v1-btn">
                <span class="btn-bg"></span>
                <span class="btn-content">
                  <i class="fas fa-bolt"></i>
                  ${t.games.oneVsOne.playNow}
                </span>
              </button>
            </div>
          </div>
        </div>
        
        <!-- AI Challenge Mode -->
        <div class="game-mode-card ai">
          <div class="card-background">
            <div class="card-glow"></div>
            <div class="card-particles"></div>
          </div>
          
          <div class="mode-header">
            <div class="mode-icon">
              <div class="icon-rings">
                <div class="ring ring-1"></div>
                <div class="ring ring-2"></div>
                <div class="ring ring-3"></div>
              </div>
              <i class="fas fa-robot"></i>
            </div>
            <div class="mode-title">
              <h2>${t.games.ai.title}</h2>
              <p>${t.games.ai.subtitle}</p>
            </div>
          </div>
          
          <div class="mode-content">
            <p class="mode-description">${t.games.ai.description}</p>
            
            <div class="mode-features">
              <div class="feature-item">
                <i class="fas fa-brain"></i>
                <span>${t.games.ai.features.adaptive}</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-dumbbell"></i>
                <span>${t.games.ai.features.practice}</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-trophy"></i>
                <span>${t.games.ai.features.skills}</span>
              </div>
            </div>
            
            <div class="mode-actions">
              <button class="premium-game-btn" id="play-ai-btn">
                <span class="btn-bg"></span>
                <span class="btn-content">
                  <i class="fas fa-robot"></i>
                  ${t.games.ai.playNow}
                </span>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Tournament Mode -->
        <div class="game-mode-card tournament">
          <div class="card-background">
            <div class="card-glow"></div>
            <div class="card-particles"></div>
          </div>
          
          <div class="mode-header">
            <div class="mode-icon">
              <div class="icon-rings">
                <div class="ring ring-1"></div>
                <div class="ring ring-2"></div>
                <div class="ring ring-3"></div>
              </div>
              <i class="fas fa-crown"></i>
            </div>
            <div class="mode-title">
              <h2>${t.games.tournaments.title}</h2>
              <p>${t.games.tournaments.subtitle}</p>
            </div>
          </div>
          
          <div class="mode-content">
            <p class="mode-description">${t.games.tournaments.description}</p>
            
            <div class="mode-features">
              <div class="feature-item">
                <i class="fas fa-chess"></i>
                <span>${t.games.tournaments.features.strategic}</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-medal"></i>
                <span>${t.games.tournaments.features.prestige}</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-fire"></i>
                <span>${t.games.tournaments.features.competition}</span>
              </div>
            </div>
            
            <div class="mode-actions">
              <button class="premium-game-btn" id="create-tournament-btn">
                <span class="btn-bg"></span>
                <span class="btn-content">
                  <i class="fas fa-crown"></i>
                  ${t.games.tournaments.createTournament}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;const i=n.querySelector("#play-1v1-btn"),l=n.querySelector("#play-ai-btn"),d=n.querySelector("#create-tournament-btn");l?(console.log("AI Button found and adding event listener"),l.addEventListener("click",()=>{console.log("AI Challenge button clicked!"),s()})):console.error("AI Button not found!"),i==null||i.addEventListener("click",()=>{const r=document.getElementById("app");if(r){let m=document.getElementById("game-container-wrapper");m?m.innerHTML="":(m=document.createElement("div"),m.id="game-container-wrapper",m.className="game-container-wrapper",r.innerHTML="",r.appendChild(m)),oe(m,()=>{G("/tournament")}),L("🎮 Starting 1v1 match...","info")}}),d==null||d.addEventListener("click",async()=>{Ee()})}else n.innerHTML=`
      <div class="login-required-section">
        <div class="login-card">
          <div class="card-glow"></div>
          <div class="login-icon">
            <i class="fas fa-lock"></i>
          </div>
          <h2>${t.games.loginRequired.title}</h2>
          <p>${t.games.loginRequired.description}</p>
          <button class="login-access-btn" onclick="navigateTo('/ACCOUNT')">
            <span class="btn-glow"></span>
            <span class="btn-content">
              <i class="fas fa-key"></i>
              ${t.games.loginRequired.button}
            </span>
          </button>
        </div>
      </div>
    `;return e.appendChild(a),e.appendChild(n),e.appendChild(de()),j(),e}function me(t=!0){const e=U.getTranslations(),a=document.createElement("div");a.className="page content-section",a.id=t?"login":"register",a.setAttribute("role","main");const n=document.createElement("div");n.className="form-container";const s=document.createElement("p");s.className="text-center mt-4";const o=document.createElement("a");o.href="#",o.className="text-blue-500 hover:underline",o.textContent=t?e.auth.login.createAccount:e.auth.register.signIn,o.addEventListener("click",k=>{k.preventDefault(),G(t?"/register":"/login")});const i=document.createElement("div");i.className="toggle-text-container";const l=document.createElement("span");l.className="toggle-text",l.textContent=t?e.auth.login.noAccount:e.auth.register.hasAccount,o.className="toggle-link neon-text",o.style.marginLeft="4px",o.style.textDecoration="none",o.style.transition="all 0.3s ease",o.style.fontWeight="600",o.addEventListener("mouseenter",()=>{o.style.textShadow="0 0 10px rgba(99, 102, 241, 0.8)"}),o.addEventListener("mouseleave",()=>{o.style.textShadow="none"}),i.appendChild(l),i.appendChild(o),s.appendChild(i);const d=document.createElement("h2");d.className="form-title",d.textContent=t?e.auth.login.title:e.auth.register.title;const r=document.createElement("form");r.noValidate=!0;let m=null;if(!t){const k=document.createElement("label");k.className="form-label",k.textContent=e.auth.register.email,m=document.createElement("input"),m.type="email",m.className="form-input",m.required=!0,m.placeholder="Enter your email",r.appendChild(k),r.appendChild(m)}const c=document.createElement("label");c.className="form-label",c.textContent=t?e.auth.login.username:e.auth.register.username;const f=document.createElement("input");f.type="text",f.className="form-input",f.required=!0,f.placeholder="Write your username";const g=document.createElement("label");g.className="form-label",g.textContent=t?e.auth.login.password:e.auth.register.password;const w=document.createElement("input");w.type="password",w.className="form-input",w.required=!0,w.placeholder="Enter your password";let u=null,p=null;t||(p=document.createElement("label"),p.className="form-label",p.textContent=e.auth.register.confirmPassword,u=document.createElement("input"),u.type="password",u.className="form-input",u.required=!0,u.placeholder="Confirm your password");const v=document.createElement("button");v.type="submit",v.className="primary-button w-full",v.textContent=t?e.auth.login.button:e.auth.register.button;const h=document.createElement("button");h.type="button",h.className="secondary-button w-full mt-2",h.textContent=t?e.auth.login.backToHome:e.auth.register.backToHome,h.addEventListener("click",()=>G("/")),t||r.appendChild(document.createElement("br")),r.appendChild(c),r.appendChild(f),r.appendChild(document.createElement("br")),r.appendChild(g),r.appendChild(w),!t&&u&&p&&(r.appendChild(document.createElement("br")),r.appendChild(p),r.appendChild(u)),t&&r.appendChild(document.createElement("br"));const E=document.createElement("button");E.type="button",E.className="google-signin-button",E.innerHTML=`
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
    Sign in with Google
  `,E.addEventListener("click",()=>{window.location.href="/auth/google"});const I=document.createElement("div");return I.className="auth-divider",I.innerHTML="<span>or</span>",r.appendChild(v),r.appendChild(I),r.appendChild(E),r.appendChild(h),n.appendChild(d),n.appendChild(r),n.appendChild(s),a.appendChild(n),a.appendChild(de()),r.addEventListener("submit",async k=>{if(k.preventDefault(),!t&&w.value!==(u==null?void 0:u.value)){L("Passwords do not match","error");return}Te();try{if(t)if(f.value.trim()&&w.value.trim()){const b=f.value.trim(),S=w.value,x=await B.users.login(b,S);if(x.error||!x.data)L(x.error||"Login failed","error");else{const y=x.data;ue(y.username||b,y.token,y.userId),L("Login successful","success")}}else L("Please enter both username and password","error");else if(m)if(f.value.trim()&&w.value.trim()&&m.value.trim()){const b=f.value.trim(),S=w.value,x=m.value.trim(),y=await B.users.register(b,S,x);if(y.error||!y.data)L(y.error||"Registration failed","error");else{const N=await B.users.login(b,S);if(N.error||!N.data)L(N.error||"Auto-login failed after registration","error");else{const M=N.data;ue(b,M.token,M.userId),L("Registration & login successful!","success")}}}else L("Please fill in all fields","error")}catch(b){console.error("Auth error:",b),L("An error occurred. Please try again.","error")}finally{j()}}),a}function Je(){const t=U.getTranslations(),e=document.createElement("div");e.className="page content-section",e.id="profile",e.setAttribute("role","main");const a=document.createElement("h1");a.className="section-title",a.textContent=t.profile.title,e.appendChild(a);const n=document.createElement("div");n.className="profile-tabs";const s=document.createElement("div");s.className="tab-buttons";const o=[{id:"dashboard",label:t.profile.tabs.dashboard,icon:"fa-tachometer-alt"},{id:"profile-info",label:t.profile.tabs.settings,icon:"fa-user-edit"},{id:"stats",label:t.profile.tabs.statistics,icon:"fa-chart-bar"},{id:"friends",label:t.profile.tabs.friends,icon:"fa-users"},{id:"match-history",label:t.profile.tabs.history,icon:"fa-history"}],i="dashboard";o.forEach(g=>{const w=document.createElement("button");w.className=`tab-button${g.id===i?" active":""}`,w.dataset.tab=g.id,w.innerHTML=`<i class="fas ${g.icon}"></i> ${g.label}`,w.addEventListener("click",()=>{le(g.id)}),s.appendChild(w)}),n.appendChild(s);const l=document.createElement("div");l.className="tab-content";const d=document.createElement("div");d.className="tab-pane active",d.id="dashboard",B.users.getMyProfile().then(g=>{if(g.data&&g.data.user){const w={...g.data.user,...g.data.stats||{},matchHistory:g.data.gameHistory||[],friends:g.data.user.friends||[]};d.appendChild(Xe(w))}else d.textContent="Failed to load dashboard.";j()}).catch(()=>{d.textContent="Failed to load dashboard.",j()});const r=document.createElement("div");r.className="tab-pane",r.id="profile-info",B.users.getMyProfile().then(g=>{if(g.data&&g.data.user){const w={...g.data.user,displayName:g.data.user.alias||"",bio:typeof g.data.user.bio=="string"?g.data.user.bio:"",matchHistory:g.data.gameHistory||[],friends:g.data.user.friends||[]},u=Oe(w);r.appendChild(u)}else r.textContent="Failed to load profile.";j()}).catch(()=>{r.textContent="Failed to load profile.",j()});const m=document.createElement("div");m.className="tab-pane",m.id="stats",B.users.getMyProfile().then(g=>{if(g.data&&g.data.user){const w={...g.data.user,...g.data.stats||{},matchHistory:g.data.gameHistory||[],friends:g.data.user.friends||[]};m.appendChild(at(w))}else m.textContent="Failed to load stats."});const c=document.createElement("div");c.className="tab-pane",c.id="friends",c.appendChild(Ge());const f=document.createElement("div");return f.className="tab-pane",f.id="match-history",B.users.getMyProfile().then(g=>{if(g.data&&g.data.user){const w={...g.data.user,matchHistory:g.data.gameHistory||[],friends:g.data.user.friends||[]};f.appendChild(nt(w.matchHistory))}else f.textContent="Failed to load match history.";j()}).catch(()=>{f.textContent="Failed to load match history.",j()}),l.appendChild(d),l.appendChild(r),l.appendChild(m),l.appendChild(c),l.appendChild(f),setTimeout(()=>{const g=localStorage.getItem("activeProfileTab")||"dashboard";le(g)},0),n.appendChild(l),e.appendChild(n),e}function Xe(t){const e=U.getTranslations(),a=document.createElement("div");a.className="dashboard-section";const n=document.createElement("div");n.className="dashboard-header",n.innerHTML=`
    <div class="welcome-banner">
      <h2>WELCOME BACK, ${t&&t.username?t.username.toUpperCase():"PLAYER"}!</h2>
      <p>${e.profile.dashboard.overview}</p>
    </div>
  `,a.appendChild(n);const s=document.createElement("div");s.className="dashboard-kpis";const o=document.createElement("h3");o.textContent="Overview",o.className="dashboard-section-title",s.appendChild(o);const i=document.createElement("div");i.className="kpi-grid",[{label:e.profile.dashboard.rank,value:`#${t.ranking}`,subtitle:`${e.profile.dashboard.of} ${t.totalPlayers} ${e.profile.dashboard.players}`,icon:"fa-crown",color:"gold",trend:"up"},{label:e.profile.dashboard.winRate,value:`${t.winRate}%`,subtitle:`${t.wins}W / ${t.losses}L`,icon:"fa-trophy",color:"success",trend:"up"},{label:e.profile.dashboard.streak,value:t.currentStreak,subtitle:`${e.profile.dashboard.best}: ${t.longestStreak}`,icon:"fa-fire",color:"warning",trend:"up"},{label:e.profile.dashboard.playTime,value:`${Math.floor(t.totalPlayTime/60)}h ${t.totalPlayTime%60}m`,subtitle:`${e.profile.dashboard.avg}: ${t.averageMatchDuration}min/game`,icon:"fa-clock",color:"info",trend:"up"}].forEach(h=>{const E=document.createElement("div");E.className=`kpi-card ${h.color}`,E.innerHTML=`
      <div class="kpi-icon"><i class="fas ${h.icon}"></i></div>
      <div class="kpi-content">
        <div class="kpi-value">${h.value}</div>
        <div class="kpi-label">${h.label}</div>
        <div class="kpi-sub">${h.subtitle}</div>
      </div>
      <div class="kpi-trend ${h.trend}"></div>
    `,i.appendChild(E)}),s.appendChild(i),a.appendChild(s);const d=document.createElement("div");d.className="dashboard-analytics";const r=document.createElement("h3");r.textContent=e.profile.dashboard.analytics,r.className="dashboard-section-title",d.appendChild(r);const m=document.createElement("div");m.className="charts-container";const c=Ke(t.weeklyStats);m.appendChild(c);const f=Qe(t.skillProgression);m.appendChild(f),d.appendChild(m),a.appendChild(d);const g=document.createElement("div");g.className="dashboard-activity";const w=document.createElement("div");w.className="activity-row";const u=Ze(t.matchHistory.slice(0,5));w.appendChild(u);const p=et(t);w.appendChild(p),g.appendChild(w),a.appendChild(g);const v=tt(t);return a.appendChild(v),a}function Ke(t){const e=U.getTranslations(),a=document.createElement("div");a.className="chart-container weekly-chart";const n=document.createElement("h4");n.textContent=e.profile.dashboard.weekly,a.appendChild(n);const s=document.createElement("div");if(s.className="chart-wrapper",!t||t.length===0){const l=document.createElement("div");return l.className="chart-empty",l.textContent="No weekly data available",a.appendChild(l),a}const o=Math.max(...t.map(l=>l.gamesPlayed||0));t.forEach(l=>{const d=document.createElement("div");d.className="week-bar";const r=l.wins/o*100,m=l.losses/o*100;d.innerHTML=`
      <div class="bar-stack">
        <div class="bar-segment wins" style="height: ${r}%" 
             title="${l.wins} wins"></div>
        <div class="bar-segment losses" style="height: ${m}%" 
             title="${l.losses} losses"></div>
      </div>
      <div class="bar-label">${l.week}</div>
      <div class="bar-stats">
        <span class="win-count">${l.wins}W</span>
        <span class="loss-count">${l.losses}L</span>
      </div>
    `,s.appendChild(d)}),a.appendChild(s);const i=document.createElement("div");return i.className="chart-legend",i.innerHTML=`
    <div class="legend-item">
      <div class="legend-color wins"></div>
      <span>${e.profile.dashboard.wins}</span>
    </div>
    <div class="legend-item">
      <div class="legend-color losses"></div>
      <span>${e.profile.dashboard.losses}</span>
    </div>
  `,a.appendChild(i),a}function Qe(t){const e=U.getTranslations(),a=document.createElement("div");a.className="chart-container skill-chart";const n=document.createElement("h4");n.textContent=e.profile.dashboard.rating,a.appendChild(n);const s=document.createElement("div");if(s.className="line-chart-wrapper",!t||t.length===0){const f=document.createElement("div");return f.className="chart-empty",f.textContent="No skill progression data",a.appendChild(f),a}const o=Math.max(...t.map(f=>f.skill||f.rating||0)),i=Math.min(...t.map(f=>f.skill||f.rating||0)),l=o-i||1,d=document.createElement("div");d.className="svg-chart";let r="";const m=[];t.forEach((f,g)=>{const w=t.length===1?50:g/(t.length-1)*100,u=f.skill||f.rating||0,p=(o-u)/l*100;g===0?r+=`M ${w} ${p}`:r+=` L ${w} ${p}`,m.push(`
      <div class="chart-point" style="left: ${w}%; top: ${p}%"
           title="${f.date}: ${u}">
        <div class="point-value">${u}</div>
      </div>
    `)}),d.innerHTML=`
    <svg viewBox="0 0 100 100" class="line-chart">
      <path d="${r}" class="chart-line" />
      <path d="${r}" class="chart-line-glow" />
    </svg>
    ${m.join("")}
  `,s.appendChild(d);const c=document.createElement("div");return c.className="chart-x-axis",t.forEach(f=>{const g=document.createElement("span");g.textContent=f.month,c.appendChild(g)}),s.appendChild(c),a.appendChild(s),a}function Ze(t){const e=U.getTranslations(),a=document.createElement("div");a.className="recent-matches-summary";const n=document.createElement("h4");n.textContent=e.profile.dashboard.recent,a.appendChild(n);const s=document.createElement("div");s.className="recent-matches-list",t.forEach(i=>{const l=document.createElement("div");let d,r;i.result==="DID_NOT_PARTICIPATE"?(r="did-not-participate",d="fa-eye"):i.result==="win"?(r="win",d="fa-check-circle"):i.result==="loss"?(r="loss",d="fa-times-circle"):(r=i.result,d="fa-minus-circle"),l.className=`recent-match-item ${r}`;const m=typeof i.duration=="number"&&!isNaN(i.duration)?` • ${i.duration}min`:"",c=i.result==="DID_NOT_PARTICIPATE"?"Tournament match":i.score;l.innerHTML=`
      <div class="match-result-icon">
        <i class="fas ${d}"></i>
      </div>
      <div class="match-info">
        <div class="opponent-name">${i.opponent}</div>
        <div class="match-details">${c}${m}</div>
      </div>
  <div class="match-date">${i.date&&typeof i.date.toLocaleDateString=="function"?i.date.toLocaleDateString():""}</div>
    `,s.appendChild(l)}),a.appendChild(s);const o=document.createElement("button");return o.className="secondary-button",o.textContent=e.profile.dashboard.viewAll,o.addEventListener("click",()=>le("match-history")),a.appendChild(o),a}function et(t){const e=U.getTranslations(),a=document.createElement("div");a.className="advanced-stats-panel";const n=document.createElement("h4");n.textContent=e.profile.dashboard.advanced,a.appendChild(n);const s=document.createElement("div");return s.className="advanced-stats-grid",[{label:e.profile.dashboard.avgScore,value:t.averageScore,unit:"pts"},{label:e.profile.dashboard.perfectGames,value:t.perfectGames,unit:""},{label:e.profile.dashboard.comebacks,value:t.comebacks,unit:""},{label:e.profile.dashboard.winRate,value:t.winRate?t.winRate+"%":"0%",unit:""}].forEach(i=>{const l=document.createElement("div");l.className="advanced-stat-item",l.innerHTML=`
      <div class="stat-value">${i.value}${i.unit}</div>
      <div class="stat-label">${i.label}</div>
    `,s.appendChild(l)}),a.appendChild(s),a}function tt(t){const e=U.getTranslations(),a=document.createElement("div");a.className="achievements-section";const n=document.createElement("h3");n.textContent=e.profile.dashboard.achievements,n.className="dashboard-section-title",a.appendChild(n);const s=document.createElement("div");return s.className="achievements-grid",[{title:e.profile.dashboard.winStreakMaster,description:e.profile.dashboard.winStreakDesc,progress:t.currentStreak,target:10,icon:"fa-fire",unlocked:t.longestStreak>=10},{title:e.profile.dashboard.centuryClub,description:e.profile.dashboard.centuryDesc,progress:t.gamesPlayed,target:100,icon:"fa-medal",unlocked:t.gamesPlayed>=100},{title:e.profile.dashboard.perfectPlayer,description:e.profile.dashboard.perfectDesc,progress:t.perfectGames,target:1,icon:"fa-star",unlocked:t.perfectGames>=1},{title:e.profile.dashboard.socialButterfly,description:e.profile.dashboard.socialDesc,progress:t.friends.length,target:10,icon:"fa-users",unlocked:t.friends.length>=10}].forEach(i=>{const l=document.createElement("div");l.className=`achievement-card ${i.unlocked?"unlocked":"locked"}`;const d=Math.min(i.progress/i.target*100,100);l.innerHTML=`
      <div class="achievement-icon">
        <i class="fas ${i.icon}"></i>
        ${i.unlocked?'<div class="unlock-badge"><i class="fas fa-check"></i></div>':""}
      </div>
      <div class="achievement-content">
        <div class="achievement-title">${i.title}</div>
        <div class="achievement-description">${i.description}</div>
        <div class="achievement-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${d}%"></div>
          </div>
          <div class="progress-text">${i.progress}/${i.target}</div>
        </div>
      </div>
    `,s.appendChild(l)}),a.appendChild(s),a}function le(t){var e,a;localStorage.setItem("activeProfileTab",t),document.querySelectorAll(".tab-button").forEach(n=>{n.classList.remove("active")}),(e=document.querySelector(`[data-tab="${t}"]`))==null||e.classList.add("active"),document.querySelectorAll(".tab-pane").forEach(n=>{n.classList.remove("active")}),(a=document.getElementById(t))==null||a.classList.add("active")}function at(t){const e=U.getTranslations(),a=document.createElement("div");a.className="stats-section";const n=document.createElement("h2");n.textContent=e.profile.statistics.title,a.appendChild(n);const s=document.createElement("div");return s.className="stats-grid",[{label:e.profile.statistics.gamesPlayed,value:t.gamesPlayed,icon:"fa-gamepad"},{label:e.profile.statistics.wins,value:t.wins,icon:"fa-trophy",color:"success"},{label:e.profile.statistics.losses,value:t.losses,icon:"fa-times-circle",color:"danger"},{label:e.profile.statistics.winRate,value:`${t.winRate}%`,icon:"fa-percentage",color:"info"}].forEach(i=>{const l=document.createElement("div");l.className=`stat-card ${i.color||""}`,l.innerHTML=`
      <div class="stat-icon">
        <i class="fas ${i.icon}"></i>
      </div>
      <div class="stat-content">
        <div class="stat-value">${i.value}</div>
        <div class="stat-label">${i.label}</div>
      </div>
    `,s.appendChild(l)}),a.appendChild(s),a}function nt(t){const e=U.getTranslations(),a=document.createElement("div");a.className="match-history-section";const n=document.createElement("h2");if(n.textContent=e.profile.history.title,a.appendChild(n),t.length===0){const o=document.createElement("div");return o.className="empty-state",o.innerHTML=`
      <i class="fas fa-history"></i>
      <p>No matches played yet. Start playing to build your history!</p>
    `,a.appendChild(o),a}const s=document.createElement("div");return s.className="match-history-list",t.forEach(o=>{const i=document.createElement("div");let l,d,r;o.result==="DID_NOT_PARTICIPATE"?(r="did-not-participate",l="fa-eye",d="Did not participate"):o.result==="win"?(r="win",l="fa-trophy",d=e.profile.history.victory):o.result==="loss"?(r="loss",l="fa-times-circle",d=e.profile.history.defeat):(r=o.result,l="fa-minus-circle",d="Draw"),i.className=`match-card ${r}`,i.innerHTML=`
      <div class="match-result">
        <i class="fas ${l}"></i>
        <span class="result-text">${d}</span>
      </div>
      <div class="match-opponent">
        <img src="${o.opponentAvatar}" alt="${o.opponent}'s avatar" class="opponent-avatar" />
        <div class="opponent-info">
          <div class="opponent-name">${o.opponent}</div>
          <div class="game-type">${o.gameType==="1v1"?e.profile.history.match1v1:e.profile.history.tournament}</div>
        </div>
      </div>
      <div class="match-details">
        <div class="match-score">${o.result==="DID_NOT_PARTICIPATE"?"Tournament match":o.score}</div>
  <div class="match-date">${o.date&&typeof o.date.toLocaleDateString=="function"?o.date.toLocaleDateString():""}</div>
        <div class="match-duration">${o.duration?`${o.duration} ${e.profile.history.min}`:""}</div>
      </div>
    `,s.appendChild(i)}),a.appendChild(s),a}function st(){var a;const e=document.getElementById("friend-username").value.trim();e?(L(`Friend request sent to ${e}!`,"success"),(a=document.querySelector(".modal-overlay"))==null||a.remove()):L("Please enter a username","error")}function it(t){L(`Challenge sent to ${t}!`,"info")}function ot(t){confirm("Are you sure you want to remove this friend?")&&(console.log(`Removing friend with ID: ${t}`),L("Friend removed","info"))}typeof window<"u"&&(window.addFriend=st,window.challengeFriend=it,window.removeFriend=ot);function Z(t){const e=document.getElementById("app");if(!e)return;e.innerHTML=`
    <div class="tournament-bracket-page">
      <div class="tournament-header">
        <div class="back-button">
          <i class="fas fa-arrow-left"></i> Back to Tournaments
        </div>
        <h1 class="tournament-title">${t.name}</h1>
  <!-- tournament meta removed -->
      </div>
      
      <div class="bracket-container">
        <div class="bracket-round">
          <h2 class="round-title">Semi-Finals</h2>
          
          <div class="match-container">
            <div class="match" id="match-1">
              <div class="match-header">Match 1 - Semi-Final</div>
              <div class="players">
                <div class="player ${t.bracket.semifinals[0].winner===t.bracket.semifinals[0].player1?"winner":""}" data-player="${t.bracket.semifinals[0].player1}">
                  ${t.bracket.semifinals[0].player1}
                </div>
                <div class="vs">VS</div>
                <div class="player ${t.bracket.semifinals[0].winner===t.bracket.semifinals[0].player2?"winner":""}" data-player="${t.bracket.semifinals[0].player2}">
                  ${t.bracket.semifinals[0].player2}
                </div>
              </div>
              ${t.bracket.semifinals[0].winner?`
                <div class="winner-announcement">
                  <i class="fas fa-trophy"></i>
                  Winner: ${t.bracket.semifinals[0].winner}
                </div>
              `:`
                <div class="match-actions">
                  <button class="start-match-btn" onclick="startMatch(0, '${t.bracket.semifinals[0].player1}', '${t.bracket.semifinals[0].player2}')">
                    <i class="fas fa-play"></i> Start Match 1
                  </button>
                </div>
              `}
            </div>
            
            <div class="match ${t.bracket.semifinals[0].winner?"":"match-locked"}" id="match-2">
              <div class="match-header">
                Match 2 - Semi-Final
                ${t.bracket.semifinals[0].winner?"":'<span class="locked-indicator"><i class="fas fa-lock"></i> Locked</span>'}
              </div>
              <div class="players">
                <div class="player ${t.bracket.semifinals[1].winner===t.bracket.semifinals[1].player1?"winner":""}" data-player="${t.bracket.semifinals[1].player1}">
                  ${t.bracket.semifinals[1].player1}
                </div>
                <div class="vs">VS</div>
                <div class="player ${t.bracket.semifinals[1].winner===t.bracket.semifinals[1].player2?"winner":""}" data-player="${t.bracket.semifinals[1].player2}">
                  ${t.bracket.semifinals[1].player2}
                </div>
              </div>
              ${t.bracket.semifinals[1].winner?`
                <div class="winner-announcement">
                  <i class="fas fa-trophy"></i>
                  Winner: ${t.bracket.semifinals[1].winner}
                </div>
              `:`
                <div class="match-actions">
                  ${t.bracket.semifinals[0].winner?`
                    <button class="start-match-btn" onclick="startMatch(1, '${t.bracket.semifinals[1].player1}', '${t.bracket.semifinals[1].player2}')">
                      <i class="fas fa-play"></i> Start Match 2
                    </button>
                  `:`
                    <button class="start-match-btn locked-btn" disabled>
                      <i class="fas fa-lock"></i> Waiting for Match 1
                    </button>
                    <p class="waiting-message">Match 1 must finish first</p>
                  `}
                </div>
              `}
            </div>
          </div>
        </div>
        
        <div class="bracket-arrow">
          <i class="fas fa-arrow-right"></i>
        </div>
        
        <div class="bracket-round">
          <h2 class="round-title">Finals</h2>
          
          <div class="match-container">
            <div class="match finals-match" id="finals-match">
              <div class="match-header">Championship Finals</div>
              ${t.bracket.semifinals[0].winner&&t.bracket.semifinals[1].winner?`
                <div class="players">
                  <div class="player ${t.bracket.finals.winner===t.bracket.semifinals[0].winner?"winner":""}" data-player="${t.bracket.semifinals[0].winner}">
                    ${t.bracket.semifinals[0].winner}
                  </div>
                  <div class="vs">VS</div>
                  <div class="player ${t.bracket.finals.winner===t.bracket.semifinals[1].winner?"winner":""}" data-player="${t.bracket.semifinals[1].winner}">
                    ${t.bracket.semifinals[1].winner}
                  </div>
                </div>
                ${t.bracket.finals.winner?`
                  <div class="champion-announcement">
                    <i class="fas fa-crown"></i>
                    <span>Tournament Champion:</span>
                    <div class="champion-name">${t.bracket.finals.winner}</div>
                  </div>
                `:`
                  <div class="match-actions">
                    <button class="start-match-btn" onclick="startFinalsMatch('${t.bracket.semifinals[0].winner}', '${t.bracket.semifinals[1].winner}')">
                      <i class="fas fa-crown"></i> Start Finals
                    </button>
                  </div>
                `}
              `:`
                <div class="waiting-players">
                  <div class="waiting-text">Waiting for semi-final winners...</div>
                  <div class="vs">VS</div>
                  <div class="waiting-text">Waiting for semi-final winners...</div>
                </div>
              `}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;const a=e.querySelector(".back-button");a&&a.addEventListener("click",()=>G("/tournament")),window.currentTournament=t}window.startMatch=function(t,e,a){var s;console.log("[DEBUG] startMatch called for tournament. matchIndex:",t,"player1:",e,"player2:",a),L(`Starting match: ${e} vs ${a}`,"info"),window.currentTournamentMatch=!0,window.gamePageSuppressModal=!0,window.gamePageMode="tournament";const n=document.getElementById("app");if(n){console.log("[DEBUG] Found app container, clearing and creating game container."),n.innerHTML="";const o=document.createElement("div");o.className="game-container-wrapper",n.appendChild(o);const i=()=>{console.log("[DEBUG] Navigating back to tournament bracket."),Z(window.currentTournament)};console.log("[DEBUG] Creating 1v1 game page for tournament match. Flags:",{currentTournamentMatch:window.currentTournamentMatch,gamePageSuppressModal:window.gamePageSuppressModal,gamePageMode:window.gamePageMode});const l=oe(o,i);l.setPlayerNames(e,a),console.log("[DEBUG] Set player names:",e,a),setTimeout(()=>{delete window.currentTournamentMatch,delete window.gamePageSuppressModal,delete window.gamePageMode},1e3),(s=l.game)==null||s.onGameEndCallback((d,r)=>{console.log("[DEBUG] Game ended. Winner:",d.name,"MatchIndex:",t);const m=window.currentTournament;m.bracket.semifinals[t].winner=d.name;const c=JSON.parse(localStorage.getItem("tournaments")||"[]"),f=c.findIndex(g=>g.id===m.id);f!==-1&&(c[f]=m,localStorage.setItem("tournaments",JSON.stringify(c))),console.log("[DEBUG] Showing bracket again after match."),Z(m),L(`🏆 ${d.name} wins Match ${t+1}!`,"success")})}else console.error("[DEBUG] App container not found!")};window.declareWinner=function(t,e){const a=window.currentTournament;a.bracket.semifinals[t].winner=e;const n=JSON.parse(localStorage.getItem("tournaments")||"[]"),s=n.findIndex(i=>i.id===a.id);s!==-1&&(n[s]=a,localStorage.setItem("tournaments",JSON.stringify(n)));const o=document.querySelector(".modal-overlay");o&&o.remove(),Z(a),L(t===0?`🏆 ${e} wins Match 1! Match 2 is now unlocked! 🎉`:`🏆 ${e} wins Match 2! Both semi-finals complete! 🎉`,"success")};window.startFinalsMatch=function(t,e){var n;L(`Starting Finals: ${t} vs ${e}`,"info");const a=document.getElementById("app");if(a){a.innerHTML="";const s=document.createElement("div");s.className="game-container-wrapper",a.appendChild(s);const i=oe(s,()=>{Z(window.currentTournament)});i.setPlayerNames(t,e),(n=i.game)==null||n.onGameEndCallback((l,d)=>{const r=window.currentTournament;r.bracket.champion=l.name;const m=JSON.parse(localStorage.getItem("tournaments")||"[]"),c=m.findIndex(f=>f.id===r.id);c!==-1&&(m[c]=r,localStorage.setItem("tournaments",JSON.stringify(m))),Z(r),L(`👑 ${l.name} is the Tournament Champion!`,"success")})}};window.declareChampion=function(t){const e=window.currentTournament;e.bracket.finals.winner=t,e.status="completed";const a=JSON.parse(localStorage.getItem("tournaments")||"[]"),n=a.findIndex(o=>o.id===e.id);n!==-1&&(a[n]=e,localStorage.setItem("tournaments",JSON.stringify(a)));const s=document.querySelector(".modal-overlay");s&&s.remove(),Z(e),L(`🏆 ${t} is the Tournament Champion! 🏆`,"success")};function ie(t){const e=window.location.pathname;t.innerHTML="";let a=document.getElementById("screen-reader-live-region");a||(a=document.createElement("div"),a.id="screen-reader-live-region",a.setAttribute("aria-live","polite"),a.setAttribute("aria-atomic","true"),a.className="hidden-visually",document.body.appendChild(a));const n={"/":ye,"/login":()=>me(!0),"/register":()=>me(!1),"/tournament":Ye,"/profile":Je,"/ACCOUNT":()=>me(!0),"/logout":()=>(Ie(),ye()),"/game":l};let s=e;s.startsWith("/game")&&(s="/game");const o=n[s],i=document.createElement("div");if(i.className="page-content-wrapper",t.appendChild(i),o)i.appendChild(o()),document.title=Ce(s);else{const d=document.createElement("div");d.className="page content-section",d.id="not-found",d.setAttribute("role","main"),d.innerHTML='<h1 class="section-title">404 - Page Not Found</h1><p style="text-align:center; color: var(--text-color-light);">The page you are looking for does not exist.</p>';const r=document.createElement("button");r.className="primary-button back-button",r.textContent="Go to Home",r.addEventListener("click",()=>G("/")),d.appendChild(r),d.appendChild(de()),i.appendChild(d),document.title="404 - Page Not Found - Neon Pong"}function l(){const d=document.createElement("div");d.className="game-container-wrapper";let r=null;try{r=JSON.parse(sessionStorage.getItem("tournamentMatch")||"null")}catch{}const m=(r==null?void 0:r.playerA)||"Player 1",c=(r==null?void 0:r.playerB)||"Player 2",g=oe(d,()=>{G("/tournament")});return g.setPlayerNames&&g.setPlayerNames(m,c),d}document.querySelectorAll(".navbar-link").forEach(d=>{d.classList.remove("active");const r=d.getAttribute("href"),m=window.location.pathname;(r===m||r==="/"&&m==="/")&&d.classList.add("active"),(m==="/tournament"&&r==="/tournament"||m==="/register"&&r==="/register")&&d.classList.add("active")})}document.addEventListener("DOMContentLoaded",async()=>{console.log("[App] DOM fully loaded, initializing application..."),console.log("[App] Initializing translation system..."),U.addListener(()=>{ce()}),console.log("[App] Finding app container...");const t=document.getElementById("app");if(!t){console.error("[App] Failed to find #app element");return}console.log("[App] Creating navigation bar...");const e=je();if(document.body.insertBefore(e,t),console.log("[App] Checking login state..."),We(),Ve(),!document.getElementById("loading-overlay")){const a=Ae();document.body.appendChild(a)}console.log("[App] Setting up routes..."),ie(t),window.addEventListener("popstate",()=>{ie(t)}),console.log("[App] Current pathname:",window.location.pathname),console.log("[App] About to call navigateTo...");try{window.location.pathname==="/"||window.location.pathname===""?(console.log("[App] Navigating to home page..."),G("/")):(console.log("[App] Navigating to current path:",window.location.pathname),G(window.location.pathname)),console.log("[App] navigateTo call completed")}catch(a){console.error("[App] Error calling navigateTo:",a)}console.log("[App] Initialization complete"),setTimeout(()=>{console.log("[App] Fallback: Hiding loading overlay"),j()},1e3)});window.addEventListener("popstate",()=>{const t=document.getElementById("app");t&&ie(t)});window.switchTab=le;window.showMessage=L;window.addEventListener("beforeunload",()=>{F&&sessionStorage.getItem("token")&&(console.log("[🚪 BEFOREUNLOAD] User closing browser, calling logout API..."),ke())});document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&F?console.log("[👁️ VISIBILITY] Page hidden, user might be leaving..."):document.visibilityState==="visible"&&F&&console.log("[👁️ VISIBILITY] Page visible, user is back")});
