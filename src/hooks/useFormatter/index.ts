// import { i18n } from "@lingui/core/macro";

import { i18n } from "@lingui/core";

const useFormatter = () => {
  // const { i18n } = useLingui();

  const formatSize = (v: number) =>
    i18n.number(v, {
      notation: "standard",
    }) + " cm";

  const formatWeight = (v: number) =>
    i18n.number(v, {
      notation: "compact",
      style: "unit",
      unit: "kilogram",
      unitDisplay: "short",
    });

  const formatSizeMeter = (v: number) =>
    i18n.number(v / 100, {
      notation: "standard",
    }) + " mt";

  const formatPrice = (v: number) =>
    i18n.number(v, {
      currency: "EUR",
      style: "currency",
    });

  const formatPriceFeed = (v: number) =>
    i18n.number(v, {
      currency: "EUR",
      currencyDisplay: "code",
      style: "currency",
    });

  return {
    formatSize,
    formatWeight,
    formatSizeMeter,
    formatPrice,
    formatPriceFeed,
  };
};

export default useFormatter;
