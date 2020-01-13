import React from "react"
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import * as styles from "./styles.module.scss"

const Address = ({ name, country, addressLocality, whatsapp, postalCode, addressRegion, streetAddress, telephoneMobile, email }: Props) => {
  const hasAddress = streetAddress != undefined

  return (
    <div itemScope itemType="http://schema.org/ContactPoint">
      <h6 itemProp="name" className="mb-1">{name}</h6>

      {hasAddress && (
        <div itemScope itemType="http://schema.org/PostalAddress">
          <div itemProp="streetAddress">{streetAddress}</div>
          <span itemProp="addressLocality">{addressLocality}</span>,
          <span itemProp="postalCode" className="ml-1">{postalCode}</span>,
          <span itemProp="addressRegion" className="ml-1 mr-1">{addressRegion}</span>
          (<span itemProp="addressCountry">{country}</span>)
        </div>
      )}
      
      {telephoneMobile && (
        <div className="mt-2">
          <a className={styles.link} itemProp="telephone" href={`tel:${telephoneMobile}`}>
            <FontAwesomeIcon icon={faPhone} className="mr-2" /> {telephoneMobile}</a>
        </div>
      )}

      {whatsapp && (
        <div className="mt-2">
          <a className={styles.link} href={`https://wa.me/15551234567:${whatsapp}`}>
            <FontAwesomeIcon icon={faWhatsapp} className="mr-2" /> {whatsapp}</a>
        </div>
      )}

      {email && (
        <div className="mt-2">
          <a className={styles.link} itemProp="email" href={`mailto:${email}`}>
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> {email}
          </a>
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
  telephoneMobile?: string
}

export default Address