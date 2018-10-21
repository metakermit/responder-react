# Responder React

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/metakermit/responder-react/master/LICENSE) [![Updates](https://pyup.io/repos/github/metakermit/responder-react/shield.svg)](https://pyup.io/repos/github/metakermit/responder-react/)

The awesome new [Responder][] web framework includes great support for serving
static files, so this project shows how easy it is to integrate a [React][]
single page app.

## Features

- 🍪 quick start – create your own project in less than a minute using [cookiecutter][]
- 🔨 modern JS tooling – a seamless workflow using [Parcel][]
- 🔀 frontend routing – using [React Router][] you can elegantly serve different React components on different urls
- 📻 server routing – trusted old server-side routing still works, so go ahead & build the admin interface without any JS

## Usage

You can quickly reuse the scaffolding for your own project using [cookiecutter][]:

```shell
pip install -U cookiecutter
cookiecutter gh:metakermit/responder-react
```

You will find further instructions in the projects README.md, but in short all
you do is:

```shell
pipenv install # due to some error, it might be necessary to do: pipenv install --skip-lock
npm install
pipenv run responder build
pipenv run python server.py
```

And you'll have your Responder server serving the React app on <http://localhost:5042/>.
[React Router][] is used for the frontend routing.
To demonstrate how the app should work, it consists of two pages:

- ShoppingList running on `/`

![page 1](docs/page1.png)

- About running on `/about`

![page 2](docs/page2.png)

[Responder]: http://python-responder.org/
[React]: https://reactjs.org/
[Parcel]: https://parceljs.org/
[React Router]: https://reacttraining.com/react-router/
[cookiecutter]: https://cookiecutter.readthedocs.io
