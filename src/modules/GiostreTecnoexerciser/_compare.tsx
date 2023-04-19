import { Trans } from "@lingui/macro";
import { Typography } from "@mui/material";
import { Compare } from "components";
import React from "react";
import {
  GIOSTRA_FENCE,
  GIOSTRA_FENCE_TYPE_TECNOFENCE,
  GIOSTRE_ATTRIBUTES,
  GIOSTRE_COPERTURA_PVC,
  GIOSTRE_DOORS,
  GIOSTRE_EXTRA_BIG,
  GIOSTRE_EXTRA_SMALL,
  IRRIGATION,
} from "utils/constants";

const TecnoexerciserCompare = () => {
  const GIOSTRE_COOMON = {
    doors: GIOSTRE_DOORS,
    irrigation: IRRIGATION,
    engine: (
      <Trans>
        Potenza motore {0.75} kw e cadenza regolabile fra 60 e 220 metri al
        minuto
      </Trans>
    ),
    diameter: (
      <Trans>
        <Typography>E' possibile ordinare una giostra nei diametri:</Typography>
        <ul>
          <li>
            12,0 mt. <small>(3 cavalli)</small>
          </li>
          <li>
            14,4 mt. <small>(4 cavalli)</small>
          </li>
          <li>
            16,0 mt. <small>(5 cavalli)</small>
          </li>
          <li>
            17,6 mt. <small>(6 cavalli)</small>
          </li>
          <li>
            19,2 mt. <small>(8 cavalli)</small>
          </li>
        </ul>
      </Trans>
    ),
    control_panel: (
      <Trans>
        Quadro di comando con programma manuale, periodico o automatico
      </Trans>
    ),
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
          corridoio EXERCISER
        </Trans>
      ),
      fence_type: GIOSTRA_FENCE(18, "EXERCISER"),
      cover: false,
      extra: GIOSTRE_EXTRA_SMALL,
    },
    {
      ...GIOSTRE_COOMON,
      name: (
        <Trans>
          Giostra <br />
          corridoio EXERCISER
          <br />
          copertura PVC
        </Trans>
      ),
      fence_type: GIOSTRA_FENCE(18, "EXERCISER"),
      cover: GIOSTRE_COPERTURA_PVC,
      extra: GIOSTRE_EXTRA_BIG,
    },
    {
      ...GIOSTRE_COOMON,
      name: (
        <Trans>
          Giostra <br />
          corridoio EXERCISER
          <br />
          copertura Rigida
        </Trans>
      ),
      fence_type: GIOSTRA_FENCE(18, "EXERCISER"),
      cover: <Trans>Copertura rigida con lastre ondulate</Trans>,
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

export default TecnoexerciserCompare;
