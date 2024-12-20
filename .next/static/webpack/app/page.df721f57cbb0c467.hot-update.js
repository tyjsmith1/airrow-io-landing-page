"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/ProductShowcase.tsx":
/*!********************************************!*\
  !*** ./src/components/ProductShowcase.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductShowcase: function() { return /* binding */ ProductShowcase; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_app_screen_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/app-screen.png */ \"(app-pages-browser)/./src/assets/images/app-screen.png\");\n/* __next_internal_client_entry_do_not_use__ ProductShowcase auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ProductShowcase = ()=>{\n    _s();\n    const appImage = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)({\n        target: appImage,\n        offset: [\n            \"start end\",\n            \"end end\"\n        ]\n    });\n    const rotateX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        15,\n        0\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-black text-white bg-gradient-to-b from-black to-[#5D2CAB] py-[72px] sm:py-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-center text-5xl sm:text-6xl font-bold tracking-tighter\",\n                    children: \"Intuitive Interface\"\n                }, void 0, false, {\n                    fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/ProductShowcase.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-xl mx-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl text-center text-white/70 mt-5\",\n                        children: \"Gain insights into your job search with analytics. Understand your application trends and success rates.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/ProductShowcase.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/ProductShowcase.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    style: {\n                        opacity: 0.5,\n                        rotateX: rotateX,\n                        transformPerspective: \"800px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: _assets_images_app_screen_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"The product screenshot\",\n                        className: \"mt-14 mx-auto\",\n                        ref: appImage\n                    }, void 0, false, {\n                        fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/ProductShowcase.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/ProductShowcase.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/ProductShowcase.tsx\",\n            lineNumber: 19,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/ProductShowcase.tsx\",\n        lineNumber: 18,\n        columnNumber: 3\n    }, undefined);\n};\n_s(ProductShowcase, \"licfAG13DFEyXF86KBSuxtHKhas=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform\n    ];\n});\n_c = ProductShowcase;\nvar _c;\n$RefreshReg$(_c, \"ProductShowcase\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RTaG93Y2FzZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFZ0U7QUFDakM7QUFDQTtBQUN5QjtBQUVqRCxNQUFNTSxrQkFBa0I7O0lBQzlCLE1BQU1DLFdBQVdILDZDQUFNQSxDQUFtQjtJQUMxQyxNQUFNLEVBQUVJLGVBQWUsRUFBRSxHQUFHUCx3REFBU0EsQ0FBQztRQUNyQ1EsUUFBUUY7UUFDUkcsUUFBUTtZQUFDO1lBQWE7U0FBVTtJQUNqQztJQUVBLE1BQU1DLFVBQVVULDJEQUFZQSxDQUFDTSxpQkFBaUI7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQUk7S0FBRTtJQUU3RCxxQkFDQyw4REFBQ0k7UUFBSUMsV0FBVTtrQkFDZCw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2QsOERBQUNDO29CQUFHRCxXQUFVOzhCQUE4RDs7Ozs7OzhCQUc1RSw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2QsNEVBQUNFO3dCQUFFRixXQUFVO2tDQUF5Qzs7Ozs7Ozs7Ozs7OEJBS3ZELDhEQUFDYixpREFBTUEsQ0FBQ1ksR0FBRztvQkFDVkksT0FBTzt3QkFDTkMsU0FBUzt3QkFDVE4sU0FBU0E7d0JBQ1RPLHNCQUFzQjtvQkFDdkI7OEJBQ0EsNEVBQUNmLGtEQUFLQTt3QkFDTGdCLEtBQUtkLHFFQUFTQTt3QkFDZGUsS0FBSTt3QkFDSlAsV0FBVTt3QkFDVlEsS0FBS2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWCxFQUFFO0dBckNXRDs7UUFFZ0JMLG9EQUFTQTtRQUtyQkMsdURBQVlBOzs7S0FQaEJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RTaG93Y2FzZS50c3g/YmVlZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IG1vdGlvbiwgdXNlU2Nyb2xsLCB1c2VUcmFuc2Zvcm0gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhcHBTY3JlZW4gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9hcHAtc2NyZWVuLnBuZyc7XG5cbmV4cG9ydCBjb25zdCBQcm9kdWN0U2hvd2Nhc2UgPSAoKSA9PiB7XG5cdGNvbnN0IGFwcEltYWdlID0gdXNlUmVmPEhUTUxJbWFnZUVsZW1lbnQ+KG51bGwpO1xuXHRjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlU2Nyb2xsKHtcblx0XHR0YXJnZXQ6IGFwcEltYWdlLFxuXHRcdG9mZnNldDogWydzdGFydCBlbmQnLCAnZW5kIGVuZCddLFxuXHR9KTtcblxuXHRjb25zdCByb3RhdGVYID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDFdLCBbMTUsIDBdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdiZy1ibGFjayB0ZXh0LXdoaXRlIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1ibGFjayB0by1bIzVEMkNBQl0gcHktWzcycHhdIHNtOnB5LTI0Jz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LTV4bCBzbTp0ZXh0LTZ4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHRlcic+XG5cdFx0XHRcdFx0SW50dWl0aXZlIEludGVyZmFjZVxuXHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWF4LXcteGwgbXgtYXV0byc+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LXhsIHRleHQtY2VudGVyIHRleHQtd2hpdGUvNzAgbXQtNSc+XG5cdFx0XHRcdFx0XHRHYWluIGluc2lnaHRzIGludG8geW91ciBqb2Igc2VhcmNoIHdpdGggYW5hbHl0aWNzLlxuXHRcdFx0XHRcdFx0VW5kZXJzdGFuZCB5b3VyIGFwcGxpY2F0aW9uIHRyZW5kcyBhbmQgc3VjY2VzcyByYXRlcy5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAwLjUsXG5cdFx0XHRcdFx0XHRyb3RhdGVYOiByb3RhdGVYLFxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtUGVyc3BlY3RpdmU6ICc4MDBweCcsXG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0XHRzcmM9e2FwcFNjcmVlbn1cblx0XHRcdFx0XHRcdGFsdD0nVGhlIHByb2R1Y3Qgc2NyZWVuc2hvdCdcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbXQtMTQgbXgtYXV0bydcblx0XHRcdFx0XHRcdHJlZj17YXBwSW1hZ2V9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsInVzZVNjcm9sbCIsInVzZVRyYW5zZm9ybSIsIkltYWdlIiwidXNlUmVmIiwiYXBwU2NyZWVuIiwiUHJvZHVjdFNob3djYXNlIiwiYXBwSW1hZ2UiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJ0YXJnZXQiLCJvZmZzZXQiLCJyb3RhdGVYIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJwIiwic3R5bGUiLCJvcGFjaXR5IiwidHJhbnNmb3JtUGVyc3BlY3RpdmUiLCJzcmMiLCJhbHQiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ProductShowcase.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/transform.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/transform.mjs ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   transform: function() { return /* binding */ transform; }\n/* harmony export */ });\n/* harmony import */ var _interpolate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interpolate.mjs */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/interpolate.mjs\");\n\n\nconst isCustomValueType = (v) => {\n    return v && typeof v === \"object\" && v.mix;\n};\nconst getMixer = (v) => (isCustomValueType(v) ? v.mix : undefined);\nfunction transform(...args) {\n    const useImmediate = !Array.isArray(args[0]);\n    const argOffset = useImmediate ? 0 : -1;\n    const inputValue = args[0 + argOffset];\n    const inputRange = args[1 + argOffset];\n    const outputRange = args[2 + argOffset];\n    const options = args[3 + argOffset];\n    const interpolator = (0,_interpolate_mjs__WEBPACK_IMPORTED_MODULE_0__.interpolate)(inputRange, outputRange, {\n        mixer: getMixer(outputRange[0]),\n        ...options,\n    });\n    return useImmediate ? interpolator(inputValue) : interpolator;\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdHJhbnNmb3JtLm1qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFnRDs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2REFBVztBQUNwQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdHJhbnNmb3JtLm1qcz81Mjg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGludGVycG9sYXRlIH0gZnJvbSAnLi9pbnRlcnBvbGF0ZS5tanMnO1xuXG5jb25zdCBpc0N1c3RvbVZhbHVlVHlwZSA9ICh2KSA9PiB7XG4gICAgcmV0dXJuIHYgJiYgdHlwZW9mIHYgPT09IFwib2JqZWN0XCIgJiYgdi5taXg7XG59O1xuY29uc3QgZ2V0TWl4ZXIgPSAodikgPT4gKGlzQ3VzdG9tVmFsdWVUeXBlKHYpID8gdi5taXggOiB1bmRlZmluZWQpO1xuZnVuY3Rpb24gdHJhbnNmb3JtKC4uLmFyZ3MpIHtcbiAgICBjb25zdCB1c2VJbW1lZGlhdGUgPSAhQXJyYXkuaXNBcnJheShhcmdzWzBdKTtcbiAgICBjb25zdCBhcmdPZmZzZXQgPSB1c2VJbW1lZGlhdGUgPyAwIDogLTE7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGFyZ3NbMCArIGFyZ09mZnNldF07XG4gICAgY29uc3QgaW5wdXRSYW5nZSA9IGFyZ3NbMSArIGFyZ09mZnNldF07XG4gICAgY29uc3Qgb3V0cHV0UmFuZ2UgPSBhcmdzWzIgKyBhcmdPZmZzZXRdO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBhcmdzWzMgKyBhcmdPZmZzZXRdO1xuICAgIGNvbnN0IGludGVycG9sYXRvciA9IGludGVycG9sYXRlKGlucHV0UmFuZ2UsIG91dHB1dFJhbmdlLCB7XG4gICAgICAgIG1peGVyOiBnZXRNaXhlcihvdXRwdXRSYW5nZVswXSksXG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSk7XG4gICAgcmV0dXJuIHVzZUltbWVkaWF0ZSA/IGludGVycG9sYXRvcihpbnB1dFZhbHVlKSA6IGludGVycG9sYXRvcjtcbn1cblxuZXhwb3J0IHsgdHJhbnNmb3JtIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/transform.mjs\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-computed.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/use-computed.mjs ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useComputed: function() { return /* binding */ useComputed; }\n/* harmony export */ });\n/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.mjs */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/index.mjs\");\n/* harmony import */ var _use_combine_values_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-combine-values.mjs */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-combine-values.mjs\");\n\n\n\nfunction useComputed(compute) {\n    /**\n     * Open session of collectMotionValues. Any MotionValue that calls get()\n     * will be saved into this array.\n     */\n    _index_mjs__WEBPACK_IMPORTED_MODULE_0__.collectMotionValues.current = [];\n    compute();\n    const value = (0,_use_combine_values_mjs__WEBPACK_IMPORTED_MODULE_1__.useCombineMotionValues)(_index_mjs__WEBPACK_IMPORTED_MODULE_0__.collectMotionValues.current, compute);\n    /**\n     * Synchronously close session of collectMotionValues.\n     */\n    _index_mjs__WEBPACK_IMPORTED_MODULE_0__.collectMotionValues.current = undefined;\n    return value;\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLWNvbXB1dGVkLm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0Q7QUFDZ0I7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJEQUFtQjtBQUN2QjtBQUNBLGtCQUFrQiwrRUFBc0IsQ0FBQywyREFBbUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyREFBbUI7QUFDdkI7QUFDQTs7QUFFdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtY29tcHV0ZWQubWpzPzVlYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29sbGVjdE1vdGlvblZhbHVlcyB9IGZyb20gJy4vaW5kZXgubWpzJztcbmltcG9ydCB7IHVzZUNvbWJpbmVNb3Rpb25WYWx1ZXMgfSBmcm9tICcuL3VzZS1jb21iaW5lLXZhbHVlcy5tanMnO1xuXG5mdW5jdGlvbiB1c2VDb21wdXRlZChjb21wdXRlKSB7XG4gICAgLyoqXG4gICAgICogT3BlbiBzZXNzaW9uIG9mIGNvbGxlY3RNb3Rpb25WYWx1ZXMuIEFueSBNb3Rpb25WYWx1ZSB0aGF0IGNhbGxzIGdldCgpXG4gICAgICogd2lsbCBiZSBzYXZlZCBpbnRvIHRoaXMgYXJyYXkuXG4gICAgICovXG4gICAgY29sbGVjdE1vdGlvblZhbHVlcy5jdXJyZW50ID0gW107XG4gICAgY29tcHV0ZSgpO1xuICAgIGNvbnN0IHZhbHVlID0gdXNlQ29tYmluZU1vdGlvblZhbHVlcyhjb2xsZWN0TW90aW9uVmFsdWVzLmN1cnJlbnQsIGNvbXB1dGUpO1xuICAgIC8qKlxuICAgICAqIFN5bmNocm9ub3VzbHkgY2xvc2Ugc2Vzc2lvbiBvZiBjb2xsZWN0TW90aW9uVmFsdWVzLlxuICAgICAqL1xuICAgIGNvbGxlY3RNb3Rpb25WYWx1ZXMuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCB7IHVzZUNvbXB1dGVkIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-computed.mjs\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/use-transform.mjs ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useTransform: function() { return /* binding */ useTransform; }\n/* harmony export */ });\n/* harmony import */ var _utils_transform_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/transform.mjs */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/transform.mjs\");\n/* harmony import */ var _use_combine_values_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-combine-values.mjs */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-combine-values.mjs\");\n/* harmony import */ var _utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/use-constant.mjs */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-constant.mjs\");\n/* harmony import */ var _use_computed_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-computed.mjs */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-computed.mjs\");\n\n\n\n\n\nfunction useTransform(input, inputRangeOrTransformer, outputRange, options) {\n    if (typeof input === \"function\") {\n        return (0,_use_computed_mjs__WEBPACK_IMPORTED_MODULE_0__.useComputed)(input);\n    }\n    const transformer = typeof inputRangeOrTransformer === \"function\"\n        ? inputRangeOrTransformer\n        : (0,_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_1__.transform)(inputRangeOrTransformer, outputRange, options);\n    return Array.isArray(input)\n        ? useListTransform(input, transformer)\n        : useListTransform([input], ([latest]) => transformer(latest));\n}\nfunction useListTransform(values, transformer) {\n    const latest = (0,_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_2__.useConstant)(() => []);\n    return (0,_use_combine_values_mjs__WEBPACK_IMPORTED_MODULE_3__.useCombineMotionValues)(values, () => {\n        latest.length = 0;\n        const numValues = values.length;\n        for (let i = 0; i < numValues; i++) {\n            latest[i] = values[i].get();\n        }\n        return transformer(latest);\n    });\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXRyYW5zZm9ybS5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDZTtBQUNWO0FBQ1A7O0FBRWpEO0FBQ0E7QUFDQSxlQUFlLDhEQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLFVBQVUsK0RBQVM7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvRUFBVztBQUM5QixXQUFXLCtFQUFzQjtBQUNqQztBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUV3QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS10cmFuc2Zvcm0ubWpzPzkyZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHJhbnNmb3JtIH0gZnJvbSAnLi4vdXRpbHMvdHJhbnNmb3JtLm1qcyc7XG5pbXBvcnQgeyB1c2VDb21iaW5lTW90aW9uVmFsdWVzIH0gZnJvbSAnLi91c2UtY29tYmluZS12YWx1ZXMubWpzJztcbmltcG9ydCB7IHVzZUNvbnN0YW50IH0gZnJvbSAnLi4vdXRpbHMvdXNlLWNvbnN0YW50Lm1qcyc7XG5pbXBvcnQgeyB1c2VDb21wdXRlZCB9IGZyb20gJy4vdXNlLWNvbXB1dGVkLm1qcyc7XG5cbmZ1bmN0aW9uIHVzZVRyYW5zZm9ybShpbnB1dCwgaW5wdXRSYW5nZU9yVHJhbnNmb3JtZXIsIG91dHB1dFJhbmdlLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiB1c2VDb21wdXRlZChpbnB1dCk7XG4gICAgfVxuICAgIGNvbnN0IHRyYW5zZm9ybWVyID0gdHlwZW9mIGlucHV0UmFuZ2VPclRyYW5zZm9ybWVyID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgPyBpbnB1dFJhbmdlT3JUcmFuc2Zvcm1lclxuICAgICAgICA6IHRyYW5zZm9ybShpbnB1dFJhbmdlT3JUcmFuc2Zvcm1lciwgb3V0cHV0UmFuZ2UsIG9wdGlvbnMpO1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGlucHV0KVxuICAgICAgICA/IHVzZUxpc3RUcmFuc2Zvcm0oaW5wdXQsIHRyYW5zZm9ybWVyKVxuICAgICAgICA6IHVzZUxpc3RUcmFuc2Zvcm0oW2lucHV0XSwgKFtsYXRlc3RdKSA9PiB0cmFuc2Zvcm1lcihsYXRlc3QpKTtcbn1cbmZ1bmN0aW9uIHVzZUxpc3RUcmFuc2Zvcm0odmFsdWVzLCB0cmFuc2Zvcm1lcikge1xuICAgIGNvbnN0IGxhdGVzdCA9IHVzZUNvbnN0YW50KCgpID0+IFtdKTtcbiAgICByZXR1cm4gdXNlQ29tYmluZU1vdGlvblZhbHVlcyh2YWx1ZXMsICgpID0+IHtcbiAgICAgICAgbGF0ZXN0Lmxlbmd0aCA9IDA7XG4gICAgICAgIGNvbnN0IG51bVZhbHVlcyA9IHZhbHVlcy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVmFsdWVzOyBpKyspIHtcbiAgICAgICAgICAgIGxhdGVzdFtpXSA9IHZhbHVlc1tpXS5nZXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtZXIobGF0ZXN0KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgdXNlVHJhbnNmb3JtIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\n"));

/***/ })

});