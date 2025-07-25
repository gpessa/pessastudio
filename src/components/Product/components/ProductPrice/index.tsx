import { Trans } from "@lingui/react/macro";
import { Badge, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFormatter } from "hooks";
import { ProductDataTranslated } from "hooks/useProducts";
import React from "react";

const PriceStyled = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h4.fontSize,
  fontWeight: "bold",
}));

const ProductPrice: React.FC<Pick<ProductDataTranslated, "price">> = ({
  price,
}) => {
  const { formatPrice } = useFormatter();

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
