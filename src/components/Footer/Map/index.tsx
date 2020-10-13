import React from "react"
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: 300
  }
}));

const Map = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <iframe 
        width="100%" 
        height="300" 
        src="https://maps.google.com/maps?q=Pessastudio%20Horse%20Tecnology&t=&z=11&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0}
      ></iframe>
    </div>
  )
}

export default Map



