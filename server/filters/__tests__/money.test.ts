import { money } from '../money';

/**
 * Shopify money filter test
 * https://shopify.dev/api/liquid/filters#money
 */
test('Formats a given price', () => {
  expect(money(20, 'en-US', 'USD')).toBe('$20.00');
  expect(money(20, 'ja-JP', 'JPY')).toBe('￥20');
});
