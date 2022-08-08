/**
 * money_without_trailing_zeros filter
 * @param { number } price - Price
 * @param { string } symbol - Currency symbol
 * @returns { string } - Formatted price
 * https://shopify.dev/api/liquid/filters#money_without_trailing_zeros
 */

const moneyWithoutTrailingZeros = (
  price: number,
  symbol: string,
): string => {
  return `${symbol}${price}`;
};

export { moneyWithoutTrailingZeros };
