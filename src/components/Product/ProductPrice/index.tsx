import { Trans } from "@lingui/macro";
import { Badge, styled, Typography } from "@mui/material";
import React from "react";
import { formatPrice } from "utils/format";

const PriceStyled = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h4.fontSize,
  fontWeight: "bold",
}));

export type PriceProps = {
  price: undefined | number;
};

const ProductPrice: React.FC<PriceProps> = ({ price }) => {
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
