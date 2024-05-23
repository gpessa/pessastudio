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
      caption: t`Entrata`,
      image: assetsProductsGiostreIppowalkerGalleryIngresso,
    },
    {
      caption: t`Giostra Ippowalker`,
      image: assetsProductsGiostreIppowalkerGalleryGiostra_01,
    },
    {
      caption: t`Porte elettrificate`,
      image: assetsProductsGiostreIppowalkerGalleryPorteElettrificate,
    },
  ];

  return <Gallery images={IMAGES} />;
};

export default IppowalkerGallery;
