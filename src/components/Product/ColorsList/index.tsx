import React from "react"

import { Colors } from "@constants"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  color: {
    display: 'inline-block',
    width: 14,
    height: 14,
    border: `1px solid ${theme.palette.divider}`,
    '& + &': {
      marginLeft: theme.spacing(1)
    }
  }
}))

const ColorsList: React.FC<{ colors: Colors[] }> = ({ colors }) => {
  const classes = useStyles()

  return (
    <>
      {colors
        .sort()
        .map(backgroundColor => (
          <div className={classes.color} style={{ backgroundColor }} key={backgroundColor}></div>
        ))}
    </>
  )
}

export default ColorsList
