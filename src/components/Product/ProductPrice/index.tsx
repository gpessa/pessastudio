import { Badge, styled, Typography } from "@mui/material";
import { Trans } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";

const PriceStyled = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h4.fontSize,
  fontWeight: "bold",
}));

export type PriceProps = {
  price:
    | undefined
    | number
    | {
        price: number;
        note: JSX.Element;
      }[];
};

const ProductPrice: React.FC<PriceProps> = ({ price }) => {
  const badgeContent = <Trans i18nKey="General.vat">+ IVA</Trans>;
  const { locale } = useRouter();

  if (!price) return null;

  const priceFormatted = (price: number) =>
    new Intl.NumberFormat(locale, {
      style: "currency",
      currency: "EUR",
    }).format(price);

  if (typeof price === "number")
    return (
      <PriceStyled>
        <Badge
          color="primary"
          badgeContent={badgeContent}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          {priceFormatted(price)}
        </Badge>
      </PriceStyled>
    );

  return (
    <>
      {price.map(({ price, note }, index) => (
        <React.Fragment key={index}>
          <PriceStyled as={"span"}>
            <Badge
              color="primary"
              badgeContent={badgeContent}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              {priceFormatted(price)}
            </Badge>
            <Typography variant="small" ml={3}>
              ({note})
            </Typography>
          </PriceStyled>
        </React.Fragment>
      ))}
    </>
  );
};

export default ProductPrice;
