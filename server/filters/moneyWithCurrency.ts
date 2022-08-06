/**
 * money_with_currency filter
 * @param { number } price - Price
 * @param { string } symbol - Currency symbol
 * @param { string } abbreviation - Currency Abbreviation
 * @returns { string } - Formatted price
 * https://shopify.dev/api/liquid/filters#money_with_currency
 */

const moneyWithCurrency = (
  price: number,
  symbol: string,
  abbreviation: string,
): string => {
  return `${symbol}${price} ${abbreviation}`;
};

export { moneyWithCurrency };
