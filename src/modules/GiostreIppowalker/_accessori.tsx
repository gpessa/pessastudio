import { Trans } from "@lingui/macro";
import { Accessori } from "components";
import {
  GIOSTRA_ALVEOLO_DESCRIZIONE,
  GIOSTRA_RETE_ANTIVENTO_DESCRIZIONE,
  GIOSTRA_TONDINO_CHIUSURA_A_TERRA_DESCRIZIONE,
} from "utils/constants";

import productsGiostreAccessoriesAlveolo01 from "assets/products/giostre/accessories/alveolo-01.jpg";
import productsGiostreAccessoriesAlveolo02 from "assets/products/giostre/accessories/alveolo-02.jpg";
import productsGiostreAccessoriesRete01 from "assets/products/giostre/accessories/rete-01.jpg";
import productsGiostreAccessoriesRete02 from "assets/products/giostre/accessories/rete-02.jpg";
import productsGiostreIppowalkerAccessoriChiusura01 from "assets/products/giostre/ippowalker/accessori/chiusura-01.jpg";
import productsGiostreIppowalkerAccessoriChiusura02 from "assets/products/giostre/ippowalker/accessori/chiusura-02.jpg";

const IppowalkerAccessori = () => {
  const ACCESSORI = {
    accessories: [
      {
        name: <Trans>Chiusura a terra</Trans>,
        description: GIOSTRA_TONDINO_CHIUSURA_A_TERRA_DESCRIZIONE,
        images: [
          {
            image: productsGiostreIppowalkerAccessoriChiusura01,
            top: "62%",
            left: "42%",
            md: 3,
          },
          {
            image: productsGiostreIppowalkerAccessoriChiusura02,
            top: "54%",
            left: "22%",
            md: 4,
          },
        ],
      },
      {
        name: <Trans>Alveolo sulla pesta</Trans>,
        description: GIOSTRA_ALVEOLO_DESCRIZIONE,
        images: [
          {
            image: productsGiostreAccessoriesAlveolo02,
            md: 3,
          },
          {
            image: productsGiostreAccessoriesAlveolo01,
            md: 4,
          },
        ],
      },
      {
        name: <Trans>Rete antivento</Trans>,
        description: GIOSTRA_RETE_ANTIVENTO_DESCRIZIONE,
        images: [
          {
            md: 3,
            top: "25%",
            left: "45%",
            image: productsGiostreAccessoriesRete01,
          },
          {
            md: 4,
            top: "22%",
            left: "45%",
            image: productsGiostreAccessoriesRete02,
          },
        ],
      },
    ],
  };

  return <Accessori {...ACCESSORI} />;
};

export default IppowalkerAccessori;
