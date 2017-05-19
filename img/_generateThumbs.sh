#!/bin/sh



for f in *.png; do
  echo "Converting  $f"
  # Thumb for in page show
  convert $f -resize 200x200 ./250/$f
  convert $f -resize 500x500 ./500/$f
done