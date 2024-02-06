"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_pages_play_tsx",{

/***/ "./src/utils/user-actions/mouseEvents.ts":
/*!***********************************************!*\
  !*** ./src/utils/user-actions/mouseEvents.ts ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useMouseHandlers: function() { return /* binding */ useMouseHandlers; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/index */ \"./src/store/index.ts\");\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/hooks */ \"./src/store/hooks.ts\");\n/* harmony import */ var use_sound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-sound */ \"./node_modules/use-sound/dist/use-sound.esm.js\");\n\n\n\n\nfunction useMouseHandlers(setSquareState, isBeingDragged, initialSquare, draggedOverSquare, playedSoundForElement) {\n    // redux state extraction \n    const squareBeingDragged = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.candyCrush.squareBeingDragged);\n    const squareBeingDraggedOver = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.candyCrush.squareBeingDraggedOver);\n    const [playHover, exposedData] = (0,use_sound__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"hover-over.mp3\");\n    const [playing, setPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const [soundCooldown, setSoundCooldown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const [previousMouseX, setPreviousMouseX] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const [previousMouseY, setPreviousMouseY] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    // event when user selects an element to drag\n    const handleMouseDragStart = (e)=>{\n        setSquareState((prevState)=>({\n                ...prevState,\n                isBeingDragged: true\n            }));\n        const target = e.target;\n        const candyId = parseInt(target.getAttribute(\"candy-id\") || \"0\", 10);\n        target.style.boxShadow = \"0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff\";\n        target.style.transform = \"scale(1.3)\"; // Grow the size by 10%\n        setSquareState((prevSquareState)=>({\n                ...prevSquareState,\n                initialSquare: candyId\n            }));\n        // Add the position of the initial element being dragged to the set\n        playedSoundForElement.add(candyId);\n        console.log(\"played for elem\", playedSoundForElement);\n        dispatch((0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dragStart)(e.target));\n        console.log(\"sd\"); // Logs the updated value within the callback\n    };\n    // event when user drags an element \n    const handleMouseDragOver = (e)=>{\n        e.preventDefault();\n        setSquareState((prevState)=>({\n                ...prevState,\n                isBeingDragged: true\n            }));\n        const target = e.target;\n        const candyId = parseInt(target.getAttribute(\"candy-id\") || \"0\", 10);\n        const squareBeingDraggedInitialPosition = squareBeingDragged.getAttribute(\"candy-id\");\n        const positionX = squareBeingDraggedOver === null || squareBeingDraggedOver === void 0 ? void 0 : squareBeingDraggedOver.positionX;\n        const positionY = squareBeingDraggedOver === null || squareBeingDraggedOver === void 0 ? void 0 : squareBeingDraggedOver.positionY;\n        const squareBeingDraggedOverPosition = positionY * 8 + positionX;\n        setPlaying(true);\n        // restrict glowing elements to adjacent from selected element being dragged\n        if (Math.abs(squareBeingDraggedInitialPosition - squareBeingDraggedOverPosition) === 1 || // check horizontal adjacency\n        Math.abs(squareBeingDraggedInitialPosition - squareBeingDraggedOverPosition) === 8 || // Check for vertical adjacency\n        Math.abs(squareBeingDraggedInitialPosition - squareBeingDraggedOverPosition) === 7 || // Check for diagonal adjacency (top-left/bottom-right)\n        Math.abs(squareBeingDraggedInitialPosition - squareBeingDraggedOverPosition) === 9 // Check for diagonal adjacency (top-right/bottom-left)\n        ) {\n            if (!playedSoundForElement.has(squareBeingDraggedOverPosition) && !soundCooldown && !playing) {\n                if (candyId !== initialSquare) {\n                    playHover(); // Play the sound immediately\n                    playedSoundForElement.add(squareBeingDraggedOverPosition);\n                    setSoundCooldown(true); // Start the cooldown\n                    setTimeout(()=>{\n                        setSoundCooldown(false); // End the cooldown after the delay\n                    }, 200); // Adjust the delay as needed\n                }\n            }\n            if (squareBeingDraggedOverPosition !== squareBeingDraggedInitialPosition) {\n                target.style.boxShadow = isBeingDragged ? \"0 0 10px #ffffe0, 0 0 20px #ffffe0, 0 0 30px #ffffe0, 0 0 40px #ffffe0\" : \"\"; // Apply glow effect\n            } else if (squareBeingDraggedOverPosition === squareBeingDraggedInitialPosition) {\n                target.style.boxShadow = \"\";\n            } else {\n                target.style.boxShadow = \"\";\n            }\n        } else if (candyId !== initialSquare) {\n            target.style.boxShadow = \"\"; // Remove glow effect if not adjacent\n            target.style.transform = \"\"; // Reset size\n        } else {\n            target.style.boxShadow = \"0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff\";\n        }\n        dispatch((0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dragOver)({\n            positionX: candyId % 8,\n            positionY: Math.floor(candyId / 8)\n        }));\n        setSquareState((prevSquareState)=>({\n                ...prevSquareState,\n                draggedOverSquare: target\n            }));\n    };\n    // when the user drops the dragged element onto an invalid move\n    const handleMouseDragLeave = (e)=>{\n        const target = e.target;\n        const candyId = parseInt(target.getAttribute(\"candy-id\") || \"0\", 10);\n        const positionX = squareBeingDraggedOver === null || squareBeingDraggedOver === void 0 ? void 0 : squareBeingDraggedOver.positionX;\n        const positionY = squareBeingDraggedOver === null || squareBeingDraggedOver === void 0 ? void 0 : squareBeingDraggedOver.positionY;\n        const squareBeingDraggedOverPosition = positionY * 8 + positionX;\n        setPlaying(false);\n        playedSoundForElement.delete(squareBeingDraggedOverPosition);\n        //exposedData.sound.fade(0.0, .5, 300);\n        if (draggedOverSquare instanceof HTMLImageElement) {\n            draggedOverSquare.style.boxShadow = \" \"; // Remove the glow effect from the dragged over square\n        }\n        if (candyId !== initialSquare) {\n            // Only remove the glow effect if it's not the initial square\n            target.style.boxShadow = \"\";\n            target.style.transform = \"\";\n        }\n        dispatch((0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dragEnd)());\n        setSquareState((prevState)=>({\n                ...prevState,\n                isBeingDragged: false\n            }));\n    };\n    // when user drops onto another valid tile with invalid result\n    const handleMouseDrop = (e)=>{\n        const target = e.target;\n        target.style.boxShadow = \"\";\n        dispatch((0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dragDrop)(e.target));\n    };\n    // when user releases the dragged element \n    const handleMouseDragEnd = (e)=>{\n        const target = e.target;\n        target.style.boxShadow = \"\"; // Remove the box shadow\n        target.style.transform = \"\"; // Reset the size\n        setSquareState((prevState)=>({\n                ...prevState,\n                initialSquare: 0\n            })); // reset initial square\n        dispatch((0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dragEnd)());\n        setSquareState((prevState)=>({\n                ...prevState,\n                isBeingDragged: false\n            }));\n    };\n    return {\n        handleMouseDragStart,\n        handleMouseDragOver,\n        handleMouseDragLeave,\n        handleMouseDrop,\n        handleMouseDragEnd\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Tl9FLy4vc3JjL3V0aWxzL3VzZXItYWN0aW9ucy9tb3VzZUV2ZW50cy50cz8zZGE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBkcmFnRHJvcCwgZHJhZ0VuZCwgZHJhZ1N0YXJ0LCBkcmFnT3ZlciB9IGZyb20gXCIuLi8uLi9zdG9yZS9pbmRleFwiO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2hvb2tzXCI7XG5pbXBvcnQgdXNlU291bmQgZnJvbSAndXNlLXNvdW5kJztcblxuaW50ZXJmYWNlIFNxdWFyZVN0YXRlIHtcbiAgICBpbml0aWFsU3F1YXJlOiBudW1iZXI7XG4gICAgZHJhZ2dlZE92ZXJTcXVhcmU6IGFueTtcbiAgICBpc0JlaW5nRHJhZ2dlZDogYm9vbGVhbjtcbiAgICBnbG93aW5nRWxlbWVudHM6IEhUTUxJbWFnZUVsZW1lbnRbXTtcbiAgICBwbGF5ZWRTb3VuZEZvckVsZW1lbnQ6IFNldDxudW1iZXI+O1xuICAgIH07XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VNb3VzZUhhbmRsZXJzKFxuICAgIHNldFNxdWFyZVN0YXRlOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxTcXVhcmVTdGF0ZT4+LFxuICAgIGlzQmVpbmdEcmFnZ2VkOiBib29sZWFuLFxuICAgIGluaXRpYWxTcXVhcmU6IG51bWJlcixcbiAgICBkcmFnZ2VkT3ZlclNxdWFyZTogYW55LFxuICAgIHBsYXllZFNvdW5kRm9yRWxlbWVudDogYW55LFxuXG4pIHtcblxuICAgIC8vIHJlZHV4IHN0YXRlIGV4dHJhY3Rpb24gXG4gICAgY29uc3Qgc3F1YXJlQmVpbmdEcmFnZ2VkID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYW5keUNydXNoLnNxdWFyZUJlaW5nRHJhZ2dlZCk7XG4gICAgY29uc3Qgc3F1YXJlQmVpbmdEcmFnZ2VkT3ZlciA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FuZHlDcnVzaC5zcXVhcmVCZWluZ0RyYWdnZWRPdmVyKTtcblxuICAgIGNvbnN0IFtwbGF5SG92ZXIsIGV4cG9zZWREYXRhXSA9IHVzZVNvdW5kKCdob3Zlci1vdmVyLm1wMycpO1xuICAgIGNvbnN0IFtwbGF5aW5nLCBzZXRQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc291bmRDb29sZG93biwgc2V0U291bmRDb29sZG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3ByZXZpb3VzTW91c2VYLCBzZXRQcmV2aW91c01vdXNlWF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbcHJldmlvdXNNb3VzZVksIHNldFByZXZpb3VzTW91c2VZXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuXG4gICAgLy8gZXZlbnQgd2hlbiB1c2VyIHNlbGVjdHMgYW4gZWxlbWVudCB0byBkcmFnXG4gICAgY29uc3QgaGFuZGxlTW91c2VEcmFnU3RhcnQgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MSW1hZ2VFbGVtZW50PikgPT4ge1xuICAgICAgICBzZXRTcXVhcmVTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgIGlzQmVpbmdEcmFnZ2VkOiB0cnVlXG4gICAgICAgIH0pKTtcblxuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgICAgICBjb25zdCBjYW5keUlkID0gcGFyc2VJbnQodGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2FuZHktaWQnKSB8fCAnMCcsIDEwKTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmJveFNoYWRvdyA9IFwiMCAwIDEwcHggIzAwZmZmZiwgMCAwIDIwcHggIzAwZmZmZiwgMCAwIDMwcHggIzAwZmZmZiwgMCAwIDQwcHggIzAwZmZmZlwiO1xuICAgICAgICB0YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxLjMpXCI7IC8vIEdyb3cgdGhlIHNpemUgYnkgMTAlXG5cbiAgICAgICAgc2V0U3F1YXJlU3RhdGUoKHByZXZTcXVhcmVTdGF0ZSkgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXZTcXVhcmVTdGF0ZSxcbiAgICAgICAgICAgIGluaXRpYWxTcXVhcmU6IGNhbmR5SWRcbiAgICAgICAgfSkpXG5cbiAgICAgICAgLy8gQWRkIHRoZSBwb3NpdGlvbiBvZiB0aGUgaW5pdGlhbCBlbGVtZW50IGJlaW5nIGRyYWdnZWQgdG8gdGhlIHNldFxuICAgICAgICBwbGF5ZWRTb3VuZEZvckVsZW1lbnQuYWRkKGNhbmR5SWQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZWQgZm9yIGVsZW0nLHBsYXllZFNvdW5kRm9yRWxlbWVudClcbiAgICAgICAgXG4gICAgICAgIGRpc3BhdGNoKGRyYWdTdGFydChlLnRhcmdldCkpO1xuICAgICAgICBjb25zb2xlLmxvZygnc2QnKTsgLy8gTG9ncyB0aGUgdXBkYXRlZCB2YWx1ZSB3aXRoaW4gdGhlIGNhbGxiYWNrXG4gICAgfTtcblxuICAgIC8vIGV2ZW50IHdoZW4gdXNlciBkcmFncyBhbiBlbGVtZW50IFxuICAgIGNvbnN0IGhhbmRsZU1vdXNlRHJhZ092ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MSW1hZ2VFbGVtZW50PikgPT4ge1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgc2V0U3F1YXJlU3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICBpc0JlaW5nRHJhZ2dlZDogdHJ1ZVxuICAgICAgfSkpO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICBjb25zdCBjYW5keUlkID0gcGFyc2VJbnQodGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2FuZHktaWQnKSB8fCAnMCcsIDEwKTtcbiAgICBcbiAgICBjb25zdCBzcXVhcmVCZWluZ0RyYWdnZWRJbml0aWFsUG9zaXRpb24gPSAoc3F1YXJlQmVpbmdEcmFnZ2VkIGFzIGFueSkuZ2V0QXR0cmlidXRlKCdjYW5keS1pZCcpO1xuXG4gICAgY29uc3QgcG9zaXRpb25YID0gKHNxdWFyZUJlaW5nRHJhZ2dlZE92ZXIgYXMgYW55KT8ucG9zaXRpb25YO1xuICAgIGNvbnN0IHBvc2l0aW9uWSA9IChzcXVhcmVCZWluZ0RyYWdnZWRPdmVyIGFzIGFueSk/LnBvc2l0aW9uWTtcbiAgICBjb25zdCBzcXVhcmVCZWluZ0RyYWdnZWRPdmVyUG9zaXRpb24gPSBwb3NpdGlvblkgKiA4ICsgcG9zaXRpb25YO1xuXG4gICAgc2V0UGxheWluZyh0cnVlKTtcblxuICAgIC8vIHJlc3RyaWN0IGdsb3dpbmcgZWxlbWVudHMgdG8gYWRqYWNlbnQgZnJvbSBzZWxlY3RlZCBlbGVtZW50IGJlaW5nIGRyYWdnZWRcbiAgICBpZiAoXG4gICAgICBNYXRoLmFicyhzcXVhcmVCZWluZ0RyYWdnZWRJbml0aWFsUG9zaXRpb24gLSBzcXVhcmVCZWluZ0RyYWdnZWRPdmVyUG9zaXRpb24pID09PSAxIHx8IC8vIGNoZWNrIGhvcml6b250YWwgYWRqYWNlbmN5XG4gICAgICBNYXRoLmFicyhzcXVhcmVCZWluZ0RyYWdnZWRJbml0aWFsUG9zaXRpb24gLSBzcXVhcmVCZWluZ0RyYWdnZWRPdmVyUG9zaXRpb24pID09PSA4IHx8IC8vIENoZWNrIGZvciB2ZXJ0aWNhbCBhZGphY2VuY3lcbiAgICAgIE1hdGguYWJzKHNxdWFyZUJlaW5nRHJhZ2dlZEluaXRpYWxQb3NpdGlvbiAtIHNxdWFyZUJlaW5nRHJhZ2dlZE92ZXJQb3NpdGlvbikgPT09IDcgfHwgLy8gQ2hlY2sgZm9yIGRpYWdvbmFsIGFkamFjZW5jeSAodG9wLWxlZnQvYm90dG9tLXJpZ2h0KVxuICAgICAgTWF0aC5hYnMoc3F1YXJlQmVpbmdEcmFnZ2VkSW5pdGlhbFBvc2l0aW9uIC0gc3F1YXJlQmVpbmdEcmFnZ2VkT3ZlclBvc2l0aW9uKSA9PT0gOSAvLyBDaGVjayBmb3IgZGlhZ29uYWwgYWRqYWNlbmN5ICh0b3AtcmlnaHQvYm90dG9tLWxlZnQpXG4gICAgKSB7XG5cbiAgICBpZiAoIXBsYXllZFNvdW5kRm9yRWxlbWVudC5oYXMoc3F1YXJlQmVpbmdEcmFnZ2VkT3ZlclBvc2l0aW9uKSBcbiAgICAgICYmICFzb3VuZENvb2xkb3duICYmICFwbGF5aW5nKSB7XG5cbiAgICAgICAgaWYgKGNhbmR5SWQgIT09IGluaXRpYWxTcXVhcmUpIHsgIFxuICAgICAgcGxheUhvdmVyKCk7IC8vIFBsYXkgdGhlIHNvdW5kIGltbWVkaWF0ZWx5XG4gICAgICBwbGF5ZWRTb3VuZEZvckVsZW1lbnQuYWRkKHNxdWFyZUJlaW5nRHJhZ2dlZE92ZXJQb3NpdGlvbik7XG4gICAgICBzZXRTb3VuZENvb2xkb3duKHRydWUpOyAvLyBTdGFydCB0aGUgY29vbGRvd25cblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFNvdW5kQ29vbGRvd24oZmFsc2UpOyAvLyBFbmQgdGhlIGNvb2xkb3duIGFmdGVyIHRoZSBkZWxheVxuICAgICAgfSwgMjAwKTsgLy8gQWRqdXN0IHRoZSBkZWxheSBhcyBuZWVkZWRcbiAgICB9XG4gIH1cbiAgICAgICAgICBcbiAgICAgIGlmIChzcXVhcmVCZWluZ0RyYWdnZWRPdmVyUG9zaXRpb24gIT09IHNxdWFyZUJlaW5nRHJhZ2dlZEluaXRpYWxQb3NpdGlvbikge1xuICAgICAgICB0YXJnZXQuc3R5bGUuYm94U2hhZG93ID0gaXNCZWluZ0RyYWdnZWQgPyBcIjAgMCAxMHB4ICNmZmZmZTAsIDAgMCAyMHB4ICNmZmZmZTAsIDAgMCAzMHB4ICNmZmZmZTAsIDAgMCA0MHB4ICNmZmZmZTBcIiA6ICcnOyAvLyBBcHBseSBnbG93IGVmZmVjdFxuICAgICAgfSBlbHNlIGlmKHNxdWFyZUJlaW5nRHJhZ2dlZE92ZXJQb3NpdGlvbiA9PT0gc3F1YXJlQmVpbmdEcmFnZ2VkSW5pdGlhbFBvc2l0aW9uKSB7XG4gICAgICB0YXJnZXQuc3R5bGUuYm94U2hhZG93ID0gXCJcIjtcbiAgICAgIH1cbiAgICAgIGVsc2UgeyAgXG4gICAgICB0YXJnZXQuc3R5bGUuYm94U2hhZG93ID0gXCJcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmIChjYW5keUlkICE9PSBpbml0aWFsU3F1YXJlKSB7XG4gICAgICB0YXJnZXQuc3R5bGUuYm94U2hhZG93ID0gXCJcIjsgLy8gUmVtb3ZlIGdsb3cgZWZmZWN0IGlmIG5vdCBhZGphY2VudFxuICAgICAgdGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9IFwiXCI7IC8vIFJlc2V0IHNpemVcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LnN0eWxlLmJveFNoYWRvdyA9IFwiMCAwIDEwcHggIzAwZmZmZiwgMCAwIDIwcHggIzAwZmZmZiwgMCAwIDMwcHggIzAwZmZmZiwgMCAwIDQwcHggIzAwZmZmZlwiO1xuICAgICAgXG4gICAgfVxuXG4gICAgZGlzcGF0Y2goZHJhZ092ZXIoeyBwb3NpdGlvblg6IGNhbmR5SWQgJSA4LCBwb3NpdGlvblk6IE1hdGguZmxvb3IoY2FuZHlJZCAvIDgpIH0pKTtcbiAgICBzZXRTcXVhcmVTdGF0ZSgocHJldlNxdWFyZVN0YXRlKSA9PiAoe1xuICAgICAgLi4ucHJldlNxdWFyZVN0YXRlLFxuICAgICAgZHJhZ2dlZE92ZXJTcXVhcmU6IHRhcmdldFxuICAgIH0pKVxuXG4gIH07XG5cbiAgICAvLyB3aGVuIHRoZSB1c2VyIGRyb3BzIHRoZSBkcmFnZ2VkIGVsZW1lbnQgb250byBhbiBpbnZhbGlkIG1vdmVcbiAgICBjb25zdCBoYW5kbGVNb3VzZURyYWdMZWF2ZSA9IChlOiBSZWFjdC5EcmFnRXZlbnQ8SFRNTEltYWdlRWxlbWVudD4pID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICAgICAgY29uc3QgY2FuZHlJZCA9IHBhcnNlSW50KHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NhbmR5LWlkJykgfHwgJzAnLCAxMCk7XG5cbiAgICAgICAgY29uc3QgcG9zaXRpb25YID0gKHNxdWFyZUJlaW5nRHJhZ2dlZE92ZXIgYXMgYW55KT8ucG9zaXRpb25YO1xuICAgICAgICBjb25zdCBwb3NpdGlvblkgPSAoc3F1YXJlQmVpbmdEcmFnZ2VkT3ZlciBhcyBhbnkpPy5wb3NpdGlvblk7XG4gICAgICAgIGNvbnN0IHNxdWFyZUJlaW5nRHJhZ2dlZE92ZXJQb3NpdGlvbiA9IHBvc2l0aW9uWSAqIDggKyBwb3NpdGlvblg7XG5cblxuICAgICAgICBzZXRQbGF5aW5nKGZhbHNlKTtcbiAgICAgICAgcGxheWVkU291bmRGb3JFbGVtZW50LmRlbGV0ZShzcXVhcmVCZWluZ0RyYWdnZWRPdmVyUG9zaXRpb24pXG4gICAgICAgIC8vZXhwb3NlZERhdGEuc291bmQuZmFkZSgwLjAsIC41LCAzMDApO1xuICAgIFxuICAgICAgICBpZiAoZHJhZ2dlZE92ZXJTcXVhcmUgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgICAgICAgKGRyYWdnZWRPdmVyU3F1YXJlIGFzIEhUTUxJbWFnZUVsZW1lbnQpLnN0eWxlLmJveFNoYWRvdyA9IFwiIFwiOyAvLyBSZW1vdmUgdGhlIGdsb3cgZWZmZWN0IGZyb20gdGhlIGRyYWdnZWQgb3ZlciBzcXVhcmVcbiAgICAgICAgXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYgKGNhbmR5SWQgIT09IGluaXRpYWxTcXVhcmUpIHtcbiAgICAgICAgICAvLyBPbmx5IHJlbW92ZSB0aGUgZ2xvdyBlZmZlY3QgaWYgaXQncyBub3QgdGhlIGluaXRpYWwgc3F1YXJlXG4gICAgICAgICAgdGFyZ2V0LnN0eWxlLmJveFNoYWRvdyA9IFwiXCI7XG4gICAgICAgICAgdGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGF0Y2goZHJhZ0VuZCgpKTtcbiAgICAgICAgc2V0U3F1YXJlU3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgIGlzQmVpbmdEcmFnZ2VkOiBmYWxzZVxuICAgICAgICB9KSk7XG4gICAgICB9O1xuXG4gICAgLy8gd2hlbiB1c2VyIGRyb3BzIG9udG8gYW5vdGhlciB2YWxpZCB0aWxlIHdpdGggaW52YWxpZCByZXN1bHRcbiAgICBjb25zdCBoYW5kbGVNb3VzZURyb3AgPSAoZTogUmVhY3QuRHJhZ0V2ZW50PEhUTUxJbWFnZUVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgICAgIHRhcmdldC5zdHlsZS5ib3hTaGFkb3cgPSBcIlwiO1xuICAgICAgICBkaXNwYXRjaChkcmFnRHJvcChlLnRhcmdldCkpXG4gIH1cblxuICAgIC8vIHdoZW4gdXNlciByZWxlYXNlcyB0aGUgZHJhZ2dlZCBlbGVtZW50IFxuICAgIGNvbnN0IGhhbmRsZU1vdXNlRHJhZ0VuZCA9IChlOiBSZWFjdC5EcmFnRXZlbnQ8SFRNTEltYWdlRWxlbWVudD4pID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmJveFNoYWRvdyA9IFwiXCI7IC8vIFJlbW92ZSB0aGUgYm94IHNoYWRvd1xuICAgICAgICB0YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gXCJcIjsgLy8gUmVzZXQgdGhlIHNpemVcbiAgICAgICAgc2V0U3F1YXJlU3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgIGluaXRpYWxTcXVhcmU6IDBcbiAgICAgICAgfSkpOyAvLyByZXNldCBpbml0aWFsIHNxdWFyZVxuICAgICAgICBkaXNwYXRjaChkcmFnRW5kKCkpO1xuICAgICAgICBzZXRTcXVhcmVTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgaXNCZWluZ0RyYWdnZWQ6IGZhbHNlXG4gICAgICAgIH0pKTtcbiAgICAgIH07XG5cbiAgICByZXR1cm4geyBcbiAgICAgICAgaGFuZGxlTW91c2VEcmFnU3RhcnQsIFxuICAgICAgICBoYW5kbGVNb3VzZURyYWdPdmVyLCBcbiAgICAgICAgaGFuZGxlTW91c2VEcmFnTGVhdmUsIFxuICAgICAgICBoYW5kbGVNb3VzZURyb3AsXG4gICAgICAgIGhhbmRsZU1vdXNlRHJhZ0VuZCB9O1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZHJhZ0Ryb3AiLCJkcmFnRW5kIiwiZHJhZ1N0YXJ0IiwiZHJhZ092ZXIiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwidXNlU291bmQiLCJ1c2VNb3VzZUhhbmRsZXJzIiwic2V0U3F1YXJlU3RhdGUiLCJpc0JlaW5nRHJhZ2dlZCIsImluaXRpYWxTcXVhcmUiLCJkcmFnZ2VkT3ZlclNxdWFyZSIsInBsYXllZFNvdW5kRm9yRWxlbWVudCIsInNxdWFyZUJlaW5nRHJhZ2dlZCIsInN0YXRlIiwiY2FuZHlDcnVzaCIsInNxdWFyZUJlaW5nRHJhZ2dlZE92ZXIiLCJwbGF5SG92ZXIiLCJleHBvc2VkRGF0YSIsInBsYXlpbmciLCJzZXRQbGF5aW5nIiwic291bmRDb29sZG93biIsInNldFNvdW5kQ29vbGRvd24iLCJwcmV2aW91c01vdXNlWCIsInNldFByZXZpb3VzTW91c2VYIiwicHJldmlvdXNNb3VzZVkiLCJzZXRQcmV2aW91c01vdXNlWSIsImRpc3BhdGNoIiwiaGFuZGxlTW91c2VEcmFnU3RhcnQiLCJlIiwicHJldlN0YXRlIiwidGFyZ2V0IiwiY2FuZHlJZCIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwic3R5bGUiLCJib3hTaGFkb3ciLCJ0cmFuc2Zvcm0iLCJwcmV2U3F1YXJlU3RhdGUiLCJhZGQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlTW91c2VEcmFnT3ZlciIsInByZXZlbnREZWZhdWx0Iiwic3F1YXJlQmVpbmdEcmFnZ2VkSW5pdGlhbFBvc2l0aW9uIiwicG9zaXRpb25YIiwicG9zaXRpb25ZIiwic3F1YXJlQmVpbmdEcmFnZ2VkT3ZlclBvc2l0aW9uIiwiTWF0aCIsImFicyIsImhhcyIsInNldFRpbWVvdXQiLCJmbG9vciIsImhhbmRsZU1vdXNlRHJhZ0xlYXZlIiwiZGVsZXRlIiwiSFRNTEltYWdlRWxlbWVudCIsImhhbmRsZU1vdXNlRHJvcCIsImhhbmRsZU1vdXNlRHJhZ0VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/user-actions/mouseEvents.ts\n"));

/***/ })

});