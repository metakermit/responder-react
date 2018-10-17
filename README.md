# Responder React

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
rm -rf dist # clean the dist folder
rm -rf static/* # clean the static folder
npm run build
cp -rf dist/ static/
pipenv run python server.py # the app should now be available on http://localhost:5042/
```

To save keystrokes:

```shell
pipenv install # due to some error, it might be necessary to do: pipenv install --skip-lock
npm install
./build.sh
```

Then just open <http://localhost:5042/>.

To build the app and test it with a static Python server (as a debug technique):

```shell
npm install
rm -rf dist # clean the dist folder
npm run build
cd dist
python3 -m http.server # the app should now be available on http://localhost:8000/
```

To demonstrate how the app should work, it consists of two pages:

- ShoppingList running on `/`

![page 1](docs/page1.png)

- About running on `/about`

![page 2](docs/page2.png)
