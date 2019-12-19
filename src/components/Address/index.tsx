import React from "react"

import * as styles from "./styles.module.scss"

const Address = ({ name, country, addressLocality, postalCode, addressRegion, streetAddress, telephoneMobile, email }: Props) => (
  <div itemScope itemType="http://schema.org/ContactPoint">
    <div itemScope itemType="http://schema.org/PostalAddress">
      <div itemProp="name">{name}</div>
      <div itemProp="streetAddress">{streetAddress}</div>
      <span itemProp="addressLocality">{addressLocality}</span>, 
      <span itemProp="postalCode" className="ml-1">{postalCode}</span>, 
      <span itemProp="addressRegion" className="ml-1 mr-1">{addressRegion}</span>
      (<span itemProp="addressCountry">{country}</span>)
    </div>
    
    {telephoneMobile && (
      <div className="mt-2">
        <a className={styles.link} itemProp="telephone" href={`tel:${telephoneMobile}`}>Tel: {telephoneMobile}</a>
      </div>
    )}

    {email && (
        <div>
        <a className={styles.link} itemProp="email" href={`mailto:${email}`}>Email: {email}</a>
      </div>
    )}
  </div>
)

interface Props {
  name: string
  email?: string
  country: string
  postalCode: string
  addressRegion: string
  streetAddress: string
  addressLocality: string
  telephoneMobile?: string
}

export default Address
