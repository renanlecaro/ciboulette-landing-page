#!/bin/sh

# Make css out of less
autoless . &
# make html out of jade
jade index.jade --watch &
# Re-generate images on change
bash ./img/_watch.sh &
google-chrome ./index.html &

echo "To develop this project you will need to install the folowin tools : "
echo "npm i less autoless pug-cli -g && sudo apt-get install imagemagick"

