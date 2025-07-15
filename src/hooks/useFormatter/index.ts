const useFormatter = () => {
  const country = "de-DE"; // Assuming the locale is German (Germany)

  const formatSize = (v: number) =>
    new Intl.NumberFormat(country, {
      maximumFractionDigits: 2,
      minimumFractionDigits: 0,
    }).format(v) + " cm";

  const formatWeight = (v: number) =>
    new Intl.NumberFormat(country, {
      maximumFractionDigits: 2,
      minimumFractionDigits: 0,
    }).format(v) + " kg";

  const formatSizeMeter = (v: number) =>
    new Intl.NumberFormat(country, {
      maximumFractionDigits: 2,
      minimumFractionDigits: 0,
    }).format(v / 100) + " mt";

  const formatPrice = (v: number) =>
    new Intl.NumberFormat(country, {
      currency: "EUR",
      style: "currency",
    }).format(v);

  return {
    formatPrice,
    formatSize,
    formatSizeMeter,
    formatWeight,
  };
};

export default useFormatter;
