import { t } from "@lingui/macro"
import React from "react"
import { Gallery } from "components"
import { Picture } from "components/ModalGallery"

const TecnoexerciserGallery = () => {
  const IMAGES: Picture[] = [
    {
      src: require("assets/products/giostre/tecnoexerciser/gallery/giostra-1.jpg").default,
      caption: t`Giostra`,
    },
    {
      src: require("assets/products/giostre/tecnoexerciser/gallery/giostra-2.jpg").default,
      caption: t`Giostra`,
    },
    {
      src: require("assets/products/giostre/tecnoexerciser/gallery/motore-3.jpg").default,
      caption: t`Motore`,
    },
    {
      src: require("assets/products/giostre/tecnoexerciser/gallery/solo-motore.jpg").default,
      caption: t`Giostra solo motore`,
    },
    {
      src: require("assets/products/giostre/tecnoexerciser/gallery/tecnofence-1.jpg").default,
      caption: t`Giostra con corridoio TECNOFENCE`,
    },
    {
      src: require("assets/products/giostre/tecnoexerciser/gallery/porta-mobile-1.jpg").default,
      caption: t`Porta mobile`,
    },
    {
      src: require("assets/products/giostre/tecnoexerciser/gallery/porta-mobile-2.jpg").default,
      caption: t`Porta mobile`,
    },
  ]

  return <Gallery images={IMAGES} />
}

export default TecnoexerciserGallery
