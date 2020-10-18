import { makeStyles } from "@material-ui/core"
import React from "react"
import { Image } from "react-bootstrap"
import { BREAKPOINT, COLORS, FONTS } from "@theme";

interface Props {
  small: Boolean
}

const FACTOR = 1.2
const LOGO_SIZE = 40
const TITLE_SIZE = 28
const SUBTITLE_SIZE = 10

const useStyles = makeStyles(theme => ({
  image: {
    marginRight: theme.spacing(1),
    transition: theme.transitions.create(
      ['height'],
      { duration: theme.transitions.duration.short }
    ),
    height: LOGO_SIZE,
    [theme.breakpoints.up(BREAKPOINT)]: {
      height: ({ small }: Props) => LOGO_SIZE * (small ? 1 : FACTOR)
    }
  },
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    margin: 0,
    marginBottom: 5,
    color: COLORS.BLACK,
    textTransform: 'uppercase',
    fontFamily: FONTS.SANSERIF_SLIM,
    fontSize: TITLE_SIZE,
    lineHeight: `${TITLE_SIZE * 0.7}px`,
    [theme.breakpoints.up(BREAKPOINT)]: {
      fontSize: ({ small }: Props) => TITLE_SIZE * (small ? 1 : FACTOR),
      lineHeight: ({ small }: Props) => `${TITLE_SIZE * 0.7 * (small ? 1 : FACTOR)}px`
    }
  },
  subtitle: {
    margin: 0,
    letterSpacing: 6.5,
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    fontFamily: FONTS.SANSERIF_SLIM,
    fontSize: SUBTITLE_SIZE,
    lineHeight: `${SUBTITLE_SIZE * 0.7}px`,
    [theme.breakpoints.up(BREAKPOINT)]: {
      letterSpacing: ({ small }: Props) => small ? 5.6 : 6.5,
      fontSize: ({ small }: Props) => SUBTITLE_SIZE * (small ? 1 : FACTOR),
      lineHeight: ({ small }: Props) => `${SUBTITLE_SIZE * 0.7 * (small ? 1 : FACTOR)}px`
    }
  },
}))
  
const Logo: React.FC<Props> = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <Image src={require("@images/favicon.jpg")} alt="Pessa Studio" className={classes.image} />
      <hgroup>
        <h1 className={classes.title}>Pessa studio</h1>
        <div className={classes.subtitle}>Horse technology</div>
      </hgroup>
    </div>
  )
}

export default Logo
