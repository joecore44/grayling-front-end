/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout/ScrollToTop.js":
/*!******************************************!*\
  !*** ./components/Layout/ScrollToTop.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ScrollToTop = ()=>{\n    const { 0: showScroll , 1: setShowScroll  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", checkScrollTop);\n        return function cleanup() {\n            window.removeEventListener(\"scroll\", checkScrollTop);\n        };\n    });\n    const checkScrollTop = ()=>{\n        if (!showScroll && window.pageYOffset > 100) {\n            setShowScroll(true);\n        } else if (showScroll && window.pageYOffset <= 100) {\n            setShowScroll(false);\n        }\n    };\n    const scrollTop = ()=>{\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"scroll-to-top\",\n            onClick: scrollTop,\n            style: {\n                display: showScroll ? \"block\" : \"none\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                className: \"ri-arrow-up-line\"\n            }, void 0, false, {\n                fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Layout/ScrollToTop.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Layout/ScrollToTop.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollToTop);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9TY3JvbGxUb1RvcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQW1EO0FBRW5ELE1BQU1HLFdBQVcsR0FBRyxJQUFNO0lBQ3hCLE1BQU0sRUFIUixHQUdTQyxVQUFVLEdBSG5CLEdBR3FCQyxhQUFhLE1BQUlKLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBRW5EQyxnREFBUyxDQUFDLElBQU07UUFDZEksTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sU0FBU0MsT0FBTyxHQUFHO1lBQ3hCSCxNQUFNLENBQUNJLG1CQUFtQixDQUFDLFFBQVEsRUFBRUYsY0FBYyxDQUFDLENBQUM7U0FDdEQsQ0FBQztLQUNILENBQUMsQ0FBQztJQUVILE1BQU1BLGNBQWMsR0FBRyxJQUFNO1FBQzNCLElBQUksQ0FBQ0osVUFBVSxJQUFJRSxNQUFNLENBQUNLLFdBQVcsR0FBRyxHQUFHLEVBQUU7WUFDM0NOLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyQixNQUFNLElBQUlELFVBQVUsSUFBSUUsTUFBTSxDQUFDSyxXQUFXLElBQUksR0FBRyxFQUFFO1lBQ2xETixhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7S0FDRjtJQUVELE1BQU1PLFNBQVMsR0FBRyxJQUFNO1FBQ3RCTixNQUFNLENBQUNPLFFBQVEsQ0FBQztZQUFFQyxHQUFHLEVBQUUsQ0FBQztZQUFFQyxRQUFRLEVBQUUsUUFBUTtTQUFFLENBQUMsQ0FBQztLQUNqRDtJQUVELHFCQUNFO2tCQUNFLDRFQUFDQyxLQUFHO1lBQ0ZDLFNBQVMsRUFBQyxlQUFlO1lBQ3pCQyxPQUFPLEVBQUVOLFNBQVM7WUFDbEJPLEtBQUssRUFBRTtnQkFDTEMsT0FBTyxFQUFFaEIsVUFBVSxHQUFHLE9BQU8sR0FBRyxNQUFNO2FBQ3ZDO3NCQUVELDRFQUFDaUIsR0FBQztnQkFBQ0osU0FBUyxFQUFDLGtCQUFrQjs7Ozs7eUJBQUs7Ozs7O3FCQUNoQztxQkFDTCxDQUNIO0NBQ0g7QUFFRCxpRUFBZWQsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGV6YS8uL2NvbXBvbmVudHMvTGF5b3V0L1Njcm9sbFRvVG9wLmpzPzQ0MWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XG4gIGNvbnN0IFtzaG93U2Nyb2xsLCBzZXRTaG93U2Nyb2xsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGNoZWNrU2Nyb2xsVG9wKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGNoZWNrU2Nyb2xsVG9wKTtcbiAgICB9O1xuICB9KTtcblxuICBjb25zdCBjaGVja1Njcm9sbFRvcCA9ICgpID0+IHtcbiAgICBpZiAoIXNob3dTY3JvbGwgJiYgd2luZG93LnBhZ2VZT2Zmc2V0ID4gMTAwKSB7XG4gICAgICBzZXRTaG93U2Nyb2xsKHRydWUpO1xuICAgIH0gZWxzZSBpZiAoc2hvd1Njcm9sbCAmJiB3aW5kb3cucGFnZVlPZmZzZXQgPD0gMTAwKSB7XG4gICAgICBzZXRTaG93U2Nyb2xsKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2Nyb2xsVG9wID0gKCkgPT4ge1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJzY3JvbGwtdG8tdG9wXCJcbiAgICAgICAgb25DbGljaz17c2Nyb2xsVG9wfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IHNob3dTY3JvbGwgPyBcImJsb2NrXCIgOiBcIm5vbmVcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwicmktYXJyb3ctdXAtbGluZVwiPjwvaT5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsVG9Ub3A7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNjcm9sbFRvVG9wIiwic2hvd1Njcm9sbCIsInNldFNob3dTY3JvbGwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2hlY2tTY3JvbGxUb3AiLCJjbGVhbnVwIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG9wIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzdHlsZSIsImRpc3BsYXkiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout/ScrollToTop.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ \"aos\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/bootstrap.min.css */ \"./styles/bootstrap.min.css\");\n/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_animate_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/animate.min.css */ \"./styles/animate.min.css\");\n/* harmony import */ var _styles_animate_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_animate_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_remixicon_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/remixicon.css */ \"./styles/remixicon.css\");\n/* harmony import */ var _styles_remixicon_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_remixicon_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_flaticon_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/flaticon.css */ \"./styles/flaticon.css\");\n/* harmony import */ var _styles_flaticon_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_flaticon_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ \"./node_modules/react-accessible-accordion/dist/fancy-example.css\");\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swiper/css/bundle */ \"./node_modules/swiper/swiper-bundle.min.css\");\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(swiper_css_bundle__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_navbar_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/navbar.css */ \"./styles/navbar.css\");\n/* harmony import */ var _styles_navbar_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _styles_footer_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/footer.css */ \"./styles/footer.css\");\n/* harmony import */ var _styles_footer_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/responsive.css */ \"./styles/responsive.css\");\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_responsive_css__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _components_Layout_ScrollToTop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/Layout/ScrollToTop */ \"./components/Layout/ScrollToTop.js\");\n\n\n\n\n\n\n\n\n\n\n\n// Navbar CSS\n\n// Footer CSS\n\n// Globals CSS\n\n// Responsive CSS\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        aos__WEBPACK_IMPORTED_MODULE_2___default().init();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_15___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Grayling - Creative Agency\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/pages/_app.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/pages/_app.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/pages/_app.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/pages/_app.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_ScrollToTop__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/pages/_app.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNKO0FBQ29CO0FBQ0w7QUFDRjtBQUNGO0FBQ0Q7QUFDMkI7QUFDdkM7QUFDTztBQUMzQixhQUFhO0FBQ2lCO0FBQzlCLGFBQWE7QUFDaUI7QUFDOUIsY0FBYztBQUNpQjtBQUMvQixpQkFBaUI7QUFDaUI7QUFFTDtBQUM2QjtBQUUxRCxTQUFTSSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN2Q04sc0RBQWUsQ0FBQyxJQUFNO1FBQ3BCQywrQ0FBUSxFQUFFLENBQUM7S0FDWixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1AscUJBQ0U7OzBCQUNFLDhEQUFDQyxtREFBSTs7a0NBQ0gsOERBQUNPLE9BQUs7a0NBQUMsNEJBQTBCOzs7Ozs0QkFBUTtrQ0FDekMsOERBQUNDLE1BQUk7d0JBQUNDLElBQUksRUFBQyxVQUFVO3dCQUFDQyxPQUFPLEVBQUMsdUNBQXVDOzs7Ozs0QkFBRzs7Ozs7O29CQUNuRTswQkFFUCw4REFBQ1AsU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTswQkFFNUIsOERBQUNILHVFQUFXOzs7O29CQUFHOztvQkFDZCxDQUNIO0NBQ0g7QUFFRCxpRUFBZUMsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGV6YS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQU9TIGZyb20gXCJhb3NcIjtcbmltcG9ydCBcIi4uL25vZGVfbW9kdWxlcy9hb3MvZGlzdC9hb3MuY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9hbmltYXRlLm1pbi5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9yZW1peGljb24uY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZmxhdGljb24uY3NzXCI7XG5pbXBvcnQgXCJyZWFjdC1hY2Nlc3NpYmxlLWFjY29yZGlvbi9kaXN0L2ZhbmN5LWV4YW1wbGUuY3NzXCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzL2J1bmRsZVwiO1xuLy8gTmF2YmFyIENTU1xuaW1wb3J0IFwiLi4vc3R5bGVzL25hdmJhci5jc3NcIjtcbi8vIEZvb3RlciBDU1NcbmltcG9ydCBcIi4uL3N0eWxlcy9mb290ZXIuY3NzXCI7XG4vLyBHbG9iYWxzIENTU1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG4vLyBSZXNwb25zaXZlIENTU1xuaW1wb3J0IFwiLi4vc3R5bGVzL3Jlc3BvbnNpdmUuY3NzXCI7XG5cbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBTY3JvbGxUb1RvcCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dC9TY3JvbGxUb1RvcFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBBT1MuaW5pdCgpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+R3JheWxpbmcgLSBDcmVhdGl2ZSBBZ2VuY3k8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cblxuICAgICAgPFNjcm9sbFRvVG9wIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkFPUyIsIkhlYWQiLCJTY3JvbGxUb1RvcCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlRWZmZWN0IiwiaW5pdCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/aos/dist/aos.css":
/*!***************************************!*\
  !*** ./node_modules/aos/dist/aos.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-accessible-accordion/dist/fancy-example.css":
/*!************************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/fancy-example.css ***!
  \************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/swiper-bundle.min.css":
/*!***************************************************!*\
  !*** ./node_modules/swiper/swiper-bundle.min.css ***!
  \***************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/swiper.min.css":
/*!********************************************!*\
  !*** ./node_modules/swiper/swiper.min.css ***!
  \********************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/animate.min.css":
/*!********************************!*\
  !*** ./styles/animate.min.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/bootstrap.min.css":
/*!**********************************!*\
  !*** ./styles/bootstrap.min.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/flaticon.css":
/*!*****************************!*\
  !*** ./styles/flaticon.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/footer.css":
/*!***************************!*\
  !*** ./styles/footer.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/navbar.css":
/*!***************************!*\
  !*** ./styles/navbar.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/remixicon.css":
/*!******************************!*\
  !*** ./styles/remixicon.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./styles/responsive.css":
/*!*******************************!*\
  !*** ./styles/responsive.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("aos");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();