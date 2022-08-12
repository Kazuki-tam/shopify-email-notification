import { moneyWithCurrency } from '../moneyWithCurrency';

/**
 * Shopify money_with_currency filter test
 * https://shopify.dev/api/liquid/filters#money_with_currency
 */

test('Formats a given price with currency', () => {
  expect(moneyWithCurrency(20, 'en-US', 'USD')).toBe('$20.00 USD');
  expect(moneyWithCurrency(20, 'ja-JP', 'JPY')).toBe('￥20 JPY');
});
