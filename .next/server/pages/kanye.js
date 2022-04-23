"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/kanye";
exports.ids = ["pages/kanye"];
exports.modules = {

/***/ "./hooks/hooks.ts":
/*!************************!*\
  !*** ./hooks/hooks.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAppDispatch\": () => (/* binding */ useAppDispatch),\n/* harmony export */   \"useAppSelector\": () => (/* binding */ useAppSelector)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)()\n;\nconst useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9ob29rcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTZFO0FBR3RFLE1BQU1FLGNBQWMsR0FBRyxJQUFNRix3REFBVyxFQUFlO0FBQUEsQ0FBQztBQUN4RCxNQUFNRyxjQUFjLEdBQW9DRixvREFBVyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci8uL2hvb2tzL2hvb2tzLnRzP2YwN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZWRVc2VTZWxlY3Rvckhvb2ssIHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHR5cGUgeyBBcHBEaXNwYXRjaCwgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VBcHBEaXNwYXRjaCA9ICgpID0+IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpO1xuZXhwb3J0IGNvbnN0IHVzZUFwcFNlbGVjdG9yOiBUeXBlZFVzZVNlbGVjdG9ySG9vazxSb290U3RhdGU+ID0gdXNlU2VsZWN0b3I7XG4iXSwibmFtZXMiOlsidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/hooks.ts\n");

/***/ }),

/***/ "./pages/kanye.tsx":
/*!*************************!*\
  !*** ./pages/kanye.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/hooks */ \"./hooks/hooks.ts\");\n/* harmony import */ var _store2_quote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store2/quote */ \"./store2/quote/index.ts\");\n\n\n\n\nconst kanye = ()=>{\n    const dispatch = (0,_hooks_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const { data , pending , error  } = (0,_hooks_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(_store2_quote__WEBPACK_IMPORTED_MODULE_3__.kanyeQuoteSelector);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Generate random Kanye West quote\"\n            }, void 0, false, {\n                fileName: \"/Users/cedric/Documents/Personnal/next-redux/pages/kanye.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            pending && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/cedric/Documents/Personnal/next-redux/pages/kanye.tsx\",\n                lineNumber: 12,\n                columnNumber: 19\n            }, undefined),\n            data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: data.quote\n            }, void 0, false, {\n                fileName: \"/Users/cedric/Documents/Personnal/next-redux/pages/kanye.tsx\",\n                lineNumber: 13,\n                columnNumber: 16\n            }, undefined),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Oops, something went wrong\"\n            }, void 0, false, {\n                fileName: \"/Users/cedric/Documents/Personnal/next-redux/pages/kanye.tsx\",\n                lineNumber: 14,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>dispatch((0,_store2_quote__WEBPACK_IMPORTED_MODULE_3__.getKanyeQuote)())\n                ,\n                disabled: pending,\n                children: \"Generate Kanye Quote\"\n            }, void 0, false, {\n                fileName: \"/Users/cedric/Documents/Personnal/next-redux/pages/kanye.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cedric/Documents/Personnal/next-redux/pages/kanye.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (kanye);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9rYW55ZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ3NDO0FBQ0k7QUFFcEUsTUFBTUssS0FBSyxHQUFhLElBQU07SUFDNUIsTUFBTUMsUUFBUSxHQUFHTCw0REFBYyxFQUFFO0lBQ2pDLE1BQU0sRUFBRU0sSUFBSSxHQUFFQyxPQUFPLEdBQUVDLEtBQUssR0FBRSxHQUFHUCw0REFBYyxDQUFDRSw2REFBa0IsQ0FBQztJQUVuRSxxQkFDRSw4REFBQ00sS0FBRzs7MEJBQ0YsOERBQUNDLElBQUU7MEJBQUMsa0NBQWdDOzs7Ozt5QkFBSztZQUN4Q0gsT0FBTyxrQkFBSSw4REFBQ0ksR0FBQzswQkFBQyxZQUFVOzs7Ozt5QkFBSTtZQUM1QkwsSUFBSSxrQkFBSSw4REFBQ0ssR0FBQzswQkFBRUwsSUFBSSxDQUFDTSxLQUFLOzs7Ozt5QkFBSztZQUMzQkosS0FBSyxrQkFBSSw4REFBQ0csR0FBQzswQkFBQyw0QkFBMEI7Ozs7O3lCQUFJOzBCQUMzQyw4REFBQ0UsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFLElBQU1ULFFBQVEsQ0FBQ0gsNERBQWEsRUFBRSxDQUFDO2dCQUFBO2dCQUFFYSxRQUFRLEVBQUVSLE9BQU87MEJBQUUsc0JBRXJFOzs7Ozt5QkFBUzs7Ozs7O2lCQUNMLENBQ047Q0FDSDtBQUVELGlFQUFlSCxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMva2FueWUudHN4P2Y1NWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIi4uL2hvb2tzL2hvb2tzXCI7XG5pbXBvcnQgeyBnZXRLYW55ZVF1b3RlLCBrYW55ZVF1b3RlU2VsZWN0b3IgfSBmcm9tIFwiLi4vc3RvcmUyL3F1b3RlXCI7XG5cbmNvbnN0IGthbnllOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICBjb25zdCB7IGRhdGEsIHBlbmRpbmcsIGVycm9yIH0gPSB1c2VBcHBTZWxlY3RvcihrYW55ZVF1b3RlU2VsZWN0b3IpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj5HZW5lcmF0ZSByYW5kb20gS2FueWUgV2VzdCBxdW90ZTwvaDI+XG4gICAgICB7cGVuZGluZyAmJiA8cD5Mb2FkaW5nLi4uPC9wPn1cbiAgICAgIHtkYXRhICYmIDxwPntkYXRhLnF1b3RlfTwvcD59XG4gICAgICB7ZXJyb3IgJiYgPHA+T29wcywgc29tZXRoaW5nIHdlbnQgd3Jvbmc8L3A+fVxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChnZXRLYW55ZVF1b3RlKCkpfSBkaXNhYmxlZD17cGVuZGluZ30+XG4gICAgICAgIEdlbmVyYXRlIEthbnllIFF1b3RlXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGthbnllO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsImdldEthbnllUXVvdGUiLCJrYW55ZVF1b3RlU2VsZWN0b3IiLCJrYW55ZSIsImRpc3BhdGNoIiwiZGF0YSIsInBlbmRpbmciLCJlcnJvciIsImRpdiIsImgyIiwicCIsInF1b3RlIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/kanye.tsx\n");

/***/ }),

/***/ "./store2/quote/actions.ts":
/*!*********************************!*\
  !*** ./store2/quote/actions.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getKanyeQuote\": () => (/* binding */ getKanyeQuote)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst getKanyeQuote = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"kanye/kanyeQuote\", async ()=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"https://api.kanye.rest/\");\n    return response.data;\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZTIvcXVvdGUvYWN0aW9ucy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFvRDtBQUMxQjtBQUVuQixNQUFNRSxhQUFhLEdBQUdGLGtFQUFnQixDQUFDLGtCQUFrQixFQUFFLFVBQVk7SUFDNUUsTUFBTUcsUUFBUSxHQUFHLE1BQU1GLGdEQUFTLENBQUMseUJBQXlCLENBQUM7SUFFM0QsT0FBT0UsUUFBUSxDQUFDRSxJQUFJLENBQUM7Q0FDdEIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci8uL3N0b3JlMi9xdW90ZS9hY3Rpb25zLnRzP2U3YWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRLYW55ZVF1b3RlID0gY3JlYXRlQXN5bmNUaHVuayhcImthbnllL2thbnllUXVvdGVcIiwgYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vYXBpLmthbnllLnJlc3QvXCIpO1xuXG4gIHJldHVybiByZXNwb25zZS5kYXRhO1xufSk7XG4iXSwibmFtZXMiOlsiY3JlYXRlQXN5bmNUaHVuayIsImF4aW9zIiwiZ2V0S2FueWVRdW90ZSIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store2/quote/actions.ts\n");

/***/ }),

/***/ "./store2/quote/index.ts":
/*!*******************************!*\
  !*** ./store2/quote/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./store2/quote/actions.ts\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _actions__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _actions__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ \"./store2/quote/reducer.ts\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _reducer__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _reducer__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ \"./store2/quote/selectors.ts\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _selectors__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _selectors__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZTIvcXVvdGUvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNBO0FBQ0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vc3RvcmUyL3F1b3RlL2luZGV4LnRzPzczZTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vYWN0aW9uc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vcmVkdWNlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2VsZWN0b3JzXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store2/quote/index.ts\n");

/***/ }),

/***/ "./store2/quote/reducer.ts":
/*!*********************************!*\
  !*** ./store2/quote/reducer.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"quoteReducer\": () => (/* binding */ quoteReducer)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./store2/quote/actions.ts\");\n\n\nconst initialState = {\n    data: {\n        quote: \"click that button\"\n    },\n    pending: false,\n    error: false\n};\nconst quoteReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState, (builder)=>{\n    builder.addCase(_actions__WEBPACK_IMPORTED_MODULE_1__.getKanyeQuote.pending, (state)=>{\n        state.pending = true;\n    }).addCase(_actions__WEBPACK_IMPORTED_MODULE_1__.getKanyeQuote.fulfilled, (state, { payload  })=>{\n        state.pending = false;\n        state.data = payload;\n    }).addCase(_actions__WEBPACK_IMPORTED_MODULE_1__.getKanyeQuote.rejected, (state)=>{\n        state.pending = false;\n        state.error = true;\n    });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (quoteReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZTIvcXVvdGUvcmVkdWNlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpRDtBQUNQO0FBUTFDLE1BQU1FLFlBQVksR0FBZTtJQUMvQkMsSUFBSSxFQUFFO1FBQUVDLEtBQUssRUFBRSxtQkFBbUI7S0FBRTtJQUNwQ0MsT0FBTyxFQUFFLEtBQUs7SUFDZEMsS0FBSyxFQUFFLEtBQUs7Q0FDYjtBQUVNLE1BQU1DLFlBQVksR0FBR1AsK0RBQWEsQ0FBQ0UsWUFBWSxFQUFFLENBQUNNLE9BQU8sR0FBSztJQUNuRUEsT0FBTyxDQUNKQyxPQUFPLENBQUNSLDJEQUFxQixFQUFFLENBQUNTLEtBQUssR0FBSztRQUN6Q0EsS0FBSyxDQUFDTCxPQUFPLEdBQUcsSUFBSSxDQUFDO0tBQ3RCLENBQUMsQ0FDREksT0FBTyxDQUFDUiw2REFBdUIsRUFBRSxDQUFDUyxLQUFLLEVBQUUsRUFBRUUsT0FBTyxHQUFFLEdBQUs7UUFDeERGLEtBQUssQ0FBQ0wsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN0QkssS0FBSyxDQUFDUCxJQUFJLEdBQUdTLE9BQU8sQ0FBQztLQUN0QixDQUFDLENBQ0RILE9BQU8sQ0FBQ1IsNERBQXNCLEVBQUUsQ0FBQ1MsS0FBSyxHQUFLO1FBQzFDQSxLQUFLLENBQUNMLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDdEJLLEtBQUssQ0FBQ0osS0FBSyxHQUFHLElBQUksQ0FBQztLQUNwQixDQUFDLENBQUM7Q0FDTixDQUFDLENBQUM7QUFFSCxpRUFBZUMsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci8uL3N0b3JlMi9xdW90ZS9yZWR1Y2VyLnRzPzA0OGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUmVkdWNlciB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBnZXRLYW55ZVF1b3RlIH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5leHBvcnQgdHlwZSBLYW55ZVN0YXRlID0ge1xuICBkYXRhOiB7IHF1b3RlOiBzdHJpbmcgfTtcbiAgcGVuZGluZzogYm9vbGVhbjtcbiAgZXJyb3I6IGJvb2xlYW47XG59O1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IEthbnllU3RhdGUgPSB7XG4gIGRhdGE6IHsgcXVvdGU6IFwiY2xpY2sgdGhhdCBidXR0b25cIiB9LFxuICBwZW5kaW5nOiBmYWxzZSxcbiAgZXJyb3I6IGZhbHNlLFxufTtcblxuZXhwb3J0IGNvbnN0IHF1b3RlUmVkdWNlciA9IGNyZWF0ZVJlZHVjZXIoaW5pdGlhbFN0YXRlLCAoYnVpbGRlcikgPT4ge1xuICBidWlsZGVyXG4gICAgLmFkZENhc2UoZ2V0S2FueWVRdW90ZS5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLnBlbmRpbmcgPSB0cnVlO1xuICAgIH0pXG4gICAgLmFkZENhc2UoZ2V0S2FueWVRdW90ZS5mdWxmaWxsZWQsIChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN0YXRlLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgIHN0YXRlLmRhdGEgPSBwYXlsb2FkO1xuICAgIH0pXG4gICAgLmFkZENhc2UoZ2V0S2FueWVRdW90ZS5yZWplY3RlZCwgKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5wZW5kaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5lcnJvciA9IHRydWU7XG4gICAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcXVvdGVSZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVJlZHVjZXIiLCJnZXRLYW55ZVF1b3RlIiwiaW5pdGlhbFN0YXRlIiwiZGF0YSIsInF1b3RlIiwicGVuZGluZyIsImVycm9yIiwicXVvdGVSZWR1Y2VyIiwiYnVpbGRlciIsImFkZENhc2UiLCJzdGF0ZSIsImZ1bGZpbGxlZCIsInBheWxvYWQiLCJyZWplY3RlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store2/quote/reducer.ts\n");

/***/ }),

/***/ "./store2/quote/selectors.ts":
/*!***********************************!*\
  !*** ./store2/quote/selectors.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"kanyeQuoteSelector\": () => (/* binding */ kanyeQuoteSelector),\n/* harmony export */   \"selectQuote\": () => (/* binding */ selectQuote)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst selectQuote = (state)=>state.quoteReducer\n;\nconst kanyeQuoteSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectQuote, (state)=>state\n);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZTIvcXVvdGUvc2VsZWN0b3JzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDa0Q7QUFFM0MsTUFBTUMsV0FBVyxHQUFHLENBQUNDLEtBQWdCLEdBQUtBLEtBQUssQ0FBQ0MsWUFBWTtBQUFBLENBQUM7QUFFN0QsTUFBTUMsa0JBQWtCLEdBQUdKLGdFQUFjLENBQUNDLFdBQVcsRUFBRSxDQUFDQyxLQUFLLEdBQUtBLEtBQUs7QUFBQSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vc3RvcmUyL3F1b3RlL3NlbGVjdG9ycy50cz9kZjA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi9zdG9yZVwiO1xuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0UXVvdGUgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUucXVvdGVSZWR1Y2VyO1xuXG5leHBvcnQgY29uc3Qga2FueWVRdW90ZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0UXVvdGUsIChzdGF0ZSkgPT4gc3RhdGUpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNlbGVjdG9yIiwic2VsZWN0UXVvdGUiLCJzdGF0ZSIsInF1b3RlUmVkdWNlciIsImthbnllUXVvdGVTZWxlY3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store2/quote/selectors.ts\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/kanye.tsx"));
module.exports = __webpack_exports__;

})();