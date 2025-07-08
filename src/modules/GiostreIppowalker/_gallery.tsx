import { useLingui } from "@lingui/react/macro";
import assetsProductsGiostreIppowalkerGalleryGiostra_01 from "assets/products/giostre/ippowalker/gallery/giostra-01.jpg";
import assetsProductsGiostreIppowalkerGalleryIngresso from "assets/products/giostre/ippowalker/gallery/ingresso.jpg";
import assetsProductsGiostreIppowalkerGalleryPorteElettrificate from "assets/products/giostre/ippowalker/gallery/porte-elettrificate.jpg";
import { Gallery } from "components";

const IppowalkerGallery = () => {
  const { t } = useLingui();

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
