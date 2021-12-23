This repo demonstrates Expo working in a Turbo Monorepo!

## How to test and run

```
yarn workspace expo-app start
```

## How did we get here?

### Create Turbo Monorepo

https://turborepo.org/

Turbo init:

```
npx create-turbo@latest turbo-expo
```

### Create Expo App

`cd turbo-expo/apps`

`expo init expo-app`

Choose the managed app with navigation

Expo automatically creates a `.git` folder, which we need to remove:

`rm -rf expo-app/.git`

## Create RN UI lib

Modify packages/ui/Button.tsx to:

```
import { Button as RNButton } from "react-native";

export function Button({ onPress }: { onPress: () => void }) {
  return <RNButton title="Boop" onPress={onPress} />;
}
```

## Set up Expo App

https://docs.expo.dev/guides/monorepos/

1. paste the metro.config.js
2. package.json main set to `index.js`
3. paste the index.js

## Use UI lib

Add `"ui": "*"` to dependencies of `apps/expo-app/package.json`. (Then I think it is necessary to run yarn in repo root)

In `apps/expo-app/components/EditScreenInfo.tsx`, add the button:

```
import { Button } from "ui";

        <Button onPress={() => {}} />
```

### Fix hook error

React hook error: https://github.com/expo/expo/issues/6287

Fixed by changing react to match minor version across all apps.

### Expo App Runs

```
yarn workspace expo-app start
```

### Issue with simulator refresh not working

not specific to this repo, but this trick fixes cmd-r refresh in the simulator: https://twitter.com/jonstuebe/status/1390384513927184385

Basically change the keyboard shortcut for screen recording

### add RNW as dependency of

### Copy RNW config to next apps

From here: https://github.com/vercel/next.js/blob/master/examples/with-react-native-web/next.config.js

Set both `next.config.js` files to:

```js
const withTM = require("next-transpile-modules")(["ui"]);

module.exports = withTM({
  reactStrictMode: true,
  webpack: (config) => {
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
    return config;
  },
});
```

### Next Apps Run

Start either Next app by running:

```
yarn workspace web dev
yarn workspace docs dev
```
