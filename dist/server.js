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

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst AppWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({\n  displayName: \"App__AppWrapper\",\n  componentId: \"sc-14z9f6m-0\"\n})([\"text-align:center;\"]);\nconst ProfileWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({\n  displayName: \"App__ProfileWrapper\",\n  componentId: \"sc-14z9f6m-1\"\n})([\"margin:20px;padding:20px;border:1px solid #ccc;border-radius:10px;max-width:600px;margin-left:auto;margin-right:auto;\"]);\nconst ProfileTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().h1.withConfig({\n  displayName: \"App__ProfileTitle\",\n  componentId: \"sc-14z9f6m-2\"\n})([\"font-size:2em;margin-bottom:10px;\"]);\nconst ProfileDescription = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({\n  displayName: \"App__ProfileDescription\",\n  componentId: \"sc-14z9f6m-3\"\n})([\"font-size:1.2em;margin-bottom:20px;\"]);\nconst HobbiesList = styled_components__WEBPACK_IMPORTED_MODULE_1___default().ul.withConfig({\n  displayName: \"App__HobbiesList\",\n  componentId: \"sc-14z9f6m-4\"\n})([\"list-style-type:none;padding:0;\"]);\nconst HobbyItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default().li.withConfig({\n  displayName: \"App__HobbyItem\",\n  componentId: \"sc-14z9f6m-5\"\n})([\"font-size:1em;margin:5px 0;\"]);\nconst Profile = _ref => {\n  let {\n    name,\n    description,\n    hobbies\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProfileWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProfileTitle, null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProfileDescription, null, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"\\u8DA3\\u5473\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HobbiesList, null, hobbies.map((hobby, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HobbyItem, {\n    key: index\n  }, hobby))));\n};\nconst App = () => {\n  const myProfile = {\n    name: \"横野匠未\",\n    description: \"21歳の学生。\",\n    hobbies: [\"読書\", \"ゲーム\", \"テニス\"]\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Profile, {\n    name: myProfile.name,\n    description: myProfile.description,\n    hobbies: myProfile.hobbies\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://railway-ssr/./src/App.tsx?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "./server/index.mjs":
/*!**************************!*\
  !*** ./server/index.mjs ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var _src_App_tsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/App.tsx */ \"./src/App.tsx\");\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0__();\nconst PORT = 9000;\n\napp.use(\"^/$\", (req, res) => {\n  fs__WEBPACK_IMPORTED_MODULE_1__.readFile(path__WEBPACK_IMPORTED_MODULE_2__.resolve(\"./public/index.html\"), \"utf-8\", (err, data) => {\n    if (err) {\n      console.error(\"Error reading index.html\", err);\n      return res.status(500).send(\"An error occurred\");\n    }\n\n    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_5__.ServerStyleSheet();\n    const html = react_dom_server__WEBPACK_IMPORTED_MODULE_3__.renderToString(\n      (0,react__WEBPACK_IMPORTED_MODULE_4__.createElement)(\n        styled_components__WEBPACK_IMPORTED_MODULE_5__.StyleSheetManager,\n        { sheet: sheet.instance },\n        (0,react__WEBPACK_IMPORTED_MODULE_4__.createElement)(_src_App_tsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"])\n      )\n    );\n    const styleTags = sheet.getStyleTags();\n\n    return res.send(\n      data.replace(\n        '<div id=\"root\"></div>',\n        `<div id=\"root\">${html}</div>${styleTags}`\n      )\n    );\n  });\n});\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0__[\"static\"](path__WEBPACK_IMPORTED_MODULE_2__.resolve(__dirname, \"..\", \"public\")));\n\napp.listen(PORT, () => {\n  console.log(`Server is running on http://localhost:${PORT}`);\n});\n\n\n//# sourceURL=webpack://railway-ssr/./server/index.mjs?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.mjs");
/******/ 	
/******/ })()
;