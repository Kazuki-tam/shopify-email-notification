import { Liquid } from 'liquidjs';
import express = require('express');
import { router } from './routes';

const app: express.Express = express()

const engine = new Liquid({
  root: __dirname,
  extname: '.liquid'
})

app.engine('liquid', engine.express());
app.set('views', ['./views', './views/ja/customer', './views/ja/orders']);
app.set('view engine', 'liquid');

// Define routes
app.use('/', router)
app.use(express.static('public'));

export {app};
