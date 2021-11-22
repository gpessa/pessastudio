import { t, Trans } from "@lingui/macro"
import React from "react"
import { Compare } from "src/components"
import {
  GIOSTRA_FENCE,
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
} from "src/constants"

const TecnoexerciserCompare = () => {
  const GIOSTRE_COOMON = {
    doors: GIOSTRE_DOORS,
    irrigation: IRRIGATION,
    engine: GIOSTRE_ENGINE_75,
    diameter: GIOSTRE_DIAMETER_TECNOEXERCIZE,
    control_panel: GIOSTRE_CONTROL_PANEL_TECNOEXERCIZE,
  }

  const PRODUCTS = [
    {
      ...GIOSTRE_COOMON,
      name: <Trans id={`Giostra base`} />,
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
      cover: t`Copertura rigida con lastre ondulate`,
      extra: GIOSTRE_EXTRA_BIG,
    },
  ]

  return <Compare title={t`Gamma`} products={PRODUCTS} attributes={GIOSTRE_ATTRIBUTES} />
}

export default TecnoexerciserCompare
