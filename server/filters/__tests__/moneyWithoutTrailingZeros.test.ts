import { moneyWithoutTrailingZeros } from '../moneyWithoutTrailingZeros';

/**
 * Shopify money_with_currency filter test
 * https://shopify.dev/api/liquid/filters#money_with_currency
 */

test('Formats a given price with currency', () => {
  expect(moneyWithoutTrailingZeros(20, 'en-US', 'USD')).toBe('$20');
  expect(moneyWithoutTrailingZeros(20, 'ja-JP', 'JPY')).toBe('￥20');
});
