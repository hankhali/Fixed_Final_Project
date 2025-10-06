help:
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "%-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

setup: ## Install all dependencies (npm install for both frontend and backend)
	@echo " Installing backend dependencies..."
	cd Back-end && npm install
	@echo " Installing frontend dependencies..."
	cd Front-end && npm install
	@echo " All dependencies installed!"

certs: ## Generate SSL certificates for HTTPS
	@echo "Generating SSL certificates..."
	@mkdir -p certs
	@openssl req -x509 -nodes -days 365 \
		-newkey rsa:2048 \
		-keyout certs/localhost.key \
		-out certs/localhost.crt \
		-subj "/CN=localhost"

dev: ## Start development servers (backend + frontend)
	@echo "Backend: http://localhost:5001 | Frontend: http://localhost:5173"
	@trap 'kill %1 %2' INT; cd Back-end && npm start & cd Front-end && npm run dev & wait

build: certs ## Build everything (certs + Docker images with dependencies)
	@echo " Building Docker images (includes npm install + build)..."
	docker-compose build --no-cache
	@echo " Build complete! Ready to start with 'make start'"

start: ## Start Docker containers
	docker-compose up -d

stop: ## Stop Docker containers
	docker-compose down

restart: stop start ## Restart Docker containers

logs: ## Show Docker container logs
	docker-compose logs -f

migrate: ## Run database migrations
	docker-compose exec backend node -e "const db=require('better-sqlite3')('./database.db'); try{db.exec('ALTER TABLE users ADD COLUMN google_id TEXT;');console.log('✅ google_id added')}catch(e){console.log('✅ Column exists')};db.close()"
clean: ## Clean up Docker containers and images
	docker-compose down -v
	docker system prune -f

deploy: build start migrate ## One-command deploy (build + start + migrate)
	@echo "NeonPong deployed! Frontend: https://localhost | Backend: http://localhost:5001"

all: build start migrate ## Complete setup from scratch (Docker handles dependencies)
	@echo "NeonPong Ready! Frontend: https://localhost | Backend: http://localhost:5001"

.PHONY: help build start stop logs clean dev setup certs deploy all