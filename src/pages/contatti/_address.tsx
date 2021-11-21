import { Data } from "src/components"
import { Trans } from "@lingui/macro"
import { Box, Link, Typography } from "@mui/material"
import React from "react"

const Address: React.FC<Props> = ({
  name,
  country,
  addressLocality,
  id,
  bank,
  whatsapp,
  postalCode,
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

interface Props {
  bank?: JSX.Element
  name?: string
  email?: string
  country?: string
  whatsapp?: string
  postalCode?: string
  addressRegion?: string
  streetAddress?: string
  addressLocality?: string
  id?: string
  telephone?: string
  className?: string
}

export default Address
