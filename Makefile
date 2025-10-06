help:
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "%-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

setup:
	@echo " Installing backend dependencies..."
	cd Back-end && npm install
	@echo " Installing frontend dependencies..."
	cd Front-end && npm install
	@echo " All dependencies installed!"

certs:
	@echo "Generating SSL certificates..."
	@mkdir -p certs
	@openssl req -x509 -nodes -days 365 \
		-newkey rsa:2048 \
		-keyout certs/localhost.key \
		-out certs/localhost.crt \
		-subj "/CN=localhost"

dev:
	@echo "Backend: http://localhost:5001 | Frontend: http://localhost:5173"
	@trap 'kill %1 %2' INT; cd Back-end && npm start & cd Front-end && npm run dev & wait

build: certs
	@echo " Building Docker images (includes npm install + build)..."
	docker-compose build --no-cache
	@echo " Build complete! Ready to start with 'make start'"

start: 
	docker-compose up -d

stop:
	docker-compose down

restart: stop start

logs:
	docker-compose logs -f

clean:
	docker-compose down -v
	docker system prune -f

deploy: build start dev
	@echo "NeonPong deployed! Frontend: https://localhost | Backend: http://localhost:5001"

.PHONY: help build start stop logs clean dev setup certs deploy
