import { i18n } from "@lingui/core";

export const formatSize = (v: number) => {
  const isBigNumber = v > 1000;
  const value = isBigNumber ? v / 1000 : v;

  return isBigNumber
    ? i18n.number(value, {
        notation: "standard",
        style: "unit",
        unit: "meter",
      }) + "t"
    : i18n.number(value, {
        notation: "standard",
        style: "unit",
        unit: "centimeter",
      });
};

export const formatWeight = (v: number) =>
  i18n.number(v, {
    notation: "compact",
    style: "unit",
    unit: "kilogram",
    unitDisplay: "short",
  });

export const formatPrice = (v: number) =>
  i18n.number(v, {
    currency: "EUR",
    style: "currency",
  });

export const formatPriceFeed = (v: number) =>
  i18n.number(v, {
    currency: "EUR",
    currencyDisplay: "code",
    style: "currency",
  });
