/**
 * shopify_asset_url filter
 * @param { string } url - Target url
 * @returns { string } - Formatted url
 */

const shopifyAssetUrl = (url: string): string => {
  return `/assets/${url}`;
}

export { shopifyAssetUrl };
