const linkList = [
  {
    category: 'orders',
    title_en: 'Order confirmation',
    title_ja: '注文の確認',
    path: '/orders/order-confirmation'
  },
  {
    category: 'orders',
    title_en: 'Order edited',
    title_ja: '注文の編集',
    path: '/orders/order-edited'
  },
  {
    category: 'orders',
    title_en: 'Order invoice',
    title_ja: '注文の請求書',
    path: '/orders/order-invoice'
  },
  {
    category: 'orders',
    title_en: 'Order cancelled',
    title_ja: '注文がキャンセルされたとき',
    path: '/orders/order-cancelled'
  },
  {
    category: 'orders',
    title_en: 'Order refund',
    title_ja: '注文の返金',
    path: '/orders/refund-notification'
  },
  {
    category: 'orders',
    title_en: 'Draft order invoice',
    title_ja: '下書き注文の請求書',
    path: '/orders/draft-order-invoice'
  },
  {
    category: 'orders',
    title_en: 'Abandoned POS checkout',
    title_ja: 'POSでのカゴ落ち',
    path: '/orders/buy-online'
  },
  {
    category: 'orders',
    title_en: 'Abandoned checkout',
    title_ja: 'カゴ落ち',
    path: '/orders/abandoned-checkout-notification'
  },
  {
    category: 'orders',
    title_en: null,
    title_ja: 'POSとモバイルレシート',
    path: '/orders/store-receipt'
  },
  {
    category: 'orders',
    title_en: 'POS exchange receipt',
    title_ja: 'POS交換レシート',
    path: '/orders/pos-exchange-receipt'
  },
  {
    category: 'orders',
    title_en: 'POS exchange V2 receipt',
    title_ja: 'POS交換V2レシート',
    path: '/orders/pos-exchange-v2-receipt'
  },
  {
    category: 'orders',
    title_en: 'Gift card created',
    title_ja: 'ギフトカードの作成',
    path: '/orders/gift-card-notification'
  },
  {
    category: 'orders',
    title_en: 'Payment error',
    title_ja: '支払いエラー',
    path: '/orders/failed-payment-processing'
  },
  {
    category: 'orders',
    title_en: 'Pending payment error',
    title_ja: '保留中の決済エラー',
    path: '/orders/pending-payment-failure'
  },
  {
    category: 'orders',
    title_en: 'Pending payment success',
    title_ja: '保留中の決済処理に成功しました',
    path: '/orders/pending-payment-failure'
  },
  {
    category: 'shipping',
    title_en: 'Fulfillment request',
    title_ja: 'フルフィルメントのリクエスト',
    path: '/shipping/fulfillment-request'
  },
  {
    category: 'shipping',
    title_en: 'Shipping confirmation',
    title_ja: '配送情報通知',
    path: '/shipping/shipping-confirmation'
  },
  {
    category: 'shipping',
    title_en: 'Shipping update',
    title_ja: '配送状況の更新',
    path: '/shipping/shipping-update'
  },
  {
    category: 'shipping',
    title_en: 'Out for delivery',
    title_ja: '配達中',
    path: '/shipping/out-for-delivery'
  },
  {
    category: 'shipping',
    title_en: 'Delivered',
    title_ja: '配達済み',
    path: '/shipping/out-for-delivery'
  },
  {
    category: 'local_delivery',
    title_en: 'Local order out for delivery',
    title_ja: 'ローカル注文が配達中です',
    path: '/local-delivery/local-out-for-delivery'
  },
  {
    category: 'local_delivery',
    title_en: 'Local order delivered',
    title_ja: 'ローカル注文が配達済みです',
    path: '/local-delivery/local-delivery-delivered'
  },
  {
    category: 'local_delivery',
    title_en: 'Local order missed delivery',
    title_ja: 'ローカル注文の未配達です',
    path: '/local-delivery/missed-delivery'
  },
  {
    category: 'local_pickup',
    title_en: 'Ready for pickup',
    title_ja: '受け取りの準備完了',
    path: '/local-pickup/ready-for-pickup'
  },
  {
    category: 'local_pickup',
    title_en: 'Picked up',
    title_ja: '店舗受け取り済み',
    path: '/local-pickup/pickup-receipt'
  },
  {
    category: 'customer',
    title_en: 'Customer account invite',
    title_ja: 'お客様アカウントの招待',
    path: '/customer/customer-account-activation'
  },
  {
    category: 'customer',
    title_en: 'Customer account welcome',
    title_ja: 'お客様アカウントへの挨拶',
    path: '/customer/customer-account-welcome'
  },
  {
    category: 'customer',
    title_en: 'Customer account password reset',
    title_ja: 'お客様アカウントのパスワードリセット',
    path: '/customer/customer-password-reset'
  },
  {
    category: 'customer',
    title_en: null,
    title_ja: 'お客様による決済方法更新のリクエスト',
    path: '/customer/customer-update-payment-method'
  },
  {
    category: 'customer',
    title_en: null,
    title_ja: 'お客様による決済方法復元のリクエスト',
    path: '/customer/customer-restore-payment-method'
  },
  {
    category: 'customer',
    title_en: 'B2B access email',
    title_ja: 'B2Bアクセスメール',
    path: '/customer/company-contact-welcome-email'
  },
  {
    category: 'customer',
    title_en: 'Contact customer',
    title_ja: 'お客様への連絡',
    path: '/customer/company-contact-welcome-email'
  },
  {
    category: 'email_marketing',
    title_en: 'Customer marketing confirmation',
    title_ja: 'お客様マーケティングの確認',
    path: '/email-marketing/customer-marketing-confirmation'
  },
  {
    category: 'returns',
    title_en: 'Return instructions with label/tracking',
    title_ja: 'ラベル/追跡情報が付いた返品',
    path: '/returns/return-created'
  },
  {
    category: 'returns',
    title_en: 'Return label only',
    title_ja: '返品用ラベルのみ',
    path: '/returns/return-label-notification'
  },
  {
    category: 'returns',
    title_en: 'Return label only',
    title_ja: '返品用ラベルのみ',
    path: '/returns/return-label-notification'
  },
  {
    category: 'staff_order_notifications',
    title_en: 'New order',
    title_ja: '新しい注文',
    path: '/staff-order-notifications/new-order-notification'
  },
];

export { linkList };
