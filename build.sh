#!/bin/sh

npm run build
pipenv run python server.py # the app should now be available on http://localhost:5042/
