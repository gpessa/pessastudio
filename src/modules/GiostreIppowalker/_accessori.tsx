import { Trans } from "@lingui/react/macro";
import productsGiostreAccessoriesAlveolo01 from "assets/products/giostre/accessories/alveolo-01.jpg";
import productsGiostreAccessoriesAlveolo02 from "assets/products/giostre/accessories/alveolo-02.jpg";
import productsGiostreAccessoriesRete01 from "assets/products/giostre/accessories/rete-01.jpg";
import productsGiostreAccessoriesRete02 from "assets/products/giostre/accessories/rete-02.jpg";
import productsGiostreIppowalkerAccessoriChiusura01 from "assets/products/giostre/ippowalker/accessori/chiusura-01.jpg";
import productsGiostreIppowalkerAccessoriChiusura02 from "assets/products/giostre/ippowalker/accessori/chiusura-02.jpg";
import { Accessori } from "components";
import { AccessoriProps } from "components/Accessori";
import {
  GIOSTRA_ALVEOLO_DESCRIZIONE,
  GIOSTRA_RETE_ANTIVENTO_DESCRIZIONE,
  GIOSTRA_TONDINO_CHIUSURA_A_TERRA_DESCRIZIONE,
} from "utils/constants";

const IppowalkerAccessori = () => {
  const ACCESSORI: AccessoriProps = {
    accessories: [
      {
        description: GIOSTRA_TONDINO_CHIUSURA_A_TERRA_DESCRIZIONE,
        id: "chiusura_a_terra",
        name: <Trans>Chiusura a terra</Trans>,
        pictures: [
          {
            image: productsGiostreIppowalkerAccessoriChiusura01,
            left: "42%",
            md: 3,
            top: "62%",
          },
          {
            image: productsGiostreIppowalkerAccessoriChiusura02,
            left: "22%",
            md: 4,
            top: "54%",
          },
        ],
      },
      {
        description: GIOSTRA_ALVEOLO_DESCRIZIONE,
        id: "alveolo_sulla_pesta",
        name: <Trans>Alveolo sulla pesta</Trans>,
        pictures: [
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
        description: GIOSTRA_RETE_ANTIVENTO_DESCRIZIONE,
        id: "rete_antivento",
        name: <Trans>Rete antivento</Trans>,
        pictures: [
          {
            image: productsGiostreAccessoriesRete01,
            left: "45%",
            md: 3,
            top: "25%",
          },
          {
            image: productsGiostreAccessoriesRete02,
            left: "45%",
            md: 4,
            top: "22%",
          },
        ],
      },
    ],
  };

  return <Accessori {...ACCESSORI} />;
};

export default IppowalkerAccessori;
