# !bin/bash

set -e

# get docker container id and remove it
# docker rm -f $(docker ps --quiet --format "{{.ID}}" | head -n 1)
echo "stop container script running"