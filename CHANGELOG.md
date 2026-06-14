# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.1] - 2026-06-14

### Changed

- Updated built SmartCode snippets to include the `script` reference on the internal code object for SmartCode versions 2.2 and 3.0
- Removed the migration callout from README (migration details remain in this changelog)

## [1.1.0] - 2026-06-11

Initial release of **wingify-smartcode-nextjs**, the Wingify-branded Next.js integration for SmartCode. This package continues the functionality previously shipped as [`vwo-smartcode-nextjs`](https://www.npmjs.com/package/vwo-smartcode-nextjs) under the Wingify product name.

### Added

- `WingifyScript` React component for Next.js **Page Router** and **App Router**
- Support for SmartCode versions **2.2** and **3.0**
- Configurable **ASYNC** and **SYNC** loading modes
- Customizable `settingsTimeout`, `hideElement`, and `hideElementStyle`
- `scriptAttributes` and `linkAttributes` props for CSP nonces and other tag attributes

### Changed (from `vwo-smartcode-nextjs`)

- **Package name:** `vwo-smartcode-nextjs` → `wingify-smartcode-nextjs`
- **Component export:** `VWOScript` → `WingifyScript`
- **Runtime globals and endpoints:** updated from VWO-branded identifiers to Wingify-branded equivalents (for example, `_wingify_code`, `edge.wingify.net`)
- **Repository:** moved to [`wingify/wingify-smartcode-nextjs`](https://github.com/wingify/wingify-smartcode-nextjs)

### Migration

If you are upgrading from `vwo-smartcode-nextjs`:

1. Uninstall the old package and install the new one:

   ```bash
   npm uninstall vwo-smartcode-nextjs
   npm install wingify-smartcode-nextjs
   ```

2. Update imports and component usage:

   ```diff
   - import { VWOScript } from 'vwo-smartcode-nextjs';
   + import { WingifyScript } from 'wingify-smartcode-nextjs';

   - <VWOScript accountId="YOUR_ACCOUNT_ID" />
   + <WingifyScript accountId="YOUR_ACCOUNT_ID" />
   ```

3. Rebuild and verify SmartCode loads correctly in your app.
