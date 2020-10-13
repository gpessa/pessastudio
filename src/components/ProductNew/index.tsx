import { injectIntl, Link } from 'gatsby-plugin-intl';
import React, { ReactNode } from 'react';
import { Image, Button } from 'react-bootstrap';
import { IntlFormatters } from 'react-intl';
import { WithInjectedModalGalleryProps } from 'src/hoc/withModalGallery';

import { Colors, Material } from '@constants';
import { withModalGallery } from '@hoc';

import ColorsList from './ColorsList';
import Data from './Data';
import Description from './Description';
import MaterialsList from './MaterialsList';
import Price from './Price';
import * as styles from './styles.module.scss';
import { Grid } from '@material-ui/core';

const Product = withModalGallery(({ images, open, vertical, price, url, name, description, intl: { formatMessage, formatNumber }, ...attributes }: Props) => {
  const Tag = url ? Link : "div"
  const span = vertical ? 12 : (12 / (images.length + 1))

  return (
    <Tag to={url} className={`${styles.container}`}>
      <Grid container className={`${styles.image} align-items-center`}>
        {images.map(image => (
          <Grid item xs={{ span }} key={image.src}>
            <Button onClick={() => open(image)} variant="link" className="p-0">
              <Image fluid src={image.src} alt={name} className="w-100"/>
            </Button>
          </Grid>
        ))}
        <Grid item xs={{ span }}>
          <div className={styles.data}>
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
          </div>
        </Grid>
      </Grid>
    </Tag>
  )
})

interface Props extends WithInjectedModalGalleryProps {
  intl: IntlFormatters
  colors?: Colors[]
  materials?: Material[]
  name: string
  description?: string | ReactNode
  depth?: number
  diameter?: number
  height?: number
  length?: number
  vertical: boolean
  thickness?: number
  url?: string
  weight?: number
  width?: number
  price?: number
}

export default injectIntl(Product)
