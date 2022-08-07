type Currency = {
  iso_code: string;
  name: string;
  symbol: string;
};

type Country = {
  currency: Currency;
  iso_code: string;
  name: string;
  unit_system: string;
};

type Address = {
  address1: string;
  address2: string;
  city: string;
  company: string;
  country: Country;
  country_code: string;
  first_name: string;
  id: number;
  last_name: string;
  name: string;
  phone: string;
  province: string;
  province_code: string;
  street: string;
  summary: string;
  url: string;
  zip: string;
};

export { Address };
