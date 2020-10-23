import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { makeStyles } from "@material-ui/core"
import { FONTS, COLORS } from "@theme"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
  },
  price: {
    fontSize: '120%',
    fontWeight: 'bold',
    fontFamily: FONTS.SERIF,
    marginRight: theme.spacing(1)
  },
  vat: {
    color: COLORS.GREY1
  },
}))

const Price: React.FC<{ price?: number }> = ({ price }) => {
  const { formatMessage, formatNumber } = useIntl()
  const classes = useStyles();

  return price ? (
    <div className={classes.root}>
      <span className={classes.price}>{formatNumber(price, { style: "currency", currency: "EUR" })}</span>
      <span className={classes.vat}>+ {formatMessage({ id: "GENERAL__IVA" })}</span>
    </div>
  ) : null
}


export default Price