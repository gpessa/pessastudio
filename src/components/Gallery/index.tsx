import React from 'react';
import { WithInjectedModalGalleryProps } from 'src/hoc/withModalGallery';

import { withModalGallery } from '@hoc';
import { Grid, makeStyles, Typography, ButtonBase } from '@material-ui/core';


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

const Gallery = withModalGallery(({ images, open }: WithInjectedModalGalleryProps) => {
  const classes = useStyles()

  return (
    <Grid container spacing={5}>
      {images.map((image, index) => (
        <Grid item xs={6} key={index}>
          <ButtonBase onClick={() => open(image)} className={classes.item}>
            <img src={image.src} className={classes.image} />
            <Typography variant="caption" gutterBottom={false}>{image.caption}</Typography>
          </ButtonBase>
        </Grid>
      ))}
    </Grid>
  )
})

export default Gallery
