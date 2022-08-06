import { Liquid } from 'liquidjs';
import express, { Request, Response, NextFunction } from 'express';
import { router } from './routes';

import { formatAddress } from './filters/formatAddress';
import { shopifyAssetUrl } from './filters/shopifyAssetUrl';
import { paymentIconPngUrl } from './filters/paymentIconPngUrl';
import { money } from './filters/money';
import { moneyWithCurrency } from './filters/moneyWithCurrency';

const app: express.Express = express()

const engine = new Liquid({
  root: __dirname,
  extname: '.liquid',
  cache: false
})

app.engine('liquid', engine.express());
app.set('view engine', 'liquid');
app.set('views', [
  './views/',
  './views/en/customer/',
  './views/en/email-marketing/',
  './views/en/local-delivery/',
  './views/en/local-pickup/',
  './views/en/orders/',
  './views/en/returns/',
  './views/en/shipping/',
  './views/en/staff-order-notifications/',
  './views/ja/customer/',
  './views/ja/email-marketing/',
  './views/ja/local-delivery/',
  './views/ja/local-pickup/',
  './views/ja/orders/',
  './views/ja/returns/',
  './views/ja/shipping/',
  './views/ja/staff-order-notifications/',
]);

// Register filters
engine.registerFilter('format_address', address => formatAddress(address));
engine.registerFilter('shopify_asset_url', url => shopifyAssetUrl(url));
engine.registerFilter('payment_icon_png_url', payment => paymentIconPngUrl(payment));
engine.registerFilter('money', price => money(price, '$'));
engine.registerFilter('money_with_currency', price => moneyWithCurrency(price, '$', 'CAD'));

// Define routes
app.use('/', router)
app.use(express.static('public'));

// Error
app.use((req, res) => {
  res.status(404).send(`Not found: ${req.path}`);
})

app.use((err: { stack: string; }, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error!');
});

export {app};
