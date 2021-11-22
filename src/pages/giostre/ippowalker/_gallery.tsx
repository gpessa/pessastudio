import { t } from "@lingui/macro"
import React from "react"
import { Gallery } from "components"
import { Picture } from "components/ModalGallery"

const IppowalkerGallery = () => {
  const IMAGES: Picture[] = [
    {
      src: require("assets/products/giostre/ippowalker/gallery/ingresso.jpg").default,
      caption: t`Entrata`,
    },
    {
      src: require("assets/products/giostre/ippowalker/gallery/giostra-01.jpg").default,
      caption: t`Giostra Ippowalker`,
    },
    {
      src: require("assets/products/giostre/ippowalker/gallery/porte-elettrificate.jpg").default,
      caption: t`Porte elettrificate`,
    },
  ]

  return <Gallery images={IMAGES} />
}

export default IppowalkerGallery
