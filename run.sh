set -e
if [[ -f ./itssamjo ]]; then
  source ./itssamjo/
fi

# ./frontend/node_modules/.bin/nodemon server.js &

cd ../frontend/
npm run start

cd ./itssamjo/ 
pipenv shell 

cd ./itssamjo/ 
python3 manage.py runserver 




