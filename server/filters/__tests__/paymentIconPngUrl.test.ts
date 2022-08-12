import { paymentIconPngUrl } from '../paymentIconPngUrl';

/**
 * Shopify payment_icon_png_url filter test
 */

test('Generates a path for payment icon', () => {
  expect(paymentIconPngUrl('Visa')).toBe('/visa.png');
});
