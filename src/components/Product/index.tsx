import { Link } from "gatsby-plugin-intl"
import React, { ReactNode } from "react"

import { Colors, Material, Ratio } from "@constants"
import ImageModal from "../ImageModal"
import * as styles from "./styles.module.scss"

import Price from "./Price"
import Description from "./Description"
import MaterialsList from "./MaterialsList"
import ColorsList from "./ColorsList"
import Data from "./Data"

const Product = ({ image, materials, url, name, depth, width, height, diameter, weight, colors, thickness, length, price, ratio, description, className }: Props) => {
  const Tag = url ? Link : "div"

  return (
    <Tag to={url} className={`${styles.container} ${className}`}>
      <div className={`${styles.image} ${styles[ratio || Ratio.SQUARE]}`} style={{ backgroundImage: `url(${image})` }}></div>

      <div>
        <h6 className={styles.title}>{name}</h6>
        <Description description={description} />
        <Data value={width} label="PRODUCT__attributo__width" unit="mm" />
        <Data value={height} label="PRODUCT__attributo__height" unit="mm" />
        <Data value={length} label="PRODUCT__attributo__length" unit="mm" />
        <Data value={depth} label="PRODUCT__attributo__depth" unit="mm" />
        <Data value={diameter} label="PRODUCT__attributo__diameter" unit="mm" />
        <Data value={thickness} label="PRODUCT__attributo__thickness" unit="mm" />
        <Data value={weight} label="PRODUCT__attributo__weight" unit="kg" />
        <MaterialsList materials={materials} />
        <ColorsList colors={colors} />
        <Price price={price} />
      </div>
    </Tag>
  )
}

interface Props {
  name: string
  description?: string | ReactNode
  className?: TemplateStringsArray
  depth?: Number
  diameter?: number
  height?: number
  image: string
  length?: number
  ratio?: Ratio
  thickness?: number
  url?: string
  weight?: number
  width?: number
  colors?: Colors[]
  materials?: Material[]
  price?: number
}

export default Product
