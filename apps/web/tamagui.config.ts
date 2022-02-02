import { createTamagui, createTokens, createFont } from "tamagui";

const interFont = createFont({
  family: "Inter, Helvetica, Arial, sans-serif",
  size: {
    1: 12,
    2: 14,
    3: 15,
    // ...
  },
  lineHeight: {
    1: 17,
    2: 22,
    3: 25,
    // ...
  },
  weight: {
    4: "300",
    7: "600",
    8: "700",
  },
  letterSpacing: {
    4: 0,
    8: -1,
  },
});

const size = {
  0: 0,
  1: 5,
  2: 10,
  // ....
};

export const tokens = createTokens({
  font: { body: interFont },
  size,
  space: { ...size, "-1": -5, "-2": -10 },
  radius: { 0: 0, 1: 3 },
  zIndex: { 0: 0, 1: 100, 2: 200 },
  color: {
    white: "#fff",
    black: "#000",
  },
});

const config = createTamagui({
  defaultTheme: "light",
  shorthands: {
    px: "paddingHorizontal",
  },
  themes: {
    light: {
      bg: "#fff",
      color: "#000",
    },
  },
  tokens,
  media: {
    xs: { maxWidth: 660 },
    gtXs: { minWidth: 660 + 1 },
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    md: { minWidth: 980 },
    gtMd: { minWidth: 980 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: "none" },
    pointerCoarse: { pointer: "coarse" },
  },
});

type Conf = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}

export default config;
