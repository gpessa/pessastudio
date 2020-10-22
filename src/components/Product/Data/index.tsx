import { Caption } from "@components"
import { makeStyles } from "@material-ui/core"
import { COLORS } from "@theme"
import React from "react"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1)
  },
  label: {
    marginRight: theme.spacing(1),
  },
  value: {
  },
}))

const Data: React.FC<{ value: any; label: string }> = ({ value, label }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Caption className={classes.label} gutterBottom={false} component="span">{label}:</Caption>
      <span className={classes.value}>{value}</span>
    </div>  
  )
}

export default Data
