import { i18n } from "@lingui/core";

export const formatSize = (v: number) =>
  i18n.number(v / 10, {
    notation: "compact",
    style: "unit",
    unit: "centimeter",
    unitDisplay: "short",
  });

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
