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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./hooks/hooks.ts":
/*!************************!*\
  !*** ./hooks/hooks.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAppDispatch\": () => (/* binding */ useAppDispatch),\n/* harmony export */   \"useAppSelector\": () => (/* binding */ useAppSelector)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)()\n;\nconst useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9ob29rcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTZFO0FBR3RFLE1BQU1FLGNBQWMsR0FBRyxJQUFNRix3REFBVyxFQUFlO0FBQUEsQ0FBQztBQUN4RCxNQUFNRyxjQUFjLEdBQW9DRixvREFBVyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci8uL2hvb2tzL2hvb2tzLnRzP2YwN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZWRVc2VTZWxlY3Rvckhvb2ssIHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHR5cGUgeyBBcHBEaXNwYXRjaCwgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VBcHBEaXNwYXRjaCA9ICgpID0+IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpO1xuZXhwb3J0IGNvbnN0IHVzZUFwcFNlbGVjdG9yOiBUeXBlZFVzZVNlbGVjdG9ySG9vazxSb290U3RhdGU+ID0gdXNlU2VsZWN0b3I7XG4iXSwibmFtZXMiOlsidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/hooks.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/hooks */ \"./hooks/hooks.ts\");\n/* harmony import */ var _store2_counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store2/counter */ \"./store2/counter/index.ts\");\n\n\n\n\nfunction Home() {\n    const dispatch = (0,_hooks_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const count = (0,_hooks_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(_store2_counter__WEBPACK_IMPORTED_MODULE_3__.selectCount);\n    const { 0: incrementAmount , 1: setIncrementAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"The current number is\"\n            }, void 0, false, {\n                fileName: \"/Users/cedric/Documents/Personnal/next-redux/pages/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \" \",\n                    count\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cedric/Documents/Personnal/next-redux/pages/index.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: incrementAmount,\n                        onChange: (e)=>setIncrementAmount(Number(e.target.value))\n                        ,\n                        type: \"number\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cedric/Documents/Personnal/next-redux/pages/index.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>dispatch((0,_store2_counter__WEBPACK_IMPORTED_MODULE_3__.incrementByAmount)(Number(incrementAmount)))\n                        ,\n                        children: \"Increment by amount\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cedric/Documents/Personnal/next-redux/pages/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cedric/Documents/Personnal/next-redux/pages/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>dispatch((0,_store2_counter__WEBPACK_IMPORTED_MODULE_3__.decrement)())\n                        ,\n                        children: \"Decrement by 1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cedric/Documents/Personnal/next-redux/pages/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>dispatch((0,_store2_counter__WEBPACK_IMPORTED_MODULE_3__.increment)())\n                        ,\n                        children: \"Increment by 1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cedric/Documents/Personnal/next-redux/pages/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cedric/Documents/Personnal/next-redux/pages/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWlDO0FBQytCO0FBTXJDO0FBRVosU0FBU08sSUFBSSxHQUFHO0lBQzdCLE1BQU1DLFFBQVEsR0FBR1AsNERBQWMsRUFBRTtJQUNqQyxNQUFNUSxLQUFLLEdBQUdQLDREQUFjLENBQUNJLHdEQUFXLENBQUM7SUFDekMsTUFBTSxFQVpSLEdBWVNJLGVBQWUsR0FaeEIsR0FZMEJDLGtCQUFrQixNQUFJWCwrQ0FBUSxDQUFTLENBQUMsQ0FBQztJQUNqRSxxQkFDRTs7MEJBQ0UsOERBQUNZLElBQUU7MEJBQUMsdUJBQXFCOzs7OztvQkFBSzswQkFFOUIsOERBQUNDLElBQUU7O29CQUFDLEdBQUM7b0JBQUNKLEtBQUs7Ozs7OztvQkFBTTswQkFDakIsOERBQUNLLEtBQUc7O2tDQUNGLDhEQUFDQyxPQUFLO3dCQUNKQyxLQUFLLEVBQUVOLGVBQWU7d0JBQ3RCTyxRQUFRLEVBQUUsQ0FBQ0MsQ0FBQyxHQUFLUCxrQkFBa0IsQ0FBQ1EsTUFBTSxDQUFDRCxDQUFDLENBQUNFLE1BQU0sQ0FBQ0osS0FBSyxDQUFDLENBQUM7d0JBQUE7d0JBQzNESyxJQUFJLEVBQUMsUUFBUTs7Ozs7NEJBQ2I7a0NBQ0YsOERBQUNDLFFBQU07d0JBQ0xDLE9BQU8sRUFBRSxJQUFNZixRQUFRLENBQUNILGtFQUFpQixDQUFDYyxNQUFNLENBQUNULGVBQWUsQ0FBQyxDQUFDLENBQUM7d0JBQUE7a0NBQ3BFLHFCQUVEOzs7Ozs0QkFBUzs7Ozs7O29CQUNMOzBCQUNOLDhEQUFDSSxLQUFHOztrQ0FDRiw4REFBQ1EsUUFBTTt3QkFBQ0MsT0FBTyxFQUFFLElBQU1mLFFBQVEsQ0FBQ0wsMERBQVMsRUFBRSxDQUFDO3dCQUFBO2tDQUFFLGdCQUFjOzs7Ozs0QkFBUztrQ0FDckUsOERBQUNtQixRQUFNO3dCQUFDQyxPQUFPLEVBQUUsSUFBTWYsUUFBUSxDQUFDSiwwREFBUyxFQUFFLENBQUM7d0JBQUE7a0NBQUUsZ0JBQWM7Ozs7OzRCQUFTOzs7Ozs7b0JBQ2pFOztvQkFDTCxDQUNIO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCIuLi9ob29rcy9ob29rc1wiO1xuaW1wb3J0IHtcbiAgZGVjcmVtZW50LFxuICBpbmNyZW1lbnQsXG4gIGluY3JlbWVudEJ5QW1vdW50LFxuICBzZWxlY3RDb3VudCxcbn0gZnJvbSBcIi4uL3N0b3JlMi9jb3VudGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgY29uc3QgY291bnQgPSB1c2VBcHBTZWxlY3RvcihzZWxlY3RDb3VudCk7XG4gIGNvbnN0IFtpbmNyZW1lbnRBbW91bnQsIHNldEluY3JlbWVudEFtb3VudF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDI+VGhlIGN1cnJlbnQgbnVtYmVyIGlzPC9oMj5cblxuICAgICAgPGgxPiB7Y291bnR9PC9oMT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHZhbHVlPXtpbmNyZW1lbnRBbW91bnR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbmNyZW1lbnRBbW91bnQoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChpbmNyZW1lbnRCeUFtb3VudChOdW1iZXIoaW5jcmVtZW50QW1vdW50KSkpfVxuICAgICAgICA+XG4gICAgICAgICAgSW5jcmVtZW50IGJ5IGFtb3VudFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChkZWNyZW1lbnQoKSl9PkRlY3JlbWVudCBieSAxPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goaW5jcmVtZW50KCkpfT5JbmNyZW1lbnQgYnkgMTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiZGVjcmVtZW50IiwiaW5jcmVtZW50IiwiaW5jcmVtZW50QnlBbW91bnQiLCJzZWxlY3RDb3VudCIsIkhvbWUiLCJkaXNwYXRjaCIsImNvdW50IiwiaW5jcmVtZW50QW1vdW50Iiwic2V0SW5jcmVtZW50QW1vdW50IiwiaDIiLCJoMSIsImRpdiIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJOdW1iZXIiLCJ0YXJnZXQiLCJ0eXBlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();