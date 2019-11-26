import React from "react"
import Header from "../Header";
import { Link, injectIntl } from "gatsby-plugin-intl"

import * as styles from './styles.module.scss';
import { Colors } from "../../constants";

const ProductSquare = ({ image, url, name, width, height, weight, colors, price, description, className, intl: { formatNumber } }: Props) => {
  const Tag = url ? Link : 'div';

  return (
    <Tag to={url} className={`${styles.container} ${url && styles.containerWithHover} ${className}`}>
      <div className={styles.image} style={{ backgroundImage: `url(${image})` }}></div>
      <Header as="h5" className={styles.title}>{name}</Header>
      <div className="text-muted small">
        {description && <p>{description}</p>}
        {length && <div><span className={styles.label}>Altezza: </span>{formatNumber(length)} cm.</div>}
        {width && <div><span className={styles.label}>Larghezza:</span> {formatNumber(width)} cm.</div>}
        {height && <div><span className={styles.label}>Altezza: </span>{formatNumber(height)} cm.</div>}
        {weight && <div><span className={styles.label}>Peso: </span>{formatNumber(weight)} kg.</div>}
        {colors && (
          <div>
            <span className={styles.label}>Colors:</span> {colors.map(backgroundColor => (<div className={styles.color} style={{ backgroundColor }}></div>))}
          </div>
        )}
      </div>
      {price && <div className={styles.price}>{formatNumber(price, { style: 'currency', currency: 'EUR' })} <span className={styles.priceVat}>+ IVA</span></div>}
    </Tag>
  )
}


interface Props {
  className?: string;
  colors: Colors[];
  description: string;
  weight?: number;
  height?: number;
  width?: number;
  length?: number;
  price?: number;
  image: string;
  name: string;
  url: string;
  intl: any;
}

export default injectIntl(ProductSquare)
