import { imgUrl } from '../imgUrl';

const productItem = {
  image: '/assets/product/product_cropped_img.jpg',
  product: {
    title: 'Aviator sunglasses',
  },
  quantity: 1,
  refunded_quantity: 0,
  original_line_price: 200,
  original_price: 200,
  final_line_price: 200,
  final_price: 200,
  line_price: 200,
  title: 'Aviator sunglasses',
};

/**
 * Shopify img_url filter test
 */

test('Generates Image URL from a character string', () => {
  expect(imgUrl('/assets/product/product_cropped_img.jpg')).toBe(
    '/assets/product/product_cropped_img.jpg',
  );
});

test('Generates Image URL from a product object', () => {
  expect(imgUrl(productItem)).toBe('/assets/product/product_cropped_img.jpg');
});
