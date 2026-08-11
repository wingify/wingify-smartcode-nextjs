/**
 * Copyright 2025 Wingify Software Pvt. Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { buildSmartCode } from './smartCode.generated';

interface WingifyScriptProps {
  accountId: string;
  type?: 'ASYNC' | 'SYNC';
  settingsTimeout?: number;
  hideElement?: string;
  hideElementStyle?: string;
  scriptAttributes?: React.ScriptHTMLAttributes<HTMLScriptElement>;
  linkAttributes?: React.LinkHTMLAttributes<HTMLLinkElement>;
}

export const WingifyScript: React.FC<WingifyScriptProps> = ({
  accountId,
  type = 'SYNC',
  settingsTimeout = 2000,
  hideElement = 'body',
  hideElementStyle = 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important',
  scriptAttributes = {},
  linkAttributes = {},
}) => {
  try {
    const scriptType = typeof type === 'string' ? type.toLowerCase() : 'async';

    if (!accountId) {
      console.error('Wingify: Account ID is required');
      return null;
    }

    if (scriptType !== 'async' && scriptType !== 'sync') {
      console.error('Wingify: Invalid type. Must be either "ASYNC" or "SYNC"');
      return null;
    }

    // After FCP, hide_element() is '' — rAF must not re-append the hide style.
    const smartCode = buildSmartCode({
      accountId,
      settingsTimeout,
      hideElement,
      hideElementStyle,
    });

    if (scriptType === 'sync') {
      return (
        <script
          {...scriptAttributes}
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://edge.wingify.net/tag/${accountId}.js`}
        />
      );
    }

    return (
      <>
        <link
          rel="preconnect"
          href="https://edge.wingify.net"
          {...linkAttributes}
        />
        <script
          {...scriptAttributes}
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: smartCode }}
        />
      </>
    );
  } catch (e) {
    console.error('Wingify Script Error:', e);
    return null;
  }
};
