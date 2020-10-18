import React from "react"

import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Button } from "@material-ui/core";

const Address: React.FC<Props> = ({ name, country, addressLocality, whatsapp, postalCode, addressRegion, streetAddress, telephone, email, ...props }) => {
  const hasAddress = streetAddress != undefined

  return (
    <div itemScope itemType="http://schema.org/ContactPoint" {...props}>
      <strong itemProp="name">{name}</strong>

      {hasAddress && (
        <div itemScope itemType="http://schema.org/PostalAddress">
          <div itemProp="streetAddress">{streetAddress}</div>
          <span itemProp="addressLocality">{addressLocality}</span>,
          <span itemProp="postalCode" className="ml-1">
            {postalCode}
          </span>
          ,
          <span itemProp="addressRegion" className="ml-1 mr-1">
            {addressRegion}
          </span>
          (<span itemProp="addressCountry">{country}</span>)
        </div>
      )}

      {telephone && (
        <div>
          <Button
            variant="text"
            color="inherit"
            itemProp="telephone"
            startIcon={<PhoneIcon />} 
            href={`tel:${telephone}`} 
          >{telephone}</Button>
        </div>
      )}

      {whatsapp && (
        <div>
          <Button
            variant="text" 
            color="inherit"
            startIcon={<WhatsAppIcon />} 
            href={`https://wa.me/${whatsapp}`}
          >{whatsapp}</Button>
        </div>
      )}

      {email && (
        <div>
          <Button
            variant="text" 
            color="inherit"
            itemProp="email"
            startIcon={<MailOutlineIcon />} 
            href={`mailto:${email}`} 
          >{email}</Button>
        </div>
      )}
    </div>
  )
}

interface Props {
  name?: string
  email?: string
  country?: string
  whatsapp?: string
  postalCode?: string
  addressRegion?: string
  streetAddress?: string
  addressLocality?: string
  telephone?: string
  className?: string
}

export default Address
