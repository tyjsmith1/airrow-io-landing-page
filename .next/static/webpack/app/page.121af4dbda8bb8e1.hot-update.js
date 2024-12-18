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

/***/ "(app-pages-browser)/./src/components/Feature.tsx":
/*!************************************!*\
  !*** ./src/components/Feature.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Feature: function() { return /* binding */ Feature; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-motion-value.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-motion-template.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ Feature auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"radial-gradient(100px 100px at \",\n        \"px \",\n        \"px, var(--color-deep-blue), transparent)\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\nconst Feature = (param)=>{\n    let { title, description, icon: Icon } = param;\n    _s();\n    const border = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const offsetX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useMotionValue)(-100);\n    const offsetY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useMotionValue)(-100);\n    const isHovered = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);\n    const maskImage = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useMotionTemplate)(_templateObject(), offsetX, offsetY);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _border_current, _border_current1;\n        const updateMousePosition = (e)=>{\n            var _border_current;\n            if (!border.current || !isHovered.current) return;\n            const borderRect = (_border_current = border.current) === null || _border_current === void 0 ? void 0 : _border_current.getBoundingClientRect();\n            offsetX.set(e.x - borderRect.x);\n            offsetY.set(e.y - borderRect.y);\n        };\n        const handleMouseEnter = ()=>{\n            isHovered.current = true;\n        };\n        const handleMouseLeave = ()=>{\n            isHovered.current = false;\n            offsetX.set(-100);\n            offsetY.set(-100);\n        };\n        window.addEventListener(\"mousemove\", updateMousePosition);\n        (_border_current = border.current) === null || _border_current === void 0 ? void 0 : _border_current.addEventListener(\"mouseenter\", handleMouseEnter);\n        (_border_current1 = border.current) === null || _border_current1 === void 0 ? void 0 : _border_current1.addEventListener(\"mouseleave\", handleMouseLeave);\n        return ()=>{\n            var _border_current, _border_current1;\n            window.removeEventListener(\"mousemove\", updateMousePosition);\n            (_border_current = border.current) === null || _border_current === void 0 ? void 0 : _border_current.removeEventListener(\"mouseenter\", handleMouseEnter);\n            (_border_current1 = border.current) === null || _border_current1 === void 0 ? void 0 : _border_current1.removeEventListener(\"mouseleave\", handleMouseLeave);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"bg-[var(--gradient-mid-1-50)] border border-[var(--color-slate-gray-70)] px-5 py-10 text-center rounded-xl sm:flex-1 relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                className: \"absolute inset-0 border-4 border-[var(--color-alert)] rounded-xl\",\n                style: {\n                    WebkitMaskImage: maskImage,\n                    maskImage: maskImage\n                },\n                ref: border\n            }, void 0, false, {\n                fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/Feature.tsx\",\n                lineNumber: 51,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"inline-flex h-14 w-14 bg-white text-[var(--color-deep-blue)] justify-center items-center rounded-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Icon, {}, void 0, false, {\n                    fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/Feature.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/Feature.tsx\",\n                lineNumber: 58,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                className: \"mt-6 font-bold\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/Feature.tsx\",\n                lineNumber: 61,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: \"mt-2 text-[var(--color-deep-blue-70)]\",\n                children: description\n            }, void 0, false, {\n                fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/Feature.tsx\",\n                lineNumber: 62,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/Feature.tsx\",\n        lineNumber: 50,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Feature, \"WkE92Aj0tqf17qr+YX8v1nhZzSc=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useMotionValue\n    ];\n});\n_c = Feature;\nvar _c;\n$RefreshReg$(_c, \"Feature\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZlYXR1cmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMEU7QUFFaEM7QUFFbkMsTUFBTUssVUFBVTtRQUFDLEVBQ3ZCQyxLQUFLLEVBQ0xDLFdBQVcsRUFDWEMsTUFBTUMsSUFBSSxFQUtWOztJQUNBLE1BQU1DLFNBQVNOLDZDQUFNQSxDQUFpQjtJQUN0QyxNQUFNTyxVQUFVVCw2REFBY0EsQ0FBQyxDQUFDO0lBQ2hDLE1BQU1VLFVBQVVWLDZEQUFjQSxDQUFDLENBQUM7SUFDaEMsTUFBTVcsWUFBWVQsNkNBQU1BLENBQUM7SUFFekIsTUFBTVUsWUFBWWIsZ0VBQWlCQSxvQkFBa0NVLFNBQWFDO0lBRWxGVCxnREFBU0EsQ0FBQztZQW1CVE8saUJBQ0FBO1FBbkJBLE1BQU1LLHNCQUFzQixDQUFDQztnQkFFVE47WUFEbkIsSUFBSSxDQUFDQSxPQUFPTyxPQUFPLElBQUksQ0FBQ0osVUFBVUksT0FBTyxFQUFFO1lBQzNDLE1BQU1DLGNBQWFSLGtCQUFBQSxPQUFPTyxPQUFPLGNBQWRQLHNDQUFBQSxnQkFBZ0JTLHFCQUFxQjtZQUN4RFIsUUFBUVMsR0FBRyxDQUFDSixFQUFFSyxDQUFDLEdBQUdILFdBQVdHLENBQUM7WUFDOUJULFFBQVFRLEdBQUcsQ0FBQ0osRUFBRU0sQ0FBQyxHQUFHSixXQUFXSSxDQUFDO1FBQy9CO1FBRUEsTUFBTUMsbUJBQW1CO1lBQ3hCVixVQUFVSSxPQUFPLEdBQUc7UUFDckI7UUFFQSxNQUFNTyxtQkFBbUI7WUFDeEJYLFVBQVVJLE9BQU8sR0FBRztZQUNwQk4sUUFBUVMsR0FBRyxDQUFDLENBQUM7WUFDYlIsUUFBUVEsR0FBRyxDQUFDLENBQUM7UUFDZDtRQUVBSyxPQUFPQyxnQkFBZ0IsQ0FBQyxhQUFhWDtTQUNyQ0wsa0JBQUFBLE9BQU9PLE9BQU8sY0FBZFAsc0NBQUFBLGdCQUFnQmdCLGdCQUFnQixDQUFDLGNBQWNIO1NBQy9DYixtQkFBQUEsT0FBT08sT0FBTyxjQUFkUCx1Q0FBQUEsaUJBQWdCZ0IsZ0JBQWdCLENBQUMsY0FBY0Y7UUFDL0MsT0FBTztnQkFFTmQsaUJBQ0FBO1lBRkFlLE9BQU9FLG1CQUFtQixDQUFDLGFBQWFaO2FBQ3hDTCxrQkFBQUEsT0FBT08sT0FBTyxjQUFkUCxzQ0FBQUEsZ0JBQWdCaUIsbUJBQW1CLENBQUMsY0FBY0o7YUFDbERiLG1CQUFBQSxPQUFPTyxPQUFPLGNBQWRQLHVDQUFBQSxpQkFBZ0JpQixtQkFBbUIsQ0FBQyxjQUFjSDtRQUNuRDtJQUNELEdBQUcsRUFBRTtJQUNMLHFCQUNDLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDZCw4REFBQzdCLGlEQUFNQSxDQUFDNEIsR0FBRztnQkFDVkMsV0FBVTtnQkFDVkMsT0FBTztvQkFDTkMsaUJBQWlCakI7b0JBQ2pCQSxXQUFXQTtnQkFDWjtnQkFDQWtCLEtBQUt0Qjs7Ozs7OzBCQUNOLDhEQUFDa0I7Z0JBQUlDLFdBQVU7MEJBQ2QsNEVBQUNwQjs7Ozs7Ozs7OzswQkFFRiw4REFBQ3dCO2dCQUFHSixXQUFVOzBCQUFrQnZCOzs7Ozs7MEJBQ2hDLDhEQUFDNEI7Z0JBQUVMLFdBQVU7MEJBQ1h0Qjs7Ozs7Ozs7Ozs7O0FBSUwsRUFBRTtHQTdEV0Y7O1FBVUlILHlEQUFjQTtRQUNkQSx5REFBY0E7OztLQVhsQkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmVhdHVyZS50c3g/NzhiMCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZU1vdGlvblRlbXBsYXRlLCB1c2VNb3Rpb25WYWx1ZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgTHVjaWRlSWNvbiB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IEZlYXR1cmUgPSAoe1xuXHR0aXRsZSxcblx0ZGVzY3JpcHRpb24sXG5cdGljb246IEljb24sXG59OiB7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cdGljb246IEx1Y2lkZUljb247XG59KSA9PiB7XG5cdGNvbnN0IGJvcmRlciA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cdGNvbnN0IG9mZnNldFggPSB1c2VNb3Rpb25WYWx1ZSgtMTAwKTtcblx0Y29uc3Qgb2Zmc2V0WSA9IHVzZU1vdGlvblZhbHVlKC0xMDApO1xuXHRjb25zdCBpc0hvdmVyZWQgPSB1c2VSZWYoZmFsc2UpO1xuXG5cdGNvbnN0IG1hc2tJbWFnZSA9IHVzZU1vdGlvblRlbXBsYXRlYHJhZGlhbC1ncmFkaWVudCgxMDBweCAxMDBweCBhdCAke29mZnNldFh9cHggJHtvZmZzZXRZfXB4LCB2YXIoLS1jb2xvci1kZWVwLWJsdWUpLCB0cmFuc3BhcmVudClgO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgdXBkYXRlTW91c2VQb3NpdGlvbiA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG5cdFx0XHRpZiAoIWJvcmRlci5jdXJyZW50IHx8ICFpc0hvdmVyZWQuY3VycmVudCkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgYm9yZGVyUmVjdCA9IGJvcmRlci5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdG9mZnNldFguc2V0KGUueCAtIGJvcmRlclJlY3QueCk7XG5cdFx0XHRvZmZzZXRZLnNldChlLnkgLSBib3JkZXJSZWN0LnkpO1xuXHRcdH07XG5cblx0XHRjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4ge1xuXHRcdFx0aXNIb3ZlcmVkLmN1cnJlbnQgPSB0cnVlO1xuXHRcdH07XG5cblx0XHRjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xuXHRcdFx0aXNIb3ZlcmVkLmN1cnJlbnQgPSBmYWxzZTtcblx0XHRcdG9mZnNldFguc2V0KC0xMDApO1xuXHRcdFx0b2Zmc2V0WS5zZXQoLTEwMCk7XG5cdFx0fTtcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB1cGRhdGVNb3VzZVBvc2l0aW9uKTtcblx0XHRib3JkZXIuY3VycmVudD8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGhhbmRsZU1vdXNlRW50ZXIpO1xuXHRcdGJvcmRlci5jdXJyZW50Py5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgaGFuZGxlTW91c2VMZWF2ZSk7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB1cGRhdGVNb3VzZVBvc2l0aW9uKTtcblx0XHRcdGJvcmRlci5jdXJyZW50Py5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaGFuZGxlTW91c2VFbnRlcik7XG5cdFx0XHRib3JkZXIuY3VycmVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhhbmRsZU1vdXNlTGVhdmUpO1xuXHRcdH07XG5cdH0sIFtdKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nYmctW3ZhcigtLWdyYWRpZW50LW1pZC0xLTUwKV0gYm9yZGVyIGJvcmRlci1bdmFyKC0tY29sb3Itc2xhdGUtZ3JheS03MCldIHB4LTUgcHktMTAgdGV4dC1jZW50ZXIgcm91bmRlZC14bCBzbTpmbGV4LTEgcmVsYXRpdmUnPlxuXHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0Y2xhc3NOYW1lPSdhYnNvbHV0ZSBpbnNldC0wIGJvcmRlci00IGJvcmRlci1bdmFyKC0tY29sb3ItYWxlcnQpXSByb3VuZGVkLXhsJ1xuXHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFdlYmtpdE1hc2tJbWFnZTogbWFza0ltYWdlLFxuXHRcdFx0XHRcdG1hc2tJbWFnZTogbWFza0ltYWdlLFxuXHRcdFx0XHR9fVxuXHRcdFx0XHRyZWY9e2JvcmRlcn0+PC9tb3Rpb24uZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2lubGluZS1mbGV4IGgtMTQgdy0xNCBiZy13aGl0ZSB0ZXh0LVt2YXIoLS1jb2xvci1kZWVwLWJsdWUpXSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcm91bmRlZC1sZyc+XG5cdFx0XHRcdDxJY29uIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxoMyBjbGFzc05hbWU9J210LTYgZm9udC1ib2xkJz57dGl0bGV9PC9oMz5cblx0XHRcdDxwIGNsYXNzTmFtZT0nbXQtMiB0ZXh0LVt2YXIoLS1jb2xvci1kZWVwLWJsdWUtNzApXSc+XG5cdFx0XHRcdHtkZXNjcmlwdGlvbn1cblx0XHRcdDwvcD5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG4iXSwibmFtZXMiOlsibW90aW9uIiwidXNlTW90aW9uVGVtcGxhdGUiLCJ1c2VNb3Rpb25WYWx1ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkZlYXR1cmUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsIkljb24iLCJib3JkZXIiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImlzSG92ZXJlZCIsIm1hc2tJbWFnZSIsInVwZGF0ZU1vdXNlUG9zaXRpb24iLCJlIiwiY3VycmVudCIsImJvcmRlclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzZXQiLCJ4IiwieSIsImhhbmRsZU1vdXNlRW50ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIldlYmtpdE1hc2tJbWFnZSIsInJlZiIsImgzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Feature.tsx\n"));

/***/ })

});