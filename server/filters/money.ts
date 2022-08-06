/**
 * money filter
 * @param { number } price - Price
 * @param { string } symbol - Currency symbol
 * @returns { string } - Formatted price
 * https://shopify.dev/api/liquid/filters#money
 */

const money = (price: number, symbol: string): string => {
  return `${symbol}${price}`;
};

export { money };
