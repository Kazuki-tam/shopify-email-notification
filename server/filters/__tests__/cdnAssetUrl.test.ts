import { cdnAssetUrl } from '../cdnAssetUrl';

/**
 * Shopify cdn_asset_url filter test
 */

test('Generates CDN URL', () => {
  expect(cdnAssetUrl('mailer/merchant/critical_alert.png')).toBe(
    '/mailer/merchant/critical_alert.png',
  );
});
