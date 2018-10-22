# {{cookiecutter.project}}

Here's a very simple repo to demonstrate how to use Responder with a React app
that uses frontend routing.

To get the app running in development mode:

```shell
npm install
npm start # the app should now be available on http://localhost:1234/
```

To build the app and serve it from a Responder server:

```shell
pipenv install # due to some error, it might be necessary to do: pipenv install --skip-lock
npm install
pipenv run responder build
pipenv run python api.py # the app should now be available on http://localhost:5042/
```

Then just open: <http://localhost:5042/> & start working on your new app! 🚀

## Deploy

When you're ready to deploy, it's easy. You can deploy to Heroku;

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
