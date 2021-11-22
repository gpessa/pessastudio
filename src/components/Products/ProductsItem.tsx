import { TH } from "components"
import { Box, styled, Typography } from "@mui/material"
import { CarouselContext } from "pure-react-carousel"
import React, { ReactElement, useContext, useEffect, useState } from "react"
import { LocalizedLink } from "gatsby-theme-i18n"
import { BREAKPOINT } from "theme"
import { Link } from "gatsby-material-ui-components"

type Props = {
  readonly index: number
  description?: ReactElement | string
  image: string
  name: string
  url: string
}

const ImgStyled = styled("img")(({ theme }) => ({
  width: "100%",
}))

const BoxStyled = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(256, 256, 256, 0.8)",
  padding: theme.spacing(3),
}))

const DescriptionStyled = styled(Typography)(({ theme }) => ({
  minHeight: `${theme.typography.body1.lineHeight * 3}rem`,
}))

const LinkStyled = styled(Link)<{ index: number; visible: boolean }>(({ theme, visible }) => ({
  "transition": theme.transitions.create(["opacity", "transform"], {
    duration: theme.transitions.duration.short,
  }),
  "justifyContent": "flex-end",
  "flexDirection": "column",
  "display": "flex",
  "opacity": visible ? 1 : 0,
  "&:hover": {
    transform: "scale(1.03)",
  },
  "marginRight": 30,
  [theme.breakpoints.up(BREAKPOINT)]: {
    marginRight: 0,
    marginLeft: 30,
  },
}))

const ProductsItem: React.FC<Props> = props => {
  const { index, name, description, image, url } = props
  const carouselContext = useContext(CarouselContext)
  const [currentSlide, setCurrentSlide] = useState(carouselContext.state.currentSlide)
  const visible = index >= currentSlide

  useEffect(() => {
    function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide)
    }
    carouselContext.subscribe(onChange)
    return () => carouselContext.unsubscribe(onChange)
  }, [carouselContext])

  return (
    <LinkStyled to={url} visible={visible} underline="none" component={LocalizedLink}>
      <ImgStyled src={image} alt={name} />
      <BoxStyled>
        <TH variant="h6" sans sx={{ textTransform: "uppercase" }}>
          {name}
        </TH>
        <DescriptionStyled>{description}</DescriptionStyled>
      </BoxStyled>
    </LinkStyled>
  )
}

export default ProductsItem
