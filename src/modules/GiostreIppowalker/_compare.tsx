import { Trans } from "@lingui/macro";
import { Typography } from "@mui/material";
import { Compare } from "components";
import {
  GIOSTRA_FENCE,
  GIOSTRA_FENCE_TYPE_TECNOFENCE,
  GIOSTRE_ATTRIBUTES,
  GIOSTRE_COPERTURA_PVC,
  GIOSTRE_DOORS,
  GIOSTRE_EXTRA_BIG,
  GIOSTRE_EXTRA_SMALL,
} from "utils/constants";

const IppowalkerCompare = () => {
  const GIOSTRE_COOMON = {
    engine: (
      <Trans>
        Potenza motore {0.37} kw e cadenza regolabile fra 60 e 220 metri al
        minuto
      </Trans>
    ),
    control_panel: (
      <Trans>Quadro di comando con programma manuale, periodico</Trans>
    ),
    irrigation: false,
    diameter: (
      <Trans>
        <Typography>È possibile ordinare una giostra nei diametri:</Typography>
        <ul>
          <li>
            12,0 mt. <small>(4 cavalli)</small>
          </li>
          <li>
            14,2 mt. <small>(6 cavalli)</small>
          </li>
        </ul>
      </Trans>
    ),
    doors: GIOSTRE_DOORS,
  };

  const PRODUCTS = [
    {
      ...GIOSTRE_COOMON,
      name: <Trans>Giostra base</Trans>,
      fence_type: false,
      cover: false,
      extra: false,
    },
    {
      ...GIOSTRE_COOMON,
      name: (
        <Trans>
          Giostra <br />
          corridoio TECNOFENCE
        </Trans>
      ),
      fence_type: GIOSTRA_FENCE_TYPE_TECNOFENCE,
      cover: false,
      extra: GIOSTRE_EXTRA_SMALL,
    },
    {
      ...GIOSTRE_COOMON,
      name: (
        <Trans>
          Giostra <br />
          corridoio EASY
        </Trans>
      ),
      fence_type: GIOSTRA_FENCE(15, "EASY"),
      cover: false,
      extra: GIOSTRE_EXTRA_SMALL,
    },
    {
      ...GIOSTRE_COOMON,
      name: (
        <Trans>
          Giostra <br />
          corridoio EASY
          <br />
          copertura PVC
        </Trans>
      ),
      fence_type: GIOSTRA_FENCE(15, "EASY"),
      cover: GIOSTRE_COPERTURA_PVC,
      extra: GIOSTRE_EXTRA_BIG,
    },
  ];

  return (
    <Compare
      title={<Trans>Gamma</Trans>}
      products={PRODUCTS}
      attributes={GIOSTRE_ATTRIBUTES}
    />
  );
};

export default IppowalkerCompare;
