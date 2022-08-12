import { shopifyAssetUrl } from '../shopifyAssetUrl';

/**
 * Shopify shopify_asset_url filter test
 * https://shopify.dev/api/liquid/filters#shopify_asset_url
 */

test('Generates a path for a globally accessible Shopify asset', () => {
  expect(shopifyAssetUrl('notifications/spacer.png')).toBe(
    '/assets/notifications/spacer.png',
  );
});
