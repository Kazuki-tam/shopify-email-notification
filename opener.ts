import opener = require("opener");
require('dotenv').config();

// Environment variables
const ADMIN_URL = process.env.ADMIN_URL;
const FLAG = process.env.FLAG;

const openUrl = () => {
  // Error handling
  if (!ADMIN_URL) {
    console.error('Error: ADMIN_URL is not defined.');
    return;
  }
  if (!FLAG) {
    console.error('Error: FLAG is not defined.');
    return;
  }
  // Create a URL
  let targetUrl = '';
  if (FLAG === 'admin') {
    targetUrl = `${ADMIN_URL}settings/notifications`
  }
  if (FLAG === 'order_confirmation') {
    targetUrl = `${ADMIN_URL}email_templates/order_confirmation/edit`
  }
  if (FLAG === 'order_edited') {
    targetUrl = `${ADMIN_URL}email_templates/order_edited/edit`
  }
  if (FLAG === 'order_invoice') {
    targetUrl = `${ADMIN_URL}email_templates/order_invoice/edit`
  }
  if (FLAG === 'order_cancelled') {
    targetUrl = `${ADMIN_URL}email_templates/order_cancelled/edit`
  }
  if (FLAG === 'refund_notification') {
    targetUrl = `${ADMIN_URL}email_templates/refund_notification/edit`
  }
  if (FLAG === 'draft_order_invoice') {
    targetUrl = `${ADMIN_URL}email_templates/draft_order_invoice/edit`
  }
  if (FLAG === 'buy_online') {
    targetUrl = `${ADMIN_URL}email_templates/buy_online/edit`
  }
  if (FLAG === 'abandoned_checkout_notification') {
    targetUrl = `${ADMIN_URL}email_templates/abandoned_checkout_notification/edit`
  }
  if (FLAG === 'pos_exchange_receipt') {
    targetUrl = `${ADMIN_URL}email_templates/pos_exchange_receipt/edit`
  }
  if (FLAG === 'pos_exchange_v2_receipt') {
    targetUrl = `${ADMIN_URL}email_templates/pos_exchange_v2_receipt/edit`
  }
  if (FLAG === 'gift_card_notification') {
    targetUrl = `${ADMIN_URL}email_templates/gift_card_notification/edit`
  }
  if (FLAG === 'failed_payment_processing') {
    targetUrl = `${ADMIN_URL}email_templates/failed_payment_processing/edit`
  }
  if (FLAG === 'pending_payment_failure') {
    targetUrl = `${ADMIN_URL}email_templates/pending_payment_failure/edit`
  }
  if (FLAG === 'pending_payment_success') {
    targetUrl = `${ADMIN_URL}email_templates/pending_payment_success/edit`
  }
  // Open a URL
  console.log(`Open: ${targetUrl}`);
  opener(targetUrl);
}

openUrl()


