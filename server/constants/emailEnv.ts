const ItemArray = [
  {
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
  },
  {
    // image: "https://cdn.shopify.com/s/files/*.jpg",
    product: {
      title: 'Mid-century lounger ',
    },
    quantity: 1,
    refunded_quantity: 0,
    discount_allocations: [
      {
        amount: 5.0,
        discount_application: {
          title: 'DISCOUNT',
        },
      },
    ],
    original_line_price: 200,
    final_line_price: 100,
    original_price: 200,
    final_price: 100,
    line_price: 100,
    title: 'Aviator sunglasses',
  },
];

const Country = {
  currency: {
    iso_code: 'CAD',
    name: 'Canadian Dollar',
    symbol: '$',
  },
  iso_code: 'CA',
  name: 'Canada',
  unit_system: 'metric',
};

const transactionArray = [
  {
    amount: '255',
    created_at: '2022-06-15 19:13:14 -0400',
    gateway: 'shopify_payments',
    gateway_display_name: 'Shopify payments',
    id: 5432242176065,
    kind: 'sale',
    name: 'c29944051400769.',
    payment_details: {
      credit_card_number: '•••• •••• •••• 4242',
      credit_card_company: 'Visa',
      credit_card_last_four_digits: '4242',
    },
    receipt:
      "#☠1☢\n---\nid: pi_3LB5Oh2m9fH5ulsO18aKrXyL\nobject: payment_intent\namount: 38025\namount_capturable: 0\namount_received: 38025\ncanceled_at: \ncancellation_reason: \ncapture_method: automatic\ncharges:\n  object: list\n  data:\n  - id: ch_3LB5Oh2m9fH5ulsO1KncBePo\n    object: charge\n    amount: 38025\n    application_fee: fee_1LB5Oi2m9fH5ulsOrVcBjr4k\n    balance_transaction:\n      id: txn_3LB5Oh2m9fH5ulsO1JtjGSxy\n      object: balance_transaction\n      exchange_rate: \n    captured: true\n    created: 1655334796\n    currency: cad\n    failure_code: \n    failure_message: \n    fraud_details: {}\n    livemode: false\n    metadata:\n      shop_id: '56174706753'\n      shop_name: Polina's Potent Potions\n      transaction_fee_total_amount: '791'\n      transaction_fee_tax_amount: '0'\n      payments_charge_id: '2076986474561'\n      order_transaction_id: '5432242176065'\n      manual_entry: 'false'\n      order_id: c29944051400769.1\n      email: cornelius.potionmaker@gmail.com\n    outcome:\n      network_status: approved_by_network\n      reason: \n      risk_level: normal\n      risk_score: 15\n      seller_message: Payment complete.\n      type: authorized\n    paid: true\n    payment_intent: pi_3LB5Oh2m9fH5ulsO18aKrXyL\n    payment_method: pm_1LB5Oh2m9fH5ulsOk67EqrsK\n    payment_method_details:\n      card:\n        brand: visa\n        checks:\n          address_line1_check: pass\n          address_postal_code_check: pass\n          cvc_check: pass\n        country: US\n        description: Visa Classic\n        ds_transaction_id: \n        exp_month: 1\n        exp_year: 2029\n        fingerprint: KE6OIQsc8EspGDeW\n        funding: credit\n        iin: '424242'\n        installments: \n        issuer: Stripe Payments UK Limited\n        last4: '4242'\n        mandate: \n        moto: \n        network: visa\n        network_token: \n        network_transaction_id: '541168454791087'\n        three_d_secure: \n        wallet: \n      type: card\n    refunded: false\n    source: \n    status: succeeded\n    mit_params:\n      network_transaction_id: '541168454791087'\n  has_more: false\n  total_count: 1\n  url: \"/v1/charges?payment_intent=pi_3LB5Oh2m9fH5ulsO18aKrXyL\"\nconfirmation_method: manual\ncreated: 1655334795\ncurrency: cad\nlast_payment_error: \nlivemode: false\nmetadata:\n  shop_id: '56174706753'\n  shop_name: Polina's Potent Potions\n  transaction_fee_total_amount: '791'\n  transaction_fee_tax_amount: '0'\n  payments_charge_id: '2076986474561'\n  order_transaction_id: '5432242176065'\n  manual_entry: 'false'\n  order_id: c29944051400769.1\n  email: cornelius.potionmaker@gmail.com\nnext_action: \npayment_method: pm_1LB5Oh2m9fH5ulsOk67EqrsK\npayment_method_types:\n- card\nsource: \nstatus: succeeded\n",
    status: 'success',
    status_label: 'Success',
  },
];

const emailEnv = {
  // Shop info
  date: new Date(),
  custom_message: 'Welcome to our shop, hope you enjoyed the experience.',
  shop: {
    name: 'Sample Store',
    email: 'example@xxxxx.com',
    // email_logo_url: "/logo.png",
    email_logo_width: 160,
    email_accent_color: '#000',
    url: '/',
  },
  // Customer info
  customer: {
    first_name: 'John',
    last_name: 'Smith',
  },
  // Order info
  order: {
    name: '#9999',
    total_outstanding: 255,
  },
  order_name: '#9999',
  order_status_url: '/',
  parent_order: {
    order_number: 1234,
    line_items: ItemArray,
    subtotal_price: 100,
    shipping_price: 20,
    tax_price: 0,
    total_price: 120,
  },
  child_order: {
    subtotal_price: 100,
    shipping_price: 20,
    tax_price: 0,
    total_price: 120,
    line_items: ItemArray,
  },
  parent_order_processed_at: 'August 7, 2022',
  // Subtotal info
  subtotal_line_items: ItemArray,
  subtotal_price: 100,
  tax_price: 0,
  total_price: 255,
  // Total info
  total_outstanding: 255,
  // Refund info
  amount: 255,
  refund_amount: 100,
  exchange_balance: 20,
  // Return info
  return: {
    line_items: ItemArray,
    deliveries: [
      {
        shopify_label: 'shopify_label',
        tracking_url: '/',
        carrier_name: 'Sample',
        tracking_number: 123456,
        return_label: {
          public_file_url: '/',
        },
      },
    ],
  },
  return_line_items: ItemArray,
  return_subtotal: 100,
  return_tax_total: 10,
  return_total: 110,
  // Added info
  added_line_items: ItemArray,
  added_subtotal: 100,
  added_tax_total: 10,
  added_total: 110,
  exchange_total: 90,
  // Gift card info
  gift_card: {
    balance: 100,
    customer: {
      last_name: 'Smith',
    },
  },
  // Shipping info
  shipping_price: 10.0,
  requires_shipping: true,
  shipping_address: {
    address1: '150 Elgin Street',
    address2: '8th floor',
    city: 'Ottawa',
    company: "Polina's Potions, LLC",
    country: Country,
    country_code: 'CA',
    first_name: 'John',
    id: 56174706753,
    last_name: 'Smith',
    name: 'John Smith',
    phone: '416-123-1234',
    province: 'Ontario',
    province_code: 'ON',
    street: '150 Elgin Street, 8th floor',
    summary: '150 Elgin Street, 8th floor, Ottawa, Ontario, Canada',
    url: '/account/addresses/56174706753',
    zip: 'K2P 1L4',
  },
  billing_address: {
    address1: '151 Elgin Street',
    address2: '6th floor',
    city: 'Ottawa',
    company: 'ABC',
    country: Country,
    country_code: 'CA',
    first_name: 'Jane',
    id: 56174706753,
    last_name: 'Doe',
    name: 'Jane Doe',
    phone: '417-123-1234',
    province: 'Ontario',
    province_code: 'ON',
    street: '151 Elgin Street, 6th floor',
    summary: '151 Elgin Street, 6th floor, Ottawa, Ontario, Canada',
    url: '/account/addresses/56174706753',
    zip: 'K2P 1L4',
  },
  shipping_method: {
    title: 'Generic Shipping',
    price: 10,
  },
  delivery_method: 'local',
  // Transaction info
  transactions: transactionArray,
  // Fulfillment info
  service_name: 'My Custom Fulfillment Service Inc.',
  name: '#9999',
  email: 'example@xxxxx.com',
  fulfillment: {
    item_count: 3,
    created_at: '2022-06-15 17:08:30 -0400',
    fulfillment_line_items: [
      {
        quantity: 2,
        line_item: {
          quantity: 2,
          refunded_quantity: 0,
          product: {
            title: 'Aviator sunglasses',
          },
        },
      },
      {
        quantity: 1,
        line_item: {
          quantity: 1,
          refunded_quantity: 0,
          product: {
            title: 'Mid-century lounger ',
          },
        },
      },
    ],
    tracking_company: 'Canada Post',
    tracking_number: '01189998819991197253',
    tracking_url:
      'https://www.canadapost.ca/track-reperage/en#/search?searchFor=01189998819991197253',
  },
  // Location info
  location: {
    name: 'Example Shop',
    address1: '34 Example Street',
    address2: 'Next to example',
    city: 'Ottawa',
    province: 'Ontario',
    zip: 'K1N5T5',
  },
};

export { emailEnv, ItemArray };
