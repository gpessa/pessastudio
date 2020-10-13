import { makeStyles } from "@material-ui/core"
import React from "react"
import { Image } from "react-bootstrap"
import { COLORS, FONTS } from "@theme";

interface Props {
  small: Boolean
}

const useStyles = makeStyles(theme => ({
  image: {
    height: ({ small }: Props) => small ? 40 : 50,
    marginRight: theme.spacing(1),
    transition: theme.transitions.create(
      ['height'],
      { duration: theme.transitions.duration.short }
    ),
  },
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    margin: 0,
    fontSize: 30,
    lineHeight: '21px',
    color: COLORS.BLACK,
    textTransform: 'uppercase',
    fontFamily: FONTS.SANSERIF_SLIM,
    marginBottom: 5
  },
  subtitle: {
    margin: 0,
    fontSize: 13,
    letterSpacing: 4.6,
    lineHeight: '11px',
    textIndent: 3,
    color: COLORS.PRIMARY,
    textTransform: 'uppercase',
    fontFamily: FONTS.SANSERIF_SLIM,
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
