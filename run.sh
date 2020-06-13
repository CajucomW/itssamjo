set -e
if [[ -f .env.local ]]; then
  source .env.local
fi

.frontend/node_modules/.bin/nodemon server.js &

cd frontend/
npm run start
