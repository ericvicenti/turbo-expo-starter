# React Native in a Turborepo

Welcome to a standard RN app within a Turbo monorepo!

## To Run

Check out the repo and run `yarn` in the repo root. Then run:

- `yarn workspace react-native-app ios`, for iOS
- `yarn workspace react-native-app android`, for Android
- `yarn workspace react-native-app start`, to start the Metro server (you have already installed on iOS or Android)

### Note 1:

Live Reload is not working. After saving files, the live-reload indicator appears but the new code does not run.

A manual refresh seems to be required.

### Note 2: React Imports from Deps

From Button.tsx it is now required to import React directly:

```
import React from "react";
```

## How the App is made

### Create RN App

```
cd apps
npx react-native init ReactNativeApp
```

### Rename App

```
mv ReactNativeApp react-native-app
```

By convention we match the package name to the folder name. Update the `apps/react-native-app/package.json`:

```
"name": "react-native-app",
```

### Install UI Lib

Add to the app `package.json` dependencies

```
"ui": "*"
```

### metro.config.js

Metro can be configured to use a monorepo according to [Expo's Monorepo documentation](https://docs.expo.dev/guides/monorepos/)

```js
// Learn more https://docs.expo.io/guides/customizing-metro
const {getDefaultConfig} = require('expo/metro-config');
const path = require('path');

// Find the workspace root, this can be replaced with `find-yarn-workspace-root`
const workspaceRoot = path.resolve(__dirname, '../..');
const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

// 1. Watch all files within the monorepo
config.watchFolders = [workspaceRoot];
// 2. Let Metro know where to resolve packages, and in what order
config.resolver.nodeModulesPath = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

module.exports = config;
```

### Edit App to use UI

New `App.tsx` to use `ui/Button`

```tsx
import React from 'react';
import {View, StatusBar, useColorScheme, SafeAreaView} from 'react-native';
import {Button} from 'ui';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{flex: 1}}>
      <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Button onPress={() => {}} />
      </SafeAreaView>
    </View>
  );
}
```

### Run it

```
yarn workspace react-native-app ios
```
