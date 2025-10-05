help: ## Show this help message
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "%-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

setup: ## Install dependencies for both frontend and backend
	cd Back-end && npm install
	cd Front-end && npm install

dev: ## Start development servers for both frontend and backend
	@echo "Backend: http://localhost:5001 | Frontend: http://localhost:5173"
	@trap 'kill %1 %2' INT; cd Back-end && npm start & cd Front-end && npm run dev & wait

build:
	docker-compose build --no-cache

start:
	docker-compose up -d

stop:
	docker-compose down

restart: stop start

logs:
	docker-compose logs -f

migrate:
	docker-compose exec backend node -e "const db=require('better-sqlite3')('./database.db'); try{db.exec('ALTER TABLE users ADD COLUMN google_id TEXT;');console.log('✅ google_id added')}catch(e){console.log('✅ Column exists')};db.close()"

clean:
	docker-compose down --rmi all -v
	docker system prune -f -a

all: setup build start migrate ## Complete setup: install, build, start, and migrate
	@echo "NeonPong Ready! Frontend: http://localhost:5173 | Backend: http://localhost:5001"

.PHONY: help build start stop logs clean  dev setup migrate all