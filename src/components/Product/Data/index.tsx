import { makeStyles } from "@material-ui/core"
import { COLORS } from "@theme"
import React from "react"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1)
  },
  label: {
    textTransform: 'uppercase',
    color: COLORS.GREY1,
    marginRight: theme.spacing(1),
    fontSize: '90%'
  },
  value: {
  },
}))

const Data: React.FC<{ value: any; label: string }> = ({ value, label }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <span className={classes.label}>{label}:</span>
      <span className={classes.value}>{value}</span>
    </div>  
  )
}

export default Data
