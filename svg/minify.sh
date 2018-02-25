#!/bin/bash
for f in *.svg; do
    if [[ "$f" != *\.min\.svg ]]
    then
      svgo -i "$f" -o "${f%.svg}.min.svg"
    fi
done