import { i18n } from "@lingui/core";

export const formatSizeFeed = (value: number) => {
  return Math.round(value) + " cm";
};

export const formatSize = (value: number) =>
  i18n.number(value, {
    notation: "standard",
  }) + " cm";

export const formatSizeMeter = (v: number) =>
  i18n.number(v / 100, {
    notation: "standard",
  }) + " mt";

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
