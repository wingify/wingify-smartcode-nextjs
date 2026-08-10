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
var WingifyScript = function (_a) {
    var accountId = _a.accountId, _b = _a.type, type = _b === void 0 ? 'SYNC' : _b, _c = _a.settingsTimeout, settingsTimeout = _c === void 0 ? 2000 : _c, _d = _a.hideElement, hideElement = _d === void 0 ? 'body' : _d, _e = _a.hideElementStyle, hideElementStyle = _e === void 0 ? 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important' : _e, _f = _a.scriptAttributes, scriptAttributes = _f === void 0 ? {} : _f, _g = _a.linkAttributes, linkAttributes = _g === void 0 ? {} : _g;
    try {
        var scriptType = typeof type === 'string' ? type.toLowerCase() : 'async';
        if (!accountId) {
            console.error('Wingify: Account ID is required');
            return null;
        }
        if (scriptType !== 'async' && scriptType !== 'sync') {
            console.error('Wingify: Invalid type. Must be either "ASYNC" or "SYNC"');
            return null;
        }
        // After FCP, hide_element() is '' — rAF must not re-append the hide style.
        var smartCode = "\nwindow._wingify_code || (function () {\n  var account_id = ".concat(accountId, ",\n    version = 3.0,\n    settings_tolerance = ").concat(settingsTimeout, ",\n    hide_element = '").concat(hideElement, "',\n    hide_element_style = '").concat(hideElementStyle, "';\n  var n = window,\n    i = document;\n  if (-1 < i.URL.indexOf('__wingify_disable__') || n._wingify_code) return;\n  var t = !1,\n    r = i.currentScript,\n    e = { sT: settings_tolerance, hES: hide_element_style, hE: hide_element };\n  try {\n    e = Object.assign(e, JSON.parse(localStorage.getItem('_wingify_' + account_id + '_config')));\n  } catch (e) {}\n  var code = {\n    script: r,\n    nonce: r.nonce,\n    settings_tolerance: function () {\n      return e.sT;\n    },\n    hide_element: function () {\n      return performance.getEntriesByName('first-contentful-paint')[0] ? '' : e.hE;\n    },\n    hide_element_style: function () {\n      return '{' + e.hES + '}';\n    },\n    getVersion: function () {\n      return version;\n    },\n    finish: function () {\n      var e;\n      !t && (t = !0, e = i.getElementById('_vis_opt_path_hides')) && e.parentNode.removeChild(e);\n    },\n    finished: function () {\n      return t;\n    },\n    addScript: function (e) {\n      var t = i.createElement('script');\n      t.src = e;\n      r.nonce && t.setAttribute('nonce', r.nonce);\n      t.fetchPriority = 'high';\n      i.head.appendChild(t);\n    },\n    init: function () {\n      n._settings_timer = setTimeout(function () {\n        code.finish();\n      }, this.settings_tolerance());\n      var e,\n        t = this.hide_element();\n      t &&\n        ((e = i.createElement('style')).id = '_vis_opt_path_hides',\n        r.nonce && e.setAttribute('nonce', r.nonce),\n        (e.textContent = t + this.hide_element_style()),\n        i.head.appendChild(e));\n      this.addScript('https://edge.wingify.net/tag/' + account_id + '.js');\n    },\n  };\n  n._wingify_code = code;\n  code.init();\n})();\nfunction d() {\n  var e;\n  t._wingify_code &&\n    ((e = d.hidingStyle = document.getElementById('_vis_opt_path_hides') || d.hidingStyle),\n    t._wingify_code.finished() ||\n      _wingify_code.libExecuted ||\n      (t.Wingify && Wingify.dNR) ||\n      !t._wingify_code.hide_element() ||\n      (document.getElementById('_vis_opt_path_hides') ||\n        document.getElementsByTagName('head')[0].appendChild(e),\n      requestAnimationFrame(d)));\n}\nvar t;\nt = window;\nd();\n");
        if (scriptType === 'sync') {
            return (react_1.default.createElement("script", __assign({}, scriptAttributes, { referrerPolicy: "no-referrer-when-downgrade", src: "https://edge.wingify.net/tag/".concat(accountId, ".js") })));
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
