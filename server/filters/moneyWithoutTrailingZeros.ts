/**
 * money_without_trailing_zeros filter
 * @param { number } price - Price
 * @param { string } locale - Currency locale
 * @param { string } currency - Currency
 * @returns { string } - Formatted price
 * https://shopify.dev/api/liquid/filters#money_without_trailing_zeros
 */

const moneyWithoutTrailingZeros = (
  price: number,
  locale: string,
  currency: string,
): string => {
  const formattedPrice = price.toLocaleString(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
  });
  return formattedPrice;
};

export { moneyWithoutTrailingZeros };
