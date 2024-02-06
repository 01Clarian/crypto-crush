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

/***/ "./src/utils/user-actions/touchEvents.ts":
/*!***********************************************!*\
  !*** ./src/utils/user-actions/touchEvents.ts ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useTouchHandlers: function() { return /* binding */ useTouchHandlers; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/index */ \"./src/store/index.ts\");\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/hooks */ \"./src/store/hooks.ts\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction useTouchHandlers(setSquareState, isBeingDragged, initialSquare, draggedOverSquare, glowingElements, playedSoundForElement) {\n    // redux state extraction \n    const squareBeingDragged = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.candyCrush.squareBeingDragged);\n    const squareBeingDraggedOver = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.candyCrush.squareBeingDraggedOver);\n    const dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const handleTouchStart = (e)=>{\n        setSquareState((prevState)=>({\n                ...prevState,\n                isBeingDragged: true\n            }));\n        const touch = e.changedTouches[0]; // Get the first touch point\n        const target = document.elementFromPoint(touch.clientX, touch.clientY); // Get the element under the touch\n        if (target instanceof HTMLImageElement) {\n            const candyId = parseInt(target.getAttribute(\"candy-id\") || \"0\", 10);\n            target.style.boxShadow = \"0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff\";\n            target.style.transform = \"scale(1.3)\"; // Grow the size by 10%\n            setSquareState((prevState)=>({\n                    ...prevState,\n                    initialSquare: candyId\n                })) // reset initial square\n            ;\n            dispatch((0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dragStart)(target));\n        }\n    };\n    const handleDebouncedTouchMove = lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()((e)=>{\n    //  touch move handling logic goes here\n    }, 100); // Adjust the debounce delay as needed\n    let lastTouchX = 0;\n    let lastTouchY = 0;\n    let lastTouchTime = 0;\n    const threshold = 1.5; // Adjust as needed based on testing and user feedback\n    const handleTouchMove = (e)=>{\n        handleDebouncedTouchMove(e); // Invoke the debounced touch move handler\n        const touch = e.changedTouches[0]; // Get the first touch point\n        const target = document.elementFromPoint(touch.clientX, touch.clientY); // Get the element under the touch\n        const touchX = touch.clientX;\n        const touchY = touch.clientY;\n        const currentTime = Date.now();\n        const timeDiff = currentTime - lastTouchTime;\n        const distanceX = Math.abs(touchX - lastTouchX);\n        const distanceY = Math.abs(touchY - lastTouchY);\n        const isFastDrag = timeDiff > 0 && (distanceX / timeDiff > threshold || distanceY / timeDiff > threshold);\n        // If the drag is fast, clear the box-shadow of all candy images\n        if (isFastDrag) {\n            const candyImages = document.querySelectorAll(\"img[candy-id]\");\n            // Type assertion to inform TypeScript that 'candyImages' is a NodeList of HTMLImageElement\n            candyImages.forEach((img)=>{\n                if (img instanceof HTMLImageElement && img !== squareBeingDragged) {\n                    img.style.boxShadow = \"\";\n                }\n            });\n        }\n        lastTouchX = touchX;\n        lastTouchY = touchY;\n        lastTouchTime = currentTime;\n        if (target instanceof HTMLImageElement) {\n            const candyId = parseInt(target.getAttribute(\"candy-id\") || \"0\", 10);\n            const squareBeingDraggedInitialPosition = squareBeingDragged.getAttribute(\"candy-id\");\n            const positionX = squareBeingDraggedOver === null || squareBeingDraggedOver === void 0 ? void 0 : squareBeingDraggedOver.positionX;\n            const positionY = squareBeingDraggedOver === null || squareBeingDraggedOver === void 0 ? void 0 : squareBeingDraggedOver.positionY;\n            const squareBeingDraggedOverPosition = positionY * 8 + positionX;\n            // Apply glow effect only to the dragged image\n            // Check for adjacency in all directions (including diagonals)\n            // Check for adjacency in all directions (including diagonals)\n            if (Math.abs(squareBeingDraggedInitialPosition - squareBeingDraggedOverPosition) === 1 || // check horizontal adjacency\n            Math.abs(squareBeingDraggedInitialPosition - squareBeingDraggedOverPosition) === 8 || // Check for vertical adjacency\n            Math.abs(squareBeingDraggedInitialPosition - squareBeingDraggedOverPosition) === 7 || // Check for diagonal adjacency (top-left/bottom-right)\n            Math.abs(squareBeingDraggedInitialPosition - squareBeingDraggedOverPosition) === 9 // Check for diagonal adjacency (top-right/bottom-left)\n            ) {\n                if (!glowingElements.some((element)=>parseInt(element.getAttribute(\"candy-id\") || \"0\", 10) === candyId)) {\n                    // Add the target element only if its candy-id doesn't exist in the array\n                    if (target !== squareBeingDragged) {\n                        setSquareState((prevState)=>({\n                                ...prevState,\n                                glowingElements: [\n                                    ...prevState.glowingElements,\n                                    target\n                                ]\n                            }));\n                    // setGlowingElements((prevElements) => [...prevElements, target]);\n                    }\n                }\n                if (glowingElements.length > 1) {\n                    if (squareBeingDraggedOverPosition !== squareBeingDraggedInitialPosition) {\n                        const updatedElements = glowingElements.slice(1); // Remove the first element\n                        glowingElements[0].style.boxShadow = \"\"; // Remove glow effect from the last element\n                        setSquareState((prevState)=>({\n                                ...prevState,\n                                glowingElements: updatedElements\n                            }));\n                    }\n                }\n                if (squareBeingDraggedOverPosition !== squareBeingDraggedInitialPosition && target !== squareBeingDragged) {\n                    target.style.boxShadow = isBeingDragged ? \"0 0 10px #ffffe0, 0 0 20px #ffffe0, 0 0 30px #ffffe0, 0 0 40px #ffffe0\" : \"\"; // Apply glow effect\n                } else {\n                    target.style.boxShadow = \"\";\n                }\n                if (!isBeingDragged) {\n                    target.style.boxShadow = \"\";\n                }\n                if (target === squareBeingDragged) {\n                    if (glowingElements[0]) {\n                        glowingElements[0].style.boxShadow = \"\";\n                    }\n                }\n            } else if (candyId !== initialSquare) {\n                target.style.boxShadow = \"\"; // Remove glow effect if not adjacent\n                target.style.transform = \"\"; // Reset size\n            } else {\n                target.style.boxShadow = \"0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff\";\n            }\n            dispatch((0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dragOver)({\n                positionX: candyId % 8,\n                positionY: Math.floor(candyId / 8)\n            }));\n            setSquareState((prevState)=>({\n                    ...prevState,\n                    draggedOverSquare: target\n                }));\n        }\n    };\n    const handleTouchEnd = (e)=>{\n        e.preventDefault(); // Prevent default touch behavior\n        const touch = e.changedTouches[0]; // Get the first touch point\n        const target = document.elementFromPoint(touch.clientX, touch.clientY); // Get the element under the touch\n        if (target instanceof HTMLImageElement) {\n            target.style.boxShadow = \"\"; // Remove the box shadow\n            target.style.transform = \"\"; // Grow the size by 10%    console.log('it works', isBeingDragged)\n            const touchTarget = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);\n            if (touchTarget) {\n                target.style.boxShadow = \"\"; // Remove the box shadow\n                target.style.transform = \"\"; // Grow the size by 10%    console.log('it works', isBeingDragged)      dispatch(dragDrop(touchTarget));\n                dispatch((0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dragDrop)(touchTarget));\n                setSquareState((prevState)=>({\n                        ...prevState,\n                        isBeingDragged: false\n                    }));\n            }\n            squareBeingDragged.style.boxShadow = \"\";\n            squareBeingDragged.style.transform = \"\";\n            glowingElements[0].style.boxShadow = \"\"; // Remove the box shadow\n            glowingElements[0].style.transform = \"\"; // Grow the size by 10%\n            dispatch((0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dragEnd)());\n            setSquareState((prevState)=>({\n                    ...prevState,\n                    isBeingDragged: false\n                }));\n        }\n    };\n    const handlePointerLeave = (e)=>{\n        e.preventDefault(); // Prevent default touch behavior\n        const target = e.target;\n        target.style.boxShadow = \"\"; // Remove the box shadow\n        target.style.transform = \"\"; // Grow the size by 10%    console.log('it works', isBeingDragged)      dispatch(dragDrop(touchTarget));\n        if (glowingElements[0]) {\n            glowingElements[0].style.boxShadow = \"\"; // Remove the box shadow\n            glowingElements[0].style.transform = \"\"; // Grow the size by 10%\n        }\n        dispatch((0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dragEnd)());\n        setSquareState((prevState)=>({\n                ...prevState,\n                isBeingDragged: false\n            }));\n    };\n    return {\n        handleTouchStart,\n        handleTouchMove,\n        handleTouchEnd,\n        handlePointerLeave\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDckksSUFBR3ZCLGVBQWUsQ0FBQyxFQUFFLEVBQUU7WUFDdkJBLGVBQWUsQ0FBQyxFQUFFLENBQUNxQixLQUFLLENBQUNDLFNBQVMsR0FBRyxJQUFJLHdCQUF3QjtZQUNqRXRCLGVBQWUsQ0FBQyxFQUFFLENBQUNxQixLQUFLLENBQUNFLFNBQVMsR0FBRyxJQUFJLHVCQUF1QjtRQUNoRTtRQUNBakIsU0FBU2pCLHFEQUFPQTtRQUNoQk8sZUFBZWEsQ0FBQUEsWUFBWTtnQkFDdkIsR0FBR0EsU0FBUztnQkFDWlosZ0JBQWU7WUFBSztJQUN4QjtJQUVBLE9BQU87UUFDUFU7UUFDQXNCO1FBQ0EwQjtRQUNBRztJQUFrQjtBQUUxQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdXRpbHMvdXNlci1hY3Rpb25zL3RvdWNoRXZlbnRzLnRzPzE2ZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZHJhZ0Ryb3AsIGRyYWdFbmQsIGRyYWdTdGFydCwgZHJhZ092ZXIgfSBmcm9tIFwiLi4vLi4vc3RvcmUvaW5kZXhcIjtcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCIuLi8uLi9zdG9yZS9ob29rc1wiO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC9kZWJvdW5jZSc7XG5cbmludGVyZmFjZSBTcXVhcmVTdGF0ZSB7XG4gICAgaW5pdGlhbFNxdWFyZTogbnVtYmVyO1xuICAgIGRyYWdnZWRPdmVyU3F1YXJlOiBhbnk7XG4gICAgaXNCZWluZ0RyYWdnZWQ6IGJvb2xlYW47XG4gICAgZ2xvd2luZ0VsZW1lbnRzOiBIVE1MSW1hZ2VFbGVtZW50W107XG4gICAgcGxheWVkU291bmRGb3JFbGVtZW50OiBTZXQ8bnVtYmVyPjtcbiAgICB9O1xuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHVzZVRvdWNoSGFuZGxlcnMoXG4gICAgICAgIHNldFNxdWFyZVN0YXRlOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxTcXVhcmVTdGF0ZT4+LFxuICAgICAgICBpc0JlaW5nRHJhZ2dlZDogYm9vbGVhbixcbiAgICAgICAgaW5pdGlhbFNxdWFyZTogbnVtYmVyLFxuICAgICAgICBkcmFnZ2VkT3ZlclNxdWFyZTogYW55LFxuICAgICAgICBnbG93aW5nRWxlbWVudHM6IEhUTUxJbWFnZUVsZW1lbnRbXSxcbiAgICAgICAgcGxheWVkU291bmRGb3JFbGVtZW50OiBhbnksXG4gICAgKSB7XG5cbiAgICAvLyByZWR1eCBzdGF0ZSBleHRyYWN0aW9uIFxuICAgIGNvbnN0IHNxdWFyZUJlaW5nRHJhZ2dlZCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FuZHlDcnVzaC5zcXVhcmVCZWluZ0RyYWdnZWQpO1xuICAgIGNvbnN0IHNxdWFyZUJlaW5nRHJhZ2dlZE92ZXIgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhbmR5Q3J1c2guc3F1YXJlQmVpbmdEcmFnZ2VkT3Zlcik7XG5cbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG5cbiAgICBjb25zdCBoYW5kbGVUb3VjaFN0YXJ0ID0gKGU6IFJlYWN0LlRvdWNoRXZlbnQ8SFRNTEltYWdlRWxlbWVudD4pID0+IHtcblxuICAgICAgICBzZXRTcXVhcmVTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgIGlzQmVpbmdEcmFnZ2VkOiB0cnVlXG4gICAgICAgIH0pKTtcbiAgICAgICAgY29uc3QgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdOyAvLyBHZXQgdGhlIGZpcnN0IHRvdWNoIHBvaW50XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQodG91Y2guY2xpZW50WCwgdG91Y2guY2xpZW50WSk7IC8vIEdldCB0aGUgZWxlbWVudCB1bmRlciB0aGUgdG91Y2hcbiAgICBcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHsgLy8gRW5zdXJlIGl0J3MgYW4gaW1hZ2UgZWxlbWVudFxuICAgIFxuICAgICAgICAgICAgY29uc3QgY2FuZHlJZCA9IHBhcnNlSW50KHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NhbmR5LWlkJykgfHwgJzAnLCAxMCk7XG4gICAgICAgICAgICB0YXJnZXQuc3R5bGUuYm94U2hhZG93ID0gXCIwIDAgMTBweCAjMDBmZmZmLCAwIDAgMjBweCAjMDBmZmZmLCAwIDAgMzBweCAjMDBmZmZmLCAwIDAgNDBweCAjMDBmZmZmXCI7XG4gICAgICAgICAgICB0YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxLjMpXCI7IC8vIEdyb3cgdGhlIHNpemUgYnkgMTAlXG4gICAgICAgICAgICBzZXRTcXVhcmVTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgIGluaXRpYWxTcXVhcmU6Y2FuZHlJZFxuICAgICAgICAgICAgfSkpIC8vIHJlc2V0IGluaXRpYWwgc3F1YXJlXG4gICAgICAgICAgICBkaXNwYXRjaChkcmFnU3RhcnQodGFyZ2V0KSk7XG4gICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBoYW5kbGVEZWJvdW5jZWRUb3VjaE1vdmUgPSBkZWJvdW5jZSgoZSkgPT4ge1xuICAgICAgICAvLyAgdG91Y2ggbW92ZSBoYW5kbGluZyBsb2dpYyBnb2VzIGhlcmVcbiAgICAgICAgfSwgMTAwKTsgLy8gQWRqdXN0IHRoZSBkZWJvdW5jZSBkZWxheSBhcyBuZWVkZWRcbiAgICBcbiAgICAgICAgbGV0IGxhc3RUb3VjaFggPSAwO1xuICAgICAgICBsZXQgbGFzdFRvdWNoWSA9IDA7XG4gICAgICAgIGxldCBsYXN0VG91Y2hUaW1lID0gMDtcbiAgICAgICAgY29uc3QgdGhyZXNob2xkID0gMS41OyAvLyBBZGp1c3QgYXMgbmVlZGVkIGJhc2VkIG9uIHRlc3RpbmcgYW5kIHVzZXIgZmVlZGJhY2tcbiAgICBcbiAgICAgICAgY29uc3QgaGFuZGxlVG91Y2hNb3ZlID0gKGU6IFJlYWN0LlRvdWNoRXZlbnQ8SFRNTEltYWdlRWxlbWVudD4pID0+IHtcbiAgICAgICAgaGFuZGxlRGVib3VuY2VkVG91Y2hNb3ZlKGUpOyAvLyBJbnZva2UgdGhlIGRlYm91bmNlZCB0b3VjaCBtb3ZlIGhhbmRsZXJcbiAgICBcbiAgICAgICAgY29uc3QgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdOyAvLyBHZXQgdGhlIGZpcnN0IHRvdWNoIHBvaW50XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQodG91Y2guY2xpZW50WCwgdG91Y2guY2xpZW50WSk7IC8vIEdldCB0aGUgZWxlbWVudCB1bmRlciB0aGUgdG91Y2hcbiAgICAgICAgY29uc3QgdG91Y2hYID0gdG91Y2guY2xpZW50WDtcbiAgICAgICAgY29uc3QgdG91Y2hZID0gdG91Y2guY2xpZW50WTtcbiAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCB0aW1lRGlmZiA9IGN1cnJlbnRUaW1lIC0gbGFzdFRvdWNoVGltZTtcbiAgICAgICAgY29uc3QgZGlzdGFuY2VYID0gTWF0aC5hYnModG91Y2hYIC0gbGFzdFRvdWNoWCk7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlWSA9IE1hdGguYWJzKHRvdWNoWSAtIGxhc3RUb3VjaFkpO1xuICAgICAgICBjb25zdCBpc0Zhc3REcmFnID0gdGltZURpZmYgPiAwICYmIChkaXN0YW5jZVggLyB0aW1lRGlmZiA+IHRocmVzaG9sZCB8fCBkaXN0YW5jZVkgLyB0aW1lRGlmZiA+IHRocmVzaG9sZCk7XG4gICAgXG4gICAgICAgIC8vIElmIHRoZSBkcmFnIGlzIGZhc3QsIGNsZWFyIHRoZSBib3gtc2hhZG93IG9mIGFsbCBjYW5keSBpbWFnZXNcbiAgICAgICAgaWYgKGlzRmFzdERyYWcpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbmR5SW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nW2NhbmR5LWlkXScpO1xuICAgIFxuICAgICAgICAgICAgLy8gVHlwZSBhc3NlcnRpb24gdG8gaW5mb3JtIFR5cGVTY3JpcHQgdGhhdCAnY2FuZHlJbWFnZXMnIGlzIGEgTm9kZUxpc3Qgb2YgSFRNTEltYWdlRWxlbWVudFxuICAgICAgICAgICAgY2FuZHlJbWFnZXMuZm9yRWFjaCgoaW1nKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW1nIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCAmJiBpbWcgIT09IHNxdWFyZUJlaW5nRHJhZ2dlZCkgeyAgICAgICAgLy8gVHlwZSBhc3NlcnRpb24gdG8gaW5mb3JtIFR5cGVTY3JpcHQgdGhhdCAnaW1nJyBpcyBhbiBIVE1MSW1hZ2VFbGVtZW50XG4gICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJveFNoYWRvdyA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgbGFzdFRvdWNoWCA9IHRvdWNoWDtcbiAgICAgICAgbGFzdFRvdWNoWSA9IHRvdWNoWTtcbiAgICAgICAgbGFzdFRvdWNoVGltZSA9IGN1cnJlbnRUaW1lO1xuICAgIFxuICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkgeyAvLyBFbnN1cmUgaXQncyBhbiBpbWFnZSBlbGVtZW50XG4gICAgICAgICAgICBjb25zdCBjYW5keUlkID0gcGFyc2VJbnQodGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2FuZHktaWQnKSB8fCAnMCcsIDEwKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZUJlaW5nRHJhZ2dlZEluaXRpYWxQb3NpdGlvbiA9IChzcXVhcmVCZWluZ0RyYWdnZWQgYXMgYW55KS5nZXRBdHRyaWJ1dGUoJ2NhbmR5LWlkJyk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvblggPSAoc3F1YXJlQmVpbmdEcmFnZ2VkT3ZlciBhcyBhbnkpPy5wb3NpdGlvblg7XG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvblkgPSAoc3F1YXJlQmVpbmdEcmFnZ2VkT3ZlciBhcyBhbnkpPy5wb3NpdGlvblk7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVCZWluZ0RyYWdnZWRPdmVyUG9zaXRpb24gPSBwb3NpdGlvblkgKiA4ICsgcG9zaXRpb25YO1xuICAgIFxuICAgICAgICAgICAgLy8gQXBwbHkgZ2xvdyBlZmZlY3Qgb25seSB0byB0aGUgZHJhZ2dlZCBpbWFnZVxuICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIGFkamFjZW5jeSBpbiBhbGwgZGlyZWN0aW9ucyAoaW5jbHVkaW5nIGRpYWdvbmFscylcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBhZGphY2VuY3kgaW4gYWxsIGRpcmVjdGlvbnMgKGluY2x1ZGluZyBkaWFnb25hbHMpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIE1hdGguYWJzKHNxdWFyZUJlaW5nRHJhZ2dlZEluaXRpYWxQb3NpdGlvbiAtIHNxdWFyZUJlaW5nRHJhZ2dlZE92ZXJQb3NpdGlvbikgPT09IDEgfHwgLy8gY2hlY2sgaG9yaXpvbnRhbCBhZGphY2VuY3lcbiAgICAgICAgICAgIE1hdGguYWJzKHNxdWFyZUJlaW5nRHJhZ2dlZEluaXRpYWxQb3NpdGlvbiAtIHNxdWFyZUJlaW5nRHJhZ2dlZE92ZXJQb3NpdGlvbikgPT09IDggfHwgLy8gQ2hlY2sgZm9yIHZlcnRpY2FsIGFkamFjZW5jeVxuICAgICAgICAgICAgKE1hdGguYWJzKHNxdWFyZUJlaW5nRHJhZ2dlZEluaXRpYWxQb3NpdGlvbiAtIHNxdWFyZUJlaW5nRHJhZ2dlZE92ZXJQb3NpdGlvbikgPT09IDcpIHx8IC8vIENoZWNrIGZvciBkaWFnb25hbCBhZGphY2VuY3kgKHRvcC1sZWZ0L2JvdHRvbS1yaWdodClcbiAgICAgICAgICAgIChNYXRoLmFicyhzcXVhcmVCZWluZ0RyYWdnZWRJbml0aWFsUG9zaXRpb24gLSBzcXVhcmVCZWluZ0RyYWdnZWRPdmVyUG9zaXRpb24pID09PSA5KSAvLyBDaGVjayBmb3IgZGlhZ29uYWwgYWRqYWNlbmN5ICh0b3AtcmlnaHQvYm90dG9tLWxlZnQpXG4gICAgXG4gICAgICAgICAgICApIHtcbiAgICBcbiAgICAgICAgICAgIGlmICghZ2xvd2luZ0VsZW1lbnRzLnNvbWUoKGVsZW1lbnQpID0+IHBhcnNlSW50KGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjYW5keS1pZCcpIHx8ICcwJywgMTApID09PSBjYW5keUlkXG4gICAgICAgICAgICApKSB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSB0YXJnZXQgZWxlbWVudCBvbmx5IGlmIGl0cyBjYW5keS1pZCBkb2Vzbid0IGV4aXN0IGluIHRoZSBhcnJheVxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgIT09IHNxdWFyZUJlaW5nRHJhZ2dlZCkge1xuICAgICAgICAgICAgICAgIHNldFNxdWFyZVN0YXRlKHByZXZTdGF0ZSA9Pih7XG4gICAgICAgICAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2xvd2luZ0VsZW1lbnRzOiBbLi4ucHJldlN0YXRlLmdsb3dpbmdFbGVtZW50cywgdGFyZ2V0XVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBzZXRHbG93aW5nRWxlbWVudHMoKHByZXZFbGVtZW50cykgPT4gWy4uLnByZXZFbGVtZW50cywgdGFyZ2V0XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgaWYgKGdsb3dpbmdFbGVtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZUJlaW5nRHJhZ2dlZE92ZXJQb3NpdGlvbiAhPT0gc3F1YXJlQmVpbmdEcmFnZ2VkSW5pdGlhbFBvc2l0aW9uKSB7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZEVsZW1lbnRzID0gZ2xvd2luZ0VsZW1lbnRzLnNsaWNlKDEpOyAvLyBSZW1vdmUgdGhlIGZpcnN0IGVsZW1lbnRcbiAgICAgICAgICAgICAgICBnbG93aW5nRWxlbWVudHNbMF0uc3R5bGUuYm94U2hhZG93ID0gJyc7IC8vIFJlbW92ZSBnbG93IGVmZmVjdCBmcm9tIHRoZSBsYXN0IGVsZW1lbnRcbiAgICAgICAgICAgICAgICBzZXRTcXVhcmVTdGF0ZShwcmV2U3RhdGUgPT4oe1xuICAgICAgICAgICAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIGdsb3dpbmdFbGVtZW50czogdXBkYXRlZEVsZW1lbnRzXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzcXVhcmVCZWluZ0RyYWdnZWRPdmVyUG9zaXRpb24gIT09IHNxdWFyZUJlaW5nRHJhZ2dlZEluaXRpYWxQb3NpdGlvblxuICAgICAgICAgICAgICAgICYmICh0YXJnZXQgIT09IHNxdWFyZUJlaW5nRHJhZ2dlZClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS5ib3hTaGFkb3cgPSBpc0JlaW5nRHJhZ2dlZCA/IFwiMCAwIDEwcHggI2ZmZmZlMCwgMCAwIDIwcHggI2ZmZmZlMCwgMCAwIDMwcHggI2ZmZmZlMCwgMCAwIDQwcHggI2ZmZmZlMFwiIDogJyc7IC8vIEFwcGx5IGdsb3cgZWZmZWN0XG4gICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS5ib3hTaGFkb3cgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaXNCZWluZ0RyYWdnZWQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUuYm94U2hhZG93ID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09PSBzcXVhcmVCZWluZ0RyYWdnZWQpIHtcbiAgICAgICAgICAgICAgICBpZihnbG93aW5nRWxlbWVudHNbMF0pIHtcbiAgICAgICAgICAgICAgICBnbG93aW5nRWxlbWVudHNbMF0uc3R5bGUuYm94U2hhZG93ID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgZWxzZSBpZiAoY2FuZHlJZCAhPT0gaW5pdGlhbFNxdWFyZSkge1xuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmJveFNoYWRvdyA9IFwiXCI7IC8vIFJlbW92ZSBnbG93IGVmZmVjdCBpZiBub3QgYWRqYWNlbnRcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiOyAvLyBSZXNldCBzaXplXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmJveFNoYWRvdyA9IFwiMCAwIDEwcHggIzAwZmZmZiwgMCAwIDIwcHggIzAwZmZmZiwgMCAwIDMwcHggIzAwZmZmZiwgMCAwIDQwcHggIzAwZmZmZlwiO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgZGlzcGF0Y2goZHJhZ092ZXIoeyBwb3NpdGlvblg6IGNhbmR5SWQgJSA4LCBwb3NpdGlvblk6IE1hdGguZmxvb3IoY2FuZHlJZCAvIDgpIH0pKTtcbiAgICAgICAgICAgIHNldFNxdWFyZVN0YXRlKHByZXZTdGF0ZT0+KHtcbiAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgIGRyYWdnZWRPdmVyU3F1YXJlOnRhcmdldFxuICAgICAgICAgICAgfSkpXG4gICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBoYW5kbGVUb3VjaEVuZCA9IChlOiBSZWFjdC5Ub3VjaEV2ZW50PEhUTUxJbWFnZUVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudCBkZWZhdWx0IHRvdWNoIGJlaGF2aW9yXG4gICAgICAgIGNvbnN0IHRvdWNoID0gZS5jaGFuZ2VkVG91Y2hlc1swXTsgLy8gR2V0IHRoZSBmaXJzdCB0b3VjaCBwb2ludFxuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHRvdWNoLmNsaWVudFgsIHRvdWNoLmNsaWVudFkpOyAvLyBHZXQgdGhlIGVsZW1lbnQgdW5kZXIgdGhlIHRvdWNoXG4gICAgXG4gICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7IC8vIEVuc3VyZSBpdCdzIGFuIGltYWdlIGVsZW1lbnRcbiAgICBcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS5ib3hTaGFkb3cgPSBcIlwiOyAvLyBSZW1vdmUgdGhlIGJveCBzaGFkb3dcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiOyAvLyBHcm93IHRoZSBzaXplIGJ5IDEwJSAgICBjb25zb2xlLmxvZygnaXQgd29ya3MnLCBpc0JlaW5nRHJhZ2dlZClcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHRvdWNoVGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsIGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSk7XG4gICAgICAgICAgICBpZiAodG91Y2hUYXJnZXQpIHtcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS5ib3hTaGFkb3cgPSBcIlwiOyAvLyBSZW1vdmUgdGhlIGJveCBzaGFkb3dcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiOyAvLyBHcm93IHRoZSBzaXplIGJ5IDEwJSAgICBjb25zb2xlLmxvZygnaXQgd29ya3MnLCBpc0JlaW5nRHJhZ2dlZCkgICAgICBkaXNwYXRjaChkcmFnRHJvcCh0b3VjaFRhcmdldCkpO1xuICAgICAgICAgICAgZGlzcGF0Y2goZHJhZ0Ryb3AodG91Y2hUYXJnZXQpKTtcbiAgICAgICAgICAgIHNldFNxdWFyZVN0YXRlKHByZXZTdGF0ZT0+KHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgICAgICAgaXNCZWluZ0RyYWdnZWQ6ZmFsc2V9KSk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAoc3F1YXJlQmVpbmdEcmFnZ2VkIGFzIGFueSkuc3R5bGUuYm94U2hhZG93ID0gJyc7XG4gICAgICAgICAgICAoc3F1YXJlQmVpbmdEcmFnZ2VkIGFzIGFueSkuc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgXG4gICAgICAgICAgICBnbG93aW5nRWxlbWVudHNbMF0uc3R5bGUuYm94U2hhZG93ID0gXCJcIjsgLy8gUmVtb3ZlIHRoZSBib3ggc2hhZG93XG4gICAgICAgICAgICBnbG93aW5nRWxlbWVudHNbMF0uc3R5bGUudHJhbnNmb3JtID0gXCJcIjsgLy8gR3JvdyB0aGUgc2l6ZSBieSAxMCVcbiAgICAgICAgICAgIGRpc3BhdGNoKGRyYWdFbmQoKSk7XG4gICAgICAgICAgICBzZXRTcXVhcmVTdGF0ZShwcmV2U3RhdGU9Pih7XG4gICAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgICBpc0JlaW5nRHJhZ2dlZDpmYWxzZX0pKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZVBvaW50ZXJMZWF2ZSA9IChlOiBSZWFjdC5Qb2ludGVyRXZlbnQ8SFRNTEltYWdlRWxlbWVudD4pID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IGRlZmF1bHQgdG91Y2ggYmVoYXZpb3JcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmJveFNoYWRvdyA9IFwiXCI7IC8vIFJlbW92ZSB0aGUgYm94IHNoYWRvd1xuICAgICAgICB0YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gXCJcIjsgLy8gR3JvdyB0aGUgc2l6ZSBieSAxMCUgICAgY29uc29sZS5sb2coJ2l0IHdvcmtzJywgaXNCZWluZ0RyYWdnZWQpICAgICAgZGlzcGF0Y2goZHJhZ0Ryb3AodG91Y2hUYXJnZXQpKTtcbiAgICAgICAgaWYoZ2xvd2luZ0VsZW1lbnRzWzBdKSB7XG4gICAgICAgIGdsb3dpbmdFbGVtZW50c1swXS5zdHlsZS5ib3hTaGFkb3cgPSBcIlwiOyAvLyBSZW1vdmUgdGhlIGJveCBzaGFkb3dcbiAgICAgICAgZ2xvd2luZ0VsZW1lbnRzWzBdLnN0eWxlLnRyYW5zZm9ybSA9IFwiXCI7IC8vIEdyb3cgdGhlIHNpemUgYnkgMTAlXG4gICAgICAgIH1cbiAgICAgICAgZGlzcGF0Y2goZHJhZ0VuZCgpKTtcbiAgICAgICAgc2V0U3F1YXJlU3RhdGUocHJldlN0YXRlPT4oe1xuICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgICAgaXNCZWluZ0RyYWdnZWQ6ZmFsc2V9KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICBoYW5kbGVUb3VjaFN0YXJ0LCBcbiAgICAgICAgaGFuZGxlVG91Y2hNb3ZlLCBcbiAgICAgICAgaGFuZGxlVG91Y2hFbmQsIFxuICAgICAgICBoYW5kbGVQb2ludGVyTGVhdmV9O1xuXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiZHJhZ0Ryb3AiLCJkcmFnRW5kIiwiZHJhZ1N0YXJ0IiwiZHJhZ092ZXIiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiZGVib3VuY2UiLCJ1c2VUb3VjaEhhbmRsZXJzIiwic2V0U3F1YXJlU3RhdGUiLCJpc0JlaW5nRHJhZ2dlZCIsImluaXRpYWxTcXVhcmUiLCJkcmFnZ2VkT3ZlclNxdWFyZSIsImdsb3dpbmdFbGVtZW50cyIsInBsYXllZFNvdW5kRm9yRWxlbWVudCIsInNxdWFyZUJlaW5nRHJhZ2dlZCIsInN0YXRlIiwiY2FuZHlDcnVzaCIsInNxdWFyZUJlaW5nRHJhZ2dlZE92ZXIiLCJkaXNwYXRjaCIsImhhbmRsZVRvdWNoU3RhcnQiLCJlIiwicHJldlN0YXRlIiwidG91Y2giLCJjaGFuZ2VkVG91Y2hlcyIsInRhcmdldCIsImRvY3VtZW50IiwiZWxlbWVudEZyb21Qb2ludCIsImNsaWVudFgiLCJjbGllbnRZIiwiSFRNTEltYWdlRWxlbWVudCIsImNhbmR5SWQiLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsInN0eWxlIiwiYm94U2hhZG93IiwidHJhbnNmb3JtIiwiaGFuZGxlRGVib3VuY2VkVG91Y2hNb3ZlIiwibGFzdFRvdWNoWCIsImxhc3RUb3VjaFkiLCJsYXN0VG91Y2hUaW1lIiwidGhyZXNob2xkIiwiaGFuZGxlVG91Y2hNb3ZlIiwidG91Y2hYIiwidG91Y2hZIiwiY3VycmVudFRpbWUiLCJEYXRlIiwibm93IiwidGltZURpZmYiLCJkaXN0YW5jZVgiLCJNYXRoIiwiYWJzIiwiZGlzdGFuY2VZIiwiaXNGYXN0RHJhZyIsImNhbmR5SW1hZ2VzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpbWciLCJzcXVhcmVCZWluZ0RyYWdnZWRJbml0aWFsUG9zaXRpb24iLCJwb3NpdGlvblgiLCJwb3NpdGlvblkiLCJzcXVhcmVCZWluZ0RyYWdnZWRPdmVyUG9zaXRpb24iLCJzb21lIiwiZWxlbWVudCIsImxlbmd0aCIsInVwZGF0ZWRFbGVtZW50cyIsInNsaWNlIiwiZmxvb3IiLCJoYW5kbGVUb3VjaEVuZCIsInByZXZlbnREZWZhdWx0IiwidG91Y2hUYXJnZXQiLCJoYW5kbGVQb2ludGVyTGVhdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/user-actions/touchEvents.ts\n"));

/***/ })

});