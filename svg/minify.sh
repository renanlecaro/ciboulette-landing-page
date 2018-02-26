#!/bin/bash
for f in *.svg; do
    if [[ "$f" != *\.min\.svg ]]
    then
      inkscape --export-text-to-path  --export-plain-svg=${f%.svg}.min.svg $f
      svgo -i "${f%.svg}.min.svg"
    fi
done
