#!/usr/bin/bash

git add .
read -p 'enter commit message: ' MESSAGE
echo $MESSAGE
git commit -m "$MESSAGE"
git push origin master

