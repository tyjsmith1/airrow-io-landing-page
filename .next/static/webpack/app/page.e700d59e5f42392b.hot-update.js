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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Feature: function() { return /* binding */ Feature; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-motion-value.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-motion-template.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_icons_ecosystem_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/ecosystem.svg */ \"(app-pages-browser)/./src/assets/icons/ecosystem.svg\");\n/* __next_internal_client_entry_do_not_use__ Feature auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"radial-gradient(100px 100px at \",\n        \"px \",\n        \"px, var(--color-deep-blue), transparent)\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nconst Feature = (param)=>{\n    let { title, description } = param;\n    _s();\n    const border = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const offsetX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useMotionValue)(-100);\n    const offsetY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useMotionValue)(-100);\n    const isHovered = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);\n    const maskImage = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useMotionTemplate)(_templateObject(), offsetX, offsetY);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _border_current, _border_current1;\n        const updateMousePosition = (e)=>{\n            var _border_current;\n            if (!border.current || !isHovered.current) return;\n            const borderRect = (_border_current = border.current) === null || _border_current === void 0 ? void 0 : _border_current.getBoundingClientRect();\n            offsetX.set(e.x - borderRect.x);\n            offsetY.set(e.y - borderRect.y);\n        };\n        const handleMouseEnter = ()=>{\n            isHovered.current = true;\n        };\n        const handleMouseLeave = ()=>{\n            isHovered.current = false;\n            offsetX.set(-100);\n            offsetY.set(-100);\n        };\n        window.addEventListener(\"mousemove\", updateMousePosition);\n        (_border_current = border.current) === null || _border_current === void 0 ? void 0 : _border_current.addEventListener(\"mouseenter\", handleMouseEnter);\n        (_border_current1 = border.current) === null || _border_current1 === void 0 ? void 0 : _border_current1.addEventListener(\"mouseleave\", handleMouseLeave);\n        return ()=>{\n            var _border_current, _border_current1;\n            window.removeEventListener(\"mousemove\", updateMousePosition);\n            (_border_current = border.current) === null || _border_current === void 0 ? void 0 : _border_current.removeEventListener(\"mouseenter\", handleMouseEnter);\n            (_border_current1 = border.current) === null || _border_current1 === void 0 ? void 0 : _border_current1.removeEventListener(\"mouseleave\", handleMouseLeave);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"bg-[var(--gradient-mid-1-50)] border border-[var(--color-slate-gray-70)] px-5 py-10 text-center rounded-xl sm:flex-1 relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                className: \"absolute inset-0 border-2 border-[var(--color-alert)] rounded-xl\",\n                style: {\n                    WebkitMaskImage: maskImage,\n                    maskImage: maskImage\n                },\n                ref: border\n            }, void 0, false, {\n                fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/Feature.tsx\",\n                lineNumber: 49,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"inline-flex h-14 w-14 bg-white text-[var(--color-deep-blue)] justify-center items-center rounded-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_assets_icons_ecosystem_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/Feature.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/Feature.tsx\",\n                lineNumber: 56,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                className: \"mt-6 font-bold\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/Feature.tsx\",\n                lineNumber: 59,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: \"mt-2 text-[var(--color-deep-blue-70)]\",\n                children: description\n            }, void 0, false, {\n                fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/Feature.tsx\",\n                lineNumber: 60,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylersmith/Development/airrow-io-landing-page/src/components/Feature.tsx\",\n        lineNumber: 48,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Feature, \"WkE92Aj0tqf17qr+YX8v1nhZzSc=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useMotionValue\n    ];\n});\n_c = Feature;\nvar _c;\n$RefreshReg$(_c, \"Feature\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZlYXR1cmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzBFO0FBQ2hDO0FBQ2dCO0FBRW5ELE1BQU1NLFVBQVU7UUFBQyxFQUN2QkMsS0FBSyxFQUNMQyxXQUFXLEVBSVg7O0lBQ0EsTUFBTUMsU0FBU0wsNkNBQU1BLENBQWlCO0lBQ3RDLE1BQU1NLFVBQVVSLDZEQUFjQSxDQUFDLENBQUM7SUFDaEMsTUFBTVMsVUFBVVQsNkRBQWNBLENBQUMsQ0FBQztJQUNoQyxNQUFNVSxZQUFZUiw2Q0FBTUEsQ0FBQztJQUV6QixNQUFNUyxZQUFZWixnRUFBaUJBLG9CQUFrQ1MsU0FBYUM7SUFFbEZSLGdEQUFTQSxDQUFDO1lBbUJUTSxpQkFDQUE7UUFuQkEsTUFBTUssc0JBQXNCLENBQUNDO2dCQUVUTjtZQURuQixJQUFJLENBQUNBLE9BQU9PLE9BQU8sSUFBSSxDQUFDSixVQUFVSSxPQUFPLEVBQUU7WUFDM0MsTUFBTUMsY0FBYVIsa0JBQUFBLE9BQU9PLE9BQU8sY0FBZFAsc0NBQUFBLGdCQUFnQlMscUJBQXFCO1lBQ3hEUixRQUFRUyxHQUFHLENBQUNKLEVBQUVLLENBQUMsR0FBR0gsV0FBV0csQ0FBQztZQUM5QlQsUUFBUVEsR0FBRyxDQUFDSixFQUFFTSxDQUFDLEdBQUdKLFdBQVdJLENBQUM7UUFDL0I7UUFFQSxNQUFNQyxtQkFBbUI7WUFDeEJWLFVBQVVJLE9BQU8sR0FBRztRQUNyQjtRQUVBLE1BQU1PLG1CQUFtQjtZQUN4QlgsVUFBVUksT0FBTyxHQUFHO1lBQ3BCTixRQUFRUyxHQUFHLENBQUMsQ0FBQztZQUNiUixRQUFRUSxHQUFHLENBQUMsQ0FBQztRQUNkO1FBRUFLLE9BQU9DLGdCQUFnQixDQUFDLGFBQWFYO1NBQ3JDTCxrQkFBQUEsT0FBT08sT0FBTyxjQUFkUCxzQ0FBQUEsZ0JBQWdCZ0IsZ0JBQWdCLENBQUMsY0FBY0g7U0FDL0NiLG1CQUFBQSxPQUFPTyxPQUFPLGNBQWRQLHVDQUFBQSxpQkFBZ0JnQixnQkFBZ0IsQ0FBQyxjQUFjRjtRQUMvQyxPQUFPO2dCQUVOZCxpQkFDQUE7WUFGQWUsT0FBT0UsbUJBQW1CLENBQUMsYUFBYVo7YUFDeENMLGtCQUFBQSxPQUFPTyxPQUFPLGNBQWRQLHNDQUFBQSxnQkFBZ0JpQixtQkFBbUIsQ0FBQyxjQUFjSjthQUNsRGIsbUJBQUFBLE9BQU9PLE9BQU8sY0FBZFAsdUNBQUFBLGlCQUFnQmlCLG1CQUFtQixDQUFDLGNBQWNIO1FBQ25EO0lBQ0QsR0FBRyxFQUFFO0lBQ0wscUJBQ0MsOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNkLDhEQUFDNUIsaURBQU1BLENBQUMyQixHQUFHO2dCQUNWQyxXQUFVO2dCQUNWQyxPQUFPO29CQUNOQyxpQkFBaUJqQjtvQkFDakJBLFdBQVdBO2dCQUNaO2dCQUNBa0IsS0FBS3RCOzs7Ozs7MEJBQ04sOERBQUNrQjtnQkFBSUMsV0FBVTswQkFDZCw0RUFBQ3ZCLG1FQUFhQTs7Ozs7Ozs7OzswQkFFZiw4REFBQzJCO2dCQUFHSixXQUFVOzBCQUFrQnJCOzs7Ozs7MEJBQ2hDLDhEQUFDMEI7Z0JBQUVMLFdBQVU7MEJBQ1hwQjs7Ozs7Ozs7Ozs7O0FBSUwsRUFBRTtHQTNEV0Y7O1FBUUlKLHlEQUFjQTtRQUNkQSx5REFBY0E7OztLQVRsQkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmVhdHVyZS50c3g/NzhiMCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZU1vdGlvblRlbXBsYXRlLCB1c2VNb3Rpb25WYWx1ZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRWNvc3lzdGVtSWNvbiBmcm9tICcuLi9hc3NldHMvaWNvbnMvZWNvc3lzdGVtLnN2Zyc7XG5cbmV4cG9ydCBjb25zdCBGZWF0dXJlID0gKHtcblx0dGl0bGUsXG5cdGRlc2NyaXB0aW9uLFxufToge1xuXHR0aXRsZTogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbjogc3RyaW5nO1xufSkgPT4ge1xuXHRjb25zdCBib3JkZXIgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXHRjb25zdCBvZmZzZXRYID0gdXNlTW90aW9uVmFsdWUoLTEwMCk7XG5cdGNvbnN0IG9mZnNldFkgPSB1c2VNb3Rpb25WYWx1ZSgtMTAwKTtcblx0Y29uc3QgaXNIb3ZlcmVkID0gdXNlUmVmKGZhbHNlKTtcblxuXHRjb25zdCBtYXNrSW1hZ2UgPSB1c2VNb3Rpb25UZW1wbGF0ZWByYWRpYWwtZ3JhZGllbnQoMTAwcHggMTAwcHggYXQgJHtvZmZzZXRYfXB4ICR7b2Zmc2V0WX1weCwgdmFyKC0tY29sb3ItZGVlcC1ibHVlKSwgdHJhbnNwYXJlbnQpYDtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IHVwZGF0ZU1vdXNlUG9zaXRpb24gPSAoZTogTW91c2VFdmVudCkgPT4ge1xuXHRcdFx0aWYgKCFib3JkZXIuY3VycmVudCB8fCAhaXNIb3ZlcmVkLmN1cnJlbnQpIHJldHVybjtcblx0XHRcdGNvbnN0IGJvcmRlclJlY3QgPSBib3JkZXIuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRvZmZzZXRYLnNldChlLnggLSBib3JkZXJSZWN0LngpO1xuXHRcdFx0b2Zmc2V0WS5zZXQoZS55IC0gYm9yZGVyUmVjdC55KTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgaGFuZGxlTW91c2VFbnRlciA9ICgpID0+IHtcblx0XHRcdGlzSG92ZXJlZC5jdXJyZW50ID0gdHJ1ZTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcblx0XHRcdGlzSG92ZXJlZC5jdXJyZW50ID0gZmFsc2U7XG5cdFx0XHRvZmZzZXRYLnNldCgtMTAwKTtcblx0XHRcdG9mZnNldFkuc2V0KC0xMDApO1xuXHRcdH07XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdXBkYXRlTW91c2VQb3NpdGlvbik7XG5cdFx0Ym9yZGVyLmN1cnJlbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBoYW5kbGVNb3VzZUVudGVyKTtcblx0XHRib3JkZXIuY3VycmVudD8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhhbmRsZU1vdXNlTGVhdmUpO1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdXBkYXRlTW91c2VQb3NpdGlvbik7XG5cdFx0XHRib3JkZXIuY3VycmVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGhhbmRsZU1vdXNlRW50ZXIpO1xuXHRcdFx0Ym9yZGVyLmN1cnJlbnQ/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBoYW5kbGVNb3VzZUxlYXZlKTtcblx0XHR9O1xuXHR9LCBbXSk7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J2JnLVt2YXIoLS1ncmFkaWVudC1taWQtMS01MCldIGJvcmRlciBib3JkZXItW3ZhcigtLWNvbG9yLXNsYXRlLWdyYXktNzApXSBweC01IHB5LTEwIHRleHQtY2VudGVyIHJvdW5kZWQteGwgc206ZmxleC0xIHJlbGF0aXZlJz5cblx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT0nYWJzb2x1dGUgaW5zZXQtMCBib3JkZXItMiBib3JkZXItW3ZhcigtLWNvbG9yLWFsZXJ0KV0gcm91bmRlZC14bCdcblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRXZWJraXRNYXNrSW1hZ2U6IG1hc2tJbWFnZSxcblx0XHRcdFx0XHRtYXNrSW1hZ2U6IG1hc2tJbWFnZSxcblx0XHRcdFx0fX1cblx0XHRcdFx0cmVmPXtib3JkZXJ9PjwvbW90aW9uLmRpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdpbmxpbmUtZmxleCBoLTE0IHctMTQgYmctd2hpdGUgdGV4dC1bdmFyKC0tY29sb3ItZGVlcC1ibHVlKV0ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJvdW5kZWQtbGcnPlxuXHRcdFx0XHQ8RWNvc3lzdGVtSWNvbiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8aDMgY2xhc3NOYW1lPSdtdC02IGZvbnQtYm9sZCc+e3RpdGxlfTwvaDM+XG5cdFx0XHQ8cCBjbGFzc05hbWU9J210LTIgdGV4dC1bdmFyKC0tY29sb3ItZGVlcC1ibHVlLTcwKV0nPlxuXHRcdFx0XHR7ZGVzY3JpcHRpb259XG5cdFx0XHQ8L3A+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsInVzZU1vdGlvblRlbXBsYXRlIiwidXNlTW90aW9uVmFsdWUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJFY29zeXN0ZW1JY29uIiwiRmVhdHVyZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJib3JkZXIiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImlzSG92ZXJlZCIsIm1hc2tJbWFnZSIsInVwZGF0ZU1vdXNlUG9zaXRpb24iLCJlIiwiY3VycmVudCIsImJvcmRlclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzZXQiLCJ4IiwieSIsImhhbmRsZU1vdXNlRW50ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIldlYmtpdE1hc2tJbWFnZSIsInJlZiIsImgzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Feature.tsx\n"));

/***/ })

});