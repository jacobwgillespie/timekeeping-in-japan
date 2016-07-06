#!/usr/bin/env bash

cp index.html dist

cd dist

# Deploy to main site
rm -rf .git
git init
git add .
git commit -m "Deploy to GitHub Pages"
git push --force --quiet git@github.com:jacobwgillespie/timekeeping-in-japan.git master:gh-pages > /dev/null 2>&1
