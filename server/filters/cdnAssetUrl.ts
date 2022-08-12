/**
 * cdn_asset_url filter
 * @param { string } url - Target url
 * @returns { string } - Formatted url
 */

const cdnAssetUrl = (url: string): string => {
  return `/${url}`;
};

export { cdnAssetUrl };
