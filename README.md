This repo demonstrates Expo working in a Turbo Monorepo!

## How to test and run

yarn workspace expo-app run

## How did we get here?

### Create Turbo Monorepo

https://turborepo.org/

Turbo init:

```
npx create-turbo@latest turbo-expo
```

### Create Expo App

cd turbo-expo/apps

expo init expo-app

choose the managed app with navigation

expo automatically creates git, we need to remove:

rm -rf expo-app/.git

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

## App should run now

## Issue with simulator refresh not working

not specific to this repo, but this trick fixes cmd-r refresh in the simulator: https://twitter.com/jonstuebe/status/1390384513927184385

Basically change the keyboard shortcut for screen recording
