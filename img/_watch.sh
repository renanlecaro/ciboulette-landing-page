#!/bin/sh

PREVVAL=""

while true    
do
    NEWVAL="$(ls -al *.png)"


   if [[ "$PREVVAL" != "$NEWVAL" ]]
   then    
        sh ./_generateThumbs.sh
       PREVVAL=$NEWVAL
   fi
   sleep 5
done
