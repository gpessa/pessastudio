import { Link } from "gatsby-plugin-intl"
import React, { ReactNode } from "react"

import { Colors, Material, Ratio } from "@constants"
import ImageModal from "../ImageModal"
import * as styles from "./styles.module.scss"

import { IntlFormatters } from "react-intl"
import { injectIntl } from "gatsby-plugin-intl"
import Price from "./Price"
import Description from "./Description"
import MaterialsList from "./MaterialsList"
import ColorsList from "./ColorsList"
import Data from "./Data"

const Product = ({ image, price, url, name, ratio, description, className, intl: { formatMessage, formatNumber }, ...attributes }: Props) => {
  const Tag = url ? Link : "div"

  return (
    <Tag to={url} className={`${styles.container} ${className}`}>
      <div className={`${styles.image} ${styles[ratio || Ratio.SQUARE]}`} style={{ backgroundImage: `url(${image})` }}></div>
      <h6 className={styles.title}>{name}</h6>
      <Description description={description} />

      {Object.keys(attributes).map(name => {
        let valueToPrint

        switch (name) {
          case "materials":
            valueToPrint = <MaterialsList materials={attributes[name]!} />
            break

          case "colors":
            valueToPrint = <ColorsList colors={attributes[name]!} />
            break

          case "weight":
            valueToPrint = formatNumber(attributes[name]!, { style: "unit", unit: "kilogram" })
            break

          case "diameter":
          case "thickness":
          case "height":
          case "length":
          case "depth":
          case "width":
            valueToPrint = formatNumber(attributes[name]! / 10, { style: "unit", unit: "centimeter" })
            break
        }
        return <Data key={name} label={formatMessage({ id: `PRODUCT__attributo__${name}` })} value={valueToPrint} />
      })}

      <Price price={price} />
    </Tag>
  )
}

interface Props {
  intl: IntlFormatters
  colors?: Colors[]
  materials?: Material[]
  name: string
  description?: string | ReactNode
  className?: TemplateStringsArray
  depth?: number
  diameter?: number
  height?: number
  image: string
  length?: number
  ratio?: Ratio
  thickness?: number
  url?: string
  weight?: number
  width?: number
  price?: number
}

export default injectIntl(Product)
