import { t, Trans } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import { Badge, Typography } from "@mui/material"
import { styled } from "@mui/system"
import React from "react"

const PriceStyled = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h4.fontSize,
  fontWeight: "bold",
}))

export type PriceProp = {
  price:
    | undefined
    | number
    | {
        price?: number
        note: string
      }[]
}

const Price: React.FC<PriceProp> = ({ price }) => {
  const { i18n } = useLingui()

  if (!price) return null

  if (typeof price === "number")
    return (
      <PriceStyled component={"span"}>
        <Badge
          color="warm2"
          badgeContent={<Trans>+ IVA</Trans>}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          {i18n.number(price, { style: "currency", currency: "EUR" })}
        </Badge>
      </PriceStyled>
    )

  return price.map(({ price, note }) => (
    <>
      <PriceStyled component={"span"}>
        <Badge
          color="warm2"
          badgeContent={t`+ IVA`}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          {i18n.number(price, { style: "currency", currency: "EUR" })}
        </Badge>
        <Typography variant="small" ml={3}>
          ({note})
        </Typography>
      </PriceStyled>
    </>
  ))
}

export default Price
