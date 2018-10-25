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
bin/install
bin/start
```

of if you prefer to use Docker:

````shell
docker-compose up
```

Then just open: <http://localhost:5042/> & start working on your new app! 🚀

## Deploy

When you're ready to deploy, it's easy. You can deploy to Heroku:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

You can also deploy on your own using Docker.

```shell
docker build -t {{cookiecutter.project}} .
docker run -it -p 0.0.0.0:5042:5042 {{cookiecutter.project}}
````
