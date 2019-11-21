import React from "react"
import Header from "../Header";
import { Image } from "react-bootstrap"
import { Link } from "gatsby-plugin-intl"

const styles = require('./styles.scss');

const ProductSquare = ({ id, image, name, description }) => (
  <Link to={`/${id}`} className={styles.container}>
    <div className={styles.image}>
      <Image src={image} />
    </div>
    <Header as="h5">{name}</Header>
    <div className="text-muted small">{description}</div>
  </Link>
)

export default ProductSquare
