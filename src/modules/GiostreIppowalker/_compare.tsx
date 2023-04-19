import { Trans } from "@lingui/macro";
import { Compare } from "components";
import {
  GIOSTRA_FENCE,
  GIOSTRA_FENCE_TYPE_TECNOFENCE,
  GIOSTRE_ATTRIBUTES,
  GIOSTRE_CONTROL_PANEL_IPPOWALKER,
  GIOSTRE_COPERTURA_PVC,
  GIOSTRE_DIAMETER_IPPOWALKER,
  GIOSTRE_DOORS,
  GIOSTRE_ENGINE_37,
  GIOSTRE_EXTRA_BIG,
  GIOSTRE_EXTRA_SMALL,
} from "utils/constants";

const IppowalkerCompare = () => {
  const GIOSTRE_COOMON = {
    engine: GIOSTRE_ENGINE_37,
    control_panel: GIOSTRE_CONTROL_PANEL_IPPOWALKER,
    irrigation: false,
    diameter: GIOSTRE_DIAMETER_IPPOWALKER,
    doors: GIOSTRE_DOORS,
  };

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
