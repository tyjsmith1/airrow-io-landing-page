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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductShowcase: function() { return /* binding */ ProductShowcase; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_app_screen_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/app-screen.png */ \"(app-pages-browser)/./src/assets/images/app-screen.png\");\n/* __next_internal_client_entry_do_not_use__ ProductShowcase auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ProductShowcase = ()=>{\n    _s();\n    const appImage = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)({\n        target: appImage,\n        offset: [\n            \"start end\",\n            \"end end\"\n        ]\n    });\n    const rotateX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        15,\n        0\n    ]);\n    const opcaity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0,\n        1\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[var(--color-cloud-white)] text-[var(--color-deep-blue)] bg-gradient-to-b from-[var(--color-cloud-white)] to-[var(--color-sky-blue)] py-[72px] sm:py-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-center text-5xl sm:text-6xl font-bold tracking-tighter\",\n                    children: \"Simple by design\"\n                }, void 0, false, {\n                    fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/ProductShowcase.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-xl mx-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl text-center text-white/70 mt-5\",\n                        children: \"Focus on what matters - landing your next role. No complexity, no overwhelm, just the tools you need to make progress.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/ProductShowcase.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/ProductShowcase.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    style: {\n                        opacity: opcaity,\n                        rotateX: rotateX,\n                        transformPerspective: \"800px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: _assets_images_app_screen_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"The product screenshot\",\n                        className: \"mt-14 mx-auto\",\n                        ref: appImage\n                    }, void 0, false, {\n                        fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/ProductShowcase.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/ProductShowcase.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/ProductShowcase.tsx\",\n            lineNumber: 20,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/ProductShowcase.tsx\",\n        lineNumber: 19,\n        columnNumber: 3\n    }, undefined);\n};\n_s(ProductShowcase, \"LqsbV9R78gAGjaT+5G4pQsAPwEA=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform\n    ];\n});\n_c = ProductShowcase;\nvar _c;\n$RefreshReg$(_c, \"ProductShowcase\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RTaG93Y2FzZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFZ0U7QUFDakM7QUFDQTtBQUN5QjtBQUVqRCxNQUFNTSxrQkFBa0I7O0lBQzlCLE1BQU1DLFdBQVdILDZDQUFNQSxDQUFtQjtJQUMxQyxNQUFNLEVBQUVJLGVBQWUsRUFBRSxHQUFHUCx3REFBU0EsQ0FBQztRQUNyQ1EsUUFBUUY7UUFDUkcsUUFBUTtZQUFDO1lBQWE7U0FBVTtJQUNqQztJQUVBLE1BQU1DLFVBQVVULDJEQUFZQSxDQUFDTSxpQkFBaUI7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQUk7S0FBRTtJQUM3RCxNQUFNSSxVQUFVViwyREFBWUEsQ0FBQ00saUJBQWlCO1FBQUM7UUFBRztLQUFFLEVBQUU7UUFBQztRQUFHO0tBQUU7SUFFNUQscUJBQ0MsOERBQUNLO1FBQUlDLFdBQVU7a0JBQ2QsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNkLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBOEQ7Ozs7Ozs4QkFHNUUsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNkLDRFQUFDRTt3QkFBRUYsV0FBVTtrQ0FBeUM7Ozs7Ozs7Ozs7OzhCQU12RCw4REFBQ2QsaURBQU1BLENBQUNhLEdBQUc7b0JBQ1ZJLE9BQU87d0JBQ05DLFNBQVNOO3dCQUNURCxTQUFTQTt3QkFDVFEsc0JBQXNCO29CQUN2Qjs4QkFDQSw0RUFBQ2hCLGtEQUFLQTt3QkFDTGlCLEtBQUtmLHFFQUFTQTt3QkFDZGdCLEtBQUk7d0JBQ0pQLFdBQVU7d0JBQ1ZRLEtBQUtmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVgsRUFBRTtHQXZDV0Q7O1FBRWdCTCxvREFBU0E7UUFLckJDLHVEQUFZQTtRQUNaQSx1REFBWUE7OztLQVJoQkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdFNob3djYXNlLnRzeD9iZWVlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgbW90aW9uLCB1c2VTY3JvbGwsIHVzZVRyYW5zZm9ybSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGFwcFNjcmVlbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2FwcC1zY3JlZW4ucG5nJztcblxuZXhwb3J0IGNvbnN0IFByb2R1Y3RTaG93Y2FzZSA9ICgpID0+IHtcblx0Y29uc3QgYXBwSW1hZ2UgPSB1c2VSZWY8SFRNTEltYWdlRWxlbWVudD4obnVsbCk7XG5cdGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoe1xuXHRcdHRhcmdldDogYXBwSW1hZ2UsXG5cdFx0b2Zmc2V0OiBbJ3N0YXJ0IGVuZCcsICdlbmQgZW5kJ10sXG5cdH0pO1xuXG5cdGNvbnN0IHJvdGF0ZVggPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMV0sIFsxNSwgMF0pO1xuXHRjb25zdCBvcGNhaXR5ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDFdLCBbMCwgMV0pO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J2JnLVt2YXIoLS1jb2xvci1jbG91ZC13aGl0ZSldIHRleHQtW3ZhcigtLWNvbG9yLWRlZXAtYmx1ZSldIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1bdmFyKC0tY29sb3ItY2xvdWQtd2hpdGUpXSB0by1bdmFyKC0tY29sb3Itc2t5LWJsdWUpXSBweS1bNzJweF0gc206cHktMjQnPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBvdmVyZmxvdy1oaWRkZW4nPlxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LTV4bCBzbTp0ZXh0LTZ4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHRlcic+XG5cdFx0XHRcdFx0U2ltcGxlIGJ5IGRlc2lnblxuXHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWF4LXcteGwgbXgtYXV0byc+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LXhsIHRleHQtY2VudGVyIHRleHQtd2hpdGUvNzAgbXQtNSc+XG5cdFx0XHRcdFx0XHRGb2N1cyBvbiB3aGF0IG1hdHRlcnMgLSBsYW5kaW5nIHlvdXIgbmV4dCByb2xlLiBOb1xuXHRcdFx0XHRcdFx0Y29tcGxleGl0eSwgbm8gb3ZlcndoZWxtLCBqdXN0IHRoZSB0b29scyB5b3UgbmVlZCB0b1xuXHRcdFx0XHRcdFx0bWFrZSBwcm9ncmVzcy5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiBvcGNhaXR5LFxuXHRcdFx0XHRcdFx0cm90YXRlWDogcm90YXRlWCxcblx0XHRcdFx0XHRcdHRyYW5zZm9ybVBlcnNwZWN0aXZlOiAnODAwcHgnLFxuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdFx0c3JjPXthcHBTY3JlZW59XG5cdFx0XHRcdFx0XHRhbHQ9J1RoZSBwcm9kdWN0IHNjcmVlbnNob3QnXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J210LTE0IG14LWF1dG8nXG5cdFx0XHRcdFx0XHRyZWY9e2FwcEltYWdlfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJ1c2VTY3JvbGwiLCJ1c2VUcmFuc2Zvcm0iLCJJbWFnZSIsInVzZVJlZiIsImFwcFNjcmVlbiIsIlByb2R1Y3RTaG93Y2FzZSIsImFwcEltYWdlIiwic2Nyb2xsWVByb2dyZXNzIiwidGFyZ2V0Iiwib2Zmc2V0Iiwicm90YXRlWCIsIm9wY2FpdHkiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiLCJzdHlsZSIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm1QZXJzcGVjdGl2ZSIsInNyYyIsImFsdCIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ProductShowcase.tsx\n"));

/***/ })

});