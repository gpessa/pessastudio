import { createTheme, responsiveFontSizes, Theme } from "@mui/material/styles"

export const BREAKPOINT = "md"

export const PRODUCT_GUTTER = 5

export const SECTION_SPACING = (breakingPoint: "xs" | "md") => {
  return (spacing: "small" | "medium" | "big" | "menu") => {
    const CONFIGURATION = new Map()

    CONFIGURATION.set("xs", {
      small: 3,
      medium: 8,
      big: 10,
      menu: 13, // 130px
    })

    CONFIGURATION.set("md", {
      small: 4,
      medium: 13,
      big: 20,
      menu: 30,
    })

    const value = CONFIGURATION.get(breakingPoint)[spacing]

    return theme.spacing(value)
  }
}


declare module "@mui/material/styles/createTypography" {
  interface TypographyOptions {
    small?: TypographyStyleOptions
    slim?: TypographyStyleOptions
  }
  interface Typography {
    small?: TypographyStyleOptions
    slim?: TypographyStyleOptions
  }
}

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    warm1: Palette["primary"]
    warm2: Palette["primary"]
  }
  interface PaletteOptions {
    warm1: PaletteOptions["primary"]
    warm2: PaletteOptions["primary"]
  }
}

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme { }
}

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme { }
}

const themePalette = createTheme({
  typography: {
    fontFamily: "Source Sans Pro",
    slim: {
      fontFamily: "Roboto Condensed",
    },
  },
  palette: {
    primary: {
      main: "#356434",
    },
    warm1: {
      main: "#F6F4F0",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    warm2: {
      main: "#EBE6DE",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
  }
})

const theme = createTheme(themePalette, {
  shape: {
    borderRadius: 0,
  },
  spacing: (factor: number) => `${7 * factor}px`,
  typography: {
    small: {
      fontSize: "0.9rem",
    },
    caption: {
      fontSize: "0.9rem",
      lineHeight: "1em",
      textTransform: "uppercase",
      color: themePalette.palette.grey[600]
    },
    h1: {
      fontFamily: "serif",
      fontWeight: "bold",
      textTransform: "none",
      fontSize: 78,
      lineHeight: 74 / 91,
    },
    h2: {
      fontFamily: "serif",
      fontWeight: "bold",
      fontSize: 57,
      lineHeight: 56 / 57,
    },
    h3: {
      fontFamily: "serif",
      fontWeight: "bold",
      lineHeight: 1,
      fontSize: 35,
    },
    h4: {
      fontFamily: "serif",
      fontWeight: "bold",
      lineHeight: 1.1,
      fontSize: 28,
    },
    h5: {
      fontFamily: "serif",
      fontWeight: "bold",
      lineHeight: 1.1,
      fontSize: 23,
    },
    h6: {
      fontFamily: "serif",
      fontWeight: "bold",
      lineHeight: 1.1,
      fontSize: 18,
    },
  },
  components: {
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
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
        },
      },
      defaultProps: {
        disableElevation: true,
        variant: "contained",
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:nth-of-type(even)": {
            backgroundColor: themePalette.palette.common.white,
          },
          "&:nth-of-type(odd)": {
            backgroundColor: themePalette.palette.warm1.main,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
        },
      },
      defaultProps: {
        color: "inherit",
      },
    },
  },
})

console.log(theme)
export default responsiveFontSizes(theme)
