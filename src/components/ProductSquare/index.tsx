import React from "react"
import Header from "../Header";
import { Image } from "react-bootstrap"
import { Link, injectIntl } from "gatsby-plugin-intl"

import * as styles from './styles.module.scss';

const ProductSquare = ({ image, url, name, width, height, weight, price, description, intl: { formatNumber } }: Props) => {
  const Tag = url ? Link : 'div';
  
  return (
    <Tag to={url} className={`${styles.container} ${url && styles.containerWithHover}`}>
      <div className={styles.image}>
        <Image src={image} />
      </div>
      <Header as="h5">{name}</Header>
      <div className="text-muted small">
        {description && <p>{description}</p>}
        {width && <div><strong>Larghezza:</strong> {formatNumber(width)} cm.</div>}
        {height && <div><strong>Altezza: </strong> {formatNumber(height)} cm.</div>}
        {weight && <div><strong>Peso: </strong> {formatNumber(weight)} kg.</div>}
      </div>
      {price && <strong>{formatNumber(price, { style: 'currency', currency: 'EUR' })}</strong>}
    </Tag>
  )
}

interface Props {
  description: string;
  name: string;
  width?: number;
  height?: number;
  weight?: number;
  price?: number;
  image: string;
  url: string;
  intl: any;
}

export default injectIntl(ProductSquare)
