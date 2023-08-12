/* eslint-disable no-console */
import opener = require("opener");
import 'dotenv/config'

// Environment variables
const ADMIN_URL = process.env.ADMIN_URL;
const FLAG = process.env.FLAG;

const red = '\u001b[31m';
const blue = '\u001b[36m';
const reset = '\u001b[0m';

const openUrl = () => {
  // Error handling
  if (!ADMIN_URL) {
    console.error(`Error: ${red}ADMIN_URL is not defined.${reset}`);
    return;
  }
  if (!FLAG) {
    console.error(`Error: ${red}FLAG is not defined.${reset}`);
    return;
  }
  // Create a URL
  let targetUrl = '';
  if (FLAG === 'admin') {
    targetUrl = `${ADMIN_URL}settings/notifications`
  }
  // Order
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
  if (FLAG === 'order_payment_receipt') {
    targetUrl = `${ADMIN_URL}email_templates/order_payment_receipt/edit`
  }
  if (FLAG === 'refund_notification') {
    targetUrl = `${ADMIN_URL}email_templates/refund_notification/edit`
  }
  if (FLAG === 'draft_order_invoice') {
    targetUrl = `${ADMIN_URL}email_templates/draft_order_invoice/edit`
  }
  if (FLAG === 'abandoned_checkout_notification') {
    targetUrl = `${ADMIN_URL}email_templates/abandoned_checkout_notification/edit`
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
  // Shipping
  if (FLAG === 'fulfillment_request') {
    targetUrl = `${ADMIN_URL}email_templates/fulfillment_request/edit`
  }
  if (FLAG === 'shipping_confirmation') {
    targetUrl = `${ADMIN_URL}email_templates/shipping_confirmation/edit`
  }
  if (FLAG === 'shipping_update') {
    targetUrl = `${ADMIN_URL}email_templates/shipping_update/edit`
  }
  if (FLAG === 'shipment_delivered') {
    targetUrl = `${ADMIN_URL}email_templates/shipment_delivered/edit`
  }
  // Local delivery
  if (FLAG === 'local_out_for_delivery') {
    targetUrl = `${ADMIN_URL}email_templates/local_out_for_delivery/edit`
  }
  if (FLAG === 'local_delivered') {
    targetUrl = `${ADMIN_URL}email_templates/local_delivered/edit`
  }
  if (FLAG === 'local_missed_delivery') {
    targetUrl = `${ADMIN_URL}email_templates/local_missed_delivery/edit`
  }
  // Local pickup
  if (FLAG === 'ready_for_pickup') {
    targetUrl = `${ADMIN_URL}email_templates/ready_for_pickup/edit`
  }
  if (FLAG === 'pickup_receipt') {
    targetUrl = `${ADMIN_URL}email_templates/pickup_receipt/edit`
  }
  // Customer
  if (FLAG === 'customer_account_activate') {
    targetUrl = `${ADMIN_URL}email_templates/customer_account_activate/edit`
  }
  if (FLAG === 'customer_account_welcome') {
    targetUrl = `${ADMIN_URL}email_templates/customer_account_welcome/edit`
  }
  if (FLAG === 'customer_account_reset') {
    targetUrl = `${ADMIN_URL}email_templates/customer_account_reset/edit`
  }
  if (FLAG === 'company_contact_welcome_email') {
    targetUrl = `${ADMIN_URL}email_templates/company_contact_welcome_email/edit`
  }
  if (FLAG === 'contact_buyer') {
    targetUrl = `${ADMIN_URL}email_templates/contact_buyer/edit`
  }
  // Email marketing
  if (FLAG === 'customer_marketing_confirmation') {
    targetUrl = `${ADMIN_URL}email_templates/customer_marketing_confirmation/edit`
  }
  // Returns
  if (FLAG === 'return_created') {
    targetUrl = `${ADMIN_URL}email_templates/return_created/edit`
  }
  if (FLAG === 'return_label_notification') {
    targetUrl = `${ADMIN_URL}email_templates/return_label_notification/edit`
  }
  if (FLAG === 'return_requested') {
    targetUrl = `${ADMIN_URL}email_templates/return_requested/edit`
  }
  if (FLAG === 'return_approved') {
    targetUrl = `${ADMIN_URL}email_templates/return_approved/edit`
  }
  if (FLAG === 'return_declined') {
    targetUrl = `${ADMIN_URL}email_templates/return_declined/edit`
  }
  // Open a URL
  console.log(`Open: ${blue}${targetUrl}${reset}`);
  opener(targetUrl);
}

openUrl()


