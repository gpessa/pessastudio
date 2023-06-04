import { t } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import React from "react";
import { Material } from "utils/constants";

const ProductMaterialsList: React.FC<{ materials: Material[] }> = ({
  materials,
}) => {
  useLingui(); // Fix on locale change

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
