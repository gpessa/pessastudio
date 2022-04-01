import { Box, styled, Slider } from "@mui/material"
import { CarouselContext } from "pure-react-carousel"
import React, { useContext, useEffect, useState } from "react"

const SliderStyled = styled(Slider)(({ theme }) => ({
  flex: 1,
}))

const TotalStyled = styled("span")(({ theme }) => ({
  color: theme.palette.grey[500],
}))

const ProductSelector: React.FC<{ className?: string }> = ({ className }) => {
  const carouselContext = useContext(CarouselContext)
  const [currentSlide, setCurrentSlide] = useState(carouselContext.state.currentSlide)
  const { totalSlides, visibleSlides } = carouselContext.state

  useEffect(() => {
    function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide)
    }
    carouselContext.subscribe(onChange)
    return () => carouselContext.unsubscribe(onChange)
  }, [carouselContext])

  return (
    <Box className={className} alignItems="center">
      <SliderStyled
        marks
        min={0}
        step={1}
        value={currentSlide}
        valueLabelDisplay="off"
        max={totalSlides - visibleSlides}
        onChange={(_, currentSlide) =>
          carouselContext.setStoreState({
            currentSlide: currentSlide as number,
          })
        }
      />
      <div>
        <strong>{currentSlide + 1}</strong>
        <TotalStyled> / {totalSlides}</TotalStyled>
      </div>
    </Box>
  )
}

export default ProductSelector
