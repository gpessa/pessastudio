import React, { ReactNode } from "react"
import Header from "../Header"
import { Link, injectIntl } from "gatsby-plugin-intl"

import * as styles from "./styles.module.scss"
import { Colors, Ratio } from "../../constants"
import ImageModal from "../ImageModal"

const Price = injectIntl(({ price, intl: { formatNumber } }) =>
  !price ? null : (
    <div className={styles.price}>
      {formatNumber(price, { style: "currency", currency: "EUR" })} <span className={styles.priceVat}>+ IVA</span>
    </div>
  )
)

const Color = ({ colors }: { colors?: Colors[] }) =>
  !colors ? null : (
    <div className={styles.data}>
      <span className={styles.dataLabel}>Colors:</span>{" "}
      {colors.map(backgroundColor => (
        <div className={styles.color} style={{ backgroundColor }} key={backgroundColor}></div>
      ))}
    </div>
  )

const Description = ({ description }: { description: string | ReactNode | null }) => (!description ? null : <p>{description}</p>)

const Data = injectIntl(({ value, label, unit, intl: { formatMessage, formatNumber } }: { value: number; label: string; unit: string; intl: any }) =>
  !value ? null : (
    <div className={styles.data}>
      <span className={styles.dataLabel}>{formatMessage({ id: label })}:</span> {formatNumber(value)} {unit}.
    </div>
  )
)

const Product = ({ image, url, name, width, height, diameter,  weight, colors, thickness, length, price, ratio, description, className }: Props) => {
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

        <Color colors={colors} />

        <Price price={price} />
      </div>
    </Tag>
  )
}

interface Props {
  ratio?: Ratio
  className?: string
  colors?: Colors[]
  description?: string | ReactNode | null
  weight?: number
  height?: number
  thickness?: number
  width?: number
  length?: number
  diameter?: number
  price?: number
  image: string
  name: string
  url?: string
  intl?: any
}

export default Product
