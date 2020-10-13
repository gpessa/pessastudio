import React from 'react';
import { Figure } from 'react-bootstrap';
import { WithInjectedModalGalleryProps } from 'src/hoc/withModalGallery';

import { withModalGallery } from '@hoc';
import { Grid } from '@material-ui/core';

import * as styles from './styles.module.scss';

const Gallery = withModalGallery(({ images, open }: WithInjectedModalGalleryProps) => (
  <Grid container>
    {images.map((image, index) => (
      <Grid item md={6} key={index}>
        <Figure onClick={() => open(image)} className={styles.galleryItem}>
          <Figure.Image src={image.src} className={styles.galleryItemImage} />
          <Figure.Caption>{image.caption}</Figure.Caption>
        </Figure>
      </Grid>
    ))}
  </Grid>
))

export default Gallery
