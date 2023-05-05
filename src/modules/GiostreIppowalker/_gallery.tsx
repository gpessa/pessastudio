import { t } from "@lingui/macro";
import { Gallery } from "components";

import { useLingui } from "@lingui/react";
import assetsProductsGiostreIppowalkerGalleryGiostra_01 from "assets/products/giostre/ippowalker/gallery/giostra-01.jpg";
import assetsProductsGiostreIppowalkerGalleryIngresso from "assets/products/giostre/ippowalker/gallery/ingresso.jpg";
import assetsProductsGiostreIppowalkerGalleryPorteElettrificate from "assets/products/giostre/ippowalker/gallery/porte-elettrificate.jpg";

const IppowalkerGallery = () => {
  useLingui(); // Fix on locale change

  const IMAGES: Picture[] = [
    {
      image: assetsProductsGiostreIppowalkerGalleryIngresso,
      caption: t`Entrata`,
    },
    {
      image: assetsProductsGiostreIppowalkerGalleryGiostra_01,
      caption: t`Giostra Ippowalker`,
    },
    {
      image: assetsProductsGiostreIppowalkerGalleryPorteElettrificate,
      caption: t`Porte elettrificate`,
    },
  ];

  return <Gallery images={IMAGES} />;
};

export default IppowalkerGallery;
