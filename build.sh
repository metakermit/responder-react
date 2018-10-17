#!/bin/sh

rm -rf dist # clean the dist folder
rm -rf static/* # clean the static folder
npm run build
cp -rf dist/ static/
pipenv run python server.py # the app should now be available on http://localhost:5042/
