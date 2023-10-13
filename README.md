# shopify-email-notification
shopify-email-notification is a template repository for email notifications.
 This template makes it easy to customize notification files at local.

## Status

[![Release (latest by date)](https://img.shields.io/github/v/release/Kazuki-tam/shopify-email-notification)](https://github.com/Kazuki-tam/shopify-email-notification/releases/tag/v0.0.1)
[![Issues](https://img.shields.io/github/issues/Kazuki-tam/shopify-email-notification)](https://github.com/Kazuki-tam/shopify-email-notification/issues)
![Maintenance](https://img.shields.io/maintenance/yes/2023)
![Release date](https://img.shields.io/github/release-date/Kazuki-tam/shopify-email-notification)

## Features

- Previewing notification mails at local server
- Hot reloading of local server
- Referring to default email templates which Shopify provides
- Based on [Liquid templates](https://github.com/Shopify/liquid)
- Editable [notification variables](https://help.shopify.com/en/manual/orders/notifications/email-variables)
- TypeScript support
- Multi language support (English and Japanese)
- Built in useful commands

## Requirements
- [Node v18 or higher](https://nodejs.org/en/)
- [Shopify store](https://shopify.dev/themes/tools/development-stores#create-a-development-store-for-a-client)

## Main dependencies

- [pnpm](https://pnpm.io/ja/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [LiquidJS](https://liquidjs.com/index.html)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)

## How to use

Clone this repository and install dependencies.

```bash
pnpm install
```

### Create a .env file
Create a `.env` at the root, and then add your shopify admin url.
Replace `your-shop-name` with yours.

```
ADMIN_URL=https://your-shop-name.myshopify.com/admin/
```

Start your project in development mode.

```
yarn start
```

Open `http://localhost:4000`, and then you can preview notification templates.

## Command list

Recommend you to check out these commands before you get started.

<details>
<summary>Support commands</summary>

### Start command

Start your project in development mode.

```bash
pnpm start
```

### Admin command

Open Shopify admin.

```bash
pnpm admin
```

### Orders command

Open order notification pages.

```bash
pnpm orders
```

### Shipping command

Open shipping notification pages.

```bash
pnpm shipping
```

### Local delivery command

Open local delivery notification pages.

```bash
pnpm localDelivery
```

### Local pickup command

Open local pickup notification pages.

```bash
pnpm localPickup
```

### Customer command

Open customer notification pages.

```bash
pnpm customer
```

### Email marketing command

Open email marketing notification pages.

```bash
pnpm emailMarketing
```

### Returns command

Open returns notification pages.

```bash
pnpm returns
```

### Format command

Format this project code.

```bash
pnpm format
```

### Lint command

Lint this project code.

```bash
pnpm lint
```

Fix this project code.

```bash
pnpm lint:fix
```

### PostInstall command

Install missing TypeScript typings.

```bash
pnpm postInstall
```

</details>


## Liquid templates
You'll find notification templates in views directories.

- en folder: English templates
- ja folder: Japanese templates

## Notification variables
Edit `emailEnv.ts` if you want to modify the value of notification variables.

```
server/constants/emailEnv.ts
```

## Contributes
Pull requests are always welcome.

## License
MIT
