import { Trans } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Badge, styled, Typography } from "@mui/material";
import React from "react";

const PriceStyled = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h4.fontSize,
  fontWeight: "bold",
}));

export type PriceProps = {
  price: undefined | number;
};

const ProductPrice: React.FC<PriceProps> = ({ price }) => {
  const { i18n } = useLingui();

  if (!price) return null;

  return (
    <PriceStyled>
      <Badge
        color="warm2"
        badgeContent={<Trans>+ IVA</Trans>}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        {i18n.number(price, { style: "currency", currency: "EUR" })}
      </Badge>
    </PriceStyled>
  );
};

export default ProductPrice;
