#!/bin/sh

autoless . &
pug index.jade --watch &


echo "To develop this project you will need to install the folowin tools : "
echo "npm i less autoless pug-cli -g && sudo apt-get install imagemagick"

