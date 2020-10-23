import React from "react"

import { Colors } from "@constants"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  color: {
    width: 14,
    height: 14,
    borderRadius: '50%',
    display: 'inline-block',
    border: `1px solid ${theme.palette.divider}`,
    marginBottom: -1,
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
          <div 
            style={{ backgroundColor }} 
            className={classes.color} 
            key={backgroundColor}
          ></div>
        ))}
    </>
  )
}

export default ColorsList
