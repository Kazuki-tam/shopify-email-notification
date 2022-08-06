/**
 * payment_icon_png_url filter
 * @param { string } payment - Payment method
 * @returns { string } - File path
 */

const paymentIconPngUrl = (payment: string): string => {
  const iconName = payment.toLowerCase();
  return `/${iconName}.png`;
};

export { paymentIconPngUrl };
