import { Data } from "components"
import { Trans } from "@lingui/macro"
import { Box, Link, Typography } from "@mui/material"
import React from "react"


const Address: React.FC<AddressProps> = ({
  name,
  country,
  addressLocality,
  id,
  bank,
  whatsapp,
  postalCode,
  mobile,
  addressRegion,
  streetAddress,
  telephone,
  email,
  ...props
}) => {
  const hasAddress = streetAddress != undefined

  return (
    <div itemScope {...props}>
      <Typography gutterBottom={true} fontWeight="bold">
        {name}
      </Typography>

      {hasAddress && (
        <Box itemScope mb={1}>
          <div>{streetAddress}</div>
          <span>{addressLocality}</span>
          <br />
          <span>{postalCode}</span>, <span>{addressRegion}</span> (<span>{country}</span>)
        </Box>
      )}

      {id && <Data label={<Trans>Codice Fiscale e Partita IVA</Trans>} value={id} />}

      {mobile && (
        <Data
          label={<Trans>Telefono</Trans>}
          value={
            <Link underline="hover" href={`tel:${mobile.replace(/ /g, "")}`}>
              {mobile}
            </Link>
          }
        />
      )}

      {telephone && (
        <Data
          label={<Trans>Telefono</Trans>}
          value={
            <Link underline="hover" href={`tel:${telephone.replace(/ /g, "")}`}>
              {telephone}
            </Link>
          }
        />
      )}

      {whatsapp && (
        <Data
          label={<Trans>WhatsApp</Trans>}
          value={
            <Link underline="hover" href={`https://wa.me/${whatsapp.replace(/ /g, "")}`}>
              {whatsapp}
            </Link>
          }
        />
      )}

      {email && (
        <Data
          label={<Trans>Email</Trans>}
          value={
            <Link underline="hover" href={`mailto:${email}`}>
              {email}
            </Link>
          }
        />
      )}
    </div>
  )
}

export interface AddressProps {
  bank?: JSX.Element
  name?:  JSX.Element | string
  email?: string
  country?: string
  whatsapp?: string
  postalCode?: string
  addressRegion?: string
  streetAddress?: string
  addressLocality?: string
  id?: string
  telephone?: string
  mobile?: string
  className?: string
}

export default Address
