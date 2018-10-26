# {{cookiecutter.project}}

Here's a very simple repo to demonstrate how to use Responder with a React app
that uses frontend routing.

To build the app on your computer and serve it from a Responder server:

```shell
bin/install
bin/start
```

Optionally to get just the frontend running in development mode, `npm start` will bring the frontend up on <http://localhost:1234/>.

Alternatively, if you prefer to use Docker:

```shell
docker-compose up
```

Then just open: <http://localhost:5042/> & start working on your new app! 🚀

## Deploy

When you're ready to deploy, it's easy. You can deploy to Heroku:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

If you prefer to deploy the app on your own server, you can easily start it using Docker:

```shell
docker build -t {{cookiecutter.project}} .
docker run -it -p 0.0.0.0:5042:5042 {{cookiecutter.project}}
```
