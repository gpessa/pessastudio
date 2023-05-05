import { Trans } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Badge, styled, Typography } from "@mui/material";
import React from "react";

const PriceStyled = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h4.fontSize,
  fontWeight: "bold",
}));

export type PriceProps = {
  price: undefined | number | PriceSingle[];
};

type PriceSingle = {
  price: number;
  note?: JSX.Element;
};

const ProductPriceItem: React.FC<PriceSingle> = ({ price, note }) => {
  const { i18n } = useLingui();

  return (
    <>
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
      {note && (
        <Typography variant="small" ml={3}>
          ({note})
        </Typography>
      )}
    </>
  );
};

const ProductPrice: React.FC<PriceProps> = ({ price }) => {
  if (!price) return null;

  if (typeof price === "number")
    return (
      <PriceStyled>
        <ProductPriceItem price={price} />
      </PriceStyled>
    );

  return (
    <>
      {price.map(({ price, note }, index) => (
        <React.Fragment key={index}>
          <PriceStyled as={"span"}>
            <ProductPriceItem price={price} note={note} />
          </PriceStyled>
        </React.Fragment>
      ))}
    </>
  );
};

export default ProductPrice;
