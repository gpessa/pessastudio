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
  SERIF: "Tiempos Fine",
  SANSERIF: "GT America",
  SANSERIF_WEIRD: "Source Sans Pro",
  SANSERIF_SLIM: "Roboto Condensed"
}

const theme = createMuiTheme({
  shape: {
    borderRadius: 0,
  },
  palette: {
    primary: {
      main: COLORS.PRIMARY,
    },
    background: {
      default: COLORS.WHITE,
    },
  },
  typography: {
    fontSize: 15,
    htmlFontSize: 15,
    fontFamily: [FONTS.SANSERIF_WEIRD].join(", "),
    h1: {
      fontFamily: FONTS.SERIF,
      textTransform: 'none',
      fontSize: 91,
      lineHeight: (88 / 91)
    },
    h2: {
      fontFamily: FONTS.SERIF,
      fontSize: 57,
      lineHeight: (56 / 57)
    },
    h3: {
      fontFamily: FONTS.SERIF,
      lineHeight: 1.1
    },
    h4: {
      fontSize: 28,
      fontWeight: 500,
      lineHeight: 1.1,
      fontFamily: FONTS.SERIF,
    },
    h5: {
      fontSize: 12,
      color: COLORS.WARM1,
      fontFamily: FONTS.SANSERIF,
    }
  },
  overrides: {
    MuiButtonBase: {
      root: {
        fontFamily: FONTS.SANSERIF_WEIRD,
        textTransform: 'none'
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none'
      }
    }
  },
  props: {
    MuiButton: {
      disableElevation: true
    }
  },
})

export default responsiveFontSizes(theme)