import { t } from "@lingui/macro";
import { Gallery } from "components";

import { useLingui } from "@lingui/react";
import productsGiostreTecnoexerciserGalleryGiostra_1 from "assets/products/giostre/tecnoexerciser/gallery/giostra-1.jpg";
import productsGiostreTecnoexerciserGalleryGiostra_2 from "assets/products/giostre/tecnoexerciser/gallery/giostra-2.jpg";
import productsGiostreTecnoexerciserGalleryMotore_3 from "assets/products/giostre/tecnoexerciser/gallery/motore-3.jpg";
import productsGiostreTecnoexerciserGalleryPortaMobile_1 from "assets/products/giostre/tecnoexerciser/gallery/porta-mobile-1.jpg";
import productsGiostreTecnoexerciserGalleryPortaMobile_2 from "assets/products/giostre/tecnoexerciser/gallery/porta-mobile-2.jpg";
import productsGiostreTecnoexerciserGallerySoloMotore from "assets/products/giostre/tecnoexerciser/gallery/solo-motore.jpg";
import productsGiostreTecnoexerciserGalleryTecnofence_1 from "assets/products/giostre/tecnoexerciser/gallery/tecnofence-1.jpg";

const TecnoexerciserGallery = () => {
  useLingui(); // Fix on locale change

  const IMAGES: Picture[] = [
    {
      image: productsGiostreTecnoexerciserGalleryGiostra_1,
      caption: t`Giostra`,
    },
    {
      image: productsGiostreTecnoexerciserGalleryGiostra_2,
      caption: t`Giostra`,
    },
    {
      image: productsGiostreTecnoexerciserGalleryMotore_3,
      caption: t`Motore`,
    },
    {
      image: productsGiostreTecnoexerciserGallerySoloMotore,
      caption: t`Giostra solo motore`,
    },
    {
      image: productsGiostreTecnoexerciserGalleryTecnofence_1,
      caption: t`Giostra con corridoio TECNOFENCE`,
    },
    {
      image: productsGiostreTecnoexerciserGalleryPortaMobile_1,
      caption: t`Porta mobile`,
    },
    {
      image: productsGiostreTecnoexerciserGalleryPortaMobile_2,
      caption: t`Porta mobile`,
    },
  ];

  return <Gallery images={IMAGES} />;
};

export default TecnoexerciserGallery;
