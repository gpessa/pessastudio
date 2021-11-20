import { t } from "@lingui/macro"
import React from "react"
import { Gallery } from "src/components"
import { Picture } from "src/components/ModalGallery"

const TecnoexerciserGallery = () => {
  const IMAGES: Picture[] = [
    {
      src: require("src/assets/products/giostre/tecnoexerciser/gallery/giostra-1.jpg").default,
      caption: t`Giostra`,
    },
    {
      src: require("src/assets/products/giostre/tecnoexerciser/gallery/giostra-2.jpg").default,
      caption: t`Giostra`,
    },
    {
      src: require("src/assets/products/giostre/tecnoexerciser/gallery/motore-3.jpg").default,
      caption: t`Motore`,
    },
    {
      src: require("src/assets/products/giostre/tecnoexerciser/gallery/solo-motore.jpg").default,
      caption: t`Giostra solo motore`,
    },
    {
      src: require("src/assets/products/giostre/tecnoexerciser/gallery/tecnofence-1.jpg").default,
      caption: t`Giostra con corridoio TECNOFENCE`,
    },
    {
      src: require("src/assets/products/giostre/tecnoexerciser/gallery/porta-mobile-1.jpg").default,
      caption: t`Porta mobile`,
    },
    {
      src: require("src/assets/products/giostre/tecnoexerciser/gallery/porta-mobile-2.jpg").default,
      caption: t`Porta mobile`,
    },
  ]

  return <Gallery images={IMAGES} />
}

export default TecnoexerciserGallery
