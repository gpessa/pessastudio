import { TH1 } from "@components"
import { Container, makeStyles } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles(theme => ({
  root: { 
    lineHeight: 0,
    position: 'relative'
  },
  wrapper: {
    left: 0,
    right: 0,
    top: '50%',
    position: 'absolute',
    transform: 'translateY(-50%)',
  },
  text: {
    display: 'inline-block',
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(3)
  },
  image: {
    width: '100%'
  }
}))

const Hero = (props: Props) => {
  const classes = useStyles(props);
  const { text, image, className } = props
  
  return (
    <div className={`${classes.root} ${className}`}>
      <img className={classes.image} src={image} />
      {text && (
        <Container className={classes.wrapper} maxWidth="lg">
          <TH1 dangerouslySetInnerHTML={{ __html: text }} className={classes.text}/>
        </Container>
      )}
    </div>
  )
}

type Props = {
  image: string
  text?: string
} & React.HTMLAttributes<HTMLElement>

export default Hero
