import React from "react"
import { withIntl } from "gatsby-plugin-intl"

const styles = require('./styles.scss');

const ProductCard = ({ image, name, description, price, intl: { formatNumber } }) => (
  <div className={styles.container}>
    
    <img className={styles.image} src={image} alt={name}/>
    
    <div className={styles.info}>
      <div className={styles.description}>
        <h5>{name}</h5>
        {description.map(li => <div>{li}</div>)}
      </div>
      {price && (
        <div className={styles.price}>
          <strong>{formatNumber(price, { style: 'currency', currency: 'EUR' })}</strong>
        </div>
      )}
    </div>

  </div>
)

export default withIntl(ProductCard)
