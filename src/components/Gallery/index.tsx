import React from 'react';
import { Grid, makeStyles, Typography, ButtonBase, GridProps } from '@material-ui/core';
import { PRODUCT_GUTTER } from '@theme';
import { ModalGallery } from "@components"

const useStyles = makeStyles(theme => ({
  item: {
    display: 'block',
    textAlign: 'left'
  },
  image: {
    width: '100%',
    border: `2px solid ${theme.palette.divider}`,
  }
}));

type Props = {
  images: Picture[]
} & Pick<GridProps, 'xs' | 'md'>

const Gallery: React.FC<Props> = ({ images, xs = 6, md = 6 }) => {
  const classes = useStyles()

  return (
    <ModalGallery 
      images={images}
      render={({ open, images }) => (
        <Grid container spacing={PRODUCT_GUTTER}>
          {images.map((image, index) => (
            <Grid item xs={xs} md={md} key={index}>
              <ButtonBase onClick={() => open(image)} className={classes.item} component="figure">
                <img src={image.src} className={classes.image} />
                <Typography variant="caption" gutterBottom={false} component="figcaption">{image.caption}</Typography>
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
      )}
    />
  )
}

export default Gallery
