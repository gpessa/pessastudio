import { useLingui } from "@lingui/react/macro";

const useFormatter = () => {
  const { i18n } = useLingui();

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

  const formatSizeFeed = (value: number) => Math.round(value) + " cm";

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
    formatSizeFeed,
    formatPriceFeed,
  };
};

export default useFormatter;
