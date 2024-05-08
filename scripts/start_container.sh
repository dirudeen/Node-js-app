# !bin/bash

set -e

# pull docker image from docker hub
echo "pulling image"
docker pull dirudeen/nodejs-app

# run the image in a container
docker run -d -p 3000:3000 dirudeen/nodejs-app