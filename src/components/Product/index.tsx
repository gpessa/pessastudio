import { injectIntl, Link } from 'gatsby-plugin-intl';
import React, { ReactNode } from 'react';

import { Colors, Material, Ratio } from '../../constants';
import Header from '../Header';
import ImageModal from '../ImageModal';
import * as styles from './styles.module.scss';

const Price = injectIntl(({ price, intl: { formatNumber } }) =>
  !price ? null : (
    <div className={styles.price}>
      {formatNumber(price, { style: "currency", currency: "EUR" })} <span className={styles.priceVat}>+ IVA</span>
    </div>
  )
)

const ColorsList = injectIntl(({ colors, intl: { formatMessage } }: { colors?: Colors[], intl: any }) =>
  !colors ? null : (
    <div className={styles.data}>
      <span className={styles.dataLabel}>{formatMessage({ id: "PRODUCT__attributo__colors" })}:</span>{" "}
      {colors.map(backgroundColor => (
        <div className={styles.color} style={{ backgroundColor }} key={backgroundColor}></div>
      ))}
    </div>
  ))


const MaterialsList = injectIntl(({ materials, intl: { formatMessage } }: { materials?: Material[], intl: any }) =>
  !materials ? null : (
    <div className={styles.data}>
      <span className={styles.dataLabel}>{formatMessage({ id: "PRODUCT__attributo__materials" })}:</span>{" "}
      {materials.map(material => formatMessage({ id: `GENERAL__material__${material}` })).join(', ')}
    </div>
  ))


const Description = ({ description }: { description: string | ReactNode | null }) => (!description ? null : <p>{description}</p>)

const Data = injectIntl(({ value, label, unit, intl: { formatMessage, formatNumber } }: { value: number; label: string; unit: string; intl: any }) =>
  !value ? null : (
    <div className={styles.data}>
      <span className={styles.dataLabel}>{formatMessage({ id: label })}:</span> {formatNumber(value)} {unit}.
    </div>
  )
)

const Product = ({ image, materials, url, name, depth, width, height, diameter,  weight, colors, thickness, length, price, ratio, description, className }: Props) => {
  const Tag = url ? Link : "div"

  return (
    <Tag to={url} className={`${styles.container} ${className}`}>
      <div className={`${styles.image} ${styles[ratio || Ratio.SQUARE]}`} style={{ backgroundImage: `url(${image})` }}></div>

      <div className={styles.data}>
        <h6 className={styles.title}>{name}</h6>

        <Description description={description} />
        <Data value={thickness} label="PRODUCT__attributo__thickness" unit="mm" />
        <Data value={weight} label="PRODUCT__attributo__weight" unit="kg" />
        <Data value={length} label="PRODUCT__attributo__length" unit="mm" />
        <Data value={height} label="PRODUCT__attributo__height" unit="mm" />
        <Data value={width} label="PRODUCT__attributo__width" unit="mm" />
        <Data value={diameter} label="PRODUCT__attributo__diameter" unit="mm" />
        <Data value={depth} label="PRODUCT__attributo__depth" unit="mm" />
        <MaterialsList materials={materials} />
        <ColorsList colors={colors} />
        <Price price={price} />
      </div>
    </Tag>
  )
}

interface Props {
  className?: string
  colors?: Colors[]
  depth?: Number
  description?: string | ReactNode | null
  diameter?: number
  height?: number
  image: string
  intl?: any
  length?: number
  materials?: Material[]
  name: string
  price?: number
  ratio?: Ratio
  thickness?: number
  url?: string
  weight?: number
  width?: number
}

export default Product
