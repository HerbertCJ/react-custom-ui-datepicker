const theme = {
  font: {
    family: "Inter, sans-serif",
    weight: {
      thin: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
    },
    sizes: {
      small: "0.75rem",
      medium: "0.875rem",
      body: "0.875rem",
      body_large: "1rem",
      xlarge: "1.5rem",
    },
    text: {
      sizes: {
        tiny: "0.75rem",
        small: "0.875rem",
        regular: "1rem",
        medium: "1.125rem",
        large: "1.5rem",
        xlarge: "2.25rem",
      },
    },
  },
  icon: {
    size: {
      small: "0.75rem",
      default: "1.25rem",
      medium: "2rem",
      big: "2.5rem",
      xlarge: "3.75rem",
    },
  },
  border: {
    radius_small: "0.25rem",
    radius: "0.5rem",
    radius_xlarge: "100px",
  },
  spacings: {
    xsmall: "0.5rem",
    small: "1rem",
    medium: "1.5rem",
    large: "2rem",
    xlarge: "2.5rem",
    xxlarge: "3rem",
    giant: "3.5rem",
    xgiant: "4rem",
    xxgiant: "4.5rem",
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transitions: {
    fast: "ease-in-out 125ms",
    normal: "ease-in-out 250ms",
    slow: "ease-in-out 500ms",
  },
  colors: {
    black: {
      500: "#2B3B4B",
      400: "#3D4D5E",
      300: "#506072",
      200: "#647386",
      100: "#78889B",
      50: "#B1B9C2",
    },
    blue: {
      950: "#22174F",
      900: "#34257E",
      800: "#4127AC",
      700: "#502DD5",
      600: "#5C3AF1",
      500: "#6A58FC",
      400: "#7D78FF",
      300: "#9EA3FF",
      200: "#C3C8FF",
      100: "#DEE2FF",
      50: "#EDEFFF",
    },
    gray: {
      950: "#28252C",
      900: "#312E38",
      800: "#433E4E",
      700: "#4E485C",
      600: "#5F5871",
      500: "#746E89",
      400: "#918CA4",
      300: "#B9B5C4",
      200: "#D9D7E0",
      100: "#EFEDF1",
      50: "#FFFFFF",
    },
    white: {
      100: "#FAFAFA",
      50: "#FCFCFD",
    },
    red: {
      950: "#420D0D",
      900: "#7B2121",
      800: "#932121",
      700: "#B22323",
      600: "#D53434",
      500: "#E74C4C",
      400: "#F27777",
      300: "#F8A9A9",
      200: "#FCCCCC",
      100: "#FDE3E3",
      50: "#FDF3F3",
    },
    yellow: {
      950: "#3B220D",
      900: "#66411D",
      800: "#774E1C",
      700: "#8F6119",
      600: "#B2841C",
      500: "#CFA823",
      400: "#DEBD2B",
      300: "#E7D35D",
      200: "#F0E798",
      100: "#F7F4CA",
      50: "#FBFAEB",
    },
    green: {
      950: "#032B1D",
      900: "#084C33",
      800: "#085D3C",
      700: "#07754B",
      600: "#099259",
      500: "#15B46F",
      400: "#3ED08C",
      300: "#71E4AA",
      200: "#A9F1C9",
      100: "#D2F9E1",
      50: "#ECFDF3",
    },
  },
  shadows: {
    element: "0px 8px 16px 0px rgba(43, 59, 75, 0.10)",
    button: "0px 8px 8px 0px rgba(43, 59, 75, 0.10)",
    card: "0px 8px 12px 0px rgba(5, 37, 62, 0.10)",
    bar: "0px -2px 16px 8px rgba(43, 59, 75, 0.10)",
  },
} as const;

export default theme;
