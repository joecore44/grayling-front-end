"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog/[slug]",{

/***/ "./components/Common/LatestArticles.js":
/*!*********************************************!*\
  !*** ./components/Common/LatestArticles.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var hooks_getTopPosts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks/getTopPosts */ \"./hooks/getTopPosts.js\");\nvar _this = undefined;\n\n\n\n\nvar LatestArticles = function() {\n    var _this1 = _this;\n    var ref = (0,hooks_getTopPosts__WEBPACK_IMPORTED_MODULE_3__.getTopPosts)(), error = ref.error, loading = ref.loading, data = ref.data;\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n        lineNumber: 7,\n        columnNumber: 25\n    }, _this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error : \",\n            error\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n        lineNumber: 8,\n        columnNumber: 23\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"blog-area\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"section-title\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Read Our Latest Articles\"\n                            }, void 0, false, {\n                                fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                                lineNumber: 15,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Latest From Our Blog | Marketing, Business and Technology \"\n                            }, void 0, false, {\n                                fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                                lineNumber: 16,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                        lineNumber: 14,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row justify-content-center\",\n                        children: data.posts.nodes.map(function(post) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-lg-4 col-md-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"single-blog-card\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"blog-image\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"/blog/\".concat(post.slug),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: post.featuredImage.node.sourceUrl,\n                                                        title: post.featuredImage.node.title,\n                                                        alt: post.featuredImage.node.altText\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                                                        lineNumber: 25,\n                                                        columnNumber: 52\n                                                    }, _this1)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                                                    lineNumber: 25,\n                                                    columnNumber: 49\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                                                lineNumber: 24,\n                                                columnNumber: 45\n                                            }, _this1)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                                            lineNumber: 23,\n                                            columnNumber: 41\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"blog-content\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: [\n                                                        \"By \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                            href: \"/author\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                children: post.author.node.name\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                                                                lineNumber: 31,\n                                                                columnNumber: 75\n                                                            }, _this1)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                                                            lineNumber: 31,\n                                                            columnNumber: 54\n                                                        }, _this1)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                                                    lineNumber: 31,\n                                                    columnNumber: 45\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                        href: \"/blog/\".concat(post.slug),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            children: post.title\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                                                            lineNumber: 34,\n                                                            columnNumber: 53\n                                                        }, _this1)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                                                        lineNumber: 33,\n                                                        columnNumber: 49\n                                                    }, _this1)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                                                    lineNumber: 32,\n                                                    columnNumber: 45\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                    className: \"entry-meta\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                                    className: \"ri-calendar-line\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                                                                    lineNumber: 38,\n                                                                    columnNumber: 53\n                                                                }, _this1),\n                                                                \" \",\n                                                                post.date\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                                                            lineNumber: 38,\n                                                            columnNumber: 49\n                                                        }, _this1),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                                    className: \"ri-price-tag-3-line\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                                                                    lineNumber: 39,\n                                                                    columnNumber: 53\n                                                                }, _this1),\n                                                                \" \",\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                                    href: \"/tags\",\n                                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                        children: \"Commercial\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                                                                        lineNumber: 39,\n                                                                        columnNumber: 112\n                                                                    }, _this1)\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                                                                    lineNumber: 39,\n                                                                    columnNumber: 93\n                                                                }, _this1)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                                                            lineNumber: 39,\n                                                            columnNumber: 49\n                                                        }, _this1)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                                                    lineNumber: 37,\n                                                    columnNumber: 45\n                                                }, _this1)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                                            lineNumber: 30,\n                                            columnNumber: 41\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 37\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                                lineNumber: 21,\n                                columnNumber: 32\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                        lineNumber: 19,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"view-more-btn\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/blog\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"default-btn\",\n                                children: \"View More\"\n                            }, void 0, false, {\n                                fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                                lineNumber: 48,\n                                columnNumber: 29\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                            lineNumber: 47,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                        lineNumber: 46,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n                lineNumber: 13,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Common/LatestArticles.js\",\n            lineNumber: 12,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false);\n};\n_c = LatestArticles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LatestArticles);\nvar _c;\n$RefreshReg$(_c, \"LatestArticles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1vbi9MYXRlc3RBcnRpY2xlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUEwQjtBQUNHO0FBQ21CO0FBRWhELElBQU1HLGNBQWMsR0FBRyxXQUFNOztJQUN6QixJQUFnQ0QsR0FBYSxHQUFiQSw4REFBVyxFQUFFLEVBQXRDRSxLQUFLLEdBQW9CRixHQUFhLENBQXRDRSxLQUFLLEVBQUVDLE9BQU8sR0FBV0gsR0FBYSxDQUEvQkcsT0FBTyxFQUFFQyxJQUFJLEdBQUtKLEdBQWEsQ0FBdEJJLElBQUk7SUFDM0IsSUFBSUQsT0FBTyxFQUFFLHFCQUFPLDhEQUFDRSxHQUFDO2tCQUFDLFlBQVU7Ozs7O2FBQUksQ0FBQztJQUN0QyxJQUFJSCxLQUFLLEVBQUUscUJBQU8sOERBQUNHLEdBQUM7O1lBQUMsVUFBUTtZQUFDSCxLQUFLOzs7Ozs7YUFBSyxDQUFDO0lBRXpDLHFCQUNGO2tCQUNDLDRFQUFDSSxLQUFHO1lBQUNDLFNBQVMsRUFBQyxXQUFXO3NCQUNiLDRFQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsV0FBVzs7a0NBQ3RCLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsZUFBZTs7MENBQzFCLDhEQUFDQyxNQUFJOzBDQUFDLDBCQUF3Qjs7Ozs7cUNBQU87MENBQ3JDLDhEQUFDQyxJQUFFOzBDQUFDLDREQUEwRDs7Ozs7cUNBQUs7Ozs7Ozs2QkFDakU7a0NBRU4sOERBQUNILEtBQUc7d0JBQUNDLFNBQVMsRUFBQyw0QkFBNEI7a0NBQzFDSCxJQUFJLENBQUNNLEtBQUssQ0FBQ0MsS0FBSyxDQUFDQyxHQUFHLENBQUNDLFNBQUFBLElBQUksRUFBSTs0QkFDMUIscUJBQU8sOERBQUNQLEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxtQkFBbUI7MENBQzdCLDRFQUFDRCxLQUFHO29DQUFDQyxTQUFTLEVBQUMsa0JBQWtCOztzREFDN0IsOERBQUNELEtBQUc7NENBQUNDLFNBQVMsRUFBQyxZQUFZO3NEQUN2Qiw0RUFBQ1Isa0RBQUk7Z0RBQUNlLElBQUksRUFBRSxRQUFPLENBQVksT0FBVkQsSUFBSSxDQUFDRSxJQUFJLENBQUU7MERBQzVCLDRFQUFDQyxHQUFDOzhEQUFDLDRFQUFDQyxLQUFHO3dEQUFDQyxHQUFHLEVBQUVMLElBQUksQ0FBQ00sYUFBYSxDQUFDQyxJQUFJLENBQUNDLFNBQVM7d0RBQzlDQyxLQUFLLEVBQUVULElBQUksQ0FBQ00sYUFBYSxDQUFDQyxJQUFJLENBQUNFLEtBQUs7d0RBQ3BDQyxHQUFHLEVBQUVWLElBQUksQ0FBQ00sYUFBYSxDQUFDQyxJQUFJLENBQUNJLE9BQU87Ozs7OzhEQUFHOzs7OzswREFBSTs7Ozs7c0RBQ3hDOzs7OztrREFDTDtzREFDTiw4REFBQ2xCLEtBQUc7NENBQUNDLFNBQVMsRUFBQyxjQUFjOzs4REFDekIsOERBQUNDLE1BQUk7O3dEQUFDLEtBQUc7c0VBQUEsOERBQUNULGtEQUFJOzREQUFDZSxJQUFJLEVBQUMsU0FBUztzRUFBQyw0RUFBQ0UsR0FBQzswRUFBR0gsSUFBSSxDQUFDWSxNQUFNLENBQUNMLElBQUksQ0FBQ00sSUFBSTs7Ozs7c0VBQU07Ozs7O2tFQUFPOzs7Ozs7MERBQU87OERBQzVFLDhEQUFDQyxJQUFFOzhEQUNDLDRFQUFDNUIsa0RBQUk7d0RBQUNlLElBQUksRUFBRSxRQUFPLENBQVksT0FBVkQsSUFBSSxDQUFDRSxJQUFJLENBQUU7a0VBQzVCLDRFQUFDQyxHQUFDO3NFQUFHSCxJQUFJLENBQUNTLEtBQUs7Ozs7O2tFQUFNOzs7Ozs4REFDbEI7Ozs7OzBEQUNOOzhEQUNMLDhEQUFDTSxJQUFFO29EQUFDckIsU0FBUyxFQUFDLFlBQVk7O3NFQUN0Qiw4REFBQ3NCLElBQUU7OzhFQUFDLDhEQUFDQyxHQUFDO29FQUFDdkIsU0FBUyxFQUFDLGtCQUFrQjs7Ozs7MEVBQUs7Z0VBQUEsR0FBQztnRUFBRU0sSUFBSSxDQUFDa0IsSUFBSTs7Ozs7O2tFQUFPO3NFQUMzRCw4REFBQ0YsSUFBRTs7OEVBQUMsOERBQUNDLEdBQUM7b0VBQUN2QixTQUFTLEVBQUMscUJBQXFCOzs7OzswRUFBSztnRUFBQSxHQUFDOzhFQUFBLDhEQUFDUixrREFBSTtvRUFBQ2UsSUFBSSxFQUFDLE9BQU87OEVBQUMsNEVBQUNFLEdBQUM7a0ZBQUMsWUFBVTs7Ozs7OEVBQUk7Ozs7OzBFQUFPOzs7Ozs7a0VBQUs7Ozs7OzswREFDM0Y7Ozs7OztrREFDSDs7Ozs7OzBDQUNKOzs7OztzQ0FDSjt5QkFDYixDQUFDOzs7Ozs2QkFDQTtrQ0FDTiw4REFBQ1YsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLGVBQWU7a0NBQzFCLDRFQUFDUixrREFBSTs0QkFBQ2UsSUFBSSxFQUFDLE9BQU87c0NBQ2QsNEVBQUNFLEdBQUM7Z0NBQUNULFNBQVMsRUFBQyxhQUFhOzBDQUFDLFdBQVM7Ozs7O3FDQUFJOzs7OztpQ0FDckM7Ozs7OzZCQUNMOzs7Ozs7cUJBQ0o7Ozs7O2lCQUNKO3FCQUNiLENBQ0M7Q0FDTDtBQWxES04sS0FBQUEsY0FBYztBQW9EcEIsK0RBQWVBLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbW1vbi9MYXRlc3RBcnRpY2xlcy5qcz80YmFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgZ2V0VG9wUG9zdHMgfSBmcm9tICdob29rcy9nZXRUb3BQb3N0cyc7XG5cbmNvbnN0IExhdGVzdEFydGljbGVzID0gKCkgPT4geyAgXG4gICAgY29uc3Qge2Vycm9yLCBsb2FkaW5nLCBkYXRhIH0gPSBnZXRUb3BQb3N0cygpO1xuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gICAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3IgOiB7ZXJyb3J9PC9wPjtcblxuICAgIHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1hcmVhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5SZWFkIE91ciBMYXRlc3QgQXJ0aWNsZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+TGF0ZXN0IEZyb20gT3VyIEJsb2cgfCBNYXJrZXRpbmcsIEJ1c2luZXNzIGFuZCBUZWNobm9sb2d5IDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEucG9zdHMubm9kZXMubWFwKHBvc3QgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1ibG9nLWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9nLyR7cG9zdC5zbHVnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+PGltZyBzcmM9e3Bvc3QuZmVhdHVyZWRJbWFnZS5ub2RlLnNvdXJjZVVybH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC5mZWF0dXJlZEltYWdlLm5vZGUudGl0bGV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwb3N0LmZlYXR1cmVkSW1hZ2Uubm9kZS5hbHRUZXh0fS8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QnkgPExpbmsgaHJlZj1cIi9hdXRob3JcIj48YT57IHBvc3QuYXV0aG9yLm5vZGUubmFtZSB9PC9hPjwvTGluaz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZy8ke3Bvc3Quc2x1Z31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57IHBvc3QudGl0bGUgfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImVudHJ5LW1ldGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aSBjbGFzc05hbWU9XCJyaS1jYWxlbmRhci1saW5lXCI+PC9pPiB7IHBvc3QuZGF0ZSB9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aSBjbGFzc05hbWU9XCJyaS1wcmljZS10YWctMy1saW5lXCI+PC9pPiA8TGluayBocmVmPVwiL3RhZ3NcIj48YT5Db21tZXJjaWFsPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9ICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlldy1tb3JlLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZGVmYXVsdC1idG5cIj5WaWV3IE1vcmU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cdFx0PC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF0ZXN0QXJ0aWNsZXM7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsImdldFRvcFBvc3RzIiwiTGF0ZXN0QXJ0aWNsZXMiLCJlcnJvciIsImxvYWRpbmciLCJkYXRhIiwicCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJoMiIsInBvc3RzIiwibm9kZXMiLCJtYXAiLCJwb3N0IiwiaHJlZiIsInNsdWciLCJhIiwiaW1nIiwic3JjIiwiZmVhdHVyZWRJbWFnZSIsIm5vZGUiLCJzb3VyY2VVcmwiLCJ0aXRsZSIsImFsdCIsImFsdFRleHQiLCJhdXRob3IiLCJuYW1lIiwiaDMiLCJ1bCIsImxpIiwiaSIsImRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Common/LatestArticles.js\n");

/***/ })

});