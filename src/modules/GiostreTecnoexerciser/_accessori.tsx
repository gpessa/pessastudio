import { Trans } from "@lingui/macro";
import { Accessori } from "components";
import {
  GIOSTRA_ALVEOLO_DESCRIZIONE,
  GIOSTRA_RETE_ANTIVENTO_DESCRIZIONE,
  GIOSTRA_TONDINO_CHIUSURA_A_TERRA_DESCRIZIONE,
} from "utils/constants";

import assetsProductsGiostreAccessoriesAlveolo_01 from "assets/products/giostre/accessories/alveolo-01.jpg";
import assetsProductsGiostreAccessoriesAlveolo_02 from "assets/products/giostre/accessories/alveolo-02.jpg";
import assetsProductsGiostreAccessoriesRete_01 from "assets/products/giostre/accessories/rete-01.jpg";
import assetsProductsGiostreAccessoriesRete_02 from "assets/products/giostre/accessories/rete-02.jpg";
import assetsProductsGiostreTecnoexerciserAccessoriChiusura_01 from "assets/products/giostre/tecnoexerciser/accessori/chiusura-01.jpg";
import assetsProductsGiostreTecnoexerciserAccessoriChiusura_02 from "assets/products/giostre/tecnoexerciser/accessori/chiusura-02.jpg";
import { AccessoriProps } from "components/Accessori";

const TecnoexerciserAccessori = () => {
  const ACCESSORI: AccessoriProps = {
    accessories: [
      {
        id: "chiusura_a_terra",
        name: <Trans>Chiusura a terra</Trans>,
        description: GIOSTRA_TONDINO_CHIUSURA_A_TERRA_DESCRIZIONE,
        pictures: [
          {
            image: assetsProductsGiostreTecnoexerciserAccessoriChiusura_01,
            top: "25%",
            left: "50%",
            md: 3,
          },
          {
            image: assetsProductsGiostreTecnoexerciserAccessoriChiusura_02,
            top: "50%",
            left: "50%",
            md: 4,
          },
        ],
      },
      {
        id: "alveolo_sulla_pesta",
        name: <Trans>Alveolo sulla pesta</Trans>,
        description: GIOSTRA_ALVEOLO_DESCRIZIONE,
        pictures: [
          {
            image: assetsProductsGiostreAccessoriesAlveolo_02,
            md: 3,
          },
          {
            image: assetsProductsGiostreAccessoriesAlveolo_01,
            md: 4,
          },
        ],
      },
      {
        id: "rete_antivento",
        name: <Trans>Rete antivento</Trans>,
        description: GIOSTRA_RETE_ANTIVENTO_DESCRIZIONE,
        pictures: [
          {
            md: 3,
            top: "25%",
            left: "45%",
            image: assetsProductsGiostreAccessoriesRete_01,
          },
          {
            md: 4,
            top: "22%",
            left: "45%",
            image: assetsProductsGiostreAccessoriesRete_02,
          },
        ],
      },
    ],
  };

  return <Accessori {...ACCESSORI} />;
};

export default TecnoexerciserAccessori;
