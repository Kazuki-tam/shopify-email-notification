import type { ProductType } from '@/types/product';

/**
 * img_url filter
 * @param { ProductType } productItem - Target url or Object
 * @returns { string } - Formatted url
 * https://shopify.dev/api/liquid/filters/img_url
 */

const imgUrl = (productItem: ProductType | string): string | undefined => {
  let url;
  if (typeof productItem === 'object') {
    url = productItem.image;
  }
  if (typeof productItem === 'string') {
    url = productItem;
  }
  return url;
};

export { imgUrl };
