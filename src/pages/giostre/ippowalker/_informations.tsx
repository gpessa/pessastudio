import { Trans } from "@lingui/macro"
import React from "react"
import { Picture } from "src/components/ModalGallery"

export const IMAGES: Picture[] = [
  {
    src: require("src/assets/products/giostre/ippowalker/gallery/ingresso.jpg").default,
    caption: <Trans id="Entrata" />,
  },
  {
    src: require("src/assets/products/giostre/ippowalker/gallery/giostra-01.jpg").default,
    caption: <Trans id="Giostra Ippowalker" />,
  },
  {
    src: require("src/assets/products/giostre/ippowalker/gallery/porte-elettrificate.jpg").default,
    caption: <Trans id="Porte elettrificate" />,
  },
]
