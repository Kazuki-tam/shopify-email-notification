/**
 * shopify_asset_url filter
 * @param { string } url - Target url
 * @returns { string } - Formatted url
 * https://shopify.dev/api/liquid/filters#shopify_asset_url
 */

const shopifyAssetUrl = (url: string): string => {
  return `/assets/${url}`;
};

export { shopifyAssetUrl };
