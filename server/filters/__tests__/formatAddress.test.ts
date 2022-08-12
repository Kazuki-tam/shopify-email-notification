import { formatAddress } from '../formatAddress';
import { emailEnv } from '../../constants/emailEnv';

/**
 * Shopify format_address filter test
 * https://shopify.dev/api/liquid/filters#format_address
 */
test('Generates billing address HTML', () =>
  expect(formatAddress(emailEnv.billing_address)).toBe(
    `<p>ABC<br>Jane Doe<br>K2P 1L4<br>151 Elgin Street 6th floor<br>Canada</p>`,
  ));
test('Generates shipping address HTML', () =>
  expect(formatAddress(emailEnv.shipping_address)).toBe(
    `<p>Polina's Potions, LLC<br>John Smith<br>K2P 1L4<br>150 Elgin Street 8th floor<br>Canada</p>`,
  ));
