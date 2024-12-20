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

/***/ "(app-pages-browser)/./src/components/FAQs.tsx":
/*!*********************************!*\
  !*** ./src/components/FAQs.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FAQs: function() { return /* binding */ FAQs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_icons_minus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/minus.svg */ \"(app-pages-browser)/./src/assets/icons/minus.svg\");\n/* harmony import */ var _assets_icons_plus_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/plus.svg */ \"(app-pages-browser)/./src/assets/icons/plus.svg\");\n/* __next_internal_client_entry_do_not_use__ FAQs auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst faqs = [\n    {\n        question: \"What payment methods do you accept?\",\n        answer: \"We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.\"\n    },\n    {\n        question: \"How does the pricing work for teams?\",\n        answer: \"Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.\"\n    },\n    {\n        question: \"Can I change my plan later?\",\n        answer: \"Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.\"\n    },\n    {\n        question: \"Is my data secure?\",\n        answer: \"Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.\"\n    }\n];\nconst AccordianItem = (param)=>{\n    let { question, answer } = param;\n    _s();\n    const [isOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"py-7 border-b border-white/30\",\n        onClick: ()=>setIsOpen(!isOpen),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"flex-1 text-lg font-bold\",\n                        children: question\n                    }, void 0, false, {\n                        fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/FAQs.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 5\n                    }, undefined),\n                    isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons_minus_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/FAQs.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 15\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons_plus_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/FAQs.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 31\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/FAQs.tsx\",\n                lineNumber: 40,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {\n                children: isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"mt-4\", {\n                        hidden: !isOpen,\n                        \"\": isOpen === true\n                    }),\n                    initial: {\n                        opacity: 0,\n                        height: 0\n                    },\n                    animate: {\n                        opacity: 1,\n                        height: \"auto\"\n                    },\n                    exit: {\n                        opacity: 0,\n                        height: 0\n                    },\n                    children: answer\n                }, void 0, false, {\n                    fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/FAQs.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 6\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/FAQs.tsx\",\n                lineNumber: 44,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/FAQs.tsx\",\n        lineNumber: 37,\n        columnNumber: 3\n    }, undefined);\n};\n_s(AccordianItem, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = AccordianItem;\nconst FAQs = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter\",\n                    children: \"Frequently asked questions\"\n                }, void 0, false, {\n                    fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/FAQs.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-12 max-w-[648px] mx-auto\",\n                    children: faqs.map((param)=>{\n                        let { question, answer } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccordianItem, {\n                            question: question,\n                            answer: answer\n                        }, question, false, {\n                            fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/FAQs.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 7\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/FAQs.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/FAQs.tsx\",\n            lineNumber: 74,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/FAQs.tsx\",\n        lineNumber: 73,\n        columnNumber: 3\n    }, undefined);\n};\n_c1 = FAQs;\nvar _c, _c1;\n$RefreshReg$(_c, \"AccordianItem\");\n$RefreshReg$(_c1, \"FAQs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZBUXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRXdCO0FBQ2dDO0FBQzlCO0FBQ3dCO0FBQ0Y7QUFFaEQsTUFBTU0sT0FBTztJQUNaO1FBQ0NDLFVBQVU7UUFDVkMsUUFBUTtJQUNUO0lBQ0E7UUFDQ0QsVUFBVTtRQUNWQyxRQUFRO0lBQ1Q7SUFDQTtRQUNDRCxVQUFVO1FBQ1ZDLFFBQVE7SUFDVDtJQUNBO1FBQ0NELFVBQVU7UUFDVkMsUUFBUTtJQUNUO0NBQ0E7QUFFRCxNQUFNQyxnQkFBZ0I7UUFBQyxFQUN0QkYsUUFBUSxFQUNSQyxNQUFNLEVBSU47O0lBQ0EsTUFBTSxDQUFDRSxRQUFRQyxVQUFVLEdBQUdSLHFEQUFjLENBQUM7SUFDM0MscUJBQ0MsOERBQUNVO1FBQ0FDLFdBQVU7UUFDVkMsU0FBUyxJQUFNSixVQUFVLENBQUNEOzswQkFDMUIsOERBQUNHO2dCQUFJQyxXQUFVOztrQ0FDZCw4REFBQ0U7d0JBQUtGLFdBQVU7a0NBQTRCUDs7Ozs7O29CQUMzQ0csdUJBQVMsOERBQUNOLCtEQUFTQTs7OztrREFBTSw4REFBQ0MsOERBQVFBOzs7Ozs7Ozs7OzswQkFFcEMsOERBQUNKLDBEQUFlQTswQkFDZFMsd0JBQ0EsOERBQUNSLGlEQUFNQSxDQUFDVyxHQUFHO29CQUNWQyxXQUFXZCxnREFBSUEsQ0FBQyxRQUFRO3dCQUN2QmlCLFFBQVEsQ0FBQ1A7d0JBQ1QsSUFBSUEsV0FBVztvQkFDaEI7b0JBQ0FRLFNBQVM7d0JBQ1JDLFNBQVM7d0JBQ1RDLFFBQVE7b0JBQ1Q7b0JBQ0FDLFNBQVM7d0JBQ1JGLFNBQVM7d0JBQ1RDLFFBQVE7b0JBQ1Q7b0JBQ0FFLE1BQU07d0JBQ0xILFNBQVM7d0JBQ1RDLFFBQVE7b0JBQ1Q7OEJBQ0NaOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1QO0dBekNNQztLQUFBQTtBQTJDQyxNQUFNYyxPQUFPO0lBQ25CLHFCQUNDLDhEQUFDVjtRQUFJQyxXQUFVO2tCQUNkLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDZCw4REFBQ1U7b0JBQUdWLFdBQVU7OEJBQXVGOzs7Ozs7OEJBR3JHLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYlIsS0FBS21CLEdBQUcsQ0FBQzs0QkFBQyxFQUFFbEIsUUFBUSxFQUFFQyxNQUFNLEVBQUU7NkNBQzlCLDhEQUFDQzs0QkFFQUYsVUFBVUE7NEJBQ1ZDLFFBQVFBOzJCQUZIRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNaLEVBQUU7TUFuQldnQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9GQVFzLnRzeD80YjM4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNaW51c0ljb24gZnJvbSAnLi4vYXNzZXRzL2ljb25zL21pbnVzLnN2Zyc7XG5pbXBvcnQgUGx1c0ljb24gZnJvbSAnLi4vYXNzZXRzL2ljb25zL3BsdXMuc3ZnJztcblxuY29uc3QgZmFxcyA9IFtcblx0e1xuXHRcdHF1ZXN0aW9uOiAnV2hhdCBwYXltZW50IG1ldGhvZHMgZG8geW91IGFjY2VwdD8nLFxuXHRcdGFuc3dlcjogJ1dlIGFjY2VwdCBhbGwgbWFqb3IgY3JlZGl0IGNhcmRzLCBQYXlQYWwsIGFuZCB2YXJpb3VzIG90aGVyIHBheW1lbnQgbWV0aG9kcyBkZXBlbmRpbmcgb24geW91ciBsb2NhdGlvbi4gUGxlYXNlIGNvbnRhY3Qgb3VyIHN1cHBvcnQgdGVhbSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBhY2NlcHRlZCBwYXltZW50IG1ldGhvZHMgaW4geW91ciByZWdpb24uJyxcblx0fSxcblx0e1xuXHRcdHF1ZXN0aW9uOiAnSG93IGRvZXMgdGhlIHByaWNpbmcgd29yayBmb3IgdGVhbXM/Jyxcblx0XHRhbnN3ZXI6ICdPdXIgcHJpY2luZyBpcyBwZXIgdXNlciwgcGVyIG1vbnRoLiBUaGlzIG1lYW5zIHlvdSBvbmx5IHBheSBmb3IgdGhlIG51bWJlciBvZiB0ZWFtIG1lbWJlcnMgeW91IGhhdmUgb24geW91ciBhY2NvdW50LiBEaXNjb3VudHMgYXJlIGF2YWlsYWJsZSBmb3IgbGFyZ2VyIHRlYW1zIGFuZCBhbm51YWwgc3Vic2NyaXB0aW9ucy4nLFxuXHR9LFxuXHR7XG5cdFx0cXVlc3Rpb246ICdDYW4gSSBjaGFuZ2UgbXkgcGxhbiBsYXRlcj8nLFxuXHRcdGFuc3dlcjogJ1llcywgeW91IGNhbiB1cGdyYWRlIG9yIGRvd25ncmFkZSB5b3VyIHBsYW4gYXQgYW55IHRpbWUuIENoYW5nZXMgdG8geW91ciBwbGFuIHdpbGwgYmUgcHJvcmF0ZWQgYW5kIHJlZmxlY3RlZCBpbiB5b3VyIG5leHQgYmlsbGluZyBjeWNsZS4nLFxuXHR9LFxuXHR7XG5cdFx0cXVlc3Rpb246ICdJcyBteSBkYXRhIHNlY3VyZT8nLFxuXHRcdGFuc3dlcjogJ1NlY3VyaXR5IGlzIG91ciB0b3AgcHJpb3JpdHkuIFdlIHVzZSBzdGF0ZS1vZi10aGUtYXJ0IGVuY3J5cHRpb24gYW5kIGNvbXBseSB3aXRoIHRoZSBiZXN0IGluZHVzdHJ5IHByYWN0aWNlcyB0byBlbnN1cmUgdGhhdCB5b3VyIGRhdGEgaXMgc3RvcmVkIHNlY3VyZWx5IGFuZCBhY2Nlc3NlZCBvbmx5IGJ5IGF1dGhvcml6ZWQgdXNlcnMuJyxcblx0fSxcbl07XG5cbmNvbnN0IEFjY29yZGlhbkl0ZW0gPSAoe1xuXHRxdWVzdGlvbixcblx0YW5zd2VyLFxufToge1xuXHRxdWVzdGlvbjogc3RyaW5nO1xuXHRhbnN3ZXI6IHN0cmluZztcbn0pID0+IHtcblx0Y29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9J3B5LTcgYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzMwJ1xuXHRcdFx0b25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlcic+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nZmxleC0xIHRleHQtbGcgZm9udC1ib2xkJz57cXVlc3Rpb259PC9zcGFuPlxuXHRcdFx0XHR7aXNPcGVuID8gPE1pbnVzSWNvbiAvPiA6IDxQbHVzSWNvbiAvPn1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0e2lzT3BlbiAmJiAoXG5cdFx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xzeCgnbXQtNCcsIHtcblx0XHRcdFx0XHRcdFx0aGlkZGVuOiAhaXNPcGVuLFxuXHRcdFx0XHRcdFx0XHQnJzogaXNPcGVuID09PSB0cnVlLFxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRpbml0aWFsPXt7XG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMCxcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRhbmltYXRlPXt7XG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDEsXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogJ2F1dG8nLFxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdGV4aXQ9e3tcblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMCxcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAwLFxuXHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHR7YW5zd2VyfVxuXHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0KX1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IEZBUXMgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J2JnLWJsYWNrIHRleHQtd2hpdGUgYmctZ3JhZGllbnQtdG8tYiBmcm9tLVsjNUQyQ0E4XSB0by1ibGFjayBweS1bNzJweF0gc206cHktMjQnPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtNXhsIHNtOnRleHQtNnhsIHNtOm1heC13LVs2NDhweF0gbXgtYXV0byBmb250LWJvbGQgdHJhY2tpbmctdGlnaHRlcic+XG5cdFx0XHRcdFx0RnJlcXVlbnRseSBhc2tlZCBxdWVzdGlvbnNcblx0XHRcdFx0PC9oMj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J210LTEyIG1heC13LVs2NDhweF0gbXgtYXV0byc+XG5cdFx0XHRcdFx0e2ZhcXMubWFwKCh7IHF1ZXN0aW9uLCBhbnN3ZXIgfSkgPT4gKFxuXHRcdFx0XHRcdFx0PEFjY29yZGlhbkl0ZW1cblx0XHRcdFx0XHRcdFx0a2V5PXtxdWVzdGlvbn1cblx0XHRcdFx0XHRcdFx0cXVlc3Rpb249e3F1ZXN0aW9ufVxuXHRcdFx0XHRcdFx0XHRhbnN3ZXI9e2Fuc3dlcn1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuIl0sIm5hbWVzIjpbImNsc3giLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJSZWFjdCIsIk1pbnVzSWNvbiIsIlBsdXNJY29uIiwiZmFxcyIsInF1ZXN0aW9uIiwiYW5zd2VyIiwiQWNjb3JkaWFuSXRlbSIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZVN0YXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInNwYW4iLCJoaWRkZW4iLCJpbml0aWFsIiwib3BhY2l0eSIsImhlaWdodCIsImFuaW1hdGUiLCJleGl0IiwiRkFRcyIsImgyIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FAQs.tsx\n"));

/***/ })

});