

import { CarouselContext } from 'pure-react-carousel';
import { useContext, useEffect, useState } from 'react';
import { COLORS } from '@theme';

import { makeStyles, Slider } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  slider: {
    flex: 1,
    marginRight: theme.spacing(5)
  },
  total: {
    color: COLORS.GREY1
  }
}));

const ProductSelector: React.FC<{ className?: string }> = ({ className }) => {
  const carouselContext = useContext(CarouselContext);
  const [currentSlide, setCurrentSlide] = useState(carouselContext.state.currentSlide);
  const { totalSlides, visibleSlides } = carouselContext.state 
  const classes = useStyles()
  
  useEffect(() => {
    function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide);
    }
    carouselContext.subscribe(onChange);
    return () => carouselContext.unsubscribe(onChange);
  }, [carouselContext]);

  return (
    <div className={`${classes.root} ${className}`}>
      <Slider
        marks
        min={0}
        step={1}
        value={currentSlide}
        valueLabelDisplay="off"
        className={classes.slider}
        max={totalSlides - (visibleSlides)}
        onChange={(_, currentSlide) => carouselContext.setStoreState({
          currentSlide: currentSlide as number
        })}
      />
      <div>
        <strong>{currentSlide + 1}</strong>
        <span className={classes.total}> / {totalSlides}</span>
      </div>
    </div>
  )
}

export default ProductSelector