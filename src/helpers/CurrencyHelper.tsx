export const formatNumberToCurrency = (amount: number) => {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(amount);
};
