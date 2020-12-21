const fontSizes = {
  0: 0,
  1: "9px",
  2: "12px",
  3: "13px",
  4: "16px",
  5: "19px",
  6: "24px",
  7: "28px",
  8: "33px",
  9: "40px",
};

// matches Inter weights
const fontWeights = {
  thin: 100,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const colors = {
  white: "#ffffff",
  grays: {
    100: "#fff9f9",
    200: "#e6e6e6",
    300: "#999999",
    400: "#757575",
    500: "#343434",
    600: "#242424",
    700: "#151515",
    800: "#111111",
    900: "#040404",
  },
  blues: {
    300: "#6CC7F6",
    500: "#3793E0",
    600: "#0971f1",
    700: "#535BCF",
  },
  reds: {
    200: "#EB455A",
    300: "#FF453A",
    500: "#E1270E",
  },
  indigo: "#5962DF",
  green: "#5BC266",
  purple: "#BF5AF2",
  yellow: "#FBCC43",
  orange: "#f69935",
};

const space = {
  0: "0px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  9: "36px",
  10: "40px",
  11: "44px",
  12: "48px",
  13: "52px",
  14: "56px",
  15: "60px",
  16: "64px",
};

export const theme = {
  colors,
  fontSizes,
  fontWeights,
  space,
  size: space,

  // transition speeds in ms
  speeds: [0, "75ms", "100ms", "150ms", "200ms", "300ms", "500ms"],

  // mobile first
  breakpoints: ["576px", "768px", "992px"],

  radii: {
    small: "2px",
    medium: "4px",
    large: "16px",
    round: "50%",
  },

  shadows: {
    // based on elevation levels
    0: "none",
    1: "0px 8px 4px rgba(0, 0, 0, 0.12), 0px 8px 16px rgba(0, 0, 0, 0.24)",
    2: "0px 4px 4px rgba(0, 0, 0, 0.12), 0px 16px 32px rgba(0, 0, 0, 0.24)",

    // this part is ugly, this can be improved.
    // bonus: these are terrible names
    active: `inset 0px -2px 0px ${colors.blues[300]}`,
    underline: `inset 0px -2px 0px ${colors.grays[100] + "1a"}`,
    fadeunder: `inset 0px 8px 8px 0px ${colors.grays[700] + "cc"}`,
  },
};
