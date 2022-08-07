import { moneyWithCurrency } from "../moneyWithCurrency";

/**
 * Shopify money_with_currency filter test
 * https://shopify.dev/api/liquid/filters#money_with_currency
 */

 test('Formats a given price with currency', () => {
  expect(moneyWithCurrency(20, '$', 'CAD')).toBe('$20 CAD');
  expect(moneyWithCurrency(20, '¥', 'JPY')).toBe('¥20 JPY');
})
