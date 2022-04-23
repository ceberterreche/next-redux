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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store2 */ \"./store2/index.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _store2__WEBPACK_IMPORTED_MODULE_1__.store,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/cedric/Documents/Personnal/next-redux/pages/_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            \";\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cedric/Documents/Personnal/next-redux/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVrQztBQUNLO0FBRXhCLFNBQVNFLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQ2hFLHFCQUNFLDhEQUFDSCxpREFBUTtRQUFDRCxLQUFLLEVBQUVBLDBDQUFLOzswQkFDcEIsOERBQUNHLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7b0JBQUk7WUFBQSxHQUM5Qjs7Ozs7O1lBQVcsQ0FDWDtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcblxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vc3RvcmUyXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3RvcmUiLCJQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./store2/counter/actions.ts":
/*!***********************************!*\
  !*** ./store2/counter/actions.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"decrement\": () => (/* binding */ decrement),\n/* harmony export */   \"increment\": () => (/* binding */ increment),\n/* harmony export */   \"incrementByAmount\": () => (/* binding */ incrementByAmount)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst increment = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)(\"counter/increment\");\nconst decrement = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)(\"counter/decrement\");\nconst incrementByAmount = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)(\"counter/incrementByAmount\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZTIvY291bnRlci9hY3Rpb25zLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdEO0FBRXpDLE1BQU1DLFNBQVMsR0FBR0QsOERBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3BELE1BQU1FLFNBQVMsR0FBR0YsOERBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3BELE1BQU1HLGlCQUFpQixHQUFHSCw4REFBWSxDQUMzQywyQkFBMkIsQ0FDNUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvLi9zdG9yZTIvY291bnRlci9hY3Rpb25zLnRzPzNmYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuZXhwb3J0IGNvbnN0IGluY3JlbWVudCA9IGNyZWF0ZUFjdGlvbihcImNvdW50ZXIvaW5jcmVtZW50XCIpO1xuZXhwb3J0IGNvbnN0IGRlY3JlbWVudCA9IGNyZWF0ZUFjdGlvbihcImNvdW50ZXIvZGVjcmVtZW50XCIpO1xuZXhwb3J0IGNvbnN0IGluY3JlbWVudEJ5QW1vdW50ID0gY3JlYXRlQWN0aW9uPG51bWJlcj4oXG4gIFwiY291bnRlci9pbmNyZW1lbnRCeUFtb3VudFwiXG4pO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUFjdGlvbiIsImluY3JlbWVudCIsImRlY3JlbWVudCIsImluY3JlbWVudEJ5QW1vdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store2/counter/actions.ts\n");

/***/ }),

/***/ "./store2/counter/index.ts":
/*!*********************************!*\
  !*** ./store2/counter/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./store2/counter/actions.ts\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _actions__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _actions__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ \"./store2/counter/reducer.ts\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _reducer__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _reducer__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ \"./store2/counter/selectors.ts\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _selectors__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _selectors__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZTIvY291bnRlci9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0E7QUFDRSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvLi9zdG9yZTIvY291bnRlci9pbmRleC50cz8zOGEwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL2FjdGlvbnNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3JlZHVjZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NlbGVjdG9yc1wiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store2/counter/index.ts\n");

/***/ }),

/***/ "./store2/counter/reducer.ts":
/*!***********************************!*\
  !*** ./store2/counter/reducer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counterReducer\": () => (/* binding */ counterReducer)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./store2/counter/actions.ts\");\n\n\nconst initialState = {\n    value: 0\n};\nconst counterReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState, (builder)=>{\n    builder.addCase(_actions__WEBPACK_IMPORTED_MODULE_1__.increment, (state)=>{\n        state.value++;\n    }).addCase(_actions__WEBPACK_IMPORTED_MODULE_1__.decrement, (state)=>{\n        state.value--;\n    }).addCase(_actions__WEBPACK_IMPORTED_MODULE_1__.incrementByAmount, (state, action)=>{\n        state.value += action.payload;\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZTIvY291bnRlci9yZWR1Y2VyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUQ7QUFDbUI7QUFNcEUsTUFBTUksWUFBWSxHQUFpQjtJQUNqQ0MsS0FBSyxFQUFFLENBQUM7Q0FDVDtBQUVNLE1BQU1DLGNBQWMsR0FBR04sK0RBQWEsQ0FBQ0ksWUFBWSxFQUFFLENBQUNHLE9BQU8sR0FBSztJQUNyRUEsT0FBTyxDQUNKQyxPQUFPLENBQUNOLCtDQUFTLEVBQUUsQ0FBQ08sS0FBSyxHQUFLO1FBQzdCQSxLQUFLLENBQUNKLEtBQUssRUFBRSxDQUFDO0tBQ2YsQ0FBQyxDQUNERyxPQUFPLENBQUNQLCtDQUFTLEVBQUUsQ0FBQ1EsS0FBSyxHQUFLO1FBQzdCQSxLQUFLLENBQUNKLEtBQUssRUFBRSxDQUFDO0tBQ2YsQ0FBQyxDQUNERyxPQUFPLENBQUNMLHVEQUFpQixFQUFFLENBQUNNLEtBQUssRUFBRUMsTUFBTSxHQUFLO1FBQzdDRCxLQUFLLENBQUNKLEtBQUssSUFBSUssTUFBTSxDQUFDQyxPQUFPLENBQUM7S0FDL0IsQ0FBQyxDQUFDO0NBQ04sQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci8uL3N0b3JlMi9jb3VudGVyL3JlZHVjZXIudHM/MmE3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7IGRlY3JlbWVudCwgaW5jcmVtZW50LCBpbmNyZW1lbnRCeUFtb3VudCB9IGZyb20gXCIuL2FjdGlvbnNcIjtcblxudHlwZSBDb3VudGVyU3RhdGUgPSB7XG4gIHZhbHVlOiBudW1iZXI7XG59O1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IENvdW50ZXJTdGF0ZSA9IHtcbiAgdmFsdWU6IDAsXG59O1xuXG5leHBvcnQgY29uc3QgY291bnRlclJlZHVjZXIgPSBjcmVhdGVSZWR1Y2VyKGluaXRpYWxTdGF0ZSwgKGJ1aWxkZXIpID0+IHtcbiAgYnVpbGRlclxuICAgIC5hZGRDYXNlKGluY3JlbWVudCwgKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS52YWx1ZSsrO1xuICAgIH0pXG4gICAgLmFkZENhc2UoZGVjcmVtZW50LCAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLnZhbHVlLS07XG4gICAgfSlcbiAgICAuYWRkQ2FzZShpbmNyZW1lbnRCeUFtb3VudCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLnZhbHVlICs9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOlsiY3JlYXRlUmVkdWNlciIsImRlY3JlbWVudCIsImluY3JlbWVudCIsImluY3JlbWVudEJ5QW1vdW50IiwiaW5pdGlhbFN0YXRlIiwidmFsdWUiLCJjb3VudGVyUmVkdWNlciIsImJ1aWxkZXIiLCJhZGRDYXNlIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store2/counter/reducer.ts\n");

/***/ }),

/***/ "./store2/counter/selectors.ts":
/*!*************************************!*\
  !*** ./store2/counter/selectors.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countSelector\": () => (/* binding */ countSelector),\n/* harmony export */   \"selectCount\": () => (/* binding */ selectCount)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst selectCount = (state)=>state.counterReducer.value\n;\nconst countSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectCount, (state)=>state\n);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZTIvY291bnRlci9zZWxlY3RvcnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrRDtBQUczQyxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0MsS0FBZ0IsR0FBS0EsS0FBSyxDQUFDQyxjQUFjLENBQUNDLEtBQUs7QUFBQSxDQUFDO0FBRXJFLE1BQU1DLGFBQWEsR0FBR0wsZ0VBQWMsQ0FBQ0MsV0FBVyxFQUFFLENBQUNDLEtBQUssR0FBS0EsS0FBSztBQUFBLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvLi9zdG9yZTIvY291bnRlci9zZWxlY3RvcnMudHM/MzBhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vXCI7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RDb3VudCA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5jb3VudGVyUmVkdWNlci52YWx1ZTtcblxuZXhwb3J0IGNvbnN0IGNvdW50U2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RDb3VudCwgKHN0YXRlKSA9PiBzdGF0ZSk7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2VsZWN0b3IiLCJzZWxlY3RDb3VudCIsInN0YXRlIiwiY291bnRlclJlZHVjZXIiLCJ2YWx1ZSIsImNvdW50U2VsZWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store2/counter/selectors.ts\n");

/***/ }),

/***/ "./store2/index.ts":
/*!*************************!*\
  !*** ./store2/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter */ \"./store2/counter/index.ts\");\n/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quote */ \"./store2/quote/index.ts\");\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        counterReducer: _counter__WEBPACK_IMPORTED_MODULE_1__.counterReducer,\n        quoteReducer: _quote__WEBPACK_IMPORTED_MODULE_2__.quoteReducer\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZTIvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUU7QUFDNUI7QUFDSjtBQUVoQyxNQUFNRyxLQUFLLEdBQUdILGdFQUFjLENBQUM7SUFDbENJLE9BQU8sRUFBRTtRQUNQSCxjQUFjO1FBQ2RDLFlBQVk7S0FDYjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvLi9zdG9yZTIvaW5kZXgudHM/NTQzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24sIGNvbmZpZ3VyZVN0b3JlLCBUaHVua0FjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBjb3VudGVyUmVkdWNlciB9IGZyb20gXCIuL2NvdW50ZXJcIjtcbmltcG9ydCB7IHF1b3RlUmVkdWNlciB9IGZyb20gXCIuL3F1b3RlXCI7XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIGNvdW50ZXJSZWR1Y2VyLFxuICAgIHF1b3RlUmVkdWNlcixcbiAgfSxcbn0pO1xuXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaDtcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHN0b3JlLmdldFN0YXRlPjtcbmV4cG9ydCB0eXBlIEFwcFRodW5rPFJldHVyblR5cGUgPSB2b2lkPiA9IFRodW5rQWN0aW9uPFxuICBSZXR1cm5UeXBlLFxuICBSb290U3RhdGUsXG4gIHVua25vd24sXG4gIEFjdGlvbjxzdHJpbmc+XG4+O1xuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiY291bnRlclJlZHVjZXIiLCJxdW90ZVJlZHVjZXIiLCJzdG9yZSIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store2/index.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();