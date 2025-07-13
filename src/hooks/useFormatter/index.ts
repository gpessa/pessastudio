const useFormatter = () => {
  const country = "de-DE"; // Assuming the locale is German (Germany)

  const formatSize = (v: number) =>
    new Intl.NumberFormat(country, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(v) + " cm";

  const formatWeight = (v: number) =>
    new Intl.NumberFormat(country, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(v) + " kg";

  const formatSizeMeter = (v: number) =>
    new Intl.NumberFormat(country, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(v / 100) + " mt";

  const formatPrice = (v: number) =>
    new Intl.NumberFormat(country, {
      style: "currency",
      currency: "EUR",
    }).format(v);

  return {
    formatSize,
    formatWeight,
    formatSizeMeter,
    formatPrice,
  };
};

export default useFormatter;
