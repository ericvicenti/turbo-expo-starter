# Nextron in a Turborepo

Here we demonstrate an electron (Nextron) app running within a Tuborepo.

## To Run

`yarn workspace nextron-app dev`

## How it was made

We got here by following these steps from an existing tuborepo:

### Create Nextron

```
npx create-nextron-app nextron-app
```

Copy `nextron-app` into `apps`

### Edit Renderer Next Config

Edit `apps/nextron-app/renderer/next.config.js`. We will merge the existing config with the `next.config.js` from the web apps, which includes next-transpile-modules and React Native Web config.

```js
const withTM = require("next-transpile-modules")(["ui"]);

module.exports = withTM({
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      "react-native$": "react-native-web",
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];

    if (!isServer) {
      config.target = "electron-renderer";
    }

    return config;
  },
});
```

### Use Button from App

Add to dependencies of `apps/nextron-app/package.json`:

```
"ui": "*",
```

Now rename `apps/nextron-app/pages/home.jsx` to `home.tsx` and add the button:

```jsx
import { Button } from "ui";
...
        <Button onPress={() => {}} />
```

### Postinstall Step in Workspace

Remove the following line from `apps/nextron-app/package.json`, and move it to the root `package.json`

```
    "postinstall": "electron-builder install-app-deps"
```

> Why? There is an error when this postinstall step is used within the package. I'm not exactly sure why, but this change allow electron-builder to do its job! Alternatively, [this might work](https://github.com/electron-userland/electron-builder/issues/3984#issuecomment-784524894).

### To Do:

Use TS from the main process ("server side" of the app)
