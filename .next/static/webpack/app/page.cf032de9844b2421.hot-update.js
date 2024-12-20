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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductShowcase: function() { return /* binding */ ProductShowcase; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_app_screen_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/app-screen.png */ \"(app-pages-browser)/./src/assets/images/app-screen.png\");\n/* __next_internal_client_entry_do_not_use__ ProductShowcase auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ProductShowcase = ()=>{\n    _s();\n    const appImage = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)({\n        target: appImage,\n        offset: [\n            \"start end\",\n            \"end end\"\n        ]\n    });\n    const rotateX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        15,\n        0\n    ]);\n    const opcaity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0,\n        1\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[var(--color-cloud-white)] text-[var(--color-deep-blue)] bg-gradient-to-b from-[var(--color-cloud-white)] to-[var(--color-sky-blue)] py-[72px] sm:py-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-center text-5xl sm:text-6xl font-bold tracking-tighter\",\n                    children: \"Simple by design\"\n                }, void 0, false, {\n                    fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/ProductShowcase.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-xl mx-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl text-center text-[var(--color-deep-blue-70)] mt-5\",\n                        children: \"Focus on what matters - landing your next role. No complexity, no overwhelm, just the tools you need to make progress.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/ProductShowcase.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/ProductShowcase.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    style: {\n                        opacity: opcaity,\n                        rotateX: rotateX,\n                        transformPerspective: \"800px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: _assets_images_app_screen_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"The product screenshot\",\n                        className: \"mt-14 mx-auto\",\n                        ref: appImage\n                    }, void 0, false, {\n                        fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/ProductShowcase.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/ProductShowcase.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/ProductShowcase.tsx\",\n            lineNumber: 20,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/ProductShowcase.tsx\",\n        lineNumber: 19,\n        columnNumber: 3\n    }, undefined);\n};\n_s(ProductShowcase, \"LqsbV9R78gAGjaT+5G4pQsAPwEA=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform\n    ];\n});\n_c = ProductShowcase;\nvar _c;\n$RefreshReg$(_c, \"ProductShowcase\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RTaG93Y2FzZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFZ0U7QUFDakM7QUFDQTtBQUM0QjtBQUVwRCxNQUFNTSxrQkFBa0I7O0lBQzlCLE1BQU1DLFdBQVdILDZDQUFNQSxDQUFtQjtJQUMxQyxNQUFNLEVBQUVJLGVBQWUsRUFBRSxHQUFHUCx3REFBU0EsQ0FBQztRQUNyQ1EsUUFBUUY7UUFDUkcsUUFBUTtZQUFDO1lBQWE7U0FBVTtJQUNqQztJQUVBLE1BQU1DLFVBQVVULDJEQUFZQSxDQUFDTSxpQkFBaUI7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQUk7S0FBRTtJQUM3RCxNQUFNSSxVQUFVViwyREFBWUEsQ0FBQ00saUJBQWlCO1FBQUM7UUFBRztLQUFFLEVBQUU7UUFBQztRQUFHO0tBQUU7SUFFNUQscUJBQ0MsOERBQUNLO1FBQUlDLFdBQVU7a0JBQ2QsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNkLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBOEQ7Ozs7Ozs4QkFHNUUsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNkLDRFQUFDRTt3QkFBRUYsV0FBVTtrQ0FBNEQ7Ozs7Ozs7Ozs7OzhCQU0xRSw4REFBQ2QsaURBQU1BLENBQUNhLEdBQUc7b0JBQ1ZJLE9BQU87d0JBQ05DLFNBQVNOO3dCQUNURCxTQUFTQTt3QkFDVFEsc0JBQXNCO29CQUN2Qjs4QkFDQSw0RUFBQ2hCLGtEQUFLQTt3QkFDTGlCLEtBQUtmLHFFQUFZQTt3QkFDakJnQixLQUFJO3dCQUNKUCxXQUFVO3dCQUNWUSxLQUFLZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1YLEVBQUU7R0F2Q1dEOztRQUVnQkwsb0RBQVNBO1FBS3JCQyx1REFBWUE7UUFDWkEsdURBQVlBOzs7S0FSaEJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RTaG93Y2FzZS50c3g/YmVlZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IG1vdGlvbiwgdXNlU2Nyb2xsLCB1c2VUcmFuc2Zvcm0gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhcHBsaWNhdGlvbnMgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9hcHAtc2NyZWVuLnBuZyc7XG5cbmV4cG9ydCBjb25zdCBQcm9kdWN0U2hvd2Nhc2UgPSAoKSA9PiB7XG5cdGNvbnN0IGFwcEltYWdlID0gdXNlUmVmPEhUTUxJbWFnZUVsZW1lbnQ+KG51bGwpO1xuXHRjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlU2Nyb2xsKHtcblx0XHR0YXJnZXQ6IGFwcEltYWdlLFxuXHRcdG9mZnNldDogWydzdGFydCBlbmQnLCAnZW5kIGVuZCddLFxuXHR9KTtcblxuXHRjb25zdCByb3RhdGVYID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDFdLCBbMTUsIDBdKTtcblx0Y29uc3Qgb3BjYWl0eSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAxXSwgWzAsIDFdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdiZy1bdmFyKC0tY29sb3ItY2xvdWQtd2hpdGUpXSB0ZXh0LVt2YXIoLS1jb2xvci1kZWVwLWJsdWUpXSBiZy1ncmFkaWVudC10by1iIGZyb20tW3ZhcigtLWNvbG9yLWNsb3VkLXdoaXRlKV0gdG8tW3ZhcigtLWNvbG9yLXNreS1ibHVlKV0gcHktWzcycHhdIHNtOnB5LTI0Jz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgb3ZlcmZsb3ctaGlkZGVuJz5cblx0XHRcdFx0PGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC01eGwgc206dGV4dC02eGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0ZXInPlxuXHRcdFx0XHRcdFNpbXBsZSBieSBkZXNpZ25cblx0XHRcdFx0PC9oMj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21heC13LXhsIG14LWF1dG8nPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC14bCB0ZXh0LWNlbnRlciB0ZXh0LVt2YXIoLS1jb2xvci1kZWVwLWJsdWUtNzApXSBtdC01Jz5cblx0XHRcdFx0XHRcdEZvY3VzIG9uIHdoYXQgbWF0dGVycyAtIGxhbmRpbmcgeW91ciBuZXh0IHJvbGUuIE5vXG5cdFx0XHRcdFx0XHRjb21wbGV4aXR5LCBubyBvdmVyd2hlbG0sIGp1c3QgdGhlIHRvb2xzIHlvdSBuZWVkIHRvXG5cdFx0XHRcdFx0XHRtYWtlIHByb2dyZXNzLlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdG9wYWNpdHk6IG9wY2FpdHksXG5cdFx0XHRcdFx0XHRyb3RhdGVYOiByb3RhdGVYLFxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtUGVyc3BlY3RpdmU6ICc4MDBweCcsXG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0XHRzcmM9e2FwcGxpY2F0aW9uc31cblx0XHRcdFx0XHRcdGFsdD0nVGhlIHByb2R1Y3Qgc2NyZWVuc2hvdCdcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbXQtMTQgbXgtYXV0bydcblx0XHRcdFx0XHRcdHJlZj17YXBwSW1hZ2V9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsInVzZVNjcm9sbCIsInVzZVRyYW5zZm9ybSIsIkltYWdlIiwidXNlUmVmIiwiYXBwbGljYXRpb25zIiwiUHJvZHVjdFNob3djYXNlIiwiYXBwSW1hZ2UiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJ0YXJnZXQiLCJvZmZzZXQiLCJyb3RhdGVYIiwib3BjYWl0eSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwicCIsInN0eWxlIiwib3BhY2l0eSIsInRyYW5zZm9ybVBlcnNwZWN0aXZlIiwic3JjIiwiYWx0IiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ProductShowcase.tsx\n"));

/***/ })

});