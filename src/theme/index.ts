import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"

export const SECTION_SPACING = (breakingPoint: 'xs' | 'md') => {
  return (spacing: 'small' | 'medium' | 'big' | 'menu') => {
    const CONFIGURATION = new Map()
    
    CONFIGURATION.set('xs', {
      'small': 3,
      'medium': 8,
      'big': 10,
      'menu': 13 // 130px
    })

    CONFIGURATION.set('md',{
      'small': 4,
      'medium': 13,
      'big': 20,
      'menu': 30
    })

    const value = CONFIGURATION.get(breakingPoint)[spacing]
    return theme.spacing(value);
  }
}

export const BREAKPOINT = "md"

export const COLORS = {
  PRIMARY: "#356434",
  WHITE: "#FFF",
  WARM1: '#EBE6DE',
  WARM2: '#F6F4F0',
  GREY1: '#93969B',
  GREY2: '#D4D6D8',
  GREEN: '#2FC868',
  RED: '#F62D2D',
  BLACK: "#000"
}

export const FONTS = {
  SERIF: "serif",
  SANSERIF: "GT America",
  SANSERIF_WEIRD: "Source Sans Pro",
  SANSERIF_SLIM: "Roboto Condensed"
}

const defaultTheme = createMuiTheme({ })

const theme = createMuiTheme({
  shape: {
    borderRadius: 0,
  },
  palette: {
    primary: {
      main: COLORS.PRIMARY
    },
    background: {
      default: COLORS.WHITE,
    },
  },
  typography: {
    fontSize: 15,
    htmlFontSize: 15,
    fontFamily: [FONTS.SANSERIF_WEIRD].join(", "),
    caption: {
      lineHeight: '1em',
      textTransform: 'uppercase',
      color: defaultTheme.palette.grey[700]
    },
    h1: {
      fontFamily: FONTS.SERIF,
      fontWeight: 'bold',
      textTransform: 'none',
      fontSize: 78,
      lineHeight: (74 / 91)
    },
    h2: {
      fontFamily: FONTS.SERIF,
      fontWeight: 'bold',
      fontSize: 57,
      lineHeight: (56 / 57)
    },
    h3: {
      fontFamily: FONTS.SERIF,
      fontWeight: 'bold',
      lineHeight: 1,
      fontSize: 35,
    },
    h4: {
      fontFamily: FONTS.SERIF,
      fontWeight: 'bold',
      lineHeight: 1.1,
      fontSize: 28,
    },
    h5: {
      fontFamily: FONTS.SERIF,
      fontWeight: 'bold',
      lineHeight: 1.1,
      fontSize: 23,
    },
    h6: {
      fontFamily: FONTS.SERIF,
      fontWeight: 'bold',
      lineHeight: 1.1,
      fontSize: 18
    },
    body1: {
      fontSize: 18
    },
    body2: {
      fontSize: 17
    }
  },
  overrides: {
    MuiTypography: {
      gutterBottom: {
        marginBottom: '0.5em'
      }
    },
    MuiButtonBase: {
      root: {
        fontFamily: FONTS.SANSERIF_WEIRD,
        textTransform: 'none'
      },
    },
    MuiButton: {
      root: {
        fontWeight: 'bold'
      }
    },
    MuiTableRow: {
      root: {
        '&:nth-child(odd)': {
          backgroundColor: COLORS.WARM1
        }
      }
    },
    MuiLink: {
      root: {
        fontWeight: 'bold'
      }
    },
  },
  props: {
    MuiTypography: {
      gutterBottom: true
    },
    MuiLink: {
      color: "inherit"
    },
    MuiButton: {
      disableElevation: true,
      variant: "contained"
    }
  },
})

export default responsiveFontSizes(theme)