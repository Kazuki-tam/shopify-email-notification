/**
 * money filter
 * @param { number } price - Price
 * @param { string } locale - Currency locale
 * @param { string } currency - Currency
 * @returns { string } - Formatted price
 * https://shopify.dev/api/liquid/filters#money
 */

const money = (price: number, locale: string, currency: string): string => {
  const formattedPrice = price.toLocaleString(locale, {
    style: 'currency',
    currency: currency,
  });
  return formattedPrice;
};

export { money };
