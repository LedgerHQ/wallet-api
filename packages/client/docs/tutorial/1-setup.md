## Setup a new Live App project

---

The first step is to create a new project using the `live-app-sdk`. To do so, we will use the [`live-app` Create React App template](https://www.npmjs.com/package/@ledgerhq/cra-template-live-app) in order to bootstrap a React TypeScript web app initialized with the `live-app-sdk`.

> 📝 &nbsp;For more information regarding CRA, refer to the project's documentation [here](https://create-react-app.dev/docs/getting-started).

To do so, run the following command in your terminal:

```shell
yarn create react-app live-app-tuto --template @ledgerhq/live-app
```

This will create a new `live-app-tuto` React App. Once done, start the tuto app:

```shell
cd live-app-tuto
yarn start
```

This will run the app in development mode and expose it to `http://localhost:3000`.

You should be able to navigate to your new app on your web browser and see the following screen:

![demo-app](./assets/1-1-demo-app.png)

This app is a basic CRA web app. If you are familiar with React and CRA, you will notice that there is an extra “Request account” button at the bottom. If you go and have a look at the `src/App.tsx` file, you will notice the use of the `requestAccount` function from `@ledgerhq/live-app-sdk`, called when clicking on this button.

If you click on the “Request account” button, you will see that nothing happens. This is normal because to interact with Ledger Live (here, request an account), your Live App needs to be able to communicate with the Ledger Live platform. Hence Ledger Live needs to be made aware of your Live App.

This is done through a `manifest` file that we will create in the next section.

---

⬅️ &nbsp;[Previous](./prerequisites.md) | [Next](./2-manifest.md)&nbsp;➡️
