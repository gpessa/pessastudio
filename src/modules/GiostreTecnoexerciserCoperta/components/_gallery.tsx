import { useLingui } from "@lingui/react/macro";
import { Gallery } from "components";

const TecnoexerciserGallery = () => {
  const { t } = useLingui();

  const IMAGES: Picture[] = [
    {
      caption: t`Basamento per parte meccanica`,
      image: require("../assets/gallery/placeholder.jpg").default,
    },
    {
      caption: t`Porta mobile elttrificata`,
      image: require("../assets/gallery/placeholder.jpg").default,
    },
    {
      caption: t`Giostra con copertura in pvc`,
      image: require("../assets/gallery/placeholder.jpg").default,
    },
    {
      caption: t`Giostra con copertura pvc bianca`,
      image: require("../assets/gallery/placeholder.jpg").default,
    },
    {
      caption: t`Corridoio interno copertura in pvc`,
      image: require("../assets/gallery/placeholder.jpg").default,
    },
    {
      caption: t`Copertura in pannelli sandwich coibentati`,
      image: require("../assets/gallery/placeholder.jpg").default,
    },
    {
      caption: t`Corridoio copertura con pannelli sandwich`,
      image: require("../assets/gallery/placeholder.jpg").default,
    },
    {
      caption: t`Giostra copertura pvc con rete antivento`,
      image: require("../assets/gallery/placeholder.jpg").default,
    },
  ];

  return <Gallery images={IMAGES} />;
};

export default TecnoexerciserGallery;
