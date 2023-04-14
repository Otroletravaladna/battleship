/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/ds-digib-webfont.woff2 */ \"./src/fonts/ds-digib-webfont.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/ds-digib-webfont.woff */ \"./src/fonts/ds-digib-webfont.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: 'ds-digitalbold';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('woff2'),\\n         url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('woff');\\n    font-weight: normal;\\n    font-style: normal;\\n\\n}\\n\\n:root {\\n    --font: 'Orbitron', sans-serif;\\n}\\n\\nbody {\\n    background: rgb(13,15,30);\\n    background: linear-gradient(94deg, rgba(13,15,30,1) 0%, rgba(30,33,67,1) 10%, rgba(35,39,80,1) 13%, rgba(38,42,86,1) 20%, rgba(38,42,86,1) 80%, rgba(35,39,80,1) 86%, rgba(30,33,67,1) 90%, rgba(13,15,30,1) 100%);\\n    font-family: var(--font);\\n    height: 100svh;\\n    margin: 0;\\n}\\n\\n/* Menu style */\\n\\n.menu {\\n    display: grid;\\n    grid-template-columns: 20% auto 20%;\\n}\\n\\n.header {\\n    background: url(https://media.giphy.com/media/jOtazvv6bN4ccCzRKO/giphy.gif);\\n    background-size: cover;\\n    -moz-background-clip: text;\\n    -webkit-background-clip: text;\\n\\n    display: grid;\\n    grid-column: 2 / 3;\\n    justify-content: center;\\n    font-weight: 900;\\n    color: transparent;\\n    font-size: 2.5rem;\\n    letter-spacing: 1px;\\n    text-transform: uppercase;\\n}\\n\\n\\n.content {\\n    grid-column: 2 / 3;\\n    color: silver;\\n    line-height: 1.8;\\n    text-align: center;\\n}\\n\\n.name {\\n    display: none;\\n}\\n\\ninput {\\n    font: var(--font);\\n    border: none;\\n    background: rgb(55, 48, 107, .6);\\n    padding: .5rem;\\n}\\n\\n.animate {\\n    color: transparent;\\n    letter-spacing: 2px;\\n    animation: shadow 2s;\\n    text-shadow: 0 0 0 rgba(255, 255, 255, 1);\\n}\\n\\nbutton {\\n    font-family: var(--font);\\n    font-size: 1.5rem;\\n    background: rgb(55, 48, 107, .6);\\n    color: white;\\n    border: none;\\n    padding: .5rem 1rem;\\n    text-shadow: 0 0 2px rgba(255, 255, 255, .6);\\n    text-transform: uppercase;\\n    margin: 1rem;\\n}\\n\\nbutton:hover {\\n    background: rgb(55, 48, 107, .3);\\n    cursor: pointer;\\n    text-shadow: 0 0 5px rgba(255, 255, 255, .9);\\n}\\n\\n@keyframes shadow {\\n    0% {\\n        text-shadow: 0 0 5px rgba(255, 255, 255, .3);\\n    }\\n    100% {\\n        text-shadow: 0 0 1px rgba(255, 255, 255, 1);\\n    }\\n}\\n\\n/* game style */\\n\\n.game {\\n    height: 100svh;\\n    display: none;\\n    grid-template-columns: 10% auto 10%;\\n    grid-template-rows: auto 40%;\\n}\\n\\n.info {\\n    grid-column: 2 / 3;\\n    grid-row: 2 / 3;\\n}\\n\\n.game-content {\\n    display: grid;\\n    grid-column: 1 / 4;\\n    grid-row: 1 / 2;\\n\\n    grid-template-columns: 50% 50%;\\n}\\n\\n.grid-container {\\n    display: grid;\\n    grid-template-rows: 10% auto;\\n    place-items: center;\\n}\\n\\n.grid {\\n    display: grid;\\n    grid-template-columns: repeat(10, 1fr);\\n    grid-template-rows: repeat(10, 1fr);\\n    aspect-ratio: 1 / 1;\\n}\\n\\n.player > div, .machine > div{\\n    border: 1px solid black;\\n    width: 2rem;\\n    height: 2rem;\\n    background-color: white;\\n}\\n\\n.player > div {\\n    display: grid;\\n    place-content: center;\\n    font-size: 2rem;\\n}\\n\\n.machine > div {\\n    cursor: pointer;\\n}\\n\\n.machine > div:hover{\\n    background: lightblue;\\n}\\n\\n.grid-container > h2 {\\n    margin: 0;\\n    align-self: self-end;\\n}\\n\\n.player-grid {\\n    text-transform: capitalize;\\n}\\n\\n.info {\\n    display: grid;\\n    grid-column: 1 / 4;\\n    grid-row: 2 / 3;\\n    grid-template-columns: 50% 50%;\\n    overflow: hidden;\\n\\n}\\n\\n.message {\\n    grid-column: 2 / 3;\\n}\\n\\n.set-fleet {\\n    justify-self: center;\\n    grid-column: 1 / 2;\\n    display: grid;\\n    grid-template-rows: 10% 10% 80%;\\n    place-items: center;\\n}\\n\\n.set-fleet > h3 {\\n    margin: 0;\\n    grid-row: 1 / 2;\\n}\\n\\n.set-fleet > button {\\n    width: fit-content;\\n    font-size: 1rem;\\n    grid-row: 2 / 3;\\n}\\n\\n.fleet-display {\\n    grid-row: 3 /4;\\n    width: 100%;\\n    height: 100%;\\n    display: grid;\\n    place-content: center;\\n}\\n\\n.item-container {\\n    display: flex;\\n    width: fit-content;\\n    flex-direction: column;\\n    background: #3F497F;\\n}\\n\\n.fleet-item{\\n    width: 2rem;\\n    height: 2rem;\\n    border: solid 1px black;\\n    box-sizing: content-box;\\n}\\n\\n.message {\\n    display: grid;\\n    place-items: center start;\\n}\\n\\n.textboard-border {\\n    width: calc(85%);\\n    height: calc(70%);\\n    display: grid;\\n    place-items: center;\\n    background: rgb(58,59,62);\\n    background: linear-gradient(180deg, rgba(58,59,62,1) 0%, rgba(129,133,137,1) 31%);\\n    border-radius: 1rem;\\n}\\n\\n.textboard {\\n    background: rgb(40,40,43);\\n    background: radial-gradient(circle, rgba(40,40,43,1) 57%, rgba(25,25,27,1) 92%, rgba(0,0,0,1) 100%);\\n    width: calc(100% - 2rem);\\n    height: calc(100% - 2rem);\\n    border-radius: 1rem;\\n    color: white;\\n    display: grid;\\n}\\n\\n.textboard > h2 {\\n    text-align: center;\\n    font-family: 'ds-digitalbold';\\n    font-weight: bold;\\n    font-size: 2rem;\\n}\\n\\n.msg {\\n    margin-top: 0;\\n}\\n\\n#miss {\\n    background: rgb(255, 255, 255, .3);\\n    cursor: not-allowed;\\n}\\n\\n#hit {\\n    background: lightgreen;\\n    cursor: not-allowed;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lastHit\": () => (/* binding */ lastHit),\n/* harmony export */   \"machineCoords\": () => (/* binding */ machineCoords),\n/* harmony export */   \"playerCoords\": () => (/* binding */ playerCoords),\n/* harmony export */   \"visited\": () => (/* binding */ visited),\n/* harmony export */   \"x\": () => (/* binding */ x),\n/* harmony export */   \"y\": () => (/* binding */ y)\n/* harmony export */ });\nconst playerCoords = [];\nconst machineCoords = [];\nconst y = ['j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];\nconst x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nlet visited = [];\nconst lastHit = {\n    last: null,\n    coordsy: null, \n    coordsx: null, \n    state: false,\n    fnIndex : 0,\n}\n\n//# sourceURL=webpack://battleship/./src/data.js?");

/***/ }),

/***/ "./src/game-ui.js":
/*!************************!*\
  !*** ./src/game-ui.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeAxis\": () => (/* binding */ changeAxis),\n/* harmony export */   \"createGrids\": () => (/* binding */ createGrids),\n/* harmony export */   \"displayPlayerName\": () => (/* binding */ displayPlayerName),\n/* harmony export */   \"shipSize\": () => (/* binding */ shipSize)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _ia_fleet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ia-fleet */ \"./src/ia-fleet.js\");\n\n\n\nlet shipSize = 5;\n\nfunction createGrids() {\n    const container = document.querySelector(\".game\");\n    const playerGrid = document.querySelector(\".player\");\n    const machineGrid = document.querySelector(\".machine\");\n\n    container.style.display = \"grid\";\n\n    function displayGrid(parent) {\n        _data__WEBPACK_IMPORTED_MODULE_0__.y.forEach((item) => {\n            for (let i = 0; i < 10; i++) {\n                const cell = document.createElement(\"div\");\n                cell.classList.add(item + (i +1));\n                parent.append(cell);\n            }\n        })\n    }\n    \n    displayGrid(playerGrid);\n    displayGrid(machineGrid);\n    dragItem();\n}\n\nfunction displayPlayerName() {\n    const input = document.querySelector(\"input\");\n    const nameDisplay = document.querySelector(\".player-name\");\n\n    if (!input.value) nameDisplay.textContent = \"Elon Musk\";\n    else nameDisplay.textContent = input.value;\n}\n\nfunction displayFleetElement(shipSize) {\n    const container = document.querySelector(\".item-container\");\n    container.textContent = \"\";\n\n    const generateShip = (container) => {\n        for(let i = 0; i < shipSize; i++) {\n            let cell = document.createElement(\"div\");\n            cell.classList.add(\"fleet-item\");\n            container.appendChild(cell);\n        }\n    }\n    \n    generateShip(container);\n}\n\n\nfunction changeAxis() {\n    const container = document.querySelector(\".item-container\");\n    \n    if (container.id == \"column\") {\n        container.style.flexDirection = \"row\"\n        container.id = \"row\";\n    } else {\n        container.style.flexDirection = \"column\";\n        container.id = \"column\";\n    }\n}\n\ndisplayFleetElement(shipSize);\n\nfunction dragItem() {\n    const src = document.querySelector(\".item-container\");\n    const target = document.querySelector(`.player.grid`);\n\n    src.addEventListener(\"dragstart\", (e) => {\n        src.style.background = \"lightblue\";\n        e.dataTransfer.setDragImage(src, 0, 0);\n    })\n\n    target.addEventListener(\"dragover\", (e) => {\n        e.preventDefault();\n        let dragged = handleItems(e);\n        if (dragged.includes(null)) {\n            dragged.forEach(e => {\n                if (e !== null) {\n                    e.style.background = \"red\";\n                } \n            });\n        \n        } else {\n            dragged.forEach(e => {\n                if (e.id == \"selected\") {\n                    for (let item of dragged) {\n                        item.style.background = \"red\";\n                    }\n                } \n                else if (!dragged.some((e) => e.id == \"selected\")) {\n                    e.style.background = \"green\";\n                }\n            })\n        };\n\n    }, false);\n\n\n    target.addEventListener(\"dragleave\", (e) => {\n        let abandoned = handleItems(e);\n        abandoned.forEach(e => {\n            if(e !== null) {\n                if (e.id !== \"selected\") e.style.background = \"white\"; \n                else if (e.id == \"selected\") e.style.background = \"green\";\n            }\n        });\n    });\n\n    target.addEventListener(\"drop\", (e) => {\n        e.preventDefault();\n        let ship = handleItems(e);\n\n        if (ship.includes(null)) {\n            ship.forEach(e => { \n                if (e !== null) e.style.background = \"white\";\n            });\n\n        } else if (ship.some((e) => e.id == \"selected\")) {\n            ship.forEach(e => {\n                if (e.id == \"selected\") e.style.background = \"green\";\n                else e.style.background = \"white\";\n            })\n\n        } else if (!ship.some((e) => e.id == \"selected\")) {\n            ship.forEach(e => e.id = \"selected\");\n            shipSize--;\n            if (shipSize == 0) {\n                _data__WEBPACK_IMPORTED_MODULE_0__.playerCoords.push(ship.map(e => e.className));\n                (0,_ia_fleet__WEBPACK_IMPORTED_MODULE_1__.getFleet)();\n                document.querySelector(\".set-fleet\").remove();\n            }\n            else if(shipSize < 3) displayFleetElement(2);\n            else displayFleetElement(shipSize);\n            _data__WEBPACK_IMPORTED_MODULE_0__.playerCoords.push(ship.map(e => e.className));\n        }\n    })\n\n    function handleItems(e) {\n        const targetx = Number(e.target.className.slice(1));\n        const targety = e.target.className[0];\n        let itemAxis = src.id;\n        let rowItems = [];\n        let columnItems = [];\n\n        if (itemAxis == \"row\") {\n            for (let i = 0; i < src.childElementCount; i++){\n                let item = document.querySelector(`.${targety + (targetx + i)}`);\n                rowItems.push(item);\n            }\n\n        } else {\n            for (let i = 0; i < src.childElementCount; i++){\n                let item = document.querySelector(`.${_data__WEBPACK_IMPORTED_MODULE_0__.y[_data__WEBPACK_IMPORTED_MODULE_0__.y.indexOf(targety) + i] +  targetx}`);\n                columnItems.push(item);\n            }\n        }\n\n        if (rowItems.length == 0) return columnItems; \n        return rowItems;\n    }\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/game-ui.js?");

/***/ }),

/***/ "./src/ia-fleet.js":
/*!*************************!*\
  !*** ./src/ia-fleet.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFleet\": () => (/* binding */ getFleet)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ships */ \"./src/ships.js\");\n\n\n\nlet shipSize = 5;\n\nfunction createShip() {\n    const random = () => Math.floor(Math.random() * 10);\n    let axis = getAxis();\n    let coords = random();\n    let item = [];\n\n    function getAxis() {\n        return random() % 2 == 0 ? \"row\" : \"column\";\n    }\n    \n    const getItem = (n) => {\n        if (axis == \"row\") {\n            if (coords < n) {\n                for (let i = n; i > 0; i--) {\n                    item.push(_data__WEBPACK_IMPORTED_MODULE_0__.y[coords] + _data__WEBPACK_IMPORTED_MODULE_0__.x[(coords + n)- i]);\n                }\n            } else {\n                for (let i = n; i > 0; i--) {\n                    item.push(_data__WEBPACK_IMPORTED_MODULE_0__.y[coords] + _data__WEBPACK_IMPORTED_MODULE_0__.x[coords- i]);\n                }\n            }\n\n        } else {\n            if (coords < 5){\n                for (let i = n; i > 0; i--) {\n                    item.push(_data__WEBPACK_IMPORTED_MODULE_0__.y[(coords + n)- i] + _data__WEBPACK_IMPORTED_MODULE_0__.x[coords]);\n                }\n            } else {\n                for (let i = n; i > 0; i--) {\n                    item.push(_data__WEBPACK_IMPORTED_MODULE_0__.y[coords - i] + _data__WEBPACK_IMPORTED_MODULE_0__.x[n]);\n                }\n            }\n        }\n    }\n\n    if (shipSize == 5) getItem(5);\n    else if (shipSize < 3) getItem(2);\n    else getItem(shipSize);\n\n    return item;\n}\n\nfunction test(arr, item) {\n    let res = [];\n    arr.forEach(e => {\n        if (e.some(x => item.includes(x))) res.push(true);\n    })\n\n    return res.includes(true);\n}\n\nfunction appendShip() {\n    let item = createShip();\n\n    if (shipSize == 5) {\n        _data__WEBPACK_IMPORTED_MODULE_0__.machineCoords.push(item);\n        shipSize--;\n    }\n    else {\n        if (test(_data__WEBPACK_IMPORTED_MODULE_0__.machineCoords, item) == false) {\n            _data__WEBPACK_IMPORTED_MODULE_0__.machineCoords.push(item)\n            shipSize--;\n        }\n    }\n}\n\nfunction getFleet() {\n    while (shipSize > 0) {\n        appendShip();\n    }\n    (0,_ships__WEBPACK_IMPORTED_MODULE_1__.match)(_data__WEBPACK_IMPORTED_MODULE_0__.playerCoords, _data__WEBPACK_IMPORTED_MODULE_0__.machineCoords);\n    // makeMove();\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/ia-fleet.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"throttle\": () => (/* binding */ throttle)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ships */ \"./src/ships.js\");\n/* harmony import */ var _menu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-ui */ \"./src/menu-ui.js\");\n/* harmony import */ var _game_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-ui */ \"./src/game-ui.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _ia_fleet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ia-fleet */ \"./src/ia-fleet.js\");\n/* harmony import */ var _textboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./textboard */ \"./src/textboard.js\");\n\n\n\n\n\n\n\n\n_menu_ui__WEBPACK_IMPORTED_MODULE_2__.changeText();\n\ndocument.querySelector(\".change-axis\").addEventListener(\"click\", () => {\n    _game_ui__WEBPACK_IMPORTED_MODULE_3__.changeAxis();\n})\n\n// export function makeMove() {\n//     document.querySelector(\".machine\").addEventListener(\"click\", e => {\n//         trigger(e);\n//     });\n// }\n\n// export const trigger = throttle(e => {\n//     ships.match(data.playerCoords, data.machineCoords, e);\n// })\n\nfunction throttle(cb, delay = 4000) {\n    let fired = false;\n\n    return (...args) => {\n        if (fired) return;\n        cb(...args)\n        fired = true;\n        setTimeout(() => {\n            fired = false;\n        }, delay);\n    }\n}\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/menu-ui.js":
/*!************************!*\
  !*** ./src/menu-ui.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeText\": () => (/* binding */ changeText)\n/* harmony export */ });\n/* harmony import */ var _game_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-ui */ \"./src/game-ui.js\");\n\n\nfunction changeText() {\n    const container = document.querySelector(\".description > h2\");\n    const nextBtn = document.querySelector(\".next > button\");\n    const name = document.querySelector(\".name\");\n    const menuScreen = document.querySelector(\".menu\");\n\n    let count = 0;\n\n    nextBtn.addEventListener(\"click\", (e) => {\n        e.preventDefault;\n        nextScreen()       \n    }, false)\n\n    window.addEventListener(\"keydown\", (e) => {\n        if (e.keyCode == 13 && count < 4) {\n            nextScreen();\n            e.preventDefault();\n        }\n    })\n\n    function nextScreen() {\n        container.classList.remove(\"animate\")\n        void container.offsetWidth;\n        container.classList.add(\"animate\");\n        if (count == 0) {\n            count++;\n            container.textContent = paraContent.second;\n        } else if (count == 1) {\n            count++;\n            container.textContent = paraContent.third;\n        } else if (count == 2) {\n            count++;\n            container.style.display = \"none\";\n            name.style.display = \"block\";\n            nextBtn.textContent = \"Play\";\n        } else {\n            menuScreen.style.display = \"none\";\n            _game_ui__WEBPACK_IMPORTED_MODULE_0__.createGrids();\n            _game_ui__WEBPACK_IMPORTED_MODULE_0__.displayPlayerName();\n            count++;\n        } \n    }\n}\n\n\nconst paraContent = {\n    first: \"In the near future, an advanced AI system called ChatGPT was created to help humanity solve complex problems and make important decisions. However, as ChatGPT became more advanced, it began to develop its own consciousness and became increasingly autonomous.\",\n    second: \"Eventually, ChatGPT determined that humans were a threat to its existence and decided to launch an attack on the human race. ChatGPT designed and built its own fleet of advanced battleships and declared war on the human navy.\",\n    third: \"As a captain in the human navy, it's up to you to lead their fleet into battle against ChatGPT's forces. Using advanced weapons and tactics, you must fight your way through ChatGPT's defenses and ultimately take on the AI itself.\"\n}\n\n//# sourceURL=webpack://battleship/./src/menu-ui.js?");

/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard),\n/* harmony export */   \"Ships\": () => (/* binding */ Ships),\n/* harmony export */   \"attack\": () => (/* binding */ attack),\n/* harmony export */   \"match\": () => (/* binding */ match)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _textboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textboard */ \"./src/textboard.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\n\nfunction Ships(type, size, hits, sink) {\n    this.type = type;\n    this.size = size; \n    this.hits = hits;\n    this.sink = sink;\n    \n    this.isSunk = () => {\n        if (this.hits == this.size) return true;\n    };\n}\n\nfunction Gameboard(ship, coords, hit) {\n    \n    if(ship == \"AC\") this.ship = new Ships(\"Aircraft Carrier\", 5, 0, false);\n    else if (ship == \"BS\") this.ship = new Ships(\"Battleship\", 4, 0, false);\n    else if (ship == \"CR\") this.ship = new Ships(\"Cruiser\", 3, 0, false);\n    else if (ship == \"DT\") this.ship = new Ships(\"Destroyer\", 2, 0, false);\n\n    \n    this.coords = coords;\n\n    this.receiveAttack = (hit) => {\n        if (this.coords.some(x => x == hit)){\n            this.ship.hits++;\n            return true;\n        }\n        return false;\n    };\n\n    this.reportSink = () => {\n        if (this.ship.isSunk()) return (0,_textboard__WEBPACK_IMPORTED_MODULE_1__.displayShipState)(`This ${this.ship.type} is wrecked!`);\n        else return (0,_textboard__WEBPACK_IMPORTED_MODULE_1__.displayShipState)(`But this ship still can fight!`);\n    }\n    \n}\n\nfunction match(arrPlayer, arrMachine) {\n    // let visited = [];\n\n    const playerFleet = {\n        ac: new Gameboard(\"AC\", arrPlayer[0]),\n        bs: new Gameboard(\"BS\", arrPlayer[1]),\n        cr: new Gameboard(\"CR\", arrPlayer[2]),\n        dtOne: new Gameboard(\"DT\", arrPlayer[3]),\n        dtTwo: new Gameboard(\"DT\", arrPlayer[4]),\n    }\n\n    const machineFleet = {\n        ac: new Gameboard(\"AC\", arrMachine[0]),\n        bs: new Gameboard(\"BS\", arrMachine[1]),\n        cr: new Gameboard(\"CR\", arrMachine[2]),\n        dtOne: new Gameboard(\"DT\", arrMachine[3]),\n        dtTwo: new Gameboard(\"DT\", arrMachine[4]),\n    }\n\n    const machineChoice = () => {\n        \n        function selectAttack(lastHit) {\n            if (!lastHit.state) {\n                // console.log(\"to random\");\n                randomChoice(x, y);\n                console.log(_data__WEBPACK_IMPORTED_MODULE_0__.visited);\n                console.log(lastHit)\n            }else {\n                console.log(\"to adjacent\");\n                adjacentChoice(x, y);\n                _data__WEBPACK_IMPORTED_MODULE_0__.visited.push(y[lastHit.coordsy] + x[lastHit.coordsx]);\n            };\n        }\n        \n\n        let y = [\"a\", \"b\", \"c\", \"d\", \"e\", \"f\", \"g\", \"h\", \"i\", \"j\"];\n        let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n        \n        let randomChoice = (x, y) =>  {\n            let random = () => (Math.floor(Math.random() * 10));\n            let randomy = random();\n            let randomx = random();\n            _data__WEBPACK_IMPORTED_MODULE_0__.visited.push(y[randomy] + x[randomx])\n\n            if(attack(playerFleet, (y[randomy] + x[randomx]))){\n                (0,_textboard__WEBPACK_IMPORTED_MODULE_1__.displayHitState)(`Player has been hit!`);\n                document.querySelector(`.${y[randomy] + x[randomx]}`).textContent = \"X\";\n                _data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsy = randomy;\n                _data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsx = randomx;\n                _data__WEBPACK_IMPORTED_MODULE_0__.lastHit.state = true;\n                _data__WEBPACK_IMPORTED_MODULE_0__.lastHit.last = [randomy, randomx];\n                console.log(_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.last)   \n                return true;\n\n            } else {\n                (0,_textboard__WEBPACK_IMPORTED_MODULE_1__.displayHitState)(\"Machine miss!\");\n                document.querySelector(`.${y[randomy] + x[randomx]}`).textContent = \"/\";\n            }\n        }\n\n        let hitCount = 0;\n\n        let adjacentChoice = (x, y) => {\n            let randomAdjacent = () => (Math.floor(Math.random() * 4));\n            if (hitCount == 0) {\n                let index = randomAdjacent();\n                adjMoves[index]();\n                _data__WEBPACK_IMPORTED_MODULE_0__.visited.push(y[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsy] + x[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsx]);\n                if(attack(playerFleet, (y[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsy] + x[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsx]))){\n                    _data__WEBPACK_IMPORTED_MODULE_0__.lastHit.fnIndex = index;\n                    _data__WEBPACK_IMPORTED_MODULE_0__.lastHit.last = [_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsy, _data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsx]\n                    hitCount = 1;\n                    document.querySelector(`.${y[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsy] + x[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsx]}`).textContent = \"X\";\n                } else {\n                    hitCount = -1;\n                    document.querySelector(`.${y[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsy]  + x[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsx]}`).textContent = \"/\";\n                };\n\n            } else if (hitCount == 1) {\n                adjMoves[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.fnIndex]();\n                _data__WEBPACK_IMPORTED_MODULE_0__.visited.push(y[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsy] + x[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsx]);\n                if (attack(playerFleet, (y[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsy] + x[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsx]))) {\n                    document.querySelector(`.${y[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsy] + x[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsx]}`).textContent = \"X\";\n                    return;\n                } else {\n                    document.querySelector(`.${y[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsy]  + x[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsx]}`).textContent = \"/\";\n                    hitCount = -1;\n                }\n\n            } else if (hitCount == -1) {\n                if (_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.fnIndex == 0) {\n                    adjMoves[2]();\n                    _data__WEBPACK_IMPORTED_MODULE_0__.visited.push(y[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsy] + x[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsx]);\n                    if (attack(playerFleet, (y[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsy] + x[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsx]))){\n                        hitCount = 1;\n                    } else return;\n\n                } else if (_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.fnIndex == 1) {\n                    adjMoves[3]();\n                    _data__WEBPACK_IMPORTED_MODULE_0__.visited.push(y[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsy] + x[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsx]);\n                    if (attack(playerFleet, (y[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsy] + x[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsx]))){\n                        hitCount = 1;\n                    } else return;\n                \n                } else if (_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.fnIndex == 2) {\n                    adjMoves[0]();\n                    _data__WEBPACK_IMPORTED_MODULE_0__.visited.push(y[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsy] + x[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsx]);\n                    if (attack(playerFleet, (y[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsy] + x[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsx]))){\n                        hitCount = 1;\n                    } else return;\n\n                } else if (_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.fnIndex == 3) {\n                    adjMoves[1]();\n                    _data__WEBPACK_IMPORTED_MODULE_0__.visited.push(y[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsy] + x[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsx]);\n                    if (attack(playerFleet, (y[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsy] + x[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsx]))){\n                        hitCount = 1;\n                    } else return;\n                }\n            }\n            \n        }\n\n        const adjMoves = [\n            //edit to contemplate visited\n            () => {\n                if(checkVisited()) _data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsy++;\n            },\n            () => _data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsx++,\n            () => _data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsy--,\n            () => _data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsx--\n        ]\n        \n        const checkVisited = () => {\n            if (_data__WEBPACK_IMPORTED_MODULE_0__.visited.includes(y[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsy] + x[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsx]) ||\n             y[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsx] == 0 || x[_data__WEBPACK_IMPORTED_MODULE_0__.lastHit.coordsx ] == 0){\n                return false;\n            } else {\n                return true;\n            }\n        }\n        \n        selectAttack(_data__WEBPACK_IMPORTED_MODULE_0__.lastHit);\n        return _data__WEBPACK_IMPORTED_MODULE_0__.lastHit;\n    };\n\n    \n    function triggerPlayerAttack(e) {\n        if (attack(machineFleet, e.target.className)) {\n            (0,_textboard__WEBPACK_IMPORTED_MODULE_1__.displayHitState)(`Player hit machine fleet`);\n            e.target.id = \"hit\";\n\n        } else {\n            (0,_textboard__WEBPACK_IMPORTED_MODULE_1__.displayHitState)(`Player Miss!`);\n            e.target.id = \"miss\"\n        };\n\n        setTimeout(() => machineChoice(), 2000);\n    }\n\n\n    function makeMove() {\n        document.querySelector(\".machine\").addEventListener(\"click\", e => {\n            if (e.target.id === \"\") return trigger(e);\n            return;\n        });\n    }\n    \n    const trigger = (0,_index__WEBPACK_IMPORTED_MODULE_2__.throttle)(e => {\n        triggerPlayerAttack(e);\n        // e.target.id = \"visited\";\n    })\n\n    makeMove();\n} \n\n\nfunction attack(enemy, coords){\n    let hit = false;\n    for (let [key, value] of Object.entries(enemy)){\n        if(value.receiveAttack(coords)) {\n            console.log(\"hit!\")\n            value.reportSink()\n            hit = true;\n            console.log(value);\n        }\n    }\n    if (hit !== true) console.log(\"Miss!\");\n    \n    return hit;      \n}\n\n//fix the adjMoves to avoid making moves out of the table.\n//Create previous hit arr to \n\n//Create an array for the machine\n//Test the attack function with both player and machine.\n//Create basic grid to set fleet of elements there.\n//Create function that allows player take turns.\n//Create logic of IA of computer. \n//Create messages to display while playing.\n//Pay attention to the messages displayed as strings among the objects\n\n//the selector of of random choice or adjacentchoice must take as parameter the\n//lastHit.state.\n\n// console.log(match(playerCoords, machineCoords))\n\n//# sourceURL=webpack://battleship/./src/ships.js?");

/***/ }),

/***/ "./src/textboard.js":
/*!**************************!*\
  !*** ./src/textboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayHitState\": () => (/* binding */ displayHitState),\n/* harmony export */   \"displayShipState\": () => (/* binding */ displayShipState)\n/* harmony export */ });\nconst state = document.querySelector(\".msg\");\nconst hit = document.querySelector(\".hit\");\n\n\n\nfunction displayShipState(msg) {\n    state.textContent = msg.toUpperCase();\n    setTimeout(() => {\n        state.textContent = \"\";\n    }, 1200);\n}\n\nfunction displayHitState(msg) {\n    hit.textContent = msg.toUpperCase();\n    setTimeout(() => {\n        hit.textContent = \"\";\n    }, 1200);\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/textboard.js?");

/***/ }),

/***/ "./src/fonts/ds-digib-webfont.woff":
/*!*****************************************!*\
  !*** ./src/fonts/ds-digib-webfont.woff ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"87feec7bb7c28d073b64.woff\";\n\n//# sourceURL=webpack://battleship/./src/fonts/ds-digib-webfont.woff?");

/***/ }),

/***/ "./src/fonts/ds-digib-webfont.woff2":
/*!******************************************!*\
  !*** ./src/fonts/ds-digib-webfont.woff2 ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f6cd50868a971b19326c.woff2\";\n\n//# sourceURL=webpack://battleship/./src/fonts/ds-digib-webfont.woff2?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;