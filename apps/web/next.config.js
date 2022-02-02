const withTM = require("next-transpile-modules")(["ui"]);
const withPlugins = require("next-compose-plugins");
const { withTamagui } = require("@tamagui/next-plugin");

module.exports = withPlugins([
  withTM({
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
  }),
  withTamagui({
    config: "./tamagui.config.ts",
    components: ["tamagui"],
    importsWhitelist: ["constants.js", "colors.js"],
    logTimings: true,
    disableExtraction: process.env.NODE_ENV === "development",
  }),
]);
