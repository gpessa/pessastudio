import { Compare } from "components";
import { Trans, useTranslation } from "next-i18next";
import React from "react";
import {
  GIOSTRA_FENCE_TYPE_WOOD,
  GIOSTRA_FENCE_TYPE_TECNOFENCE,
  GIOSTRE_ATTRIBUTES,
  GIOSTRE_CONTROL_PANEL_TECNOEXERCIZE,
  GIOSTRE_COPERTURA_PVC,
  GIOSTRE_DIAMETER_TECNOEXERCIZE,
  GIOSTRE_DOORS,
  GIOSTRE_ENGINE_75,
  GIOSTRE_EXTRA_BIG,
  GIOSTRE_EXTRA_SMALL,
  IRRIGATION,
} from "utils/constants";

const TecnoexerciserCompare = () => {
  const { t } = useTranslation();

  const GIOSTRE_COOMON = {
    doors: GIOSTRE_DOORS,
    irrigation: IRRIGATION,
    engine: GIOSTRE_ENGINE_75,
    diameter: GIOSTRE_DIAMETER_TECNOEXERCIZE(),
    control_panel: GIOSTRE_CONTROL_PANEL_TECNOEXERCIZE,
  };

  const PRODUCTS = [
    {
      ...GIOSTRE_COOMON,
      name: <Trans i18nKey="Giostre.models.base">Giostra base</Trans>,
      fence_type: false,
      cover: false,
      extra: false,
    },
    {
      ...GIOSTRE_COOMON,
      name: (
        <Trans i18nKey="Giostre.models.corridoioTecnofence">
          Giostra <br />
          corridoio TECNOFENCE
        </Trans>
      ),
      fence_type: GIOSTRA_FENCE_TYPE_TECNOFENCE,
      cover: false,
      extra: GIOSTRE_EXTRA_SMALL(),
    },
    {
      ...GIOSTRE_COOMON,
      name: (
        <Trans i18nKey="Giostre.models.corridoioExerciser">
          Giostra <br />
          corridoio EXERCISER
        </Trans>
      ),
      fence_type: GIOSTRA_FENCE_TYPE_WOOD(18, "EXERCISER"),
      cover: false,
      extra: GIOSTRE_EXTRA_SMALL(),
    },
    {
      ...GIOSTRE_COOMON,
      name: (
        <Trans i18nKey="Giostre.models.corridoioExerciserCoperturaPVC">
          Giostra <br />
          corridoio EXERCISER
          <br />
          copertura PVC
        </Trans>
      ),
      fence_type: GIOSTRA_FENCE_TYPE_WOOD(18, "EXERCISER"),
      cover: GIOSTRE_COPERTURA_PVC,
      extra: GIOSTRE_EXTRA_BIG(),
    },
    {
      ...GIOSTRE_COOMON,
      name: (
        <Trans i18nKey="Giostre.models.corridoioExerciserCoperturaRigida">
          Giostra <br />
          corridoio EXERCISER
          <br />
          copertura Rigida
        </Trans>
      ),
      fence_type: GIOSTRA_FENCE_TYPE_WOOD(18, "EXERCISER"),
      cover: (
        <Trans i18nKey="Giostre.roof.metal">
          Copertura rigida con lastre ondulate
        </Trans>
      ),
      extra: GIOSTRE_EXTRA_BIG(),
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
