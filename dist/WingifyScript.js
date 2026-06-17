"use strict";
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WingifyScript = void 0;
var react_1 = __importDefault(require("react"));
var DEFAULT_WINGIFY_SMARTCODE_VERSION = 2.2;
var isValidWingifySmartCodeVersion = function (version) { return version === 2.2 || version === 3.0; };
var WingifyScript = function (_a) {
    var accountId = _a.accountId, _b = _a.version, version = _b === void 0 ? DEFAULT_WINGIFY_SMARTCODE_VERSION : _b, _c = _a.type, type = _c === void 0 ? 'ASYNC' : _c, _d = _a.settingsTimeout, settingsTimeout = _d === void 0 ? 2000 : _d, _e = _a.hideElement, hideElement = _e === void 0 ? 'body' : _e, _f = _a.hideElementStyle, hideElementStyle = _f === void 0 ? 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important' : _f, _g = _a.scriptAttributes, scriptAttributes = _g === void 0 ? {} : _g, _h = _a.linkAttributes, linkAttributes = _h === void 0 ? {} : _h;
    try {
        var scriptType = typeof type === 'string' ? type.toLowerCase() : 'async';
        if (!accountId) {
            console.error('Wingify: Account ID is required');
            return null;
        }
        if (!isValidWingifySmartCodeVersion(version)) {
            console.error('Wingify: Invalid version. Must be either 2.2 or 3.0');
            return null;
        }
        if (scriptType !== 'async' && scriptType !== 'sync') {
            console.error('Wingify: Invalid type. Must be either "ASYNC" or "SYNC"');
            return null;
        }
        var smartCodeV22 = "window._wingify_code||(function(){var w=window,d=document;var account_id=".concat(accountId, ",version=2.2,settings_tolerance=").concat(settingsTimeout, ",hide_element='").concat(hideElement, "',hide_element_style='").concat(hideElementStyle, "';if(f=!1,v=d.currentScript,cc={},-1<d.URL.indexOf('__wingify_disable__')||w._wingify_code)return;try{var e=JSON.parse(localStorage.getItem('_wingify_'+account_id+'_config'));cc=e&&'object'==typeof e?e:{}}catch(e){}function r(t){try{return decodeURIComponent(t)}catch(e){return t}}var s=(()=>{var e={combination:[],combinationChoose:[],split:[],exclude:[],uuid:null,consent:null,optOut:null},t=d.cookie||'';if(t)for(var i,n,o=/(?:^|;\\s*)(?:(_vis_opt_exp_(\\d+)_combi=([^;]*))|(_vis_opt_exp_(\\d+)_combi_choose=([^;]*))|(_vis_opt_exp_(\\d+)_split=([^:;]*))|(_vis_opt_exp_(\\d+)_exclude=[^;]*)|(_vis_opt_out=([^;]*))|(_wingify_global_opt_out=[^;]*)|(_wingify_uuid=([^;]*))|(_wingify_consent=([^;]*)))/g;null!==(i=o.exec(t));)try{i[1]?e.combination.push({id:i[2],value:r(i[3])}):i[4]?e.combinationChoose.push({id:i[5],value:r(i[6])}):i[7]?e.split.push({id:i[8],value:r(i[9])}):i[10]?e.exclude.push({id:i[11]}):i[12]?e.optOut=r(i[13]):i[14]?e.optOut=!0:i[15]?e.uuid=r(i[16]):i[17]&&(n=r(i[18]),e.consent=n&&3<=n.length?n.substring(0,3):null)}catch(e){}return e})();function n(){var e=(()=>{if(w.Wingify&&Array.isArray(w.Wingify))for(var e=0;e<w.Wingify.length;e++){var t=w.Wingify[e];if(Array.isArray(t)&&('setVisitorId'===t[0]||'setSessionId'===t[0]))return!0}return!1})(),t='a='+account_id+'&u='+encodeURIComponent(w._vis_opt_url||d.URL)+'&vn='+version+'&ph=1'+('undefined'!=typeof platform?'&p='+platform:'')+'&st='+w.performance.now(),e=(!e&&((e=(()=>{var e,t=[],i={},n=w.Wingify&&w.Wingify.appliedCampaigns||{};for(e in n){var o=n[e]&&n[e].v;o&&(t.push(e+'-'+o+'-1'),i[e]=!0)}if(s&&s.combination)for(var r=0;r<s.combination.length;r++){var a=s.combination[r];i[a.id]||t.push(a.id+'-'+a.value)}return t.join('|')})())&&(t+='&c='+e),(e=(()=>{var e=[],t={};if(s&&s.combinationChoose)for(var i=0;i<s.combinationChoose.length;i++){var n=s.combinationChoose[i];e.push(n.id+'-'+n.value),t[n.id]=!0}if(s&&s.split)for(var o=0;o<s.split.length;o++)t[(n=s.split[o]).id]||e.push(n.id+'-'+n.value);return e.join('|')})())&&(t+='&cc='+e),e=(()=>{var e={},t=[];if(w.Wingify&&Array.isArray(w.Wingify))for(var i=0;i<w.Wingify.length;i++){var n=w.Wingify[i];if(Array.isArray(n)&&'setVariation'===n[0]&&n[1]&&Array.isArray(n[1]))for(var o=0;o<n[1].length;o++){var r,a=n[1][o];a&&'object'==typeof a&&(r=a.e,a=a.v,r)&&a&&(e[r]=a)}}for(r in e)t.push(r+'-'+e[r]);return t.join('|')})())&&(t+='&sv='+e),s&&s.optOut&&(t+='&o='+s.optOut),(()=>{var e=[],t={};if(s&&s.exclude)for(var i=0;i<s.exclude.length;i++){var n=s.exclude[i];t[n.id]||(e.push(n.id),t[n.id]=!0)}return e.join('|')})());return e&&(t+='&e='+e),s&&s.uuid&&(t+='&id='+s.uuid),s&&s.consent&&(t+='&consent='+s.consent),w.name&&-1<w.name.indexOf('_vis_preview')&&(t+='&pM=true'),w.Wingify&&w.Wingify.ed&&(t+='&ed='+w.Wingify.ed),t}code={script:v,nonce:v&&v.nonce,library_tolerance:function(){return'undefined'!=typeof library_tolerance?library_tolerance:void 0},settings_tolerance:function(){return cc.sT||settings_tolerance},hide_element_style:function(){return'{'+(cc.hES||hide_element_style)+'}'},hide_element:function(){return performance.getEntriesByName('first-contentful-paint')[0]?'':'string'==typeof cc.hE?cc.hE:hide_element},getVersion:function(){return version},finish:function(e){var t;f||(f=!0,(t=d.getElementById('_vis_opt_path_hides'))&&t.parentNode.removeChild(t),e&&((new Image).src='https://edge.wingify.net/ee.gif?a='+account_id+e))},finished:function(){return f},addScript:function(e){var t=d.createElement('script');t.type='text/javascript',e.src?t.src=e.src:t.text=e.text,v&&t.setAttribute('nonce',v.nonce),d.getElementsByTagName('head')[0].appendChild(t)},load:function(e,t){t=t||{};var i=new XMLHttpRequest;i.open('GET',e,!0),i.withCredentials=!t.dSC,i.responseType=t.responseType||'text',i.onload=function(){if(t.onloadCb)return t.onloadCb(i,e);200===i.status?w._wingify_code.addScript({text:i.responseText}):w._wingify_code.finish('&e=loading_failure:'+e)},i.onerror=function(){if(t.onerrorCb)return t.onerrorCb(e);w._wingify_code.finish('&e=loading_failure:'+e)},i.send()},init:function(){var e,t,i=this.settings_tolerance(),i=(w._settings_timer=setTimeout(function(){w._wingify_code.finish()},i),'body'!==this.hide_element()?(e=d.createElement('style'),t=(i=this.hide_element())?i+this.hide_element_style():'',i=d.getElementsByTagName('head')[0],e.setAttribute('id','_vis_opt_path_hides'),v&&e.setAttribute('nonce',v.nonce),e.setAttribute('type','text/css'),e.styleSheet?e.styleSheet.cssText=t:e.appendChild(d.createTextNode(t)),i.appendChild(e)):(e=d.getElementsByTagName('head')[0],(t=d.createElement('div')).style.cssText='z-index: 2147483647 !important;position: fixed !important;left: 0 !important;top: 0 !important;width: 100% !important;height: 100% !important;background:white!important;',t.setAttribute('id','_vis_opt_path_hides'),t.classList.add('_vis_hide_layer'),e.parentNode.insertBefore(t,e.nextSibling)),'https://edge.wingify.net/j.php?'+n());-1!==w.location.search.indexOf('_wingify_xhr')?this.addScript({src:i}):this.load(i+'&x=true',{l:1})}};w._wingify_code=code;code.init();})();(function(){var t=window;function d(){var e;t._wingify_code&&(e=d.hidingStyle=document.getElementById('_vis_opt_path_hides')||d.hidingStyle,t._wingify_code.finished()||t._wingify_code.libExecuted||t.Wingify&&t.Wingify.dNR||(document.getElementById('_vis_opt_path_hides')||document.getElementsByTagName('head')[0].appendChild(e),requestAnimationFrame(d)))}d();})();");
        var smartCodeV30 = "window._wingify_code||(function(){var account_id=".concat(accountId, ",version=3.0,settings_tolerance=").concat(settingsTimeout, ",hide_element='").concat(hideElement, "',hide_element_style='").concat(hideElementStyle, "';var t=window,n=document;if(-1<n.URL.indexOf('__wingify_disable__')||t._wingify_code)return;var i=!1,o=n.currentScript,e={sT:settings_tolerance,hES:hide_element_style,hE:hide_element};try{e=Object.assign(e, JSON.parse(localStorage.getItem('_wingify_'+account_id+'_config')))}catch(e){}var code={script:o,nonce:o.nonce,settings_tolerance:function(){return e.sT},hide_element:function(){return performance.getEntriesByName('first-contentful-paint')[0]?'':e.hE},hide_element_style:function(){return'{'+e.hES+'}'},getVersion:function(){return version},finish:function(){var e;!i&&(i=!0,e=n.getElementById('_vis_opt_path_hides'))&&e.parentNode.removeChild(e)},finished:function(){return i},addScript:function(e){var t=n.createElement('script');t.src=e,o.nonce&&t.setAttribute('nonce',o.nonce),t.fetchPriority='high',n.head.appendChild(t)},init:function(){t._settings_timer=setTimeout(function(){code.finish()},this.settings_tolerance());var e=n.createElement('style');e.id='_vis_opt_path_hides',o.nonce&&e.setAttribute('nonce',o.nonce),e.textContent=this.hide_element()+this.hide_element_style(),n.head.appendChild(e),this.addScript('https://edge.wingify.net/tag/'+account_id+'.js')}};t._wingify_code=code;code.init();})();function d(){var e;t._wingify_code&&(e=d.hidingStyle=document.getElementById('_vis_opt_path_hides')||d.hidingStyle,t._wingify_code.finished()||_wingify_code.libExecuted||t.Wingify&&Wingify.dNR||(document.getElementById('_vis_opt_path_hides')||document.getElementsByTagName('head')[0].appendChild(e),requestAnimationFrame(d)))}var t;t=window,d();");
        var smartCode = version === 3.0 ? smartCodeV30 : smartCodeV22;
        if (scriptType === 'sync') {
            var syncScriptUrl = version === 3.0
                ? "https://edge.wingify.net/tag/".concat(accountId, ".js")
                : "https://edge.wingify.net/lib/".concat(accountId, ".js");
            return (react_1.default.createElement("script", __assign({}, scriptAttributes, { referrerPolicy: "no-referrer-when-downgrade", src: syncScriptUrl })));
        }
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("link", __assign({ rel: "preconnect", href: "https://edge.wingify.net" }, linkAttributes)),
            react_1.default.createElement("script", __assign({}, scriptAttributes, { type: "text/javascript", dangerouslySetInnerHTML: { __html: smartCode } }))));
    }
    catch (e) {
        console.error('Wingify Script Error:', e);
        return null;
    }
};
exports.WingifyScript = WingifyScript;
