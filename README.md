# Next.js component for Wingify SmartCode integration

[![npm version](https://img.shields.io/npm/v/wingify-smartcode-nextjs?style=for-the-badge&color=grey&logo=npm)](https://www.npmjs.com/package/wingify-smartcode-nextjs)

## Overview

The **Wingify SmartCode Next.js** package enables seamless integration of **Wingify SmartCode** into Next.js applications. This component is designed to work with both **Page Router** and **App Router**, allowing developers to integrate Wingify SmartCode efficiently.

> **Migrating from `vwo-smartcode-nextjs`?** This package is the Wingify-branded successor to [`vwo-smartcode-nextjs`](https://www.npmjs.com/package/vwo-smartcode-nextjs). Replace the package name and rename `VWOScript` to `WingifyScript` in your imports and JSX. See [CHANGELOG.md](./CHANGELOG.md) for details.

## Installation

Install the package using npm or yarn:

```bash
# via npm
npm install wingify-smartcode-nextjs

# via yarn
yarn add wingify-smartcode-nextjs
```

## Usage

### Page Router (Legacy `pages/` Directory)

For applications using the **Page Router**, add the `WingifyScript` component inside `_document.js` (or `_document.tsx` if using TypeScript) to include it in the `<head>` of your HTML document.

```javascript
// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { WingifyScript } from 'wingify-smartcode-nextjs';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <WingifyScript accountId="YOUR_ACCOUNT_ID" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

### App Router (`app/` Directory)

For applications using the **App Router**, include the `WingifyScript` component in `layout.tsx` to ensure it loads correctly within the `<head>` of your HTML document.

```tsx
// app/layout.tsx
import { WingifyScript } from 'wingify-smartcode-nextjs';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <WingifyScript accountId="YOUR_ACCOUNT_ID" />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Using Nonce

To add a nonce attribute for Content Security Policy:

```tsx
<WingifyScript
  accountId="YOUR_ACCOUNT_ID"
  scriptAttributes={{
    nonce: 'your-nonce-value',
  }}
/>
```

## Props

The `WingifyScript` component accepts the following props:

| Prop               | Type                     | Required | Default                                                                                | Description                                         |
| ------------------ | ------------------------ | -------- | -------------------------------------------------------------------------------------- | --------------------------------------------------- |
| `accountId`        | `string`                 | ✅ Yes   | —                                                                                      | Your Wingify account ID                             |
| `version`          | `2.2 \| 3.0`             | No       | `2.2`                                                                                  | SmartCode version to load                           |
| `type`             | `'ASYNC' \| 'SYNC'`      | No       | `'ASYNC'`                                                                              | Type of SmartCode script loading                    |
| `settingsTimeout`  | `number`                 | No       | `2000`                                                                                 | Timeout for settings initialization                 |
| `hideElement`      | `string`                 | No       | `'body'`                                                                               | CSS selector for the element to be hidden           |
| `hideElementStyle` | `string`                 | No       | `'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important'` | CSS styles applied to the hidden element            |
| `scriptAttributes` | `Record<string, string>` | No       | `{}`                                                                                   | Additional attributes to be added to the script tag. Note: `referrerPolicy` will be overridden in case of `SYNC` SmartCode |
| `linkAttributes`   | `Record<string, string>` | No       | `{}`                                                                                   | Additional attributes to be added to the link tag.  |


## Authors

- [Apoorv Tiwari](https://github.com/Ragnarrlothbrok)

## Development and Testing

### Install Dependencies

```bash
yarn install
```

### Compile TypeScript to JavaScript

```bash
yarn build
```

## Contributing

We welcome contributions to improve this package! Please read our [contributing guidelines](https://github.com/wingify/wingify-smartcode-nextjs/blob/master/CONTRIBUTING.md) before submitting a PR.

## Code of Conduct

Our [Code of Conduct](https://github.com/wingify/wingify-smartcode-nextjs/blob/master/CODE_OF_CONDUCT.md) outlines expectations for all contributors and maintainers.

## License

[Apache License, Version 2.0](https://github.com/wingify/wingify-smartcode-nextjs/blob/master/LICENSE)

&copy; 2025 Wingify Software Pvt. Ltd.
# wingify-smartcode-nextjs
