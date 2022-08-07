import type { Address } from '../types/address';

/**
 * format_address filter
 * @param { object } address - Address
 * @returns { string } - Formatted address
 * https://shopify.dev/api/liquid/filters#format_address
 */
const formatAddress = (address: Address): string => {
  const company = address.company;
  const name = address.name;
  const zip = address.zip;
  const address1 = address.address1;
  const address2 = address.address2;
  const countryName = address.country.name;
  return `<p>${company}<br>${name}<br>${zip}<br>${address1} ${address2}<br>${countryName}</p>`;
};

export { formatAddress };
