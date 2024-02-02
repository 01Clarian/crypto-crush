"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_title_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/title.module.css */ \"./src/styles/title.module.css\");\n/* harmony import */ var _styles_title_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_title_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var vanta_dist_vanta_waves_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vanta/dist/vanta.waves.min */ \"./node_modules/vanta/dist/vanta.waves.min.js\");\n/* harmony import */ var vanta_dist_vanta_waves_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vanta_dist_vanta_waves_min__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const words = [\n        \"C\",\n        \"R\",\n        \"Y\",\n        \"P\",\n        \"T\",\n        \"O\",\n        \"*\",\n        \" \",\n        \"C\",\n        \"R\",\n        \"U\",\n        \"S\",\n        \"H\"\n    ];\n    const [vantaEffect, setVantaEffect] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const myRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!vantaEffect) {\n            setVantaEffect(vanta_dist_vanta_waves_min__WEBPACK_IMPORTED_MODULE_3___default()({\n                el: myRef.current\n            }));\n        }\n        return ()=>{\n            if (vantaEffect) vantaEffect.destroy();\n        };\n    }, [\n        vantaEffect\n    ]);\n    const startGame = ()=>{\n        router.push(\"/play\"); // Or router.replace('/game')\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: myRef,\n        className: \"flex flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-1\",\n                children: words.map((word, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_title_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"my-span\"]),\n                        \"data-char\": word,\n                        children: [\n                            word,\n                            Array.from({\n                                length: 10\n                            }, (_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"my-span2\",\n                                    children: word\n                                }, \"char-\".concat(word, \"-\").concat(i), false, {\n                                    fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, undefined))\n                        ]\n                    }, \"word-\".concat(index), true, {\n                        fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"rainbow-btn\",\n                onClick: startGame,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Start Game\"\n                }, void 0, false, {\n                    fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 27\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 19\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 25\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 31\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 37\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 43\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 49\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"FFfQeuiSIgx1VXiHLKjd25uI++w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUNrQjtBQUNWO0FBQ0Y7QUFFOUMsTUFBTU8sV0FBVzs7SUFFZixNQUFNQyxTQUFTUixzREFBU0E7SUFDeEIsTUFBTVMsUUFBUTtRQUFDO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztRQUN0QztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztLQUMvQjtJQUVELE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBMkI7SUFDekUsTUFBTVUsUUFBUVIsNkNBQU1BLENBQUM7SUFFckJELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxDQUFDTyxhQUFhO1lBQ2hCQyxlQUFlTCxpRUFBS0EsQ0FBQztnQkFDbkJPLElBQUlELE1BQU1FLE9BQU87WUFDbkI7UUFDRjtRQUNBLE9BQU87WUFDTCxJQUFJSixhQUFhQSxZQUFZSyxPQUFPO1FBQ3RDO0lBQ0YsR0FBRztRQUFDTDtLQUFZO0lBRWhCLE1BQU1NLFlBQVk7UUFDaEJSLE9BQU9TLElBQUksQ0FBQyxVQUFVLDZCQUE2QjtJQUNyRDtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxLQUFLUDtRQUFPUSxXQUFVOzswQkFDekIsOERBQUNDOzs7OzswQkFBSyw4REFBQ0E7Ozs7OzBCQUNQLDhEQUFDSDtnQkFBSUUsV0FBVTswQkFDWlgsTUFBTWEsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNoQiw4REFBQ047d0JBQUlFLFdBQVdmLDRFQUFpQjt3QkFBd0JvQixhQUFXRjs7NEJBQ2pFQTs0QkFDQUcsTUFBTUMsSUFBSSxDQUFDO2dDQUFFQyxRQUFROzRCQUFHLEdBQUcsQ0FBQ0MsR0FBR0Msa0JBQzlCLDhEQUFDQztvQ0FBS1gsV0FBVTs4Q0FBc0NHO21DQUF0QixRQUFnQk8sT0FBUlAsTUFBSyxLQUFLLE9BQUZPOzs7Ozs7dUJBSFosUUFBYyxPQUFOTjs7Ozs7Ozs7OzswQkFRcEQsOERBQUNIOzs7OzswQkFBSyw4REFBQ0E7Ozs7OzBCQUNQLDhEQUFDVztnQkFDRFosV0FBVTtnQkFDVmEsU0FBU2pCOzBCQUFXLDRFQUFDZTs4QkFBSzs7Ozs7Ozs7Ozs7MEJBQzFCLDhEQUFDVjs7Ozs7MEJBQUssOERBQUNBOzs7OzswQkFBSyw4REFBQ0E7Ozs7OzBCQUFLLDhEQUFDQTs7Ozs7MEJBQUssOERBQUNBOzs7OzswQkFBSyw4REFBQ0E7Ozs7OzBCQUFLLDhEQUFDQTs7Ozs7MEJBQUssOERBQUNBOzs7Ozs7Ozs7OztBQUdqRDtHQTdDTWQ7O1FBRVdQLGtEQUFTQTs7O0tBRnBCTztBQStDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdGl0bGUubW9kdWxlLmNzcyc7XG5pbXBvcnQgV0FWRVMgZnJvbSAndmFudGEvZGlzdC92YW50YS53YXZlcy5taW4nXG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB3b3JkcyA9IFtcIkNcIiwgXCJSXCIsIFwiWVwiLCBcIlBcIiwgXCJUXCIsIFwiT1wiLFxuICAgIFwiKlwiLCBcIiBcIiwgXCJDXCIsIFwiUlwiLCBcIlVcIiwgXCJTXCIsIFwiSFwiXG4gIF07XG5cbiAgY29uc3QgW3ZhbnRhRWZmZWN0LCBzZXRWYW50YUVmZmVjdF0gPSB1c2VTdGF0ZTxSZXR1cm5UeXBlPHR5cGVvZiBXQVZFUz4+KG51bGwpO1xuICBjb25zdCBteVJlZiA9IHVzZVJlZihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF2YW50YUVmZmVjdCkge1xuICAgICAgc2V0VmFudGFFZmZlY3QoV0FWRVMoe1xuICAgICAgICBlbDogbXlSZWYuY3VycmVudFxuICAgICAgfSkpXG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAodmFudGFFZmZlY3QpIHZhbnRhRWZmZWN0LmRlc3Ryb3koKVxuICAgIH1cbiAgfSwgW3ZhbnRhRWZmZWN0XSlcblxuICBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goJy9wbGF5Jyk7IC8vIE9yIHJvdXRlci5yZXBsYWNlKCcvZ2FtZScpXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17bXlSZWZ9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8YnIgLz48YnIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtLTEnPlxuICAgICAgICB7d29yZHMubWFwKCh3b3JkLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ215LXNwYW4nXX0ga2V5PXtgd29yZC0ke2luZGV4fWB9IGRhdGEtY2hhcj17d29yZH0+XG4gICAgICAgICAgICB7d29yZH1cbiAgICAgICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMCB9LCAoXywgaSkgPT4gKFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J215LXNwYW4yJyBrZXk9e2BjaGFyLSR7d29yZH0tJHtpfWB9Pnt3b3JkfTwvc3Bhbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICA8YnV0dG9uIFxuICAgICAgY2xhc3NOYW1lPVwicmFpbmJvdy1idG5cIlxuICAgICAgb25DbGljaz17c3RhcnRHYW1lfT48c3Bhbj5TdGFydCBHYW1lPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgPGJyIC8+PGJyIC8+PGJyIC8+PGJyIC8+PGJyIC8+PGJyIC8+PGJyIC8+PGJyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwic3R5bGVzIiwiV0FWRVMiLCJIb21lUGFnZSIsInJvdXRlciIsIndvcmRzIiwidmFudGFFZmZlY3QiLCJzZXRWYW50YUVmZmVjdCIsIm15UmVmIiwiZWwiLCJjdXJyZW50IiwiZGVzdHJveSIsInN0YXJ0R2FtZSIsInB1c2giLCJkaXYiLCJyZWYiLCJjbGFzc05hbWUiLCJiciIsIm1hcCIsIndvcmQiLCJpbmRleCIsImRhdGEtY2hhciIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpIiwic3BhbiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});