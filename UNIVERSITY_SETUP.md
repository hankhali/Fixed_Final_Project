# 🎓 University Lab Setup Guide

## Quick Start for iMac/Lab Computers

### Prerequisites
- Docker Desktop installed
- Node.js (any recent version)
- Git

### 1. Clone & Setup (2 minutes)
```bash
# Clone the project
git clone [your-repo-url]
cd hanieh_final

# Install frontend dependencies
cd Front-end
npm install
cd ..
```

### 2. Start Application (1 minute)
```bash
# Start all services with Docker
docker-compose up -d

# Wait 30 seconds for services to start
# Then open browser to: https://localhost
```

### 3. Test Features
- ✅ Register a new account
- ✅ Login with credentials  
- ✅ Create a tournament
- ✅ Play AI game
- ✅ Test 1v1 match

### Troubleshooting
- **Port conflicts**: Change ports in docker-compose.yml
- **SSL warnings**: Click "Advanced" → "Proceed to localhost"
- **Build issues**: Run `npm run build` in Front-end folder

### Alternative (No Docker)
```bash
# Backend
cd Back-end
npm install
npm start

# Frontend (new terminal)
cd Front-end  
npm install
npm run build
npm run preview
```

## 🚀 Ready for Demo!
Your application will be running at `https://localhost`
