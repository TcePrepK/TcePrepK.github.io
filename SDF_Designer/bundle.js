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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./res/style/style.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./res/style/style.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `#error-screen {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  font-family: fredoka one, cursive;\n}\n#error-screen > * {\n  color: #fff;\n  text-align: center;\n  font-size: 6vw;\n}\n#error-screen .top {\n  color: purple;\n  font-size: 25vw;\n  margin: 0 0 1rem;\n}\n#error-screen .error::before {\n  content: \"Error: \";\n  color: red;\n}\n\n@keyframes ui-expand {\n  0% {\n    left: -16rem;\n  }\n  70% {\n    left: -1rem;\n  }\n  75%, 100% {\n    left: 0;\n  }\n}\n@keyframes ui-collapse {\n  0%, 25% {\n    left: 0;\n  }\n  95% {\n    left: -15rem;\n  }\n  100% {\n    left: -16rem;\n  }\n}\n@keyframes node-expand {\n  0%, 25% {\n    scale: min(var(--node-max-scale), 0.9);\n  }\n  100% {\n    scale: min(var(--node-max-scale), 1);\n  }\n}\n@keyframes node-collapse {\n  0% {\n    scale: min(var(--node-max-scale), 1);\n  }\n  75%, 100% {\n    scale: min(var(--node-max-scale), 0.9);\n  }\n}\n#user-interface {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  row-gap: 1rem;\n  background: #248;\n  position: absolute;\n  width: 15rem;\n  height: calc(100% - 2rem);\n  left: -16rem;\n  padding: 2rem 1rem;\n  top: -1rem;\n  animation: ui-collapse 0.5s ease-out;\n  border-radius: 0 15px 15px 0;\n  box-shadow: 5px 0 13px -3px #000;\n}\n#user-interface #selection .node {\n  scale: var(--node-max-scale);\n  animation: node-collapse 0.5s;\n}\n#user-interface.expanded {\n  animation: ui-expand 0.5s;\n  left: 0;\n}\n#user-interface.expanded #selection .node {\n  animation: node-expand 0.5s;\n}\n#user-interface #header {\n  width: 100%;\n  height: 4rem;\n  background: #469;\n  border-radius: 15px;\n  box-shadow: 0 0 15px #000 inset;\n}\n#user-interface #selection {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  width: 100%;\n  height: calc(100% - 5rem);\n  background: #469;\n  border-radius: 15px;\n  box-shadow: 0 0 15px #000 inset;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n#user-interface #selection::-webkit-scrollbar {\n  width: 1.25rem;\n  background: #247;\n  border-radius: 0 15px 15px 0;\n  box-shadow: 0 0 10px #222 inset;\n}\n#user-interface #selection::-webkit-scrollbar-thumb {\n  background: #368;\n  border-radius: 15px;\n  box-shadow: 0 0 5px #222 inset;\n}\n#user-interface #selection::-webkit-scrollbar-thumb:hover {\n  background: #2c778f;\n  cursor: pointer;\n}\n#user-interface #selection .holder {\n  position: relative;\n}\n#user-interface #selection .holder:first-child {\n  margin-top: 1.25rem;\n}\n#user-interface #selection .holder:last-child {\n  margin-bottom: 1.25rem;\n}\n#user-interface #selection .holder::before, #user-interface #selection .holder:last-child::after {\n  content: \" \";\n  position: absolute;\n  top: -0.675rem;\n  width: 100%;\n  height: 5px;\n  background: #247;\n  box-shadow: 0 0 10px #333 inset;\n}\n#user-interface #selection .holder:last-child::after {\n  top: auto;\n  bottom: -0.675rem;\n}\n#user-interface #selection .holder .node {\n  --node-color: #000;\n  position: relative;\n  width: 80%;\n  background: color-mix(in oklab, var(--node-color) 60%, #000);\n  border-radius: 7.5px;\n  margin: 0 auto 0 auto;\n  box-shadow: 0 0 10px #333;\n}\n#user-interface #selection .holder .node::before, #user-interface #selection .holder .node::after {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  width: 1.25rem;\n  height: 100%;\n  background: color-mix(in oklab, var(--node-color) 80%, #000);\n}\n#user-interface #selection .holder .node::before {\n  left: 0;\n  border-radius: 7.5px 0 0 7.5px;\n}\n#user-interface #selection .holder .node::after {\n  right: 0;\n  border-radius: 0 7.5px 7.5px 0;\n}\n#user-interface #selection .holder .node .name {\n  position: absolute;\n  width: calc(100% - 1rem);\n  border-top-left-radius: 7.5px;\n  user-select: none;\n  background: var(--node-color);\n  text-align: center;\n  color: var(--node-name-color);\n  text-transform: uppercase;\n  font-size: 1.2rem;\n  font-family: Arial, Helvetica, sans-serif;\n}\n#user-interface #selection .holder .node .input_ports, #user-interface #selection .holder .node .output_ports {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  position: relative;\n  width: 1rem;\n}\n#user-interface #selection .holder .node .input_ports > *, #user-interface #selection .holder .node .output_ports > * {\n  position: relative;\n  width: 0.5rem;\n  height: 0.5rem;\n  background: #fff;\n  border: 2px solid #ccc;\n  border-radius: 40%;\n  cursor: pointer;\n}\n#user-interface #selection .holder .node .input_ports {\n  padding-top: 2.5rem;\n  padding-bottom: 1rem;\n  left: -0.5rem;\n}\n#user-interface #selection .holder .node .output_ports {\n  justify-content: center;\n  position: absolute;\n  right: -0.5rem;\n  margin-top: auto;\n  padding: 0;\n  bottom: 1rem;\n  z-index: 1;\n}\n#user-interface #visuals #drawer-handle {\n  position: absolute;\n  top: 50%;\n  transform: translate(calc(0.5rem - 2px), -50%);\n  fill: #248;\n  width: 3rem;\n  padding: 0.5rem;\n  cursor: pointer;\n  user-select: none;\n  filter: drop-shadow(7px 2px 4px rgba(0, 0, 0, 0.7));\n}\n\n#node-playground {\n  position: relative;\n  background: #333;\n  flex-grow: 1;\n  margin: 0 1.5rem;\n  right: 0;\n  border-radius: 15px;\n  box-shadow: 0 0 15px #000 inset;\n}\n#node-playground #playground-canvas {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n#node-playground #background {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.5rem;\n}\n#node-playground #background > * {\n  margin: 0 auto;\n}\n#node-playground #background #background-logo {\n  width: 25vh;\n  filter: brightness(1.5);\n}\n#node-playground #background #background-name {\n  text-align: center;\n  font-size: 5vh;\n  font-weight: bold;\n  color: #444;\n  font-family: Arial, Helvetica, sans-serif;\n  text-shadow: #303030 1px 1px 5px;\n}\n#node-playground #blue-screen {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 15px;\n  background: radial-gradient(circle, rgba(0, 100, 150, 0.2) 20%, rgba(0, 255, 255, 0.1) 100%);\n}\n\nhtml, body {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  background: #333;\n}\n\n#main-screen {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n  background: #444;\n}\n#main-screen > * {\n  height: 1.5rem;\n  background: #444;\n}\n#main-screen .interfaces {\n  position: relative;\n  height: calc(100% - 3rem);\n  display: flex;\n}\n\n.preload {\n  animation-duration: 0s !important;\n  transition: background-color 0s, opacity 0s, color 0s, width 0s, height 0s, padding 0s, margin 0s !important;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://electronwebgl/./res/style/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://electronwebgl/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://electronwebgl/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./res/style/style.scss":
/*!******************************!*\
  !*** ./res/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./res/style/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://electronwebgl/./res/style/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://electronwebgl/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://electronwebgl/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://electronwebgl/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://electronwebgl/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://electronwebgl/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://electronwebgl/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst logger_1 = __webpack_require__(/*! ./renderer/core/logger */ \"./src/renderer/core/logger.ts\");\nconst main_1 = __webpack_require__(/*! ./renderer/main */ \"./src/renderer/main.ts\");\nconst ErrorScreen_1 = __webpack_require__(/*! ./renderer/simulation/ui/ErrorScreen */ \"./src/renderer/simulation/ui/ErrorScreen.ts\");\nconst logger = new logger_1.Logger(\"Index Initialization\", \"✅\");\nlogger.log(\"Renderer initialized successfully!\");\nlogger.log(\"Imported main successfully!\");\nlogger.log(\"Starting the main process...\");\nconst main = new main_1.Main();\ntry {\n    main.initialize();\n}\ncatch (error) {\n    let msg = error;\n    if (error instanceof Error)\n        msg = error.message;\n    new ErrorScreen_1.ErrorScreen(msg);\n}\n\n\n//# sourceURL=webpack://electronwebgl/./src/index.ts?");

/***/ }),

/***/ "./src/renderer/core/canvas.ts":
/*!*************************************!*\
  !*** ./src/renderer/core/canvas.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Canvas = void 0;\nconst utils_1 = __webpack_require__(/*! ./utils */ \"./src/renderer/core/utils.ts\");\nconst vector2D_1 = __webpack_require__(/*! ./vector2D */ \"./src/renderer/core/vector2D.ts\");\nconst signal_1 = __webpack_require__(/*! ./signal */ \"./src/renderer/core/signal.ts\");\nclass Canvas {\n    constructor() {\n        this.onResize = new signal_1.Signal();\n    }\n    initialize(parent = null) {\n        if (!parent)\n            parent = document.body;\n        this.mainCanvas = (0, utils_1.createCanvas)({ parent });\n        this.updateResolution();\n        this.context = this.mainCanvas.getContext(\"webgl2\");\n        (0, utils_1.checkFor)(this.context, \"Unable to initialize WebGL. Your browser or machine may not support it.\");\n        parent.addEventListener(\"resize\", () => {\n            clearTimeout(this.resizeTimeout);\n            this.resizeTimeout = setTimeout(this.updateResolution.bind(this), 100);\n        });\n    }\n    updateResolution() {\n        this.WIDTH = Math.min(600, window.innerWidth * 0.8);\n        this.WIDTH = 0;\n        this.HEIGHT = this.WIDTH;\n        this.mainCanvas.width = this.WIDTH;\n        this.mainCanvas.height = this.HEIGHT;\n        this.onResize.dispatch(this.WIDTH, this.HEIGHT);\n    }\n    getContext() {\n        return this.context;\n    }\n    getResolution() {\n        return new vector2D_1.VectorI2D(this.WIDTH, this.HEIGHT);\n    }\n    getElement() {\n        return this.mainCanvas;\n    }\n}\nexports.Canvas = Canvas;\n\n\n//# sourceURL=webpack://electronwebgl/./src/renderer/core/canvas.ts?");

/***/ }),

/***/ "./src/renderer/core/fpsCounter.ts":
/*!*****************************************!*\
  !*** ./src/renderer/core/fpsCounter.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.FPSCounter = void 0;\nclass FPSCounter {\n    constructor() {\n        this.lastTime = performance.now();\n        this.FPS = 0;\n    }\n    start() {\n        const now = performance.now();\n        const dt = now - this.lastTime;\n        this.lastTime = now;\n        this.FPS = 1000 / dt;\n        return dt;\n    }\n}\nexports.FPSCounter = FPSCounter;\n\n\n//# sourceURL=webpack://electronwebgl/./src/renderer/core/fpsCounter.ts?");

/***/ }),

/***/ "./src/renderer/core/globalVariables.ts":
/*!**********************************************!*\
  !*** ./src/renderer/core/globalVariables.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GlobalVariables = void 0;\nclass GlobalVariables {\n}\nexports.GlobalVariables = GlobalVariables;\nGlobalVariables.time = 0;\n\n\n//# sourceURL=webpack://electronwebgl/./src/renderer/core/globalVariables.ts?");

/***/ }),

/***/ "./src/renderer/core/logger.ts":
/*!*************************************!*\
  !*** ./src/renderer/core/logger.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Logger = void 0;\nclass Logger {\n    constructor(name, symbol) {\n        this.renderName = true;\n        this.renderSymbol = true;\n        this.name = name;\n        this.symbol = symbol;\n    }\n    log(...messages) {\n        const texts = new Array();\n        const objects = new Array();\n        for (const msg of messages) {\n            if (typeof msg === \"string\")\n                texts.push(msg);\n            else\n                objects.push(msg);\n        }\n        console.log(this.getFixed(...texts), ...objects);\n    }\n    warn(...messages) {\n        const texts = new Array();\n        const objects = new Array();\n        for (const msg of messages) {\n            if (typeof msg === \"string\")\n                texts.push(msg);\n            else\n                objects.push(msg);\n        }\n        console.warn(this.getFixed(...texts), ...objects);\n    }\n    error(...messages) {\n        const texts = new Array();\n        const objects = new Array();\n        for (const msg of messages) {\n            if (typeof msg === \"string\")\n                texts.push(msg);\n            else\n                objects.push(msg);\n        }\n        console.error(this.getFixed(...texts), ...objects);\n    }\n    throw(...messages) {\n        throw this.getFixed(...messages);\n    }\n    toggleName() {\n        this.renderName = !this.renderName;\n    }\n    toggleSymbol() {\n        this.renderSymbol = !this.renderSymbol;\n    }\n    getFixed(...msg) {\n        if (this.renderSymbol && this.symbol) {\n            if (this.renderName)\n                return `${this.symbol} [${this.name}] ${msg} ${this.symbol}`;\n            return `${this.symbol} ${msg} ${this.symbol}`;\n        }\n        if (this.renderName)\n            return `[${this.name}] ${msg}`;\n        return `${msg}`;\n    }\n}\nexports.Logger = Logger;\n\n\n//# sourceURL=webpack://electronwebgl/./src/renderer/core/logger.ts?");

/***/ }),

/***/ "./src/renderer/core/mouse.ts":
/*!************************************!*\
  !*** ./src/renderer/core/mouse.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Mouse = exports.ButtonType = void 0;\nconst signal_1 = __webpack_require__(/*! ./signal */ \"./src/renderer/core/signal.ts\");\nvar ButtonType;\n(function (ButtonType) {\n    ButtonType[ButtonType[\"LEFT\"] = 0] = \"LEFT\";\n    ButtonType[ButtonType[\"MIDDLE\"] = 1] = \"MIDDLE\";\n    ButtonType[ButtonType[\"RIGHT\"] = 2] = \"RIGHT\";\n})(ButtonType || (exports.ButtonType = ButtonType = {}));\nclass Mouse {\n    constructor() {\n        this.x = 0;\n        this.y = 0;\n        this.onMouseButtonDown = new signal_1.Signal();\n        this.onMouseButtonUp = new signal_1.Signal();\n        this.onMouseDrag = new signal_1.Signal();\n        this.onWheelScroll = new signal_1.Signal();\n        this.isDragging = false;\n    }\n    initialize() {\n        const element = document.body;\n        element.addEventListener(\"mousemove\", e => {\n            const dx = e.clientX - this.x;\n            const dy = e.clientY - this.y;\n            this.x += dx;\n            this.y += dy;\n            if (this.isDragging)\n                this.onMouseDrag.dispatch(this.draggingButton, dx, dy);\n        });\n        element.addEventListener(\"mousedown\", e => {\n            this.onMouseButtonDown.dispatch(e.button);\n            this.isDragging = true;\n            this.draggingButton = e.button;\n        });\n        element.addEventListener(\"mouseup\", e => {\n            this.onMouseButtonUp.dispatch(e.button);\n            this.isDragging = false;\n        });\n        element.addEventListener(\"wheel\", e => {\n            this.onWheelScroll.dispatch(e.deltaY);\n        });\n    }\n}\nexports.Mouse = Mouse;\n\n\n//# sourceURL=webpack://electronwebgl/./src/renderer/core/mouse.ts?");

/***/ }),

/***/ "./src/renderer/core/signal.ts":
/*!*************************************!*\
  !*** ./src/renderer/core/signal.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Signal = void 0;\nclass Signal {\n    constructor() {\n        this.listeners = [];\n    }\n    add(listener) {\n        this.listeners.push(listener);\n    }\n    dispatch(...args) {\n        for (const listener of this.listeners) {\n            listener(...args);\n        }\n    }\n}\nexports.Signal = Signal;\n\n\n//# sourceURL=webpack://electronwebgl/./src/renderer/core/signal.ts?");

/***/ }),

/***/ "./src/renderer/core/types.ts":
/*!************************************!*\
  !*** ./src/renderer/core/types.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Float = exports.Integer = void 0;\nclass Integer extends Number {\n    constructor(value) {\n        super(Math.floor(value));\n    }\n}\nexports.Integer = Integer;\nclass Float extends Number {\n}\nexports.Float = Float;\n\n\n//# sourceURL=webpack://electronwebgl/./src/renderer/core/types.ts?");

/***/ }),

/***/ "./src/renderer/core/utils.ts":
/*!************************************!*\
  !*** ./src/renderer/core/utils.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.checkFor = checkFor;\nexports.createElement = createElement;\nexports.createDiv = createDiv;\nexports.createButton = createButton;\nexports.createCanvas = createCanvas;\nexports.swapElements = swapElements;\nexports.toggleClass = toggleClass;\nexports.getElementById = getElementById;\nexports.getElementByQuery = getElementByQuery;\nexports.fixEveryPreload = fixEveryPreload;\nexports.createHTML = createHTML;\nfunction checkFor(check, message, error = \"\") {\n    if (check === null || check === undefined) {\n        throw new Error(message + \"\\n\" + error);\n    }\n}\nfunction createElement(tagName, data, ...children) {\n    const element = document.createElement(tagName);\n    if (data !== undefined) {\n        if (data.parent !== undefined) {\n            data.parent.appendChild(element);\n            delete data.parent;\n        }\n        if (data.classes !== undefined && data.classes.length > 0) {\n            element.classList.add(...data.classes);\n            delete data.classes;\n        }\n        Object.assign(element, data);\n    }\n    element.append(...children);\n    return element;\n}\nfunction createDiv(data, ...args) {\n    return createElement(\"div\", data, ...args);\n}\nfunction createButton(data, ...args) {\n    return createElement(\"button\", data, ...args);\n}\nfunction createCanvas(data, ...args) {\n    return createElement(\"canvas\", data, ...args);\n}\nfunction swapElements(parent, oldElement, newElement) {\n    parent.insertBefore(newElement, oldElement);\n    parent.removeChild(oldElement);\n}\nfunction toggleClass(element, className) {\n    if (!element.classList.contains(className))\n        element.classList.add(className);\n    else\n        element.classList.remove(className);\n}\nfunction getElementById(id) {\n    return document.getElementById(id);\n}\nfunction getElementByQuery(query) {\n    return document.querySelector(query);\n}\nfunction fixEveryPreload() {\n    setTimeout(() => {\n        const preloads = [...document.getElementsByClassName(\"preload\")];\n        for (const element of preloads) {\n            element.classList.remove(\"preload\");\n        }\n    }, 500);\n}\n// Totally stolen from GPT-4.0\nfunction createHTML(html) {\n    const parser = new DOMParser();\n    // Parse the HTML string into a document\n    const doc = parser.parseFromString(html, \"text/html\");\n    // Get the body content of the parsed document\n    const bodyContent = doc.body;\n    // Append each child element of the parsed body to the actual document body\n    while (bodyContent.firstChild) {\n        document.body.appendChild(bodyContent.firstChild);\n    }\n}\n\n\n//# sourceURL=webpack://electronwebgl/./src/renderer/core/utils.ts?");

/***/ }),

/***/ "./src/renderer/core/vector2D.ts":
/*!***************************************!*\
  !*** ./src/renderer/core/vector2D.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.VectorI2D = exports.Vector2D = void 0;\nclass Vector2D {\n    constructor(x, y) {\n        this.x = this.cast(x);\n        this.y = this.cast(y);\n    }\n    add(v) {\n        return new Vector2D(this.x + v.x, this.y + v.y);\n    }\n    sub(v) {\n        return new Vector2D(this.x - v.x, this.y - v.y);\n    }\n    mul(v) {\n        return new Vector2D(this.x * v.x, this.y * v.y);\n    }\n    mulScalar(n) {\n        return new Vector2D(this.x * n, this.y * n);\n    }\n    div(v) {\n        return new Vector2D(this.x / v.x, this.y / v.y);\n    }\n    mag() {\n        return Math.sqrt(this.x * this.x + this.y * this.y);\n    }\n    dot(v) {\n        return this.x * v.x + this.y * v.y;\n    }\n    cast(n) {\n        return n;\n    }\n    toString() {\n        return `(${this.x}, ${this.y})`;\n    }\n}\nexports.Vector2D = Vector2D;\nclass VectorI2D extends Vector2D {\n    cast(n) {\n        return Math.floor(n);\n    }\n}\nexports.VectorI2D = VectorI2D;\n\n\n//# sourceURL=webpack://electronwebgl/./src/renderer/core/vector2D.ts?");

/***/ }),

/***/ "./src/renderer/core/vector3D.ts":
/*!***************************************!*\
  !*** ./src/renderer/core/vector3D.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Color = exports.VectorI3D = exports.Vector3D = void 0;\nclass Vector3D {\n    constructor(x, y, z) {\n        this.x = this.cast(x);\n        this.y = this.cast(y);\n        this.z = this.cast(z);\n    }\n    mag() {\n        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);\n    }\n    add(v) {\n        return new Vector3D(this.x + v.x, this.y + v.y, this.z + v.z);\n    }\n    sub(v) {\n        return new Vector3D(this.x - v.x, this.y - v.y, this.z - v.z);\n    }\n    mul(v) {\n        return new Vector3D(this.x * v.x, this.y * v.y, this.z * v.z);\n    }\n    mulScalar(n) {\n        return new Vector3D(this.x * n, this.y * n, this.z * n);\n    }\n    div(v) {\n        return new Vector3D(this.x / v.x, this.y / v.y, this.z / v.z);\n    }\n    dot(v) {\n        return this.x * v.x + this.y * v.y + this.z * v.z;\n    }\n    cross(vector) {\n        const x = this.y * vector.z - this.z * vector.y;\n        const y = this.z * vector.x - this.x * vector.z;\n        const z = this.x * vector.y - this.y * vector.x;\n        return new Vector3D(x, y, z);\n    }\n    length() {\n        return Math.sqrt(this.dot(this));\n    }\n    cast(n) {\n        return n;\n    }\n    toString() {\n        return `(${this.x}, ${this.y}, ${this.z})`;\n    }\n}\nexports.Vector3D = Vector3D;\nclass VectorI3D extends Vector3D {\n    cast(n) {\n        return Math.floor(n);\n    }\n}\nexports.VectorI3D = VectorI3D;\nclass Color extends Vector3D {\n    constructor(r, g, b) {\n        super(r, g, b);\n    }\n    get r() {\n        return this.x;\n    }\n    get g() {\n        return this.y;\n    }\n    get b() {\n        return this.z;\n    }\n    set r(value) {\n        this.x = value;\n    }\n    set g(value) {\n        this.y = value;\n    }\n    set b(value) {\n        this.z = value;\n    }\n}\nexports.Color = Color;\n\n\n//# sourceURL=webpack://electronwebgl/./src/renderer/core/vector3D.ts?");

/***/ }),

/***/ "./src/renderer/core/webgl/baseShader.ts":
/*!***********************************************!*\
  !*** ./src/renderer/core/webgl/baseShader.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.BaseShader = void 0;\nconst utils_1 = __webpack_require__(/*! ../utils */ \"./src/renderer/core/utils.ts\");\nconst uniformManager_1 = __webpack_require__(/*! ./uniformManager */ \"./src/renderer/core/webgl/uniformManager.ts\");\nconst globalVariables_1 = __webpack_require__(/*! ../globalVariables */ \"./src/renderer/core/globalVariables.ts\");\nconst logger_1 = __webpack_require__(/*! ../logger */ \"./src/renderer/core/logger.ts\");\nclass BaseShader {\n    constructor(shaderName, vertexData, fragmentData) {\n        this.programEnabled = false;\n        this.uniformQueue = new Array();\n        this.logger = new logger_1.Logger(shaderName, \"💡\");\n        this.shaderName = shaderName;\n        this.vertexData = vertexData;\n        this.fragmentData = fragmentData;\n        const ctx = globalVariables_1.GlobalVariables.ctx;\n        const shaderProgram = ctx.createProgram();\n        (0, utils_1.checkFor)(shaderProgram, `${shaderName} program unable to initialize!`, ctx.getProgramInfoLog(shaderProgram));\n        this.program = shaderProgram;\n        this.initialize();\n    }\n    initialize() {\n        const ctx = globalVariables_1.GlobalVariables.ctx;\n        this.vertexShader = this.createShader(ctx, ctx.VERTEX_SHADER, this.vertexData);\n        this.fragmentShader = this.createShader(ctx, ctx.FRAGMENT_SHADER, this.fragmentData);\n        ctx.attachShader(this.program, this.vertexShader);\n        ctx.attachShader(this.program, this.fragmentShader);\n        ctx.linkProgram(this.program);\n        if (!ctx.getProgramParameter(this.program, ctx.LINK_STATUS)) {\n            alert(\"Unable to initialize the shader program: \" + ctx.getProgramInfoLog(this.program));\n            return;\n        }\n        this.uniformLoader = new uniformManager_1.UniformManager(this.program);\n        this.logger.log(`Shader \"${this.shaderName}\" has loaded!`);\n    }\n    beginShader() {\n        globalVariables_1.GlobalVariables.ctx.useProgram(this.program);\n        this.programEnabled = true;\n        this.handleUniformQueue();\n    }\n    stopShader() {\n        globalVariables_1.GlobalVariables.ctx.useProgram(null);\n        this.programEnabled = false;\n    }\n    loadUniform(name, data) {\n        if (this.programEnabled) {\n            this.uniformLoader.loadData(name, data);\n            return;\n        }\n        const alreadyQueued = this.uniformQueue.findIndex(a => a.name === name);\n        if (alreadyQueued >= 0) {\n            this.uniformQueue[alreadyQueued].data = data;\n            return;\n        }\n        const request = { name, data };\n        // this.logger.log(\"Shader has received uniform request!\", request);\n        this.uniformQueue.push(request);\n    }\n    handleUniformQueue() {\n        if (!this.programEnabled)\n            return;\n        while (this.uniformQueue.length > 0) {\n            const request = this.uniformQueue.shift();\n            if (!request)\n                continue;\n            this.uniformLoader.loadData(request.name, request.data);\n        }\n    }\n    createShader(gl, type, data) {\n        const shader = gl.createShader(type);\n        (0, utils_1.checkFor)(shader, \"Unable to create simulation\");\n        gl.shaderSource(shader, data);\n        gl.compileShader(shader);\n        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {\n            const info = gl.getShaderInfoLog(shader);\n            gl.deleteShader(shader);\n            this.logger.throw(info ?? \"Failed to load shader\");\n        }\n        return shader;\n    }\n}\nexports.BaseShader = BaseShader;\n\n\n//# sourceURL=webpack://electronwebgl/./src/renderer/core/webgl/baseShader.ts?");

/***/ }),

/***/ "./src/renderer/core/webgl/shaderUniform.ts":
/*!**************************************************!*\
  !*** ./src/renderer/core/webgl/shaderUniform.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ShaderUniform = void 0;\nconst vector2D_1 = __webpack_require__(/*! ../vector2D */ \"./src/renderer/core/vector2D.ts\");\nconst vector3D_1 = __webpack_require__(/*! ../vector3D */ \"./src/renderer/core/vector3D.ts\");\nconst logger_1 = __webpack_require__(/*! ../logger */ \"./src/renderer/core/logger.ts\");\nconst uniformRegistry_1 = __webpack_require__(/*! ./uniformRegistry */ \"./src/renderer/core/webgl/uniformRegistry.ts\");\nconst types_1 = __webpack_require__(/*! ../types */ \"./src/renderer/core/types.ts\");\nconst logger = new logger_1.Logger(\"ShaderUniform\", \"💅\");\nclass ShaderUniform {\n    constructor(preInit, location) {\n        this.range = [];\n        this.step = [];\n        this.name = preInit.name;\n        this.location = location;\n        this.resolveType(preInit.type);\n        this.resolveOptions(preInit.options);\n    }\n    setUpdateResponse(response) {\n        this.updateResponse = response;\n        if (this.attachedData && this.attachedData.holder === this) {\n            // @ts-ignore\n            this.updateResponse(this.name, this.fixType(this[this.name]));\n        }\n    }\n    attachVariable(holder, variable, data = undefined) {\n        data ?? (data = holder[variable]);\n        if (data === undefined) {\n            logger.throw(`Variable \"${String(variable)}\" not found in \"${holder}\"`);\n        }\n        const typeSize = this.typeSize;\n        if (typeSize > 1) {\n            // @ts-ignore\n            holder[variable] = new Proxy(data, {\n                set: (target, prop, value) => {\n                    this.updateResponse(this.name, this.fixType(target));\n                    return Reflect.set(target, prop, value);\n                }\n            });\n            data = holder[variable];\n        }\n        // @ts-ignore\n        holder[`uniform_${variable}`] = data;\n        Object.defineProperty(holder, variable, {\n            // @ts-ignore\n            get: () => holder[`uniform_${variable}`]?.valueOf(),\n            set: (value) => {\n                // @ts-ignore\n                holder[`uniform_${variable}`] = value;\n                this.updateResponse(this.name, this.fixType(value));\n            }\n        });\n        this.attachedData = { holder, variable };\n        if (this.updateResponse)\n            this.updateResponse(this.name, this.fixType(data));\n    }\n    loadData(newData) {\n        uniformRegistry_1.UniformRegistry.load(this.location, newData);\n    }\n    fixType(data) {\n        if (typeof data !== \"number\")\n            return data;\n        if (this.type === types_1.Integer)\n            return new types_1.Integer(data);\n        return new types_1.Float(data);\n    }\n    resolveOptions(options) {\n        if (!options)\n            return;\n        const colorMatch = options.match(ShaderUniform.COLOR_REGEX);\n        const sliderMatch = options.match(ShaderUniform.SLIDER_REGEX);\n        if (sliderMatch) {\n            const range = sliderMatch[0];\n            const stripped = range.replace(/[[\\]]/g, \"\");\n            const allOptions = stripped.split(\":\").map(a => a.replace(/[()]/g, \"\"));\n            if (allOptions.length < 2)\n                return;\n            const minVals = allOptions[0].split(\",\").map(Number);\n            const maxVals = allOptions[1].split(\",\").map(Number);\n            const minimums = [0, 0, 0].map((_, i) => Math.min(minVals[i], maxVals[i]));\n            const maximums = [0, 0, 0].map((_, i) => Math.max(minVals[i], maxVals[i]));\n            this.range.push(new this.type(...minimums), new this.type(...maximums));\n            const stepVals = allOptions[2]?.split(\",\").map(Number);\n            this.step.push(...stepVals ?? []);\n        }\n        else if (this.type === vector3D_1.Vector3D && colorMatch) {\n            this.type = vector3D_1.Color;\n        }\n        const initialMatch = options.match(ShaderUniform.INITIAL_REGEX);\n        if (initialMatch) {\n            const value = initialMatch[1].split(\",\").map(Number);\n            // @ts-ignore\n            this.attachVariable(this, this.name, new this.type(...value));\n            // this.attachedData[this.name] = new this.type(...value);\n        }\n    }\n    resolveType(type) {\n        const typeObj = ShaderUniform.typeMap.get(type);\n        if (!typeObj) {\n            logger.error(`Invalid/Unregistered type: ${type}`);\n            return;\n        }\n        this.type = typeObj;\n        const typeSize = ShaderUniform.typeSizeMap.get(typeObj);\n        this.typeSize = typeSize ?? 1;\n    }\n}\nexports.ShaderUniform = ShaderUniform;\nShaderUniform.INITIAL_REGEX = /<(.*)>/;\nShaderUniform.COLOR_REGEX = /RGB\\s+<(\\d+(\\.\\d+)?,\\s*\\d+(\\.\\d+)?,\\s*\\d+(\\.\\d+)?)>/;\nShaderUniform.SLIDER_REGEX = /\\[.*]/;\nShaderUniform.typeMap = new Map();\nShaderUniform.typeSizeMap = new Map();\n(() => {\n    ShaderUniform.typeMap.set(\"int\", types_1.Integer);\n    ShaderUniform.typeMap.set(\"float\", types_1.Float);\n    ShaderUniform.typeMap.set(\"vec2\", vector2D_1.Vector2D);\n    ShaderUniform.typeMap.set(\"ivec2\", vector2D_1.VectorI2D);\n    ShaderUniform.typeMap.set(\"vec3\", vector3D_1.Vector3D);\n    ShaderUniform.typeMap.set(\"ivec3\", vector3D_1.VectorI3D);\n    ShaderUniform.typeSizeMap.set(vector2D_1.Vector2D, 2);\n    ShaderUniform.typeSizeMap.set(vector2D_1.VectorI2D, 2);\n    ShaderUniform.typeSizeMap.set(vector3D_1.Vector3D, 3);\n    ShaderUniform.typeSizeMap.set(vector3D_1.VectorI3D, 3);\n    ShaderUniform.typeSizeMap.set(vector3D_1.Color, 3);\n})();\n\n\n//# sourceURL=webpack://electronwebgl/./src/renderer/core/webgl/shaderUniform.ts?");

/***/ }),

/***/ "./src/renderer/core/webgl/uniformBuffer.ts":
/*!**************************************************!*\
  !*** ./src/renderer/core/webgl/uniformBuffer.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UniformBuffer = void 0;\nconst globalVariables_1 = __webpack_require__(/*! ../globalVariables */ \"./src/renderer/core/globalVariables.ts\");\nclass UniformBuffer {\n    constructor(program, name, data, boundLocation) {\n        this.program = program;\n        this.name = name;\n        this.boundLocation = boundLocation;\n        this.data = data;\n        const ctx = globalVariables_1.GlobalVariables.ctx;\n        this.buffer = ctx.createBuffer();\n        ctx.bindBuffer(ctx.UNIFORM_BUFFER, this.buffer);\n        // ctx.bufferData(ctx.UNIFORM_BUFFER, this.data.length, ctx.STATIC_DRAW);\n        // ctx.bindBufferRange(ctx.UNIFORM_BUFFER, this.boundLocation, this.buffer, 0, this.data.length);\n        ctx.bufferData(ctx.UNIFORM_BUFFER, this.data, ctx.DYNAMIC_DRAW);\n        ctx.bindBuffer(ctx.UNIFORM_BUFFER, null);\n        ctx.bindBufferBase(ctx.UNIFORM_BUFFER, this.boundLocation, this.buffer);\n    }\n    update(data, offset = 0) {\n        this.data.set(data, offset);\n        console.log(this.data);\n        const ctx = globalVariables_1.GlobalVariables.ctx;\n        ctx.bindBuffer(ctx.UNIFORM_BUFFER, this.buffer);\n        ctx.bufferSubData(ctx.UNIFORM_BUFFER, 0, this.data, 0, this.data.length);\n        ctx.bindBuffer(ctx.UNIFORM_BUFFER, null);\n        ctx.bindBufferBase(ctx.UNIFORM_BUFFER, this.boundLocation, this.buffer);\n    }\n    bind() {\n        const ctx = globalVariables_1.GlobalVariables.ctx;\n        ctx.uniformBlockBinding(this.program, ctx.getUniformBlockIndex(this.program, this.name), this.boundLocation);\n    }\n}\nexports.UniformBuffer = UniformBuffer;\n\n\n//# sourceURL=webpack://electronwebgl/./src/renderer/core/webgl/uniformBuffer.ts?");

/***/ }),

/***/ "./src/renderer/core/webgl/uniformManager.ts":
/*!***************************************************!*\
  !*** ./src/renderer/core/webgl/uniformManager.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UniformManager = void 0;\nconst globalVariables_1 = __webpack_require__(/*! ../globalVariables */ \"./src/renderer/core/globalVariables.ts\");\nconst logger_1 = __webpack_require__(/*! ../logger */ \"./src/renderer/core/logger.ts\");\nconst shaderUniform_1 = __webpack_require__(/*! ./shaderUniform */ \"./src/renderer/core/webgl/shaderUniform.ts\");\nconst uniformRegistry_1 = __webpack_require__(/*! ./uniformRegistry */ \"./src/renderer/core/webgl/uniformRegistry.ts\");\nconst logger = new logger_1.Logger(\"Uniform Loader\");\nclass UniformManager {\n    constructor(program) {\n        this.nonExistenceNames = new Set();\n        this.nameToVariable = new Map();\n        this.program = program;\n    }\n    registerUniform(preInit) {\n        const name = preInit.name;\n        const location = globalVariables_1.GlobalVariables.ctx.getUniformLocation(this.program, name);\n        if (!location) {\n            this.nonExistenceNames.add(name);\n            logger.warn(`Uniform variable \"${name}\" is not used!`);\n            return null;\n        }\n        const variable = new shaderUniform_1.ShaderUniform(preInit, location);\n        this.nameToVariable.set(name, variable);\n        return variable;\n    }\n    loadData(name, data) {\n        if (this.nonExistenceNames.has(name))\n            return;\n        const location = globalVariables_1.GlobalVariables.ctx.getUniformLocation(this.program, name);\n        if (!location) {\n            this.nonExistenceNames.add(name);\n            logger.warn(`Uniform variable \"${name}\" is not used!`);\n            return;\n        }\n        uniformRegistry_1.UniformRegistry.load(location, data);\n    }\n    attachVariable(name, holder, variable) {\n        const uniform = this.getUniform(name);\n        if (!uniform)\n            return;\n        uniform.attachVariable(holder, variable);\n    }\n    getUniform(name) {\n        if (this.nonExistenceNames.has(name))\n            return;\n        const uniform = this.nameToVariable.get(name);\n        if (!uniform) {\n            logger.warn(`Uniform variable \"${name}\" does not exist!`);\n            this.nonExistenceNames.add(name);\n        }\n        return uniform;\n    }\n}\nexports.UniformManager = UniformManager;\n\n\n//# sourceURL=webpack://electronwebgl/./src/renderer/core/webgl/uniformManager.ts?");

/***/ }),

/***/ "./src/renderer/core/webgl/uniformRegistry.ts":
/*!****************************************************!*\
  !*** ./src/renderer/core/webgl/uniformRegistry.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n/* eslint-disable */\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UniformRegistry = void 0;\nconst utils_1 = __webpack_require__(/*! ../utils */ \"./src/renderer/core/utils.ts\");\nconst types_1 = __webpack_require__(/*! ../types */ \"./src/renderer/core/types.ts\");\nconst vector2D_1 = __webpack_require__(/*! ../vector2D */ \"./src/renderer/core/vector2D.ts\");\nconst globalVariables_1 = __webpack_require__(/*! ../globalVariables */ \"./src/renderer/core/globalVariables.ts\");\nconst vector3D_1 = __webpack_require__(/*! ../vector3D */ \"./src/renderer/core/vector3D.ts\");\nclass UniformRegistry {\n    static initialize() {\n        const ctx = globalVariables_1.GlobalVariables.ctx;\n        this.loadMethods.set(Number, (loc, v) => ctx.uniform1f(loc, v));\n        this.loadMethods.set(types_1.Float, (loc, v) => ctx.uniform1f(loc, v.valueOf()));\n        this.loadMethods.set(types_1.Integer, (loc, v) => ctx.uniform1i(loc, v.valueOf()));\n        this.loadMethods.set(vector2D_1.VectorI2D, (loc, v) => ctx.uniform2i(loc, v.x, v.y));\n        this.loadMethods.set(vector2D_1.Vector2D, (loc, v) => ctx.uniform2f(loc, v.x, v.y));\n        this.loadMethods.set(vector3D_1.VectorI3D, (loc, v) => ctx.uniform3i(loc, v.x, v.y, v.z));\n        this.loadMethods.set(vector3D_1.Vector3D, (loc, v) => ctx.uniform3f(loc, v.x, v.y, v.z));\n        this.loadMethods.set(vector3D_1.Color, (loc, v) => ctx.uniform3f(loc, v.r, v.g, v.b));\n    }\n    static load(loc, val) {\n        // @ts-ignore\n        const func = this.loadMethods.get(val.constructor);\n        // @ts-ignore\n        (0, utils_1.checkFor)(func, `Load method for ${val.constructor.name} is not supported`);\n        func(loc, val);\n    }\n}\nexports.UniformRegistry = UniformRegistry;\nUniformRegistry.loadMethods = new Map();\n\n\n//# sourceURL=webpack://electronwebgl/./src/renderer/core/webgl/uniformRegistry.ts?");

/***/ }),

/***/ "./src/renderer/main.ts":
/*!******************************!*\
  !*** ./src/renderer/main.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Main = void 0;\nconst fpsCounter_1 = __webpack_require__(/*! ./core/fpsCounter */ \"./src/renderer/core/fpsCounter.ts\");\nconst mainRenderer_1 = __webpack_require__(/*! ./simulation/renderer/mainRenderer */ \"./src/renderer/simulation/renderer/mainRenderer.ts\");\nconst globalVariables_1 = __webpack_require__(/*! ./core/globalVariables */ \"./src/renderer/core/globalVariables.ts\");\nconst uniformRegistry_1 = __webpack_require__(/*! ./core/webgl/uniformRegistry */ \"./src/renderer/core/webgl/uniformRegistry.ts\");\nconst UserInterface_1 = __webpack_require__(/*! ./simulation/ui/UserInterface */ \"./src/renderer/simulation/ui/UserInterface.ts\");\nconst utils_1 = __webpack_require__(/*! ./core/utils */ \"./src/renderer/core/utils.ts\");\nconst NodePlayground_1 = __webpack_require__(/*! ./simulation/ui/NodePlayground */ \"./src/renderer/simulation/ui/NodePlayground.ts\");\nconst vector2D_1 = __webpack_require__(/*! ./core/vector2D */ \"./src/renderer/core/vector2D.ts\");\nconst BrowserSupport_1 = __webpack_require__(/*! ./simulation/ui/BrowserSupport */ \"./src/renderer/simulation/ui/BrowserSupport.ts\");\n__webpack_require__(/*! ../../res/style/style.scss */ \"./res/style/style.scss\");\nconst root_1 = __webpack_require__(/*! ./simulation/root */ \"./src/renderer/simulation/root.ts\");\nclass Main {\n    constructor() {\n        this.browserSupport = new BrowserSupport_1.BrowserSupport();\n        this.root = new root_1.Root();\n        this.fpsCounter = new fpsCounter_1.FPSCounter();\n        this.userInterface = new UserInterface_1.UserInterface();\n        this.playground = new NodePlayground_1.NodePlayground();\n    }\n    initialize() {\n        globalVariables_1.GlobalVariables.resolution = new vector2D_1.VectorI2D(0, 0);\n        globalVariables_1.GlobalVariables.canvas = this.playground.mainCanvas;\n        globalVariables_1.GlobalVariables.ctx = globalVariables_1.GlobalVariables.canvas.getContext();\n        this.root.initialize();\n        this.userInterface.initialize();\n        this.mainRenderer = new mainRenderer_1.MainRenderer();\n        uniformRegistry_1.UniformRegistry.initialize();\n        this.mainRenderer.initialize();\n        (0, utils_1.fixEveryPreload)();\n        this.startRunning();\n    }\n    startRunning() {\n        const dt = this.fpsCounter.start();\n        globalVariables_1.GlobalVariables.time += dt / 1000;\n        this.userInterface.update();\n        this.mainRenderer.frameUpdate();\n        requestAnimationFrame(() => this.startRunning());\n    }\n    bigEnoughScreen() {\n        const screenWidth = window.innerWidth;\n        console.log(screenWidth);\n        return screenWidth > 600;\n    }\n}\nexports.Main = Main;\n\n\n//# sourceURL=webpack://electronwebgl/./src/renderer/main.ts?");

/***/ }),

/***/ "./src/renderer/simulation/renderer/mainRenderer.ts":
/*!**********************************************************!*\
  !*** ./src/renderer/simulation/renderer/mainRenderer.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MainRenderer = void 0;\nconst mainShader_1 = __webpack_require__(/*! ./mainShader */ \"./src/renderer/simulation/renderer/mainShader.ts\");\nconst globalVariables_1 = __webpack_require__(/*! ../../core/globalVariables */ \"./src/renderer/core/globalVariables.ts\");\nconst uniformBuffer_1 = __webpack_require__(/*! ../../core/webgl/uniformBuffer */ \"./src/renderer/core/webgl/uniformBuffer.ts\");\nconst types_1 = __webpack_require__(/*! ../../core/types */ \"./src/renderer/core/types.ts\");\nclass MainRenderer {\n    constructor() {\n        this.vertices = new Float32Array([\n            -1.0, -1.0, 0.0, // bottom left\n            1.0, -1.0, 0.0, // bottom right\n            -1.0, 1.0, 0.0, // top left\n            1.0, 1.0, 0.0 // top right\n        ]);\n        this.mainShader = new mainShader_1.MainShader();\n    }\n    initialize() {\n        const canvas = globalVariables_1.GlobalVariables.canvas;\n        canvas.onResize.add(this.mainShader.loadResolution.bind(this.mainShader));\n        this.mainShader.loadResolution(canvas.WIDTH, canvas.HEIGHT);\n        const ctx = globalVariables_1.GlobalVariables.ctx;\n        canvas.onResize.add((width, height) => {\n            ctx.viewport(0, 0, width, height);\n        });\n        this.uniformBuffer = new uniformBuffer_1.UniformBuffer(this.mainShader.program, \"Circles\", new Float32Array(32 * 4), 0);\n        this.updateUniformBuffer([1, 1, 0, 1], 0);\n    }\n    updateUniformBuffer(data, offset = 0) {\n        this.uniformBuffer.update(data, offset);\n        this.mainShader.loadUniform(\"size\", new types_1.Integer(data.length / 4));\n        this.mainShader.beginShader();\n        this.uniformBuffer.bind();\n        this.mainShader.stopShader();\n    }\n    frameUpdate() {\n        const ctx = globalVariables_1.GlobalVariables.ctx;\n        { // Clean Screen\n            ctx.clearColor(1.0, 0.0, 0.0, 1.0);\n            ctx.clear(ctx.COLOR_BUFFER_BIT);\n        }\n        { // Main Shader\n            this.mainShader.beginShader();\n            // Create a buffer and put the vertices in it\n            const vertexBuffer = ctx.createBuffer();\n            ctx.bindBuffer(ctx.ARRAY_BUFFER, vertexBuffer);\n            ctx.bufferData(ctx.ARRAY_BUFFER, this.vertices, ctx.STATIC_DRAW);\n            const positionLocation = ctx.getAttribLocation(this.mainShader.program, \"in_position\");\n            ctx.enableVertexAttribArray(positionLocation);\n            ctx.vertexAttribPointer(positionLocation, 3, ctx.FLOAT, false, 0, 0);\n            // Draw the square\n            ctx.clear(ctx.COLOR_BUFFER_BIT);\n            ctx.drawArrays(ctx.TRIANGLE_STRIP, 0, 4);\n            this.mainShader.stopShader();\n        }\n    }\n}\nexports.MainRenderer = MainRenderer;\n\n\n//# sourceURL=webpack://electronwebgl/./src/renderer/simulation/renderer/mainRenderer.ts?");

/***/ }),

/***/ "./src/renderer/simulation/renderer/mainShader.ts":
/*!********************************************************!*\
  !*** ./src/renderer/simulation/renderer/mainShader.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MainShader = void 0;\nconst baseShader_1 = __webpack_require__(/*! ../../core/webgl/baseShader */ \"./src/renderer/core/webgl/baseShader.ts\");\nconst vector2D_1 = __webpack_require__(/*! ../../core/vector2D */ \"./src/renderer/core/vector2D.ts\");\nclass MainShader extends baseShader_1.BaseShader {\n    constructor() {\n        super(\"main\", `#version 300 es\r\nprecision mediump float;\r\n\r\nin vec4 in_position;\r\n\r\nvoid main() {\r\n    gl_Position = in_position;\r\n}`, `#version 300 es\r\nprecision mediump float;\r\n\r\nstruct Circle {\r\n    vec4 data;\r\n};\r\n\r\nuniform int size;\r\nlayout(std140) uniform Circles {\r\n    Circle circles[32];\r\n};\r\n\r\nout vec4 out_color;\r\n\r\nvoid main() {\r\n    out_color = vec4(1.0, 0.0, 0.0, 1.0);\r\n    \r\n    if (size > 0) {\r\n        out_color = vec4(0.0, 1.0, 1.0, 1.0);\r\n        out_color.rgb = circles[0].data.xyz;\r\n    }\r\n}`);\n    }\n    loadResolution(width, height) {\n        this.loadUniform(\"resolution\", new vector2D_1.VectorI2D(width, height));\n    }\n}\nexports.MainShader = MainShader;\n\n\n//# sourceURL=webpack://electronwebgl/./src/renderer/simulation/renderer/mainShader.ts?");

/***/ }),

/***/ "./src/renderer/simulation/root.ts":
/*!*****************************************!*\
  !*** ./src/renderer/simulation/root.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Root = void 0;\nconst mouse_1 = __webpack_require__(/*! ../core/mouse */ \"./src/renderer/core/mouse.ts\");\nconst globalVariables_1 = __webpack_require__(/*! ../core/globalVariables */ \"./src/renderer/core/globalVariables.ts\");\nclass Root {\n    initialize() {\n        this.mouse = new mouse_1.Mouse();\n        globalVariables_1.GlobalVariables.mouse = this.mouse;\n    }\n}\nexports.Root = Root;\n\n\n//# sourceURL=webpack://electronwebgl/./src/renderer/simulation/root.ts?");

/***/ }),

/***/ "./src/renderer/simulation/ui/BrowserSupport.ts":
/*!******************************************************!*\
  !*** ./src/renderer/simulation/ui/BrowserSupport.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.BrowserSupport = exports.Browser = void 0;\nconst logger_1 = __webpack_require__(/*! ../../core/logger */ \"./src/renderer/core/logger.ts\");\nconst utils_1 = __webpack_require__(/*! ../../core/utils */ \"./src/renderer/core/utils.ts\");\nvar Browser;\n(function (Browser) {\n    Browser[Browser[\"Chrome\"] = 0] = \"Chrome\";\n    Browser[Browser[\"Firefox\"] = 1] = \"Firefox\";\n    Browser[Browser[\"Safari\"] = 2] = \"Safari\";\n    Browser[Browser[\"Edge\"] = 3] = \"Edge\";\n    Browser[Browser[\"IE\"] = 4] = \"IE\";\n    Browser[Browser[\"Opera\"] = 5] = \"Opera\";\n    Browser[Browser[\"Unknown\"] = 6] = \"Unknown\";\n})(Browser || (exports.Browser = Browser = {}));\nconst logger = new logger_1.Logger(\"Browser Support\", \"✔️\");\nclass BrowserSupport {\n    constructor() {\n        this.browser = this.detectBrowser();\n        logger.log(\"Browser: \" + Browser[this.browser]);\n        this.selectorScrollbar();\n    }\n    selectorScrollbar() {\n        if (this.browser !== Browser.Firefox)\n            return;\n        const selection = (0, utils_1.getElementByQuery)(\"#user-interface #selection\");\n        if (selection)\n            selection.style.scrollbarWidth = \"none\";\n    }\n    detectBrowser() {\n        const userAgent = navigator.userAgent;\n        if (/chrome|crios|crmo/i.test(userAgent)) {\n            return Browser.Chrome;\n        }\n        else if (/firefox|fxios/i.test(userAgent)) {\n            return Browser.Firefox;\n        }\n        else if (/safari/i.test(userAgent)) {\n            return Browser.Safari;\n        }\n        else if (/edg/i.test(userAgent)) {\n            return Browser.Edge;\n        }\n        else if (/trident/i.test(userAgent)) {\n            return Browser.IE;\n        }\n        else if (/opr\\//i.test(userAgent)) {\n            return Browser.Opera;\n        }\n        else {\n            return Browser.Unknown;\n        }\n    }\n}\nexports.BrowserSupport = BrowserSupport;\n\n\n//# sourceURL=webpack://electronwebgl/./src/renderer/simulation/ui/BrowserSupport.ts?");

/***/ }),

/***/ "./src/renderer/simulation/ui/ErrorScreen.ts":
/*!***************************************************!*\
  !*** ./src/renderer/simulation/ui/ErrorScreen.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ErrorScreen = void 0;\nconst utils_1 = __webpack_require__(/*! ../../core/utils */ \"./src/renderer/core/utils.ts\");\nconst logger_1 = __webpack_require__(/*! ../../core/logger */ \"./src/renderer/core/logger.ts\");\nconst logger = new logger_1.Logger(\"Error Screen\", \"❌\");\nclass ErrorScreen {\n    constructor(msg) {\n        logger.toggleName();\n        logger.error(msg);\n        const mainScreen = (0, utils_1.getElementById)(\"main-screen\");\n        mainScreen.style.display = \"none\";\n        const errorScreen = (0, utils_1.createDiv)({ parent: document.body, id: \"error-screen\" }, (0, utils_1.createElement)(\"h1\", { classes: [\"top\"], innerText: \"UH OH!\" }), (0, utils_1.createDiv)({ classes: [\"error\"], innerText: msg }));\n    }\n}\nexports.ErrorScreen = ErrorScreen;\n\n\n//# sourceURL=webpack://electronwebgl/./src/renderer/simulation/ui/ErrorScreen.ts?");

/***/ }),

/***/ "./src/renderer/simulation/ui/NodePlayground.ts":
/*!******************************************************!*\
  !*** ./src/renderer/simulation/ui/NodePlayground.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.NodePlayground = void 0;\nconst utils_1 = __webpack_require__(/*! ../../core/utils */ \"./src/renderer/core/utils.ts\");\nconst canvas_1 = __webpack_require__(/*! ../../core/canvas */ \"./src/renderer/core/canvas.ts\");\nclass NodePlayground {\n    constructor() {\n        this.body = (0, utils_1.getElementById)(\"node-playground\");\n        this.mainCanvas = new canvas_1.Canvas();\n        this.mainCanvas.initialize(this.body);\n    }\n}\nexports.NodePlayground = NodePlayground;\n\n\n//# sourceURL=webpack://electronwebgl/./src/renderer/simulation/ui/NodePlayground.ts?");

/***/ }),

/***/ "./src/renderer/simulation/ui/UserInterface.ts":
/*!*****************************************************!*\
  !*** ./src/renderer/simulation/ui/UserInterface.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UserInterface = void 0;\nconst utils_1 = __webpack_require__(/*! ../../core/utils */ \"./src/renderer/core/utils.ts\");\nconst AttachedMouse_1 = __webpack_require__(/*! ../utils/AttachedMouse */ \"./src/renderer/simulation/utils/AttachedMouse.ts\");\nconst mouse_1 = __webpack_require__(/*! ../../core/mouse */ \"./src/renderer/core/mouse.ts\");\nconst Node_1 = __webpack_require__(/*! ./nodes/Node */ \"./src/renderer/simulation/ui/nodes/Node.ts\");\nclass UserInterface {\n    constructor() {\n        this.allNodes = [];\n        this.expanded = false;\n        this.toggleable = true;\n        this.lastScrollY = 0;\n        this.currentlyScrolling = false;\n    }\n    initialize() {\n        this.body = (0, utils_1.getElementById)(\"user-interface\");\n        this.toggleExpanded(false);\n        this.header = (0, utils_1.getElementByQuery)(\"#user-interface #header\");\n        this.selection = (0, utils_1.getElementByQuery)(\"#user-interface #selection\");\n        const attachedMouse = new AttachedMouse_1.AttachedMouse().attachElement(this.selection);\n        attachedMouse.onMouseDrag.add((this.selectionDrag.bind(this)));\n        attachedMouse.onMouseButtonUp.add((this.selectionUp.bind(this)));\n        const handle = (0, utils_1.getElementById)(\"drawer-handle\");\n        handle.addEventListener(\"click\", () => this.toggleExpanded());\n        this.removeLater();\n    }\n    update() {\n        if (this.currentlyScrolling)\n            return;\n        if (Math.abs(this.lastScrollY) <= 0.1)\n            return;\n        this.fixScrollFading();\n        this.lastScrollY -= Math.sign(this.lastScrollY) * 0.1;\n        this.selection.scrollBy(0, this.lastScrollY);\n    }\n    removeLater() {\n        for (let i = 0; i < 15; i++) {\n            const inputAmount = Math.floor(Math.random() * 3) + 1;\n            const node = this.createNode(\"Node\", inputAmount, 1);\n            this.allNodes.push(node);\n        }\n        this.fixScrollFading();\n        this.selection.addEventListener(\"scroll\", this.fixScrollFading.bind(this));\n        window.addEventListener(\"resize\", this.fixScrollFading.bind(this));\n    }\n    selectionDrag(button, _, dy) {\n        if (button !== mouse_1.ButtonType.LEFT)\n            return;\n        this.currentlyScrolling = true;\n        this.lastScrollY = -dy;\n        this.selection.scrollBy(0, this.lastScrollY);\n    }\n    selectionUp(button) {\n        if (button !== mouse_1.ButtonType.LEFT)\n            return;\n        this.currentlyScrolling = false;\n    }\n    fixScrollFading() {\n        const selectionRect = this.selection.getBoundingClientRect();\n        for (const node of this.allNodes) {\n            const nodeRect = node.getBoundingClientRect();\n            const topDiff = selectionRect.top - nodeRect.top;\n            const bottomDiff = nodeRect.bottom - selectionRect.bottom;\n            const diff = Math.max(topDiff, bottomDiff);\n            if (diff > 0) {\n                let alpha = diff / nodeRect.height / 0.6;\n                alpha = Math.min(1, Math.max(0, alpha));\n                node.style.setProperty(\"--node-max-scale\", String(1 - alpha * 0.1));\n            }\n            else {\n                node.style.setProperty(\"--node-max-scale\", \"1\");\n            }\n        }\n    }\n    createNode(name, inputs, outputs) {\n        const nodeHolder = (0, utils_1.createDiv)({ classes: [\"holder\"], parent: this.selection });\n        const node = (0, utils_1.createDiv)({ classes: [\"node\", \"preload\"], parent: nodeHolder }, (0, utils_1.createDiv)({ classes: [\"name\"], innerText: name }));\n        const color = Node_1.PossibleColors[Math.floor(Math.random() * Node_1.PossibleColors.length)];\n        const textColor = (0, Node_1.calculateFontColor)(color);\n        node.style.setProperty(\"--node-name-color\", textColor);\n        node.style.setProperty(\"--node-color\", color);\n        const inputPort = (0, utils_1.createDiv)({ classes: [\"input_ports\"], parent: node });\n        const outputPort = (0, utils_1.createDiv)({ classes: [\"output_ports\"], parent: node });\n        for (let i = 0; i < inputs; i++) {\n            (0, utils_1.createDiv)({ classes: [\"input\"], parent: inputPort });\n        }\n        for (let i = 0; i < outputs; i++) {\n            (0, utils_1.createDiv)({ classes: [\"output\"], parent: outputPort });\n        }\n        return node;\n    }\n    toggleExpanded(audio = true) {\n        if (!this.toggleable)\n            return;\n        this.toggleable = false;\n        this.expanded = !this.expanded;\n        if (audio) {\n            if (this.expanded) {\n                this.getAudio(\"opening\").play();\n            }\n            else {\n                this.getAudio(\"closing\").play();\n            }\n        }\n        (0, utils_1.getElementById)(\"node-playground\").style.filter = `blur(${this.expanded ? 2 : 0}px)`;\n        setTimeout(() => this.toggleable = true, 400);\n        (0, utils_1.toggleClass)(this.body, \"expanded\");\n    }\n    getAudio(state) {\n        return (0, utils_1.getElementById)(`drawer-${state}`);\n    }\n}\nexports.UserInterface = UserInterface;\n\n\n//# sourceURL=webpack://electronwebgl/./src/renderer/simulation/ui/UserInterface.ts?");

/***/ }),

/***/ "./src/renderer/simulation/ui/nodes/Node.ts":
/*!**************************************************!*\
  !*** ./src/renderer/simulation/ui/nodes/Node.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Node = exports.PossibleColors = void 0;\nexports.calculateFontColor = calculateFontColor;\nexports.calculateScaledColor = calculateScaledColor;\nexports.PossibleColors = [\n    \"#FF5733\", // Red-Orange\n    \"#33FF57\", // Green\n    \"#3357FF\", // Blue\n    \"#F1C40F\", // Yellow\n    \"#9B59B6\", // Purple\n    \"#E74C3C\", // Red\n    \"#1ABC9C\", // Turquoise\n    \"#2ECC71\", // Green\n    \"#3498DB\", // Light Blue\n    \"#E67E22\", // Orange\n    \"#ECF0F1\", // Light Grey\n    \"#95A5A6\", // Grey\n    \"#34495E\", // Dark Blue\n    \"#16A085\", // Teal\n    \"#27AE60\", // Dark Green\n    \"#2980B9\", // Dark Blue\n    \"#8E44AD\", // Dark Purple\n    \"#F39C12\", // Yellow Orange\n    \"#D35400\", // Dark Orange\n    \"#C0392B\", // Dark Red\n    \"#BDC3C7\", // Silver\n    \"#7F8C8D\", // Gray\n    \"#FF69B4\", // Hot Pink\n    \"#8B4513\", // Saddle Brown\n    \"#808000\", // Olive\n    \"#FFA07A\", // Light Salmon\n    \"#800080\", // Purple\n    \"#BDB76B\", // Dark Khaki\n    \"#00CED1\", // Dark Turquoise\n    \"#FFD700\", // Gold\n    \"#FF4500\", // Orange Red\n    \"#DA70D6\", // Orchid\n    \"#ADFF2F\", // Green Yellow\n    \"#FFE4C4\", // Bisque\n    \"#4682B4\", // Steel Blue\n    \"#D2691E\", // Chocolate\n    \"#FF1493\", // Deep Pink\n    \"#7CFC00\", // Lawn Green\n    \"#00FA9A\", // Medium Spring Green\n    \"#F0E68C\", // Khaki\n    \"#5F9EA0\", // Cadet Blue\n    \"#7B68EE\", // Medium Slate Blue\n    \"#9400D3\", // Dark Violet\n    \"#FF6347\", // Tomato\n    \"#6A5ACD\", // Slate Blue\n    \"#00FF7F\", // Spring Green\n    \"#FA8072\", // Salmon\n    \"#20B2AA\", // Light Sea Green\n    \"#778899\", // Light Slate Gray\n    \"#B0C4DE\", // Light Steel Blue\n    \"#FFDEAD\", // Navajo White\n    \"#7FFF00\", // Chartreuse\n    \"#8A2BE2\", // Blue Violet\n    \"#FFB6C1\", // Light Pink\n    \"#00FF00\", // Lime\n    \"#4169E1\" // Royal Blue\n];\nfunction calculateFontColor(color) {\n    const rgb = parseInt(color.slice(1), 16);\n    const r = (rgb >> 16) & 0xFF;\n    const g = (rgb >> 8) & 0xFF;\n    const b = rgb & 0xFF;\n    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;\n    return luminance > 0.5 ? \"#000\" : \"#fff\";\n}\nfunction calculateScaledColor(color, scale) {\n    const rgb = parseInt(color.slice(1), 16);\n    const r = (rgb >> 16) & 0xFF;\n    const g = (rgb >> 8) & 0xFF;\n    const b = rgb & 0xFF;\n    return `rgb(${r * scale}, ${g * scale}, ${b * scale})`;\n}\nclass Node {\n}\nexports.Node = Node;\n\n\n//# sourceURL=webpack://electronwebgl/./src/renderer/simulation/ui/nodes/Node.ts?");

/***/ }),

/***/ "./src/renderer/simulation/utils/AttachedMouse.ts":
/*!********************************************************!*\
  !*** ./src/renderer/simulation/utils/AttachedMouse.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AttachedMouse = void 0;\nconst signal_1 = __webpack_require__(/*! ../../core/signal */ \"./src/renderer/core/signal.ts\");\nclass AttachedMouse {\n    constructor() {\n        this.x = 0;\n        this.y = 0;\n        this.onMouseButtonDown = new signal_1.Signal();\n        this.onMouseButtonUp = new signal_1.Signal();\n        this.onMouseButtonLeave = new signal_1.Signal();\n        this.onMouseDrag = new signal_1.Signal();\n        this.onWheelScroll = new signal_1.Signal();\n        this.isDragging = false;\n    }\n    attachElement(element) {\n        element.addEventListener(\"mousemove\", e => {\n            const dx = e.clientX - this.x;\n            const dy = e.clientY - this.y;\n            this.x += dx;\n            this.y += dy;\n            if (this.isDragging)\n                this.onMouseDrag.dispatch(this.draggingButton, dx, dy);\n        });\n        element.addEventListener(\"mousedown\", e => {\n            this.onMouseButtonDown.dispatch(e.button);\n            this.isDragging = true;\n            this.draggingButton = e.button;\n        });\n        element.addEventListener(\"mouseup\", e => {\n            this.onMouseButtonUp.dispatch(e.button);\n            this.isDragging = false;\n        });\n        element.addEventListener(\"mouseleave\", e => {\n            this.onMouseButtonLeave.dispatch(e.button);\n            this.onMouseButtonUp.dispatch(e.button);\n            this.isDragging = false;\n        });\n        element.addEventListener(\"wheel\", e => {\n            this.onWheelScroll.dispatch(e.deltaY);\n        });\n        return this;\n    }\n}\nexports.AttachedMouse = AttachedMouse;\n\n\n//# sourceURL=webpack://electronwebgl/./src/renderer/simulation/utils/AttachedMouse.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;