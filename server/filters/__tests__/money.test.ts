import { money } from "../money";

/**
 * Shopify money filter test
 * https://shopify.dev/api/liquid/filters#money
 */
test('Formats a given price', () => {
  expect(money(20, '$')).toBe('$20');
  expect(money(20, '¥')).toBe('¥20');
})
