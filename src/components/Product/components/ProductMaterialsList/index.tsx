import { useLingui } from "@lingui/react/macro";
import { Material } from "hooks/useProducts";
import React from "react";

const ProductMaterialsList: React.FC<{ materials: Material[] }> = ({
  materials,
}) => {
  const { t } = useLingui();

  const MATERIALS = {
    [Material.ACCIAIO_ZINCATO]: t`Acciaio zincato`,
    [Material.PLASTICA]: t`Plastica`,
    [Material.POLIETILENE]: t`Polietilene`,
    [Material.POLIPROPILENE]: t`Polipropilene`,
    [Material.PVC]: t`PVC`,
    [Material.TECNOPOLIMERO]: t`Tecnopolimero`,
  };

  return (
    <>
      {materials
        .sort()
        .map((material) => MATERIALS[material])
        .join(", ")}
    </>
  );
};

export default ProductMaterialsList;
