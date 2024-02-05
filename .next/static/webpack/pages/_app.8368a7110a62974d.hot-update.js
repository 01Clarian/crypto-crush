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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_title_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/title.module.css */ \"./src/styles/title.module.css\");\n/* harmony import */ var _styles_title_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_title_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var vanta_dist_vanta_waves_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vanta/dist/vanta.waves.min */ \"./node_modules/vanta/dist/vanta.waves.min.js\");\n/* harmony import */ var vanta_dist_vanta_waves_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vanta_dist_vanta_waves_min__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_game_snap_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/game-snap.png */ \"./src/assets/game-snap.png\");\n/* harmony import */ var use_sound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! use-sound */ \"./node_modules/use-sound/dist/use-sound.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n // Import the image\n\nconst HomePage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const words = [\n        \"C\",\n        \"R\",\n        \"Y\",\n        \"P\",\n        \"T\",\n        \"O\",\n        \"*\",\n        \" \",\n        \"C\",\n        \"R\",\n        \"U\",\n        \"S\",\n        \"H\"\n    ];\n    const [vantaEffect, setVantaEffect] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const myRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [play] = (0,use_sound__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"song.mp3\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!vantaEffect) {\n            setVantaEffect(vanta_dist_vanta_waves_min__WEBPACK_IMPORTED_MODULE_3___default()({\n                el: myRef.current\n            }));\n        }\n        return ()=>{\n            if (vantaEffect) vantaEffect.destroy();\n        };\n    }, [\n        vantaEffect\n    ]);\n    const startGame = (e)=>{\n        e.preventDefault();\n        // router.push('/play'); // Or router.replace('/game')\n        play;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: myRef,\n        className: \"flex flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-1\",\n                children: words.map((word, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_title_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"my-span\"]),\n                        \"data-char\": word,\n                        children: [\n                            word,\n                            Array.from({\n                                length: 10\n                            }, (_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"my-span2\",\n                                    children: word\n                                }, \"char-\".concat(word, \"-\").concat(i), false, {\n                                    fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, undefined))\n                        ]\n                    }, \"word-\".concat(index), true, {\n                        fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"rainbow-btn\",\n                onClick: startGame,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"START\"\n                }, void 0, false, {\n                    fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 27\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: _assets_game_snap_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src,\n                    width: 600,\n                    alt: \"Game Snap\",\n                    className: \"glowing-border p-2\" // Apply class for glowing border\n                }, void 0, false, {\n                    fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 67,\n                columnNumber: 19\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 67,\n                columnNumber: 25\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 67,\n                columnNumber: 31\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 67,\n                columnNumber: 37\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 67,\n                columnNumber: 43\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n                lineNumber: 67,\n                columnNumber: 49\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/clarian/Desktop/crypto-crunch/src/pages/index.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"SqHSeCpOWGYCO+NtaVQ6RhzNXhU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        use_sound__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2tCO0FBQ1Y7QUFDRjtBQUNDLENBQUMsbUJBQW1CO0FBRWxDO0FBR2pDLE1BQU1TLFdBQVc7O0lBRWYsTUFBTUMsU0FBU1Ysc0RBQVNBO0lBQ3hCLE1BQU1XLFFBQVE7UUFBQztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFDdEM7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7S0FDL0I7SUFFRCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQTJCO0lBQ3pFLE1BQU1ZLFFBQVFWLDZDQUFNQSxDQUFDO0lBQ3JCLE1BQU0sQ0FBQ1csS0FBSyxHQUFHUCxxREFBUUEsQ0FBQztJQUd4QkwsZ0RBQVNBLENBQUM7UUFDUixJQUFJLENBQUNTLGFBQWE7WUFDaEJDLGVBQWVQLGlFQUFLQSxDQUFDO2dCQUNuQlUsSUFBSUYsTUFBTUcsT0FBTztZQUNuQjtRQUNGO1FBQ0EsT0FBTztZQUNMLElBQUlMLGFBQWFBLFlBQVlNLE9BQU87UUFFdEM7SUFDRixHQUFHO1FBQUNOO0tBQVk7SUFFaEIsTUFBTU8sWUFBWSxDQUFDQztRQUNqQkEsRUFBRUMsY0FBYztRQUNqQixzREFBc0Q7UUFDckROO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ087UUFBSUMsS0FBS1Q7UUFBT1UsV0FBVTs7MEJBQ3pCLDhEQUFDQzs7Ozs7MEJBQUssOERBQUNBOzs7OzswQkFDUCw4REFBQ0g7Z0JBQUlFLFdBQVU7MEJBQ1piLE1BQU1lLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDaEIsOERBQUNOO3dCQUFJRSxXQUFXbkIsNEVBQWlCO3dCQUF3QndCLGFBQVdGOzs0QkFDakVBOzRCQUNBRyxNQUFNQyxJQUFJLENBQUM7Z0NBQUVDLFFBQVE7NEJBQUcsR0FBRyxDQUFDQyxHQUFHQyxrQkFDOUIsOERBQUNDO29DQUFLWCxXQUFVOzhDQUFzQ0c7bUNBQXRCLFFBQWdCTyxPQUFSUCxNQUFLLEtBQUssT0FBRk87Ozs7Ozt1QkFIWixRQUFjLE9BQU5OOzs7Ozs7Ozs7OzBCQVFwRCw4REFBQ0g7Ozs7OzBCQUFLLDhEQUFDQTs7Ozs7MEJBQ1AsOERBQUNXO2dCQUNEWixXQUFVO2dCQUNWYSxTQUFTbEI7MEJBQVcsNEVBQUNnQjs4QkFBSzs7Ozs7Ozs7Ozs7MEJBQzFCLDhEQUFDYjtnQkFDREUsV0FBVTswQkFFViw0RUFBQ2M7b0JBQ0NDLEtBQUtoQyw2REFBUUEsQ0FBQ2dDLEdBQUc7b0JBQ2pCQyxPQUFPO29CQUNQQyxLQUFJO29CQUNKakIsV0FBVSxxQkFBcUIsaUNBQWlDOzs7Ozs7Ozs7OzswQkFHbEUsOERBQUNDOzs7OzswQkFBSyw4REFBQ0E7Ozs7OzBCQUFLLDhEQUFDQTs7Ozs7MEJBQUssOERBQUNBOzs7OzswQkFBSyw4REFBQ0E7Ozs7OzBCQUFLLDhEQUFDQTs7Ozs7MEJBQUssOERBQUNBOzs7OzswQkFBSyw4REFBQ0E7Ozs7Ozs7Ozs7O0FBR2pEO0dBNURNaEI7O1FBRVdULGtEQUFTQTtRQU9UUSxpREFBUUE7OztLQVRuQkM7QUE4RE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3RpdGxlLm1vZHVsZS5jc3MnO1xuaW1wb3J0IFdBVkVTIGZyb20gJ3ZhbnRhL2Rpc3QvdmFudGEud2F2ZXMubWluJ1xuaW1wb3J0IGdhbWVTbmFwIGZyb20gJy4uL2Fzc2V0cy9nYW1lLXNuYXAucG5nJzsgLy8gSW1wb3J0IHRoZSBpbWFnZVxuaW1wb3J0IGF1ZGlvUmVmIGZyb20gJy4uL2Fzc2V0cy9tdXNpYy9zb25nLm1wMyc7IC8vIEltcG9ydCB0aGUgYXVkaW8gZmlsZVxuaW1wb3J0IHVzZVNvdW5kIGZyb20gJ3VzZS1zb3VuZCc7XG5pbXBvcnQgc29uZyBmcm9tICcuLi8uLi9wdWJsaWMvc29uZy5tcDMnO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgd29yZHMgPSBbXCJDXCIsIFwiUlwiLCBcIllcIiwgXCJQXCIsIFwiVFwiLCBcIk9cIixcbiAgICBcIipcIiwgXCIgXCIsIFwiQ1wiLCBcIlJcIiwgXCJVXCIsIFwiU1wiLCBcIkhcIlxuICBdO1xuXG4gIGNvbnN0IFt2YW50YUVmZmVjdCwgc2V0VmFudGFFZmZlY3RdID0gdXNlU3RhdGU8UmV0dXJuVHlwZTx0eXBlb2YgV0FWRVM+PihudWxsKTtcbiAgY29uc3QgbXlSZWYgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgW3BsYXldID0gdXNlU291bmQoJ3NvbmcubXAzJyk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghdmFudGFFZmZlY3QpIHtcbiAgICAgIHNldFZhbnRhRWZmZWN0KFdBVkVTKHtcbiAgICAgICAgZWw6IG15UmVmLmN1cnJlbnRcbiAgICAgIH0pKVxuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHZhbnRhRWZmZWN0KSB2YW50YUVmZmVjdC5kZXN0cm95KClcblxuICAgIH1cbiAgfSwgW3ZhbnRhRWZmZWN0XSlcblxuICBjb25zdCBzdGFydEdhbWUgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgIC8vIHJvdXRlci5wdXNoKCcvcGxheScpOyAvLyBPciByb3V0ZXIucmVwbGFjZSgnL2dhbWUnKVxuICAgIHBsYXlcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXtteVJlZn0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxiciAvPjxiciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J20tMSc+XG4gICAgICAgIHt3b3Jkcy5tYXAoKHdvcmQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbXktc3BhbiddfSBrZXk9e2B3b3JkLSR7aW5kZXh9YH0gZGF0YS1jaGFyPXt3b3JkfT5cbiAgICAgICAgICAgIHt3b3JkfVxuICAgICAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IDEwIH0sIChfLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbXktc3BhbjInIGtleT17YGNoYXItJHt3b3JkfS0ke2l9YH0+e3dvcmR9PC9zcGFuPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8YnIgLz48YnIgLz5cbiAgICAgIDxidXR0b24gXG4gICAgICBjbGFzc05hbWU9XCJyYWluYm93LWJ0blwiXG4gICAgICBvbkNsaWNrPXtzdGFydEdhbWV9PjxzcGFuPlNUQVJUPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPSdtLTUnXG4gICAgICA+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz17Z2FtZVNuYXAuc3JjfVxuICAgICAgICB3aWR0aD17NjAwfVxuICAgICAgICBhbHQ9XCJHYW1lIFNuYXBcIlxuICAgICAgICBjbGFzc05hbWU9XCJnbG93aW5nLWJvcmRlciBwLTJcIiAvLyBBcHBseSBjbGFzcyBmb3IgZ2xvd2luZyBib3JkZXJcbiAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxiciAvPjxiciAvPjxiciAvPjxiciAvPjxiciAvPjxiciAvPjxiciAvPjxiciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInN0eWxlcyIsIldBVkVTIiwiZ2FtZVNuYXAiLCJ1c2VTb3VuZCIsIkhvbWVQYWdlIiwicm91dGVyIiwid29yZHMiLCJ2YW50YUVmZmVjdCIsInNldFZhbnRhRWZmZWN0IiwibXlSZWYiLCJwbGF5IiwiZWwiLCJjdXJyZW50IiwiZGVzdHJveSIsInN0YXJ0R2FtZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsInJlZiIsImNsYXNzTmFtZSIsImJyIiwibWFwIiwid29yZCIsImluZGV4IiwiZGF0YS1jaGFyIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImkiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayIsImltZyIsInNyYyIsIndpZHRoIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});