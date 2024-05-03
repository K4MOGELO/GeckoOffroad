import { MD3LightTheme } from "react-native-paper";


export const Apptheme = {
  ...MD3LightTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    "primary": "#ff6600",
    "onPrimary": "rgb(255, 255, 255)",
    "primaryContainer": "rgb(209, 228, 255)",
    "onPrimaryContainer": "rgb(0, 29, 54)",
    "secondary": "rgb(83, 95, 112)",
    "onSecondary": "rgb(255, 255, 255)",
    "secondaryContainer": "rgb(215, 227, 247)",
    "onSecondaryContainer": "rgb(16, 28, 43)",
    "tertiary": "rgb(107, 87, 120)",
    "onTertiary": "rgb(255, 255, 255)",
    "tertiaryContainer": "rgb(242, 218, 255)",
    "onTertiaryContainer": "rgb(37, 20, 49)",
    "error": "rgb(186, 26, 26)",
    "onError": "rgb(255, 255, 255)",
    "errorContainer": "rgb(255, 218, 214)",
    "onErrorContainer": "rgb(65, 0, 2)",
    "background": "#FFFFFF",
    "onBackground": "rgb(26, 28, 30)",
    "surface": "#fffff",
    "onSurface": "rgb(26, 28, 30)",
    "surfaceVariant": "rgb(223, 226, 235)",
    "onSurfaceVariant": "rgb(67, 71, 78)",
    "outline": "rgb(115, 119, 127)",
    "outlineVariant": "rgb(195, 199, 207)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(47, 48, 51)",
    "inverseOnSurface": "rgb(241, 240, 244)",
    "inversePrimary": "rgb(158, 202, 255)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(240, 244, 250)",
      "level2": "rgb(233, 240, 248)",
      "level3": "rgb(225, 235, 245)",
      "level4": "rgb(223, 233, 244)",
      "level5": "rgb(218, 230, 242)"
    },
    "surfaceDisabled": "rgba(26, 28, 30, 0.12)",
    "onSurfaceDisabled": "rgba(26, 28, 30, 0.38)",
    "backdrop": "rgba(44, 49, 55, 0.4)"
  },
};


