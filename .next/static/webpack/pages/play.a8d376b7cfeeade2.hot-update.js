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

/***/ "./src/utils/user-actions/mouseEvents.ts":
/*!***********************************************!*\
  !*** ./src/utils/user-actions/mouseEvents.ts ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useMouseHandlers: function() { return /* binding */ useMouseHandlers; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/index */ \"./src/store/index.ts\");\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/hooks */ \"./src/store/hooks.ts\");\n/* harmony import */ var use_sound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-sound */ \"./node_modules/use-sound/dist/use-sound.esm.js\");\n\n\n\n\nfunction useMouseHandlers(setSquareState, isBeingDragged, initialSquare, draggedOverSquare, playedSoundForElement) {\n    // redux state extraction \n    const squareBeingDragged = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.candyCrush.squareBeingDragged);\n    const squareBeingDraggedOver = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.candyCrush.squareBeingDraggedOver);\n    const [playHover, exposedData] = (0,use_sound__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"hover-over.mp3\");\n    const [playing, setPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const [soundCooldown, setSoundCooldown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const [previousMouseX, setPreviousMouseX] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const [previousMouseY, setPreviousMouseY] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    // event when user selects an element to drag\n    const handleMouseDragStart = (e)=>{\n        setSquareState((prevState)=>({\n                ...prevState,\n                isBeingDragged: true\n            }));\n        const target = e.target;\n        const candyId = parseInt(target.getAttribute(\"candy-id\") || \"0\", 10);\n        target.style.boxShadow = \"0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff\";\n        target.style.transform = \"scale(1.3)\"; // Grow the size by 10%\n        setSquareState((prevSquareState)=>({\n                ...prevSquareState,\n                initialSquare: candyId\n            }));\n        // Add the position of the initial element being dragged to the set\n        playedSoundForElement.add(candyId);\n        console.log(\"played for elem\", playedSoundForElement);\n        dispatch((0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dragStart)(e.target));\n        console.log(\"sd\"); // Logs the updated value within the callback\n    };\n    // event when user drags an element \n    const handleMouseDragOver = (e)=>{\n        e.preventDefault();\n        setSquareState((prevState)=>({\n                ...prevState,\n                isBeingDragged: true\n            }));\n        const target = e.target;\n        const candyId = parseInt(target.getAttribute(\"candy-id\") || \"0\", 10);\n        const squareBeingDraggedInitialPosition = squareBeingDragged.getAttribute(\"candy-id\");\n        const positionX = squareBeingDraggedOver === null || squareBeingDraggedOver === void 0 ? void 0 : squareBeingDraggedOver.positionX;\n        const positionY = squareBeingDraggedOver === null || squareBeingDraggedOver === void 0 ? void 0 : squareBeingDraggedOver.positionY;\n        const squareBeingDraggedOverPosition = positionY * 8 + positionX;\n        setPlaying(true);\n        // restrict glowing elements to adjacent from selected element being dragged\n        if (Math.abs(squareBeingDraggedInitialPosition - squareBeingDraggedOverPosition) === 1 || // check horizontal adjacency\n        Math.abs(squareBeingDraggedInitialPosition - squareBeingDraggedOverPosition) === 8 || // Check for vertical adjacency\n        Math.abs(squareBeingDraggedInitialPosition - squareBeingDraggedOverPosition) === 7 || // Check for diagonal adjacency (top-left/bottom-right)\n        Math.abs(squareBeingDraggedInitialPosition - squareBeingDraggedOverPosition) === 9 // Check for diagonal adjacency (top-right/bottom-left)\n        ) {\n            if (!playedSoundForElement.has(squareBeingDraggedOverPosition) && !soundCooldown && !playing) {\n                if (candyId !== initialSquare) {\n                    playHover(); // Play the sound immediately\n                    playedSoundForElement.add(squareBeingDraggedOverPosition);\n                    setSoundCooldown(true); // Start the cooldown\n                }\n                setTimeout(()=>{\n                    setSoundCooldown(false); // End the cooldown after the delay\n                }, 200); // Adjust the delay as needed\n            }\n            if (squareBeingDraggedOverPosition !== squareBeingDraggedInitialPosition) {\n                target.style.boxShadow = isBeingDragged ? \"0 0 10px #ffffe0, 0 0 20px #ffffe0, 0 0 30px #ffffe0, 0 0 40px #ffffe0\" : \"\"; // Apply glow effect\n            } else if (squareBeingDraggedOverPosition === squareBeingDraggedInitialPosition) {\n                target.style.boxShadow = \"\";\n            } else {\n                target.style.boxShadow = \"\";\n            }\n        } else if (candyId !== initialSquare) {\n            target.style.boxShadow = \"\"; // Remove glow effect if not adjacent\n            target.style.transform = \"\"; // Reset size\n        } else {\n            target.style.boxShadow = \"0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff\";\n        }\n        dispatch((0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dragOver)({\n            positionX: candyId % 8,\n            positionY: Math.floor(candyId / 8)\n        }));\n        setSquareState((prevSquareState)=>({\n                ...prevSquareState,\n                draggedOverSquare: target\n            }));\n    };\n    // when the user drops the dragged element onto an invalid move\n    const handleMouseDragLeave = (e)=>{\n        const target = e.target;\n        const candyId = parseInt(target.getAttribute(\"candy-id\") || \"0\", 10);\n        const positionX = squareBeingDraggedOver === null || squareBeingDraggedOver === void 0 ? void 0 : squareBeingDraggedOver.positionX;\n        const positionY = squareBeingDraggedOver === null || squareBeingDraggedOver === void 0 ? void 0 : squareBeingDraggedOver.positionY;\n        const squareBeingDraggedOverPosition = positionY * 8 + positionX;\n        setPlaying(false);\n        playedSoundForElement.delete(squareBeingDraggedOverPosition);\n        //exposedData.sound.fade(0.0, .5, 300);\n        if (draggedOverSquare instanceof HTMLImageElement) {\n            draggedOverSquare.style.boxShadow = \" \"; // Remove the glow effect from the dragged over square\n        }\n        if (candyId !== initialSquare) {\n            // Only remove the glow effect if it's not the initial square\n            target.style.boxShadow = \"\";\n            target.style.transform = \"\";\n        }\n        dispatch((0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dragEnd)());\n        setSquareState((prevState)=>({\n                ...prevState,\n                isBeingDragged: false\n            }));\n    };\n    // when user drops onto another valid tile with invalid result\n    const handleMouseDrop = (e)=>{\n        const target = e.target;\n        target.style.boxShadow = \"\";\n        dispatch((0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dragDrop)(e.target));\n    };\n    // when user releases the dragged element \n    const handleMouseDragEnd = (e)=>{\n        const target = e.target;\n        target.style.boxShadow = \"\"; // Remove the box shadow\n        target.style.transform = \"\"; // Reset the size\n        setSquareState((prevState)=>({\n                ...prevState,\n                initialSquare: 0\n            })); // reset initial square\n        dispatch((0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dragEnd)());\n        setSquareState((prevState)=>({\n                ...prevState,\n                isBeingDragged: false\n            }));\n    };\n    return {\n        handleMouseDragStart,\n        handleMouseDragOver,\n        handleMouseDragLeave,\n        handleMouseDrop,\n        handleMouseDragEnd\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Tl9FLy4vc3JjL3V0aWxzL3VzZXItYWN0aW9ucy9tb3VzZUV2ZW50cy50cz8zZGE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBkcmFnRHJvcCwgZHJhZ0VuZCwgZHJhZ1N0YXJ0LCBkcmFnT3ZlciB9IGZyb20gXCIuLi8uLi9zdG9yZS9pbmRleFwiO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2hvb2tzXCI7XG5pbXBvcnQgdXNlU291bmQgZnJvbSAndXNlLXNvdW5kJztcblxuaW50ZXJmYWNlIFNxdWFyZVN0YXRlIHtcbiAgICBpbml0aWFsU3F1YXJlOiBudW1iZXI7XG4gICAgZHJhZ2dlZE92ZXJTcXVhcmU6IGFueTtcbiAgICBpc0JlaW5nRHJhZ2dlZDogYm9vbGVhbjtcbiAgICBnbG93aW5nRWxlbWVudHM6IEhUTUxJbWFnZUVsZW1lbnRbXTtcbiAgICBwbGF5ZWRTb3VuZEZvckVsZW1lbnQ6IFNldDxudW1iZXI+O1xuICAgIH07XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VNb3VzZUhhbmRsZXJzKFxuICAgIHNldFNxdWFyZVN0YXRlOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxTcXVhcmVTdGF0ZT4+LFxuICAgIGlzQmVpbmdEcmFnZ2VkOiBib29sZWFuLFxuICAgIGluaXRpYWxTcXVhcmU6IG51bWJlcixcbiAgICBkcmFnZ2VkT3ZlclNxdWFyZTogYW55LFxuICAgIHBsYXllZFNvdW5kRm9yRWxlbWVudDogYW55LFxuXG4pIHtcblxuICAgIC8vIHJlZHV4IHN0YXRlIGV4dHJhY3Rpb24gXG4gICAgY29uc3Qgc3F1YXJlQmVpbmdEcmFnZ2VkID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYW5keUNydXNoLnNxdWFyZUJlaW5nRHJhZ2dlZCk7XG4gICAgY29uc3Qgc3F1YXJlQmVpbmdEcmFnZ2VkT3ZlciA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FuZHlDcnVzaC5zcXVhcmVCZWluZ0RyYWdnZWRPdmVyKTtcblxuICAgIGNvbnN0IFtwbGF5SG92ZXIsIGV4cG9zZWREYXRhXSA9IHVzZVNvdW5kKCdob3Zlci1vdmVyLm1wMycpO1xuICAgIGNvbnN0IFtwbGF5aW5nLCBzZXRQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc291bmRDb29sZG93biwgc2V0U291bmRDb29sZG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3ByZXZpb3VzTW91c2VYLCBzZXRQcmV2aW91c01vdXNlWF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbcHJldmlvdXNNb3VzZVksIHNldFByZXZpb3VzTW91c2VZXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuXG4gICAgLy8gZXZlbnQgd2hlbiB1c2VyIHNlbGVjdHMgYW4gZWxlbWVudCB0byBkcmFnXG4gICAgY29uc3QgaGFuZGxlTW91c2VEcmFnU3RhcnQgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MSW1hZ2VFbGVtZW50PikgPT4ge1xuICAgICAgICBzZXRTcXVhcmVTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgIGlzQmVpbmdEcmFnZ2VkOiB0cnVlXG4gICAgICAgIH0pKTtcblxuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgICAgICBjb25zdCBjYW5keUlkID0gcGFyc2VJbnQodGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2FuZHktaWQnKSB8fCAnMCcsIDEwKTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmJveFNoYWRvdyA9IFwiMCAwIDEwcHggIzAwZmZmZiwgMCAwIDIwcHggIzAwZmZmZiwgMCAwIDMwcHggIzAwZmZmZiwgMCAwIDQwcHggIzAwZmZmZlwiO1xuICAgICAgICB0YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxLjMpXCI7IC8vIEdyb3cgdGhlIHNpemUgYnkgMTAlXG5cbiAgICAgICAgc2V0U3F1YXJlU3RhdGUoKHByZXZTcXVhcmVTdGF0ZSkgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXZTcXVhcmVTdGF0ZSxcbiAgICAgICAgICAgIGluaXRpYWxTcXVhcmU6IGNhbmR5SWRcbiAgICAgICAgfSkpXG5cbiAgICAgICAgLy8gQWRkIHRoZSBwb3NpdGlvbiBvZiB0aGUgaW5pdGlhbCBlbGVtZW50IGJlaW5nIGRyYWdnZWQgdG8gdGhlIHNldFxuICAgICAgICBwbGF5ZWRTb3VuZEZvckVsZW1lbnQuYWRkKGNhbmR5SWQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZWQgZm9yIGVsZW0nLHBsYXllZFNvdW5kRm9yRWxlbWVudClcbiAgICAgICAgXG4gICAgICAgIGRpc3BhdGNoKGRyYWdTdGFydChlLnRhcmdldCkpO1xuICAgICAgICBjb25zb2xlLmxvZygnc2QnKTsgLy8gTG9ncyB0aGUgdXBkYXRlZCB2YWx1ZSB3aXRoaW4gdGhlIGNhbGxiYWNrXG4gICAgfTtcblxuICAgIC8vIGV2ZW50IHdoZW4gdXNlciBkcmFncyBhbiBlbGVtZW50IFxuICAgIGNvbnN0IGhhbmRsZU1vdXNlRHJhZ092ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MSW1hZ2VFbGVtZW50PikgPT4ge1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgc2V0U3F1YXJlU3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICBpc0JlaW5nRHJhZ2dlZDogdHJ1ZVxuICAgICAgfSkpO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICBjb25zdCBjYW5keUlkID0gcGFyc2VJbnQodGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2FuZHktaWQnKSB8fCAnMCcsIDEwKTtcbiAgICBcbiAgICBjb25zdCBzcXVhcmVCZWluZ0RyYWdnZWRJbml0aWFsUG9zaXRpb24gPSAoc3F1YXJlQmVpbmdEcmFnZ2VkIGFzIGFueSkuZ2V0QXR0cmlidXRlKCdjYW5keS1pZCcpO1xuXG4gICAgY29uc3QgcG9zaXRpb25YID0gKHNxdWFyZUJlaW5nRHJhZ2dlZE92ZXIgYXMgYW55KT8ucG9zaXRpb25YO1xuICAgIGNvbnN0IHBvc2l0aW9uWSA9IChzcXVhcmVCZWluZ0RyYWdnZWRPdmVyIGFzIGFueSk/LnBvc2l0aW9uWTtcbiAgICBjb25zdCBzcXVhcmVCZWluZ0RyYWdnZWRPdmVyUG9zaXRpb24gPSBwb3NpdGlvblkgKiA4ICsgcG9zaXRpb25YO1xuXG4gICAgc2V0UGxheWluZyh0cnVlKTtcblxuICAgIC8vIHJlc3RyaWN0IGdsb3dpbmcgZWxlbWVudHMgdG8gYWRqYWNlbnQgZnJvbSBzZWxlY3RlZCBlbGVtZW50IGJlaW5nIGRyYWdnZWRcbiAgICBpZiAoXG4gICAgICBNYXRoLmFicyhzcXVhcmVCZWluZ0RyYWdnZWRJbml0aWFsUG9zaXRpb24gLSBzcXVhcmVCZWluZ0RyYWdnZWRPdmVyUG9zaXRpb24pID09PSAxIHx8IC8vIGNoZWNrIGhvcml6b250YWwgYWRqYWNlbmN5XG4gICAgICBNYXRoLmFicyhzcXVhcmVCZWluZ0RyYWdnZWRJbml0aWFsUG9zaXRpb24gLSBzcXVhcmVCZWluZ0RyYWdnZWRPdmVyUG9zaXRpb24pID09PSA4IHx8IC8vIENoZWNrIGZvciB2ZXJ0aWNhbCBhZGphY2VuY3lcbiAgICAgIE1hdGguYWJzKHNxdWFyZUJlaW5nRHJhZ2dlZEluaXRpYWxQb3NpdGlvbiAtIHNxdWFyZUJlaW5nRHJhZ2dlZE92ZXJQb3NpdGlvbikgPT09IDcgfHwgLy8gQ2hlY2sgZm9yIGRpYWdvbmFsIGFkamFjZW5jeSAodG9wLWxlZnQvYm90dG9tLXJpZ2h0KVxuICAgICAgTWF0aC5hYnMoc3F1YXJlQmVpbmdEcmFnZ2VkSW5pdGlhbFBvc2l0aW9uIC0gc3F1YXJlQmVpbmdEcmFnZ2VkT3ZlclBvc2l0aW9uKSA9PT0gOSAvLyBDaGVjayBmb3IgZGlhZ29uYWwgYWRqYWNlbmN5ICh0b3AtcmlnaHQvYm90dG9tLWxlZnQpXG4gICAgKSB7XG5cbiAgICBpZiAoIXBsYXllZFNvdW5kRm9yRWxlbWVudC5oYXMoc3F1YXJlQmVpbmdEcmFnZ2VkT3ZlclBvc2l0aW9uKSBcbiAgICAgICYmICFzb3VuZENvb2xkb3duICYmICFwbGF5aW5nKSB7XG4gICAgICAgIGlmIChjYW5keUlkICE9PSBpbml0aWFsU3F1YXJlKSB7XG4gICAgICBwbGF5SG92ZXIoKTsgLy8gUGxheSB0aGUgc291bmQgaW1tZWRpYXRlbHlcblxuICAgICAgcGxheWVkU291bmRGb3JFbGVtZW50LmFkZChzcXVhcmVCZWluZ0RyYWdnZWRPdmVyUG9zaXRpb24pO1xuICAgICAgc2V0U291bmRDb29sZG93bih0cnVlKTsgLy8gU3RhcnQgdGhlIGNvb2xkb3duXG4gICAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRTb3VuZENvb2xkb3duKGZhbHNlKTsgLy8gRW5kIHRoZSBjb29sZG93biBhZnRlciB0aGUgZGVsYXlcbiAgICAgIH0sIDIwMCk7IC8vIEFkanVzdCB0aGUgZGVsYXkgYXMgbmVlZGVkXG4gICAgfVxuICAgICAgICAgIFxuICAgICAgaWYgKHNxdWFyZUJlaW5nRHJhZ2dlZE92ZXJQb3NpdGlvbiAhPT0gc3F1YXJlQmVpbmdEcmFnZ2VkSW5pdGlhbFBvc2l0aW9uKSB7XG4gICAgICAgIHRhcmdldC5zdHlsZS5ib3hTaGFkb3cgPSBpc0JlaW5nRHJhZ2dlZCA/IFwiMCAwIDEwcHggI2ZmZmZlMCwgMCAwIDIwcHggI2ZmZmZlMCwgMCAwIDMwcHggI2ZmZmZlMCwgMCAwIDQwcHggI2ZmZmZlMFwiIDogJyc7IC8vIEFwcGx5IGdsb3cgZWZmZWN0XG4gICAgICB9IGVsc2UgaWYoc3F1YXJlQmVpbmdEcmFnZ2VkT3ZlclBvc2l0aW9uID09PSBzcXVhcmVCZWluZ0RyYWdnZWRJbml0aWFsUG9zaXRpb24pIHtcbiAgICAgIHRhcmdldC5zdHlsZS5ib3hTaGFkb3cgPSBcIlwiO1xuICAgICAgfVxuICAgICAgZWxzZSB7ICBcbiAgICAgIHRhcmdldC5zdHlsZS5ib3hTaGFkb3cgPSBcIlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVsc2UgaWYgKGNhbmR5SWQgIT09IGluaXRpYWxTcXVhcmUpIHtcbiAgICAgIHRhcmdldC5zdHlsZS5ib3hTaGFkb3cgPSBcIlwiOyAvLyBSZW1vdmUgZ2xvdyBlZmZlY3QgaWYgbm90IGFkamFjZW50XG4gICAgICB0YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gXCJcIjsgLy8gUmVzZXQgc2l6ZVxuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQuc3R5bGUuYm94U2hhZG93ID0gXCIwIDAgMTBweCAjMDBmZmZmLCAwIDAgMjBweCAjMDBmZmZmLCAwIDAgMzBweCAjMDBmZmZmLCAwIDAgNDBweCAjMDBmZmZmXCI7XG4gICAgICBcbiAgICB9XG5cbiAgICBkaXNwYXRjaChkcmFnT3Zlcih7IHBvc2l0aW9uWDogY2FuZHlJZCAlIDgsIHBvc2l0aW9uWTogTWF0aC5mbG9vcihjYW5keUlkIC8gOCkgfSkpO1xuICAgIHNldFNxdWFyZVN0YXRlKChwcmV2U3F1YXJlU3RhdGUpID0+ICh7XG4gICAgICAuLi5wcmV2U3F1YXJlU3RhdGUsXG4gICAgICBkcmFnZ2VkT3ZlclNxdWFyZTogdGFyZ2V0XG4gICAgfSkpXG5cbiAgfTtcblxuICAgIC8vIHdoZW4gdGhlIHVzZXIgZHJvcHMgdGhlIGRyYWdnZWQgZWxlbWVudCBvbnRvIGFuIGludmFsaWQgbW92ZVxuICAgIGNvbnN0IGhhbmRsZU1vdXNlRHJhZ0xlYXZlID0gKGU6IFJlYWN0LkRyYWdFdmVudDxIVE1MSW1hZ2VFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgICAgICBjb25zdCBjYW5keUlkID0gcGFyc2VJbnQodGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2FuZHktaWQnKSB8fCAnMCcsIDEwKTtcblxuICAgICAgICBjb25zdCBwb3NpdGlvblggPSAoc3F1YXJlQmVpbmdEcmFnZ2VkT3ZlciBhcyBhbnkpPy5wb3NpdGlvblg7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uWSA9IChzcXVhcmVCZWluZ0RyYWdnZWRPdmVyIGFzIGFueSk/LnBvc2l0aW9uWTtcbiAgICAgICAgY29uc3Qgc3F1YXJlQmVpbmdEcmFnZ2VkT3ZlclBvc2l0aW9uID0gcG9zaXRpb25ZICogOCArIHBvc2l0aW9uWDtcblxuXG4gICAgICAgIHNldFBsYXlpbmcoZmFsc2UpO1xuICAgICAgICBwbGF5ZWRTb3VuZEZvckVsZW1lbnQuZGVsZXRlKHNxdWFyZUJlaW5nRHJhZ2dlZE92ZXJQb3NpdGlvbilcbiAgICAgICAgLy9leHBvc2VkRGF0YS5zb3VuZC5mYWRlKDAuMCwgLjUsIDMwMCk7XG4gICAgXG4gICAgICAgIGlmIChkcmFnZ2VkT3ZlclNxdWFyZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICAgICAgICAoZHJhZ2dlZE92ZXJTcXVhcmUgYXMgSFRNTEltYWdlRWxlbWVudCkuc3R5bGUuYm94U2hhZG93ID0gXCIgXCI7IC8vIFJlbW92ZSB0aGUgZ2xvdyBlZmZlY3QgZnJvbSB0aGUgZHJhZ2dlZCBvdmVyIHNxdWFyZVxuICAgICAgICBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpZiAoY2FuZHlJZCAhPT0gaW5pdGlhbFNxdWFyZSkge1xuICAgICAgICAgIC8vIE9ubHkgcmVtb3ZlIHRoZSBnbG93IGVmZmVjdCBpZiBpdCdzIG5vdCB0aGUgaW5pdGlhbCBzcXVhcmVcbiAgICAgICAgICB0YXJnZXQuc3R5bGUuYm94U2hhZG93ID0gXCJcIjtcbiAgICAgICAgICB0YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBkaXNwYXRjaChkcmFnRW5kKCkpO1xuICAgICAgICBzZXRTcXVhcmVTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgaXNCZWluZ0RyYWdnZWQ6IGZhbHNlXG4gICAgICAgIH0pKTtcbiAgICAgIH07XG5cbiAgICAvLyB3aGVuIHVzZXIgZHJvcHMgb250byBhbm90aGVyIHZhbGlkIHRpbGUgd2l0aCBpbnZhbGlkIHJlc3VsdFxuICAgIGNvbnN0IGhhbmRsZU1vdXNlRHJvcCA9IChlOiBSZWFjdC5EcmFnRXZlbnQ8SFRNTEltYWdlRWxlbWVudD4pID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmJveFNoYWRvdyA9IFwiXCI7XG4gICAgICAgIGRpc3BhdGNoKGRyYWdEcm9wKGUudGFyZ2V0KSlcbiAgfVxuXG4gICAgLy8gd2hlbiB1c2VyIHJlbGVhc2VzIHRoZSBkcmFnZ2VkIGVsZW1lbnQgXG4gICAgY29uc3QgaGFuZGxlTW91c2VEcmFnRW5kID0gKGU6IFJlYWN0LkRyYWdFdmVudDxIVE1MSW1hZ2VFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgICAgICB0YXJnZXQuc3R5bGUuYm94U2hhZG93ID0gXCJcIjsgLy8gUmVtb3ZlIHRoZSBib3ggc2hhZG93XG4gICAgICAgIHRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiOyAvLyBSZXNldCB0aGUgc2l6ZVxuICAgICAgICBzZXRTcXVhcmVTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgaW5pdGlhbFNxdWFyZTogMFxuICAgICAgICB9KSk7IC8vIHJlc2V0IGluaXRpYWwgc3F1YXJlXG4gICAgICAgIGRpc3BhdGNoKGRyYWdFbmQoKSk7XG4gICAgICAgIHNldFNxdWFyZVN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICBpc0JlaW5nRHJhZ2dlZDogZmFsc2VcbiAgICAgICAgfSkpO1xuICAgICAgfTtcblxuICAgIHJldHVybiB7IFxuICAgICAgICBoYW5kbGVNb3VzZURyYWdTdGFydCwgXG4gICAgICAgIGhhbmRsZU1vdXNlRHJhZ092ZXIsIFxuICAgICAgICBoYW5kbGVNb3VzZURyYWdMZWF2ZSwgXG4gICAgICAgIGhhbmRsZU1vdXNlRHJvcCxcbiAgICAgICAgaGFuZGxlTW91c2VEcmFnRW5kIH07XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJkcmFnRHJvcCIsImRyYWdFbmQiLCJkcmFnU3RhcnQiLCJkcmFnT3ZlciIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJ1c2VTb3VuZCIsInVzZU1vdXNlSGFuZGxlcnMiLCJzZXRTcXVhcmVTdGF0ZSIsImlzQmVpbmdEcmFnZ2VkIiwiaW5pdGlhbFNxdWFyZSIsImRyYWdnZWRPdmVyU3F1YXJlIiwicGxheWVkU291bmRGb3JFbGVtZW50Iiwic3F1YXJlQmVpbmdEcmFnZ2VkIiwic3RhdGUiLCJjYW5keUNydXNoIiwic3F1YXJlQmVpbmdEcmFnZ2VkT3ZlciIsInBsYXlIb3ZlciIsImV4cG9zZWREYXRhIiwicGxheWluZyIsInNldFBsYXlpbmciLCJzb3VuZENvb2xkb3duIiwic2V0U291bmRDb29sZG93biIsInByZXZpb3VzTW91c2VYIiwic2V0UHJldmlvdXNNb3VzZVgiLCJwcmV2aW91c01vdXNlWSIsInNldFByZXZpb3VzTW91c2VZIiwiZGlzcGF0Y2giLCJoYW5kbGVNb3VzZURyYWdTdGFydCIsImUiLCJwcmV2U3RhdGUiLCJ0YXJnZXQiLCJjYW5keUlkIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJzdHlsZSIsImJveFNoYWRvdyIsInRyYW5zZm9ybSIsInByZXZTcXVhcmVTdGF0ZSIsImFkZCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVNb3VzZURyYWdPdmVyIiwicHJldmVudERlZmF1bHQiLCJzcXVhcmVCZWluZ0RyYWdnZWRJbml0aWFsUG9zaXRpb24iLCJwb3NpdGlvblgiLCJwb3NpdGlvblkiLCJzcXVhcmVCZWluZ0RyYWdnZWRPdmVyUG9zaXRpb24iLCJNYXRoIiwiYWJzIiwiaGFzIiwic2V0VGltZW91dCIsImZsb29yIiwiaGFuZGxlTW91c2VEcmFnTGVhdmUiLCJkZWxldGUiLCJIVE1MSW1hZ2VFbGVtZW50IiwiaGFuZGxlTW91c2VEcm9wIiwiaGFuZGxlTW91c2VEcmFnRW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/user-actions/mouseEvents.ts\n"));

/***/ })

});