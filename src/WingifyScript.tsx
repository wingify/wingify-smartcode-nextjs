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
    const smartCode = `window._wingify_code||(function(){var account_id=${accountId},version=3.0,settings_tolerance=${settingsTimeout},hide_element='${hideElement}',hide_element_style='${hideElementStyle}';var n=window,i=document;if(-1<i.URL.indexOf('__wingify_disable__')||n._wingify_code)return;var t=!1,r=i.currentScript,e={sT:settings_tolerance,hES:hide_element_style,hE:hide_element};try{e=Object.assign(e,JSON.parse(localStorage.getItem('_wingify_'+account_id+'_config')))}catch(e){}var code={script:r,nonce:r.nonce,settings_tolerance:function(){return e.sT},hide_element:function(){return performance.getEntriesByName('first-contentful-paint')[0]?'':e.hE},hide_element_style:function(){return'{'+e.hES+'}'},getVersion:function(){return version},finish:function(){var e;!t&&(t=!0,e=i.getElementById('_vis_opt_path_hides'))&&e.parentNode.removeChild(e)},finished:function(){return t},addScript:function(e){var t=i.createElement('script');t.src=e,r.nonce&&t.setAttribute('nonce',r.nonce),t.fetchPriority='high',i.head.appendChild(t)},init:function(){n._settings_timer=setTimeout(function(){code.finish()},this.settings_tolerance());var e,t=this.hide_element();t&&((e=i.createElement('style')).id='_vis_opt_path_hides',r.nonce&&e.setAttribute('nonce',r.nonce),e.textContent=t+this.hide_element_style(),i.head.appendChild(e)),this.addScript('https://edge.wingify.net/tag/'+account_id+'.js')}};n._wingify_code=code;code.init();})();function d(){var e;t._wingify_code&&(e=d.hidingStyle=document.getElementById('_vis_opt_path_hides')||d.hidingStyle,t._wingify_code.finished()||_wingify_code.libExecuted||t.Wingify&&Wingify.dNR||!t._wingify_code.hide_element()||(document.getElementById('_vis_opt_path_hides')||document.getElementsByTagName('head')[0].appendChild(e),requestAnimationFrame(d)))}var t;t=window,d();`;

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
