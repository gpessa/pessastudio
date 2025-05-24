import React from "react";
import { Trans } from "@lingui/react/macro";
import { Badge, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ProductData } from "hooks/useProducts";
import { formatPrice } from "utils/format";

const PriceStyled = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h4.fontSize,
  fontWeight: "bold",
}));

const ProductPrice: React.FC<Pick<ProductData, "price">> = ({ price }) => {
  if (!price) return null;

  return (
    <PriceStyled>
      <Badge
        color="warm2"
        badgeContent={<Trans>+ IVA</Trans>}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
      >
        {formatPrice(price)}
      </Badge>
    </PriceStyled>
  );
};

export default ProductPrice;
