import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Source_Sans_3, Roboto_Condensed } from "next/font/google";

const sourceCodePro = Source_Sans_3({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const robotoCondensed = Roboto_Condensed({
  display: "swap",
  subsets: ["latin"],
  weight: ["400"],
});

export const BREAKPOINT = "md";

export const PRODUCT_GUTTER = 4;

export enum Colors {
  YELLOW = "#FEB00D",
  GREEN = "#316330",
  WHITE = "#FFFFFF",
  BLU = "#264FD0",
  RED = "#F41701",
  ORANGE = "#FFA500",
  LIGHT_BLUE = "#00FFFF",
  BROWN = "#8B4513",
  BLACK = "#000000",
  WARM_1 = "#F6F4F0",
  WARM_2 = "#EBE6DE",
  GRAY = "#787575",
}

export const SECTION_SPACING = (breakingPoint: "xs" | "md") => {
  return (spacing: "small" | "medium" | "big" | "menu") => {
    const CONFIGURATION = new Map();

    CONFIGURATION.set("xs", {
      big: 10,
      medium: 8,
      menu: 13,
      small: 3, // 130px
    });

    CONFIGURATION.set("md", {
      big: 20,
      medium: 13,
      menu: 30,
      small: 4,
    });

    const value = CONFIGURATION.get(breakingPoint)[spacing];
    return theme.spacing(value);
  };
};

declare module "@mui/material/styles" {
  interface TypographyVariants {
    small: React.CSSProperties;
    slim: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    small?: React.CSSProperties;
    slim?: React.CSSProperties;
  }
}

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    warm1: Palette["primary"];
    warm2: Palette["primary"];
  }
  interface PaletteOptions {
    warm1: PaletteOptions["primary"];
    warm2: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    small: true;
    slim: true;
  }
}

declare module "@mui/material/Badge" {
  interface BadgePropsColorOverrides {
    warm2: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    warm2: true;
  }
}

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: "contained",
      },
      styleOverrides: {
        root: {
          fontWeight: "bold",
        },
      },
    },
    MuiLink: {
      defaultProps: {
        color: "inherit",
      },
      styleOverrides: {
        root: {
          fontWeight: "bold",
        },
      },
    },
    MuiTableCell: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:nth-of-type(even)": {
            backgroundColor: Colors.WHITE,
          },
          "&:nth-of-type(odd)": {
            backgroundColor: Colors.WARM_1,
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "standard",
      },
    },
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: "0.5em",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#356434",
    },
    warm1: {
      contrastText: "rgba(0, 0, 0, 0.87)",
      main: Colors.WARM_1,
    },
    warm2: {
      contrastText: "rgba(0, 0, 0, 0.87)",
      main: Colors.WARM_2,
    },
  },
  shape: {
    borderRadius: 0,
  },
  spacing: (factor: number) => `${7 * factor}px `,
  typography: {
    caption: {
      color: Colors.GRAY,
      fontSize: "0.9rem",
      lineHeight: "1em",
      textTransform: "uppercase",
    },
    fontFamily: sourceCodePro.style.fontFamily,
    h1: {
      fontFamily: "serif",
      fontSize: 78,
      fontWeight: "bold",
      lineHeight: 74 / 91,
      textTransform: "none",
    },
    h2: {
      fontFamily: "serif",
      fontSize: 57,
      fontWeight: "bold",
      lineHeight: 56 / 57,
    },
    h3: {
      fontFamily: "serif",
      fontSize: 35,
      fontWeight: "bold",
      lineHeight: 1,
    },
    h4: {
      fontFamily: "serif",
      fontSize: 28,
      fontWeight: "bold",
      lineHeight: 1.1,
    },
    h5: {
      fontFamily: "serif",
      fontSize: 23,
      fontWeight: "bold",
      lineHeight: 1.1,
    },
    h6: {
      fontFamily: "serif",
      fontSize: 18,
      fontWeight: "bold",
      lineHeight: 1.1,
    },
    slim: {
      fontFamily: robotoCondensed.style.fontFamily!,
    },
    small: {
      fontSize: 4,
    },
  },
});

export default responsiveFontSizes(theme);
