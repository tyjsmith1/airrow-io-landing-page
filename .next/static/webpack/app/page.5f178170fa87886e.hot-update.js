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

/***/ "(app-pages-browser)/./src/components/LogoTicker.tsx":
/*!***************************************!*\
  !*** ./src/components/LogoTicker.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LogoTicker: function() { return /* binding */ LogoTicker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _assets_images_acme_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/acme.png */ \"(app-pages-browser)/./src/assets/images/acme.png\");\n/* harmony import */ var _assets_images_apex_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/apex.png */ \"(app-pages-browser)/./src/assets/images/apex.png\");\n/* harmony import */ var _assets_images_celestial_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/celestial.png */ \"(app-pages-browser)/./src/assets/images/celestial.png\");\n/* harmony import */ var _assets_images_echo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/echo.png */ \"(app-pages-browser)/./src/assets/images/echo.png\");\n/* harmony import */ var _assets_images_pulse_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/pulse.png */ \"(app-pages-browser)/./src/assets/images/pulse.png\");\n/* harmony import */ var _assets_images_quantum_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/quantum.png */ \"(app-pages-browser)/./src/assets/images/quantum.png\");\n/* __next_internal_client_entry_do_not_use__ LogoTicker auto */ \n\n\n\n\n\n\n\n\nconst images = [\n    {\n        src: _assets_images_acme_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        alt: \"Acme Logo\"\n    },\n    {\n        src: _assets_images_quantum_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        alt: \"Quantum Logo\"\n    },\n    {\n        src: _assets_images_echo_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        alt: \"Echo Logo\"\n    },\n    {\n        src: _assets_images_celestial_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        alt: \"Celestial Logo\"\n    },\n    {\n        src: _assets_images_pulse_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        alt: \"Pulse Logo\"\n    },\n    {\n        src: _assets_images_apex_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        alt: \"Apex Logo\"\n    }\n];\nconst LogoTicker = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[linear-gradient(to_bottom,var(--color-sky-blue),var(--color-cloud-white)_10%)] py-[72px] sm:py-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xl text-center text-[var(--color-deep-blue-70)]\",\n                    children: \"Trusted by the world's most innovative teams\"\n                }, void 0, false, {\n                    fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/LogoTicker.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex overflow-hidden mt-9 before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,var(--color-cloud-white),rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,var(--color-cloud-white),rgb(0,0,0,0))]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                        transition: {\n                            duration: 20,\n                            ease: \"linear\",\n                            repeat: Infinity\n                        },\n                        initial: {\n                            translateX: 0\n                        },\n                        animate: {\n                            translateX: \"-50%\"\n                        },\n                        className: \"flex gap-16 flex-none pr-16\",\n                        children: [\n                            images.map((param)=>{\n                                let { src, alt } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    src: src,\n                                    alt: alt,\n                                    className: \"flex-none h-8 w-auto\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/LogoTicker.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 8\n                                }, undefined);\n                            }),\n                            images.map((param)=>{\n                                let { src, alt } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    src: src,\n                                    alt: alt,\n                                    className: \"flex-none h-8 w-auto\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/LogoTicker.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 8\n                                }, undefined);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/LogoTicker.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/LogoTicker.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/LogoTicker.tsx\",\n            lineNumber: 24,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/LogoTicker.tsx\",\n        lineNumber: 23,\n        columnNumber: 3\n    }, undefined);\n};\n_c = LogoTicker;\nvar _c;\n$RefreshReg$(_c, \"LogoTicker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xvZ29UaWNrZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRXVDO0FBQ1I7QUFDa0I7QUFDQTtBQUNVO0FBQ1Y7QUFDRTtBQUNJO0FBRXZELE1BQU1RLFNBQVM7SUFDZDtRQUFFQyxLQUFLUCwrREFBUUE7UUFBRVEsS0FBSztJQUFZO0lBQ2xDO1FBQUVELEtBQUtGLGtFQUFXQTtRQUFFRyxLQUFLO0lBQWU7SUFDeEM7UUFBRUQsS0FBS0osK0RBQVFBO1FBQUVLLEtBQUs7SUFBWTtJQUNsQztRQUFFRCxLQUFLTCxvRUFBYUE7UUFBRU0sS0FBSztJQUFpQjtJQUM1QztRQUFFRCxLQUFLSCxnRUFBU0E7UUFBRUksS0FBSztJQUFhO0lBQ3BDO1FBQUVELEtBQUtOLCtEQUFRQTtRQUFFTyxLQUFLO0lBQVk7Q0FDbEM7QUFFTSxNQUFNQyxhQUFhO0lBQ3pCLHFCQUNDLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNkLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDZCw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQXVEOzs7Ozs7OEJBR3JFLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDZCw0RUFBQ2IsaURBQU1BLENBQUNZLEdBQUc7d0JBQ1ZHLFlBQVk7NEJBQ1hDLFVBQVU7NEJBQ1ZDLE1BQU07NEJBQ05DLFFBQVFDO3dCQUNUO3dCQUNBQyxTQUFTOzRCQUFFQyxZQUFZO3dCQUFFO3dCQUN6QkMsU0FBUzs0QkFBRUQsWUFBWTt3QkFBTzt3QkFDOUJSLFdBQVU7OzRCQUNUTCxPQUFPZSxHQUFHLENBQUM7b0NBQUMsRUFBRWQsR0FBRyxFQUFFQyxHQUFHLEVBQUU7cURBQ3hCLDhEQUFDVCxrREFBS0E7b0NBQ0xRLEtBQUtBO29DQUNMQyxLQUFLQTtvQ0FDTEcsV0FBVTs7Ozs7Ozs0QkFHWEwsT0FBT2UsR0FBRyxDQUFDO29DQUFDLEVBQUVkLEdBQUcsRUFBRUMsR0FBRyxFQUFFO3FEQUN4Qiw4REFBQ1Qsa0RBQUtBO29DQUNMUSxLQUFLQTtvQ0FDTEMsS0FBS0E7b0NBQ0xHLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWxCLEVBQUU7S0FwQ1dGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xvZ29UaWNrZXIudHN4PzQyMjMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBhY21lTG9nbyBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2FjbWUucG5nJztcbmltcG9ydCBhcGV4TG9nbyBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2FwZXgucG5nJztcbmltcG9ydCBjZWxlc3RpYWxMb2dvIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvY2VsZXN0aWFsLnBuZyc7XG5pbXBvcnQgZWNob0xvZ28gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9lY2hvLnBuZyc7XG5pbXBvcnQgcHVsc2VMb2dvIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvcHVsc2UucG5nJztcbmltcG9ydCBxdWFudHVtTG9nbyBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3F1YW50dW0ucG5nJztcblxuY29uc3QgaW1hZ2VzID0gW1xuXHR7IHNyYzogYWNtZUxvZ28sIGFsdDogJ0FjbWUgTG9nbycgfSxcblx0eyBzcmM6IHF1YW50dW1Mb2dvLCBhbHQ6ICdRdWFudHVtIExvZ28nIH0sXG5cdHsgc3JjOiBlY2hvTG9nbywgYWx0OiAnRWNobyBMb2dvJyB9LFxuXHR7IHNyYzogY2VsZXN0aWFsTG9nbywgYWx0OiAnQ2VsZXN0aWFsIExvZ28nIH0sXG5cdHsgc3JjOiBwdWxzZUxvZ28sIGFsdDogJ1B1bHNlIExvZ28nIH0sXG5cdHsgc3JjOiBhcGV4TG9nbywgYWx0OiAnQXBleCBMb2dvJyB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IExvZ29UaWNrZXIgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J2JnLVtsaW5lYXItZ3JhZGllbnQodG9fYm90dG9tLHZhcigtLWNvbG9yLXNreS1ibHVlKSx2YXIoLS1jb2xvci1jbG91ZC13aGl0ZSlfMTAlKV0gcHktWzcycHhdIHNtOnB5LTI0Jz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSd0ZXh0LXhsIHRleHQtY2VudGVyIHRleHQtW3ZhcigtLWNvbG9yLWRlZXAtYmx1ZS03MCldJz5cblx0XHRcdFx0XHRUcnVzdGVkIGJ5IHRoZSB3b3JsZCdzIG1vc3QgaW5ub3ZhdGl2ZSB0ZWFtc1xuXHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggb3ZlcmZsb3ctaGlkZGVuIG10LTkgYmVmb3JlOmNvbnRlbnQtWycnXSBiZWZvcmU6ei0xMCBhZnRlcjpjb250ZW50LVsnJ10gYmVmb3JlOmFic29sdXRlIGFmdGVyOmFic29sdXRlIGJlZm9yZTpoLWZ1bGwgYWZ0ZXI6aC1mdWxsIGJlZm9yZTp3LTUgYWZ0ZXI6dy01IHJlbGF0aXZlIGFmdGVyOnJpZ2h0LTAgYmVmb3JlOmxlZnQtMCBiZWZvcmU6dG9wLTAgYWZ0ZXI6dG9wLTAgYmVmb3JlOmJnLVtsaW5lYXItZ3JhZGllbnQodG9fcmlnaHQsdmFyKC0tY29sb3ItY2xvdWQtd2hpdGUpLHJnYigwLDAsMCwwKSldIGFmdGVyOmJnLVtsaW5lYXItZ3JhZGllbnQodG9fbGVmdCx2YXIoLS1jb2xvci1jbG91ZC13aGl0ZSkscmdiKDAsMCwwLDApKV1cIj5cblx0XHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbj17e1xuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAsXG5cdFx0XHRcdFx0XHRcdGVhc2U6ICdsaW5lYXInLFxuXHRcdFx0XHRcdFx0XHRyZXBlYXQ6IEluZmluaXR5LFxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdGluaXRpYWw9e3sgdHJhbnNsYXRlWDogMCB9fVxuXHRcdFx0XHRcdFx0YW5pbWF0ZT17eyB0cmFuc2xhdGVYOiAnLTUwJScgfX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmxleCBnYXAtMTYgZmxleC1ub25lIHByLTE2Jz5cblx0XHRcdFx0XHRcdHtpbWFnZXMubWFwKCh7IHNyYywgYWx0IH0pID0+IChcblx0XHRcdFx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0XHRcdFx0c3JjPXtzcmN9XG5cdFx0XHRcdFx0XHRcdFx0YWx0PXthbHR9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmbGV4LW5vbmUgaC04IHctYXV0bydcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0e2ltYWdlcy5tYXAoKHsgc3JjLCBhbHQgfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdFx0XHRzcmM9e3NyY31cblx0XHRcdFx0XHRcdFx0XHRhbHQ9e2FsdH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZsZXgtbm9uZSBoLTggdy1hdXRvJ1xuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJJbWFnZSIsImFjbWVMb2dvIiwiYXBleExvZ28iLCJjZWxlc3RpYWxMb2dvIiwiZWNob0xvZ28iLCJwdWxzZUxvZ28iLCJxdWFudHVtTG9nbyIsImltYWdlcyIsInNyYyIsImFsdCIsIkxvZ29UaWNrZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJyZXBlYXQiLCJJbmZpbml0eSIsImluaXRpYWwiLCJ0cmFuc2xhdGVYIiwiYW5pbWF0ZSIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/LogoTicker.tsx\n"));

/***/ })

});