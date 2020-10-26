import { makeStyles } from '@material-ui/core';
import { Link } from 'gatsby-plugin-intl';
import { CarouselContext } from 'pure-react-carousel';
import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { TH } from '@components';
import { COLORS } from "@theme";

type Props = {
  readonly index: number
  description: string
  url: string
  image: string,
  name: string
}

const useStyles = makeStyles(theme => ({
  root: {
    transition: theme.transitions.create(
      ['opacity', 'transform'],
      { duration: theme.transitions.duration.short }
    ),
    justifyContent: 'flex-end',
    padding: theme.spacing(3),
    flexDirection: 'column',
    backgroundSize: 'cover',
    textDecoration: 'none',
    color: COLORS.WHITE,
    display: 'flex',
    height: '100%',
    '&:hover': {
      color: COLORS.WHITE,
      transform: 'scale(1.03)'
    }
  }
}))

const ProductItem: React.FC<Props> = (props) => {
  const { index } = props
  const carouselContext = useContext(CarouselContext);
  const [currentSlide, setCurrentSlide] = useState(carouselContext.state.currentSlide);
  const classes = useStyles()

  useEffect(() => {
    function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide);
    }
    carouselContext.subscribe(onChange);
    return () => carouselContext.unsubscribe(onChange);
  }, [carouselContext]);

  return (
    <Link to={props.url}
      className={classes.root}
      style={{
        backgroundImage: `url(${props.image})`,
        marginRight: index < (carouselContext.state.totalSlides - 1) ? 20 : 0,
        opacity: index >= currentSlide ? 1: 0
      }}
    >
      <TH variant="h4">{props.name}</TH>
      {props.description}
    </Link>
  )
}

export default ProductItem