# !bin/bash

set -e

# get docker container id and remove it
docker rm -f $(docker ps -aq)