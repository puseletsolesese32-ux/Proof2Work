# Proof2Work Server

## Setup
`ash
cd server
npm install
cp .env.example .env  # set JWT_SECRET
npm start
``n
## API
- GET /health
- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/me (auth)
- GET /api/languages
- GET /api/modules
- GET /api/modules/:id
- GET /api/jobs
- GET /api/jobs/:id
- POST /api/assessments (auth)
- GET /api/assessments/me (auth)
- GET /api/assessments/:id (auth)

