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

/***/ "./lib/apollo.js":
/*!***********************!*\
  !*** ./lib/apollo.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    uri: `${\"https://dev.graylingagency.co/sites/grayling-v2\"}/graphql`,\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBvbGxvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2RDtBQUV0RCxNQUFNRSxNQUFNLEdBQUcsSUFBSUYsd0RBQVksQ0FBQztJQUNuQ0csR0FBRyxFQUFFLENBQUMsRUFBRUMsaURBQXlDLENBQUMsUUFBUSxDQUFDO0lBQzNERyxLQUFLLEVBQUUsSUFBSU4seURBQWEsRUFBRTtDQUM3QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGV6YS8uL2xpYi9hcG9sbG8uanM/YmE1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbmV4cG9ydCBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICB1cmk6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1dPUkRQUkVTU19BUElfVVJMfS9ncmFwaHFsYCxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbn0pIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJjbGllbnQiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfV09SRFBSRVNTX0FQSV9VUkwiLCJjYWNoZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/apollo.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ \"aos\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/bootstrap.min.css */ \"./styles/bootstrap.min.css\");\n/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_animate_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/animate.min.css */ \"./styles/animate.min.css\");\n/* harmony import */ var _styles_animate_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_animate_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_remixicon_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/remixicon.css */ \"./styles/remixicon.css\");\n/* harmony import */ var _styles_remixicon_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_remixicon_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_flaticon_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/flaticon.css */ \"./styles/flaticon.css\");\n/* harmony import */ var _styles_flaticon_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_flaticon_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ \"./node_modules/react-accessible-accordion/dist/fancy-example.css\");\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swiper/css/bundle */ \"./node_modules/swiper/swiper-bundle.min.css\");\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(swiper_css_bundle__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _apollo_client_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/client/react */ \"@apollo/client/react\");\n/* harmony import */ var _apollo_client_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/apollo */ \"./lib/apollo.js\");\n/* harmony import */ var _styles_navbar_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/navbar.css */ \"./styles/navbar.css\");\n/* harmony import */ var _styles_navbar_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _styles_footer_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/footer.css */ \"./styles/footer.css\");\n/* harmony import */ var _styles_footer_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_css__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../styles/responsive.css */ \"./styles/responsive.css\");\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_responsive_css__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _components_Layout_ScrollToTop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/components/Layout/ScrollToTop */ \"./components/Layout/ScrollToTop.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n// Navbar CSS\n\n// Footer CSS\n\n// Globals CSS\n\n// Responsive CSS\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        aos__WEBPACK_IMPORTED_MODULE_2___default().init();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_17___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Grayling - Content First, Digital Agency\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/pages/_app.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/pages/_app.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:description\",\n                        content: \"Grayling - Content First, Digital Agency\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/pages/_app.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:title\",\n                        content: \"Grayling - Content First, Digital Agency\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/pages/_app.js\",\n                        lineNumber: 35,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:image\",\n                        content: \"https://dev.graylingagency.co/sites/grayling-v2/wp-content/uploads/2022/10/social-media-for-business-1024x576-1.jpeg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/pages/_app.js\",\n                        lineNumber: 36,\n                        columnNumber: 3\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/pages/_app.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client_react__WEBPACK_IMPORTED_MODULE_11__.ApolloProvider, {\n                client: _lib_apollo__WEBPACK_IMPORTED_MODULE_12__.client,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/pages/_app.js\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/pages/_app.js\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_ScrollToTop__WEBPACK_IMPORTED_MODULE_18__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/pages/_app.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNKO0FBQ29CO0FBQ0w7QUFDRjtBQUNGO0FBQ0Q7QUFDMkI7QUFDdkM7QUFDTztBQUMyQjtBQUNmO0FBQ3ZDLGFBQWE7QUFDaUI7QUFDOUIsYUFBYTtBQUNpQjtBQUM5QixjQUFjO0FBQ2lCO0FBQy9CLGlCQUFpQjtBQUNpQjtBQUVMO0FBQzZCO0FBRTFELFNBQVNNLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDUixzREFBZSxDQUFDLElBQU07UUFDcEJDLCtDQUFRLEVBQUUsQ0FBQztLQUNaLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUCxxQkFDRTs7MEJBQ0UsOERBQUNHLG1EQUFJOztrQ0FDSCw4REFBQ08sT0FBSztrQ0FBQywwQ0FBd0M7Ozs7OzRCQUFRO2tDQUN2RCw4REFBQ0MsTUFBSTt3QkFBQ0MsSUFBSSxFQUFDLFVBQVU7d0JBQUNDLE9BQU8sRUFBQyx1Q0FBdUM7Ozs7OzRCQUFHO2tDQUN4RSw4REFBQ0YsTUFBSTt3QkFBQ0csUUFBUSxFQUFDLGdCQUFnQjt3QkFBQ0QsT0FBTyxFQUFDLDBDQUEwQzs7Ozs7NEJBQUU7a0NBQzFGLDhEQUFDRixNQUFJO3dCQUFDRyxRQUFRLEVBQUMsVUFBVTt3QkFBQ0QsT0FBTyxFQUFDLDBDQUEwQzs7Ozs7NEJBQUU7a0NBQzlFLDhEQUFDRixNQUFJO3dCQUFDRyxRQUFRLEVBQUMsVUFBVTt3QkFBQ0QsT0FBTyxFQUFDLHNIQUFzSDs7Ozs7NEJBQUU7Ozs7OztvQkFDL0k7MEJBQ0wsOERBQUNaLGlFQUFjO2dCQUFDQyxNQUFNLEVBQUVBLGdEQUFNOzBCQUM1Qiw0RUFBQ0ksU0FBUztvQkFBRSxHQUFHQyxTQUFTOzs7Ozt3QkFBSTs7Ozs7b0JBQ2I7MEJBQ25CLDhEQUFDSCx1RUFBVzs7OztvQkFBRzs7b0JBQ2QsQ0FDSDtDQUNIO0FBRUQsaUVBQWVDLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlemEvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFPUyBmcm9tIFwiYW9zXCI7XG5pbXBvcnQgXCIuLi9ub2RlX21vZHVsZXMvYW9zL2Rpc3QvYW9zLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvYW5pbWF0ZS5taW4uY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvcmVtaXhpY29uLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2ZsYXRpY29uLmNzc1wiO1xuaW1wb3J0IFwicmVhY3QtYWNjZXNzaWJsZS1hY2NvcmRpb24vZGlzdC9mYW5jeS1leGFtcGxlLmNzc1wiO1xuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xuaW1wb3J0IFwic3dpcGVyL2Nzcy9idW5kbGVcIjtcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50L3JlYWN0XCI7XG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiLi4vbGliL2Fwb2xsb1wiO1xuLy8gTmF2YmFyIENTU1xuaW1wb3J0IFwiLi4vc3R5bGVzL25hdmJhci5jc3NcIjtcbi8vIEZvb3RlciBDU1NcbmltcG9ydCBcIi4uL3N0eWxlcy9mb290ZXIuY3NzXCI7XG4vLyBHbG9iYWxzIENTU1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG4vLyBSZXNwb25zaXZlIENTU1xuaW1wb3J0IFwiLi4vc3R5bGVzL3Jlc3BvbnNpdmUuY3NzXCI7XG5cbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBTY3JvbGxUb1RvcCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dC9TY3JvbGxUb1RvcFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBBT1MuaW5pdCgpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+R3JheWxpbmcgLSBDb250ZW50IEZpcnN0LCBEaWdpdGFsIEFnZW5jeTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHcmF5bGluZyAtIENvbnRlbnQgRmlyc3QsIERpZ2l0YWwgQWdlbmN5XCIvPlxuICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIkdyYXlsaW5nIC0gQ29udGVudCBGaXJzdCwgRGlnaXRhbCBBZ2VuY3lcIi8+XG4gIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9kZXYuZ3JheWxpbmdhZ2VuY3kuY28vc2l0ZXMvZ3JheWxpbmctdjIvd3AtY29udGVudC91cGxvYWRzLzIwMjIvMTAvc29jaWFsLW1lZGlhLWZvci1idXNpbmVzcy0xMDI0eDU3Ni0xLmpwZWdcIi8+XG4gICAgICA8L0hlYWQ+XG4gICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICAgPFNjcm9sbFRvVG9wIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkFPUyIsIkFwb2xsb1Byb3ZpZGVyIiwiY2xpZW50IiwiSGVhZCIsIlNjcm9sbFRvVG9wIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1c2VFZmZlY3QiLCJpbml0IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJwcm9wZXJ0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/react":
/*!***************************************!*\
  !*** external "@apollo/client/react" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/react");

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