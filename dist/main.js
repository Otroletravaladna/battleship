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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --font: 'Orbitron', sans-serif;\\n}\\n\\nbody {\\n    background: rgb(13,15,30);\\n    background: linear-gradient(94deg, rgba(13,15,30,1) 0%, rgba(30,33,67,1) 10%, rgba(35,39,80,1) 13%, rgba(38,42,86,1) 20%, rgba(38,42,86,1) 80%, rgba(35,39,80,1) 86%, rgba(30,33,67,1) 90%, rgba(13,15,30,1) 100%);\\n    font-family: var(--font);\\n    height: 100svh;\\n    margin: 0;\\n}\\n\\n/* Menu style */\\n\\n.menu {\\n    display: grid;\\n    grid-template-columns: 20% auto 20%;\\n}\\n\\n.header {\\n    background: url(https://media.giphy.com/media/jOtazvv6bN4ccCzRKO/giphy.gif);\\n    background-size: cover;\\n    -moz-background-clip: text;\\n    -webkit-background-clip: text;\\n\\n    display: grid;\\n    grid-column: 2 / 3;\\n    justify-content: center;\\n    font-weight: 900;\\n    color: transparent;\\n    font-size: 2.5rem;\\n    letter-spacing: 1px;\\n    text-transform: uppercase;\\n}\\n\\n\\n.content {\\n    grid-column: 2 / 3;\\n    color: silver;\\n    line-height: 1.8;\\n    text-align: center;\\n}\\n\\n.name {\\n    display: none;\\n}\\n\\ninput {\\n    font: var(--font);\\n    border: none;\\n    background: rgb(55, 48, 107, .6);\\n    padding: .5rem;\\n}\\n\\n.animate {\\n    color: transparent;\\n    letter-spacing: 2px;\\n    animation: shadow 2s;\\n    text-shadow: 0 0 0 rgba(255, 255, 255, 1);\\n}\\n\\nbutton {\\n    font-family: var(--font);\\n    font-size: 1.5rem;\\n    background: rgb(55, 48, 107, .6);\\n    color: white;\\n    border: none;\\n    padding: .5rem 1rem;\\n    text-shadow: 0 0 2px rgba(255, 255, 255, .6);\\n    text-transform: uppercase;\\n    margin: 1rem;\\n}\\n\\nbutton:hover {\\n    background: rgb(55, 48, 107, .3);\\n    cursor: pointer;\\n    text-shadow: 0 0 5px rgba(255, 255, 255, .9);\\n}\\n\\n@keyframes shadow {\\n    0% {\\n        text-shadow: 0 0 5px rgba(255, 255, 255, .3);\\n    }\\n    100% {\\n        text-shadow: 0 0 1px rgba(255, 255, 255, 1);\\n    }\\n}\\n\\n/* game style */\\n\\n.game {\\n    height: 100svh;\\n    display: none;\\n    grid-template-columns: 10% auto 10%;\\n    grid-template-rows: auto 40%;\\n}\\n\\n.info {\\n    grid-column: 2 / 3;\\n    grid-row: 2 / 3;\\n}\\n\\n.game-content {\\n    display: grid;\\n    grid-column: 1 / 4;\\n    grid-row: 1 / 2;\\n\\n    grid-template-columns: 50% 50%;\\n}\\n\\n.grid-container {\\n    display: grid;\\n    grid-template-rows: 10% auto;\\n    place-items: center;\\n}\\n\\n.grid {\\n    display: grid;\\n    grid-template-columns: repeat(10, 1fr);\\n    grid-template-rows: repeat(10, 1fr);\\n    aspect-ratio: 1 / 1;\\n}\\n\\n.player > div, .machine > div{\\n    border: 1px solid black;\\n    width: 2rem;\\n    height: 2rem;\\n    background-color: white;\\n}\\n\\n.player > div:hover , .machine > div:hover{\\n    background: lightblue;\\n}\\n\\n.grid-container > h2 {\\n    margin: 0;\\n    align-self: self-end;\\n}\\n\\n.player-grid {\\n    text-transform: capitalize;\\n}\\n\\n.info {\\n    display: grid;\\n    grid-column: 1 / 4;\\n    grid-row: 2 / 3;\\n    grid-template-columns: 50% 50%;\\n    overflow: hidden;\\n\\n}\\n\\n.message {\\n    grid-column: 2 / 3;\\n}\\n\\n.set-fleet {\\n    justify-self: center;\\n    grid-column: 1 / 2;\\n    display: grid;\\n    grid-template-rows: 10% 10% 80%;\\n    place-items: center;\\n}\\n\\n.set-fleet > h3 {\\n    margin: 0;\\n    grid-row: 1 / 2;\\n}\\n\\n.set-fleet > button {\\n    width: fit-content;\\n    font-size: 1rem;\\n    grid-row: 2 / 3;\\n}\\n\\n.fleet-display {\\n    grid-row: 3 /4;\\n    width: 100%;\\n    height: 100%;\\n    display: grid;\\n    place-content: center;\\n}\\n\\n.item-container {\\n    display: flex;\\n    width: fit-content;\\n    flex-direction: column;\\n    background: #3F497F;\\n}\\n\\n.fleet-item{\\n    width: 2rem;\\n    height: 2rem;\\n    border: solid 1px black;\\n    box-sizing: content-box;\\n}\\n\\n#selected {\\n    background-color: lightblue;\\n}\\n\\n#missplaced {\\n    background-color: red;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

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

/***/ "./src/game-ui.js":
/*!************************!*\
  !*** ./src/game-ui.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createGrids\": () => (/* binding */ createGrids),\n/* harmony export */   \"displayPlayerName\": () => (/* binding */ displayPlayerName)\n/* harmony export */ });\nfunction createGrids() {\n    const container = document.querySelector(\".game\");\n    const playerGrid = document.querySelector(\".player\");\n    const machineGrid = document.querySelector(\".machine\");\n\n    const y = ['j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];\n    container.style.display = \"grid\";\n\n    function displayGrid(parent) {\n        y.forEach((item) => {\n            for (let i = 0; i < 10; i++) {\n                const cell = document.createElement(\"div\");\n                cell.classList.add(item + (i +1));\n                parent.append(cell);\n            }\n        })\n    }\n    \n    displayGrid(playerGrid);\n    displayGrid(machineGrid);\n    dragItem();\n}\n\nfunction displayPlayerName() {\n    const input = document.querySelector(\"input\");\n    const nameDisplay = document.querySelector(\".player-name\");\n\n    if (!input.value) nameDisplay.textContent = \"Elon Musk\";\n    else nameDisplay.textContent = input.value;\n}\n\nfunction displayFleetElement() {\n    let container = document.querySelector(\".item-container\");\n\n    const ac = (container) => {\n        for(let i = 0; i < 5; i++) {\n            let cell = document.createElement(\"div\");\n            cell.classList.add(\"fleet-item\");\n            container.appendChild(cell);\n        }\n    }\n\n    function changeAxis() {\n        const btn = document.querySelector(\".change-axis\");\n        let isRow = false;\n        container.id = \"column\";\n        \n        btn.addEventListener(\"click\", () => {\n            if (!isRow) {\n                container.style.flexDirection = \"row\"\n                container.id = \"row\";\n                isRow = true;\n            } else {\n                container.style.flexDirection = \"column\";\n                container.id = \"column\";\n                isRow = false;\n            };\n        })\n    }\n\n    changeAxis();\n    ac(container);\n}\n\ndisplayFleetElement();\n\nfunction dragItem() {\n    const src = document.querySelector(\".item-container\");    \n    const target = document.querySelector(`.player.grid`);\n\n    src.addEventListener(\"dragstart\", (e) => {\n        src.style.background = \"lightblue\";\n        e.dataTransfer.setDragImage(src, 0, 0);\n    })\n\n    target.addEventListener(\"dragover\", (e) => {\n        e.preventDefault();\n        let dragged = appendItem(e, target);\n        if (dragged.includes(null)) {\n            dragged.forEach(e => {\n                if (e !== null) e.style.background = \"red\";\n            });\n\n        } else dragged.forEach(e => e.style.background = \"green\" );\n        \n    }, false);\n\n\n    target.addEventListener(\"dragleave\", (e) => {\n        let left = appendItem(e, target);\n        left.forEach(e => { if(e !== null) e.style.background = \"white\" });\n    });\n\n    target.addEventListener(\"drop\", (e) => {\n        e.preventDefault();\n        let ship = appendItem(e, target);\n\n        if (ship.includes(null)) {\n            ship.forEach(e => { \n                if (e !== null) e.style.background = \"white\";\n            });\n\n        } else { ship.forEach(e =>  e.id = \"selected\" )}\n    })\n\n    function appendItem(e, target) {\n        const y = ['j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];\n        const targetx = Number(e.target.className.slice(1));\n        const targety = e.target.className[0];\n        let itemAxis = src.id;\n        let rowItems = [];\n        let columnItems = [];\n\n        if (itemAxis == \"row\") {\n            for (let i = 0; i < src.childElementCount; i++){\n                let item = document.querySelector(`.${targety + (targetx + i)}`);\n                rowItems.push(item);\n            }\n\n        } else {\n            for (let i = 0; i < src.childElementCount; i++){\n                let item = document.querySelector(`.${y[y.indexOf(targety) + i] +  targetx}`);\n                columnItems.push(item);\n            }\n        }\n\n        if (rowItems.length == 0) return columnItems; \n        return rowItems;\n    }\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/game-ui.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ships */ \"./src/ships.js\");\n/* harmony import */ var _menu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-ui */ \"./src/menu-ui.js\");\n\n\n\n\n_menu_ui__WEBPACK_IMPORTED_MODULE_2__.changeText();\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/menu-ui.js":
/*!************************!*\
  !*** ./src/menu-ui.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeText\": () => (/* binding */ changeText)\n/* harmony export */ });\n/* harmony import */ var _game_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-ui */ \"./src/game-ui.js\");\n\n\nfunction changeText() {\n    const container = document.querySelector(\".description > h2\");\n    const nextBtn = document.querySelector(\".next > button\");\n    const name = document.querySelector(\".name\");\n    const menuScreen = document.querySelector(\".menu\");\n\n    let count = 0;\n\n    nextBtn.addEventListener(\"click\", (e) => {\n        e.preventDefault;\n        nextScreen()       \n    }, false)\n\n    window.addEventListener(\"keydown\", (e) => {\n        if (e.keyCode == 13 && count < 4) nextScreen();\n    }, false)\n\n    function nextScreen() {\n        container.classList.remove(\"animate\")\n        void container.offsetWidth;\n        container.classList.add(\"animate\");\n        if (count == 0) {\n            count++;\n            container.textContent = paraContent.second;\n        } else if (count == 1) {\n            count++;\n            container.textContent = paraContent.third;\n        } else if (count == 2) {\n            count++;\n            container.style.display = \"none\";\n            name.style.display = \"block\";\n            nextBtn.textContent = \"Play\";\n        } else {\n            menuScreen.style.display = \"none\";\n            _game_ui__WEBPACK_IMPORTED_MODULE_0__.createGrids();\n            _game_ui__WEBPACK_IMPORTED_MODULE_0__.displayPlayerName();\n            count++;\n        } \n    }\n}\n\n\nconst paraContent = {\n    first: \"In the near future, an advanced AI system called ChatGPT was created to help humanity solve complex problems and make important decisions. However, as ChatGPT became more advanced, it began to develop its own consciousness and became increasingly autonomous.\",\n    second: \"Eventually, ChatGPT determined that humans were a threat to its existence and decided to launch an attack on the human race. ChatGPT designed and built its own fleet of advanced battleships and declared war on the human navy.\",\n    third: \"As a captain in the human navy, it's up to you to lead their fleet into battle against ChatGPT's forces. Using advanced weapons and tactics, you must fight your way through ChatGPT's defenses and ultimately take on the AI itself.\"\n}\n\n//# sourceURL=webpack://battleship/./src/menu-ui.js?");

/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard),\n/* harmony export */   \"Ships\": () => (/* binding */ Ships),\n/* harmony export */   \"match\": () => (/* binding */ match)\n/* harmony export */ });\nfunction Ships(type, size, hits, sink) {\n    this.type = type;\n    this.size = size; \n    this.hits = hits;\n    this.sink = sink;\n\n    // this.hit = () => { \n    //     hits++;\n    // };\n    \n    this.isSunk = () => {\n        if (this.hits == this.size) this.sink = true;\n    };\n}\n\nfunction Gameboard(ship, coords, hit) {\n    \n    if(ship == \"AC\") this.ship = new Ships(\"Aircraft Carrier\", 5, 0, false);\n    else if (ship == \"BS\") this.ship = new Ships(\"Battleship\", 4, 0, false);\n    else if (ship == \"CR\") this.ship = new Ships(\"Cruiser\", 3, 0, false);\n    else if (ship == \"DT\") this.ship = new Ships(\"Destroyer\", 2, 0, false);\n\n    \n    this.coords = coords;\n\n    this.receiveAttack = (hit) => {\n        if (this.coords.some(x => x == hit)){\n            this.ship.hits += 1;\n            console.log(\"Hit!\")\n            return true;\n        }\n        console.log(\"Miss!\")\n        return false;\n    };\n\n    this.reportSink = () => {\n        this.ship.isSunk();\n        if (this.ship.sink == true)  return console.log(`This ship is wrecked!`);\n        return console.log(\"no\");\n        // return console.log(`This ship still can fight!`);\n    }\n    \n}\n\nfunction match(arrPlayer, arrMachine) {\n    let count;\n\n    const playerFleet = {\n        ac: new Gameboard(\"AC\", arrPlayer[0]),\n        bs: new Gameboard(\"BS\", arrPlayer[1]),\n        cr: new Gameboard(\"CR\", arrPlayer[2]),\n        dtOne: new Gameboard(\"DT\", arrPlayer[3]),\n        dtTwo: new Gameboard(\"DT\", arrPlayer[4]),\n\n    }\n\n    // const machineFleet = {\n    //     ac: new Gameboard(\"AC\", arrMachine[0]),\n    //     bs: new Gameboard(\"BS\", arrMachine[1]),\n    //     cr: new Gameboard(\"CR\", arrMachine[2]),\n    //     dtOne: new Gameboard(\"DT\", arrMachine[3]),\n    //     dtTwo: new Gameboard(\"DT\", arrMachine[4]),\n\n    // }\n    \n\n    function attack(enemy, coords){\n        let hit = false;\n        for (let [key, value] of Object.entries(enemy)){\n            if(value.receiveAttack(coords)) {\n                value.reportSink()\n                hit = true;\n            }\n        }\n        console.log(hit);\n        return hit;      \n    }\n\n\n    const machineChoice = () => {\n        \n        function selectAttack(lastHit) {\n            if (!lastHit.state) {\n                randomChoice(x, y);\n                visited.push(y[lastHit.coordsy] + x[lastHit.coordsx]);\n            }else {\n                adjacentChoice(x, y);\n                visited.push(y[lastHit.coordsy] + x[lastHit.coordsx]);\n            };\n        }\n        \n\n        let y = [\"a\", \"b\", \"c\", \"d\", \"e\", \"f\", \"g\", \"h\", \"i\", \"j\"];\n        let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n        let visited = [];\n\n\n        const lastHit = {\n            coordsy: null, \n            coordsx: null, \n            state: false,\n            fnIndex : 0,\n        }\n\n        let randomChoice = (x, y) =>  {\n            let random = () => (Math.floor(Math.random() * 10));\n            let coords = y + x;\n            let randomy = random();\n            let randomx = random();\n            visited.push(y[randomy] + x[randomx])\n\n            if(attack(playerFleet, (y[randomy] + x[randomx]))){\n                lastHit.coordsy = randomy;\n                lastHit.coordsx = randomx;\n                lastHit.state = true;\n                return true;\n            }\n        }\n\n        let adjacentChoice = (x, y) => {\n            let hitCount = 0;\n            let randomAdjacent = () => (Math.floor(Math.random() * 4));\n            if (hitCount == 0) {\n                let index = randomAdjacent();\n                adjMoves[index](); \n                visited.push(y[lastHit.coordsy] + x[lastHit.coordsx]);\n                if(attack(playerFleet, (y[lastHit.coordsy] + x[lastHit.coordsx]))){\n                    lastHit.fnIndex = index;   \n                    hitCount = 1;\n                } else return;\n\n            } else if (hitCount == 1) {\n                adjMoves[lastHit.fnIndex]();\n                visited.push(y[lastHit.coordsy] + x[lastHit.coordsx]);\n                if (attack(playerFleet, (y[lastHit.coordsy] + x[lastHit.coordsx]))) {\n                    return;\n                } else {\n                    hitCount = -1;\n                }\n\n            } else if (hitCount == -1) {\n                if (lastHit.fnIndex == 0) {\n                    adjMoves[2]();\n                    visited.push(y[lastHit.coordsy] + x[lastHit.coordsx]);\n                    if (attack(playerFleet, (y[lastHit.coordsy] + x[lastHit.coordsx]))){\n                        hitCount = 1;\n                    } else return;\n\n                } else if (lastHit.fnIndex == 1) {\n                    adjMoves[3]();\n                    visited.push(y[lastHit.coordsy] + x[lastHit.coordsx]);\n                    if (attack(playerFleet, (y[lastHit.coordsy] + x[lastHit.coordsx]))){\n                        hitCount = 1;\n                    } else return;\n                \n                } else if (lastHit.fnIndex == 2) {\n                    adjMoves[0]();\n                    visited.push(y[lastHit.coordsy] + x[lastHit.coordsx]);\n                    if (attack(playerFleet, (y[lastHit.coordsy] + x[lastHit.coordsx]))){\n                        hitCount = 1;\n                    } else return;\n\n                } else if (lastHit.fnIndex == 3) {\n                    adjMoves[1]();\n                    visited.push(y[lastHit.coordsy] + x[lastHit.coordsx]);\n                    if (attack(playerFleet, (y[lastHit.coordsy] + x[lastHit.coordsx]))){\n                        hitCount = 1;\n                    } else return;\n                }\n            }\n            \n        }\n\n        const adjMoves = [\n            //edit to contemplate visited\n            () => {\n                if(checkVisited()) lastHit.coordsy++;\n            },\n            () => lastHit.coordsx++,\n            () => lastHit.coordsy--,\n            () => lastHit.coordsx--\n        ]\n        \n        const checkVisited = () => {\n            if (visited.includes(y[lastHit.coordsy] + x[lastHit.coordsx]) ||\n             y[lastHit.coordsx] == 0 || x[lastHit.coordsx ] == 0){\n                return false;\n            } else {\n                return true;\n            }\n        }\n            \n        return lastHit;\n    };\n\n    machineChoice();\n} \n\nconst playerCoords = [\n    [\"a1\", \"a2\", \"a3\", \"a4\", \"a5\"],\n    [\"b1\", \"b2\", \"b3\", \"b4\"],\n    [\"c3\", \"c4\", \"c5\"],\n    [\"d2\", \"d3\"],\n    [\"a6\", \"a7\"],\n\n]\n\nconst machineCoords = [\n\n]\n\n//fix the adjMoves to avoid making moves out of the table.\n//Create previous hit arr to \n\n//Create an array for the machine\n//Test the attack function with both player and machine.\n//Create basic grid to set fleet of elements there.\n//Create function that allows player take turns.\n//Create logic of IA of computer. \n//Create messages to display while playing.\n//Pay attention to the messages displayed as strings among the objects\n\n//the selector of of random choice or adjacentchoice must take as parameter the\n//lastHit.state.\n\nconsole.log(match(playerCoords))\n\n//# sourceURL=webpack://battleship/./src/ships.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;