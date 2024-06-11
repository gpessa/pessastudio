import { i18n } from "@lingui/core";

export const formatSize = (v: number, round?: boolean) => {
  // The feed require integer
  const value = round ? Math.round(v) : v;

  return i18n.number(v, {
    notation: "standard",
    style: "unit",
    unit: "centimeter",
  });
};

export const formatSizeMeter = (v: number) =>
  i18n.number(v / 100, {
    notation: "standard",
    style: "unit",
    unit: "meter",
  }) + "t";

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
