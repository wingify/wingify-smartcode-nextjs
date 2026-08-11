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
var smartCode_generated_1 = require("./smartCode.generated");
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
        var smartCode = (0, smartCode_generated_1.buildSmartCode)({
            accountId: accountId,
            settingsTimeout: settingsTimeout,
            hideElement: hideElement,
            hideElementStyle: hideElementStyle,
        });
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
