"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/play",{

/***/ "./src/components/Tile.tsx":
/*!*********************************!*\
  !*** ./src/components/Tile.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tile_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tile.css */ \"./src/components/tile.css\");\n/* harmony import */ var _tile_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tile_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_user_actions_mouseEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/user-actions/mouseEvents */ \"./src/utils/user-actions/mouseEvents.ts\");\n/* harmony import */ var _utils_user_actions_touchEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/user-actions/touchEvents */ \"./src/utils/user-actions/touchEvents.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Tile(param) {\n    let { candy, candyId, squareState, setSquareState } = param;\n    _s();\n    const { isBeingDragged, initialSquare, draggedOverSquare, glowingElements, playedSoundForElement } = squareState;\n    const { handleMouseDragStart, handleMouseDragOver, handleMouseDragLeave, handleMouseDrop, handleMouseDragEnd } = (0,_utils_user_actions_mouseEvents__WEBPACK_IMPORTED_MODULE_3__.useMouseHandlers)(setSquareState, isBeingDragged, initialSquare, draggedOverSquare, playedSoundForElement);\n    const { handleTouchStart, handleTouchMove, handleTouchEnd, handlePointerLeave } = (0,_utils_user_actions_touchEvents__WEBPACK_IMPORTED_MODULE_4__.useTouchHandlers)(setSquareState, isBeingDragged, initialSquare, draggedOverSquare, glowingElements, playedSoundForElement);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"tile-padding md:w-16 md:h-16 lg:w-20 lg:h-20 sm:w-14 sm:h-14 flex justify-center items-center m-0.5 rounded-lg select-none \".concat(isBeingDragged ? \"is-being-dragged\" : \"\"),\n        style: {\n            boxShadow: \"inset 5px 5px 15px #062525, inset -5px -5px 15px #aaaab7bb\",\n            width: \"calc(100% / 8 - 1rem)\"\n        },\n        children: candy && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: candy,\n            alt: \"\",\n            className: \"md:w-17 md:h-17 lg:w-19 lg:h-19 sm:w-12 sm:h-12 p-1\",\n            draggable: true,\n            onDragStart: handleMouseDragStart,\n            onDragOver: handleMouseDragOver,\n            onDragLeave: handleMouseDragLeave,\n            onDrop: handleMouseDrop,\n            onDragEnd: handleMouseDragEnd,\n            onPointerLeave: handlePointerLeave,\n            onTouchStart: handleTouchStart,\n            onTouchMove: handleTouchMove,\n            onTouchEnd: handleTouchEnd,\n            \"candy-id\": candyId\n        }, void 0, false, {\n            fileName: \"/Users/clarian/Desktop/crypto-crunch/src/components/Tile.tsx\",\n            lineNumber: 49,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/clarian/Desktop/crypto-crunch/src/components/Tile.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Tile, \"fFUgKzRNHpZidVQmMB7+NmJAMqs=\", false, function() {\n    return [\n        _utils_user_actions_mouseEvents__WEBPACK_IMPORTED_MODULE_3__.useMouseHandlers,\n        _utils_user_actions_touchEvents__WEBPACK_IMPORTED_MODULE_4__.useTouchHandlers\n    ];\n});\n_c = Tile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(Tile));\nvar _c, _c1;\n$RefreshReg$(_c, \"Tile\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UaWxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW9DO0FBQ2hCO0FBQ2lEO0FBQ0E7QUFrQnJFLFNBQVNJLEtBQUssS0FBMEQ7UUFBMUQsRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFdBQVcsRUFBRUMsY0FBYyxFQUFhLEdBQTFEOztJQUNaLE1BQU0sRUFBQ0MsY0FBYyxFQUFFQyxhQUFhLEVBQUVDLGlCQUFpQixFQUFFQyxlQUFlLEVBQUVDLHFCQUFxQixFQUFDLEdBQUdOO0lBRW5HLE1BQU0sRUFDSk8sb0JBQW9CLEVBQ3BCQyxtQkFBbUIsRUFDbkJDLG9CQUFvQixFQUNwQkMsZUFBZSxFQUNmQyxrQkFBa0IsRUFBRSxHQUFHaEIsaUZBQWdCQSxDQUN2Q00sZ0JBQWdCQyxnQkFBZ0JDLGVBQWVDLG1CQUFtQkU7SUFFcEUsTUFBTSxFQUNKTSxnQkFBZ0IsRUFDaEJDLGVBQWUsRUFDZkMsY0FBYyxFQUNkQyxrQkFBa0IsRUFBRSxHQUFHbkIsaUZBQWdCQSxDQUN2Q0ssZ0JBQWdCQyxnQkFBZ0JDLGVBQWVDLG1CQUFtQkMsaUJBQWlCQztJQUVyRixxQkFDRSw4REFBQ1U7UUFDQ0MsV0FBVyw4SEFBdUssT0FBekNmLGlCQUFpQixxQkFBcUI7UUFDL0tnQixPQUFPO1lBQ0xDLFdBQVc7WUFDWEMsT0FBTztRQUNUO2tCQUVDdEIsdUJBQ0MsOERBQUN1QjtZQUNDQyxLQUFLeEI7WUFDTHlCLEtBQUk7WUFDSk4sV0FBWTtZQUNaTyxXQUFXO1lBRVhDLGFBQWFsQjtZQUNibUIsWUFBWWxCO1lBQ1ptQixhQUFhbEI7WUFDYm1CLFFBQVFsQjtZQUNSbUIsV0FBV2xCO1lBRVhtQixnQkFBZ0JmO1lBRWhCZ0IsY0FBY25CO1lBQ2RvQixhQUFhbkI7WUFDYm9CLFlBQVluQjtZQUVab0IsWUFBVW5DOzs7Ozs7Ozs7OztBQUtwQjtHQWxEU0Y7O1FBUWtCRiw2RUFBZ0JBO1FBT2hCQyw2RUFBZ0JBOzs7S0FmbENDO0FBb0RULGtGQUFlSCwyQ0FBSUEsQ0FBQ0csS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UaWxlLnRzeD83YTc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgJy4vdGlsZS5jc3MnO1xuaW1wb3J0IHsgdXNlTW91c2VIYW5kbGVycyB9IGZyb20gXCIuLi91dGlscy91c2VyLWFjdGlvbnMvbW91c2VFdmVudHNcIjtcbmltcG9ydCB7IHVzZVRvdWNoSGFuZGxlcnMgfSBmcm9tIFwiLi4vdXRpbHMvdXNlci1hY3Rpb25zL3RvdWNoRXZlbnRzXCI7XG5cbmludGVyZmFjZSBTcXVhcmVTdGF0ZSB7XG4gIGluaXRpYWxTcXVhcmU6IG51bWJlcjtcbiAgZHJhZ2dlZE92ZXJTcXVhcmU6IGFueTtcbiAgaXNCZWluZ0RyYWdnZWQ6IGJvb2xlYW47XG4gIGdsb3dpbmdFbGVtZW50czogSFRNTEltYWdlRWxlbWVudFtdO1xuICBwbGF5ZWRTb3VuZEZvckVsZW1lbnQ6IFNldDxudW1iZXI+XG5cbn1cblxuaW50ZXJmYWNlIFRpbGVQcm9wcyB7XG4gIGNhbmR5OiBzdHJpbmc7XG4gIGNhbmR5SWQ6IG51bWJlcjtcbiAgc3F1YXJlU3RhdGU6IFNxdWFyZVN0YXRlO1xuICBzZXRTcXVhcmVTdGF0ZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248U3F1YXJlU3RhdGU+Pjtcbn07XG5cbmZ1bmN0aW9uIFRpbGUoeyBjYW5keSwgY2FuZHlJZCwgc3F1YXJlU3RhdGUsIHNldFNxdWFyZVN0YXRlIH06IFRpbGVQcm9wcykgXG57IGNvbnN0IHtpc0JlaW5nRHJhZ2dlZCwgaW5pdGlhbFNxdWFyZSwgZHJhZ2dlZE92ZXJTcXVhcmUsIGdsb3dpbmdFbGVtZW50cywgcGxheWVkU291bmRGb3JFbGVtZW50fSA9IHNxdWFyZVN0YXRlO1xuICBcbiAgY29uc3QgeyBcbiAgICBoYW5kbGVNb3VzZURyYWdTdGFydCwgXG4gICAgaGFuZGxlTW91c2VEcmFnT3ZlciwgXG4gICAgaGFuZGxlTW91c2VEcmFnTGVhdmUsIFxuICAgIGhhbmRsZU1vdXNlRHJvcCwgXG4gICAgaGFuZGxlTW91c2VEcmFnRW5kIH0gPSB1c2VNb3VzZUhhbmRsZXJzKFxuICAgIHNldFNxdWFyZVN0YXRlLCBpc0JlaW5nRHJhZ2dlZCwgaW5pdGlhbFNxdWFyZSwgZHJhZ2dlZE92ZXJTcXVhcmUsIHBsYXllZFNvdW5kRm9yRWxlbWVudCk7XG5cbiAgY29uc3Qge1xuICAgIGhhbmRsZVRvdWNoU3RhcnQsXG4gICAgaGFuZGxlVG91Y2hNb3ZlLFxuICAgIGhhbmRsZVRvdWNoRW5kLFxuICAgIGhhbmRsZVBvaW50ZXJMZWF2ZSB9ID0gdXNlVG91Y2hIYW5kbGVycyhcbiAgICBzZXRTcXVhcmVTdGF0ZSwgaXNCZWluZ0RyYWdnZWQsIGluaXRpYWxTcXVhcmUsIGRyYWdnZWRPdmVyU3F1YXJlLCBnbG93aW5nRWxlbWVudHMsIHBsYXllZFNvdW5kRm9yRWxlbWVudCk7ICAgICAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2B0aWxlLXBhZGRpbmcgbWQ6dy0xNiBtZDpoLTE2IGxnOnctMjAgbGc6aC0yMCBzbTp3LTE0IHNtOmgtMTQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbS0wLjUgcm91bmRlZC1sZyBzZWxlY3Qtbm9uZSAke2lzQmVpbmdEcmFnZ2VkID8gJ2lzLWJlaW5nLWRyYWdnZWQnIDogJyd9YH1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGJveFNoYWRvdzogXCJpbnNldCA1cHggNXB4IDE1cHggIzA2MjUyNSwgaW5zZXQgLTVweCAtNXB4IDE1cHggI2FhYWFiN2JiXCIsXG4gICAgICAgIHdpZHRoOiBcImNhbGMoMTAwJSAvIDggLSAxcmVtKVwiLCAvLyBBZGp1c3QgdGhlIHdpZHRoIHRvIGZpdCA4IHRpbGVzIGluIGEgcm93XG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjYW5keSAmJiAoXG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2NhbmR5fVxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgbWQ6dy0xNyBtZDpoLTE3IGxnOnctMTkgbGc6aC0xOSBzbTp3LTEyIHNtOmgtMTIgcC0xYH1cbiAgICAgICAgICBkcmFnZ2FibGU9e3RydWV9XG5cbiAgICAgICAgICBvbkRyYWdTdGFydD17aGFuZGxlTW91c2VEcmFnU3RhcnR9XG4gICAgICAgICAgb25EcmFnT3Zlcj17aGFuZGxlTW91c2VEcmFnT3Zlcn1cbiAgICAgICAgICBvbkRyYWdMZWF2ZT17aGFuZGxlTW91c2VEcmFnTGVhdmV9XG4gICAgICAgICAgb25Ecm9wPXtoYW5kbGVNb3VzZURyb3B9XG4gICAgICAgICAgb25EcmFnRW5kPXtoYW5kbGVNb3VzZURyYWdFbmR9XG5cbiAgICAgICAgICBvblBvaW50ZXJMZWF2ZT17aGFuZGxlUG9pbnRlckxlYXZlfVxuXG4gICAgICAgICAgb25Ub3VjaFN0YXJ0PXtoYW5kbGVUb3VjaFN0YXJ0fVxuICAgICAgICAgIG9uVG91Y2hNb3ZlPXtoYW5kbGVUb3VjaE1vdmV9XG4gICAgICAgICAgb25Ub3VjaEVuZD17aGFuZGxlVG91Y2hFbmR9XG5cbiAgICAgICAgICBjYW5keS1pZD17Y2FuZHlJZH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oVGlsZSk7Il0sIm5hbWVzIjpbIlJlYWN0IiwibWVtbyIsInVzZU1vdXNlSGFuZGxlcnMiLCJ1c2VUb3VjaEhhbmRsZXJzIiwiVGlsZSIsImNhbmR5IiwiY2FuZHlJZCIsInNxdWFyZVN0YXRlIiwic2V0U3F1YXJlU3RhdGUiLCJpc0JlaW5nRHJhZ2dlZCIsImluaXRpYWxTcXVhcmUiLCJkcmFnZ2VkT3ZlclNxdWFyZSIsImdsb3dpbmdFbGVtZW50cyIsInBsYXllZFNvdW5kRm9yRWxlbWVudCIsImhhbmRsZU1vdXNlRHJhZ1N0YXJ0IiwiaGFuZGxlTW91c2VEcmFnT3ZlciIsImhhbmRsZU1vdXNlRHJhZ0xlYXZlIiwiaGFuZGxlTW91c2VEcm9wIiwiaGFuZGxlTW91c2VEcmFnRW5kIiwiaGFuZGxlVG91Y2hTdGFydCIsImhhbmRsZVRvdWNoTW92ZSIsImhhbmRsZVRvdWNoRW5kIiwiaGFuZGxlUG9pbnRlckxlYXZlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJib3hTaGFkb3ciLCJ3aWR0aCIsImltZyIsInNyYyIsImFsdCIsImRyYWdnYWJsZSIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnT3ZlciIsIm9uRHJhZ0xlYXZlIiwib25Ecm9wIiwib25EcmFnRW5kIiwib25Qb2ludGVyTGVhdmUiLCJvblRvdWNoU3RhcnQiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hFbmQiLCJjYW5keS1pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Tile.tsx\n"));

/***/ })

});