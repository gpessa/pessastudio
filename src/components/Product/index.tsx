import { Link, useIntl } from 'gatsby-plugin-intl';
import React, { ReactNode } from 'react';

import { ModalGallery, TH } from '@components';
import { Colors, Material } from '@constants';
import { ButtonBase, Grid, makeStyles } from '@material-ui/core';
import { BREAKPOINT, COLORS, PRODUCT_GUTTER } from '@theme';

import ColorsList from './ColorsList';
import Data from './Data';
import MaterialsList from './MaterialsList';
import Price from './Price';

const useStyles = makeStyles(theme => ({
  container: {
    transform: 'scale(1)'
  },
  data: {
    display: 'flex',
    minHeight: '100%',
    flexDirection: 'column',
    marginTop: ({ vertical }: { vertical: boolean }) => vertical ? -theme.spacing(2) : theme.spacing(2),
    order: -1,
    [theme.breakpoints.up(BREAKPOINT)]: {
      order: 'unset'
    }
  },
  button: {
    boxShadow: `inset 0 0 0 2px ${theme.palette.divider}`,
    backgroundColor: theme.palette.common.white,
    paddingBottom: '100%',
    position: 'relative',
    width: '100%',
  },
  image: {
    top: 0,
    padding: 2,
    width: '100%',
    marginTop: '50%',
    position: 'absolute',
    transform: 'translateY(-50%)',
  },
  title: {
    color: COLORS.BLACK,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(1),
  }
}))

const Product = ({ images, vertical, price, url, name, description, ...attributes }: Props) => {
  const Tag = url ? Link : "div"
  const span = vertical ? 12 : (12 / (images.length + 1))
  const { formatMessage, formatNumber } = useIntl()
  const classes = useStyles({ vertical })

  return (
    <ModalGallery images={images} render={({ images, open }) => (
      <Tag to={url} className={`${classes.container}`}>
        <Grid container spacing={PRODUCT_GUTTER}>
          {images.map(image => (
            <Grid item xs={6} md={span} key={image.src} onClick={() => open(image)}>
              <ButtonBase className={classes.button}>
                <img src={image.src} alt={image.caption || name} className={classes.image} />
              </ButtonBase>
            </Grid>
          ))}
          <Grid item xs={12} md={span} className={classes.data}>
            <TH variant="h6" sans className={classes.title}>{name}</TH>

            {description && <div dangerouslySetInnerHTML={{ __html: description }} />}

            {Object
              .keys(attributes)
              .sort()
              .map(name => {
                let valueToPrint

                switch (name) {
                  case "materials":
                    valueToPrint = <MaterialsList materials={attributes[name]!} />
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

                  case "colors":
                    valueToPrint = <ColorsList colors={attributes[name]!} />
                    break
                }
                return (
                  <Data
                    key={name}
                    label={formatMessage({ id: `PRODUCT__attributo__${name}` })}
                    value={valueToPrint}
                  />
                )
              })}

            <Price price={price} />
          </Grid>
        </Grid>
      </Tag>
    )} />
  )
}

interface Props {
  images: Picture[]
  colors?: Colors[]
  materials?: Material[]
  name: string
  description?: string | ReactNode
  depth?: number
  diameter?: number
  height?: number
  length?: number
  vertical?: boolean
  thickness?: number
  url?: string
  weight?: number
  width?: number
  price?: number
}

export default Product
