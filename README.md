# Responder React

Here's a very simple repo to demonstrate how to use Responder with a React app
that uses frontend routing.

To get the app running in development mode:

```shell
npm install
npm start # the app should now be available on http://localhost:1234/
```

To build the app:

```shell
npm install
npm run build
cd dist
python3 -m http.server # the app should now be available on http://localhost:8000/
```

To demonstrate how the app should work, it consists of two pages:

- ShoppingList running on `/`

![page 1](docs/page1.png)

- About running on `/about`

![page 2](docs/page2.png)
