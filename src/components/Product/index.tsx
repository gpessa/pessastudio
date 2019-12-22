import React, { ReactNode } from "react"
import { Link, injectIntl } from "gatsby-plugin-intl"

import * as styles from "./styles.module.scss"
import { Colors } from "../../constants"
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

const Description = ({ description }: { description?: string }) => (!description ? null : <p>{description}</p>)

const Data = injectIntl(
  ({ value, label, intl: { formatMessage } }: { value: number; label: string; unit: string; intl: any }) => (
    <div className={styles.data}>
      <span className={styles.dataLabel}>{formatMessage({ id: label })}:</span> {value}
    </div>
  )
)

const Product = ({
  image,
  url,
  name,
  width,
  height,
  material,
  depth,
  weight,
  colors,
  thickness,
  length,
  price,
  description,
  className,
  intl: { formatMessage, formatNumber },
}: Props) => {
  const Tag = url ? Link : "div"

  return (
    <Tag to={url} className={`${styles.container} ${className}`}>
      <img src={image} className={styles.image} />

      <div className={styles.data}>
        <h6 className={styles.title}>{name}</h6>

        <Description description={description} />

        {material && <Data label={formatMessage({ id: "PRODUCT_material" })} value={material} />}
        {width && <Data label={formatMessage({ id: "PRODUCT_width" })} value={`${formatNumber(width)} cm.`} />}
        {height && <Data label={formatMessage({ id: "PRODUCT_height" })} value={`${formatNumber(height)} cm.`} />}
        {length && <Data label={formatMessage({ id: "PRODUCT_length" })} value={`${formatNumber(length)} cm.`} />}
        {depth && <Data label={formatMessage({ id: "PRODUCT_depth" })} value={`${formatNumber(depth)} cm.`} />}
        {thickness && (
          <Data label={formatMessage({ id: "PRODUCT_thickness" })} value={`${formatNumber(thickness)} cm.`} />
        )}
        {weight && <Data label={formatMessage({ id: "PRODUCT_weight" })} value={`${formatNumber(weight)} kg.`} />}

        <Color colors={colors} />

        <Price price={price} />
      </div>
    </Tag>
  )
}

interface Props {
  className?: string
  colors?: Colors[]
  description?: string | ReactNode
  weight?: number
  height?: number
  thickness?: number
  width?: number
  length?: number
  price?: number
  image: string
  name: string
  url?: string
  intl?: any
  depth?: number
  material?: string
}

export default injectIntl(Product)
