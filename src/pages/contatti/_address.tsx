import { Data } from "@components"
import { Trans } from "@lingui/macro"
import { Link, Typography, Box } from "@mui/material"
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
    <div itemScope itemType="http://schema.org/ContactPoint" {...props}>
      <Typography itemProp="name" gutterBottom={true} fontWeight="bold">
        {name}
      </Typography>

      {hasAddress && (
        <Box itemScope itemType="http://schema.org/PostalAddress" mb={1}>
          <div itemProp="streetAddress">{streetAddress}</div>
          <span itemProp="addressLocality">{addressLocality}</span>
          <br />
          <span itemProp="postalCode">{postalCode}</span>, <span itemProp="addressRegion">{addressRegion}</span> (
          <span itemProp="addressCountry">{country}</span>)
        </Box>
      )}

      {id && <Data label={<Trans>Codice Fiscale e Partita IVA</Trans>} value={id} />}

      {telephone && (
        <Data
          label={<Trans>Telefono</Trans>}
          value={
            <Link underline="hover" itemProp="telephone" href={`tel:${telephone.replace(/ /g, "")}`}>
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
            <Link underline="hover" itemProp="email" href={`mailto:${email}`}>
              {email}
            </Link>
          }
        />
      )}

      {bank && (
        <Data
          label={<Trans>Banca</Trans>}
          value={
            <Link underline="hover" itemProp="bank">
              {bank}
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
