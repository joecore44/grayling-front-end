"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./components/Blog/BlogSidebar.js":
/*!****************************************!*\
  !*** ./components/Blog/BlogSidebar.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var hooks_getTopPosts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks/getTopPosts */ \"./hooks/getTopPosts.js\");\nvar _this = undefined;\n\n\n\n\nvar BlogSidebar = function() {\n    var _this1 = _this;\n    var ref = (0,hooks_getTopPosts__WEBPACK_IMPORTED_MODULE_3__.getTopPosts)(), error = ref.error, loading = ref.loading, data = ref.data;\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n        lineNumber: 7,\n        columnNumber: 23\n    }, _this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error : \",\n            error\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n        lineNumber: 8,\n        columnNumber: 21\n    }, _this);\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n            className: \"widget-area\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"widget widget_search\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"search-form\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"search\",\n                                className: \"search-field\",\n                                placeholder: \"Search...\"\n                            }, void 0, false, {\n                                fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n                                lineNumber: 15,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"ri-search-line\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n                                lineNumber: 20,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"widget widget_posts_thumb\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"widget-title\",\n                            children: \"Popular Posts\"\n                        }, void 0, false, {\n                            fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, _this),\n                        data.posts.nodes.map(function(post) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                                className: \"item\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/blog/\".concat(post.slug),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"thumb\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"fullimage cover bg1\",\n                                                role: \"img\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n                                                lineNumber: 32,\n                                                columnNumber: 23\n                                            }, _this1)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 21\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 19\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"info\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"title usmall\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    href: \"/blog/\".concat(post.slug),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        children: post.title\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n                                                        lineNumber: 38,\n                                                        columnNumber: 25\n                                                    }, _this1)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n                                                    lineNumber: 37,\n                                                    columnNumber: 21\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n                                                lineNumber: 36,\n                                                columnNumber: 21\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: post.date\n                                            }, void 0, false, {\n                                                fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n                                                lineNumber: 43,\n                                                columnNumber: 21\n                                            }, _this1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 19\n                                    }, _this1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n                                lineNumber: 29,\n                                columnNumber: 20\n                            }, _this1);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"widget widget_explore_topics\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"widget-title\",\n                            children: \"Explore Topics\"\n                        }, void 0, false, {\n                            fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"topics-list\",\n                            children: data.categories.nodes.map(function(category) {\n                                if (category.name !== \"Uncategorized\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"d-flex justify-content-between align-items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"/blog\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                            className: \"ri-arrow-right-s-line\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n                                                            lineNumber: 59,\n                                                            columnNumber: 23\n                                                        }, _this1),\n                                                        \" \",\n                                                        category.name\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 21\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n                                                lineNumber: 57,\n                                                columnNumber: 19\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"#\",\n                                                    children: [\n                                                        \"(\",\n                                                        category.count,\n                                                        \")\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 21\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n                                                lineNumber: 62,\n                                                columnNumber: 19\n                                            }, _this1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 20\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/josephshepard/Documents/web/Node/Grayling/components/Blog/BlogSidebar.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_c = BlogSidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogSidebar);\nvar _c;\n$RefreshReg$(_c, \"BlogSidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3JDLElBQUdBLFFBQVEsQ0FBQ0MsSUFBSSxLQUFLLGVBQWUsRUFDcEMscUJBQU8sOERBQUNDLElBQUU7OENBQ04sNEVBQUN6QixLQUFHO3dDQUFDRCxTQUFTLEVBQUMsbURBQW1EOzswREFDaEUsOERBQUNWLGtEQUFJO2dEQUFDd0IsSUFBSSxFQUFDLE9BQU87MERBQ2hCLDRFQUFDRSxHQUFDOztzRUFDQSw4REFBQ1QsR0FBQzs0REFBQ1AsU0FBUyxFQUFDLHVCQUF1Qjs7Ozs7a0VBQUs7d0RBQUEsR0FBQzt3REFBQ3dCLFFBQVEsQ0FBQ0MsSUFBSTs7Ozs7OzBEQUN0RDs7Ozs7c0RBQ0M7MERBQ1AsOERBQUNSLE1BQUk7MERBQ0gsNEVBQUNELEdBQUM7b0RBQUNGLElBQUksRUFBQyxHQUFHOzt3REFBQyxHQUFDO3dEQUFDVSxRQUFRLENBQUNHLEtBQUs7d0RBQUMsR0FBQzs7Ozs7OzBEQUFJOzs7OztzREFDN0I7Ozs7Ozs4Q0FDSDs7Ozs7MENBQ0g7NkJBQ1YsQ0FBQzs7Ozs7aUNBRUs7Ozs7Ozt5QkFDRDs7Ozs7O2lCQUdBO3FCQUNQLENBQ0g7Q0FDSDtBQXZFS25DLEtBQUFBLFdBQVc7QUF5RWpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nL0Jsb2dTaWRlYmFyLmpzPzY4ZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgZ2V0VG9wUG9zdHMgfSBmcm9tICdob29rcy9nZXRUb3BQb3N0cyc7XG5cbmNvbnN0IEJsb2dTaWRlYmFyID0gKCkgPT4ge1xuICBjb25zdCB7ZXJyb3IsIGxvYWRpbmcsIGRhdGEgfSA9IGdldFRvcFBvc3RzKCk7XG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yIDoge2Vycm9yfTwvcD47XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YXNpZGUgY2xhc3NOYW1lPVwid2lkZ2V0LWFyZWFcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgd2lkZ2V0X3NlYXJjaFwiPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNlYXJjaC1mb3JtXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1maWVsZFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicmktc2VhcmNoLWxpbmVcIj48L2k+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IHdpZGdldF9wb3N0c190aHVtYlwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ3aWRnZXQtdGl0bGVcIj5Qb3B1bGFyIFBvc3RzPC9oMz5cbiAgICAgICAgICB7ZGF0YS5wb3N0cy5ub2Rlcy5tYXAocG9zdCA9PiB7IFxuICAgICAgICAgICAgcmV0dXJuIDxhcnRpY2xlIGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZy8ke3Bvc3Quc2x1Z31gfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGh1bWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdWxsaW1hZ2UgY292ZXIgYmcxXCIgcm9sZT1cImltZ1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSB1c21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9nLyR7cG9zdC5zbHVnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Bvc3QuZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IHdpZGdldF9leHBsb3JlX3RvcGljc1wiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ3aWRnZXQtdGl0bGVcIj5FeHBsb3JlIFRvcGljczwvaDM+XG5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG9waWNzLWxpc3RcIj5cbiAgICAgICAgICB7ZGF0YS5jYXRlZ29yaWVzLm5vZGVzLm1hcChjYXRlZ29yeSA9PiB7XG4gICAgICAgICAgICBpZihjYXRlZ29yeS5uYW1lICE9PSBcIlVuY2F0ZWdvcml6ZWRcIilcbiAgICAgICAgICAgIHJldHVybiA8bGk+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicmktYXJyb3ctcmlnaHQtcy1saW5lXCI+PC9pPiB7Y2F0ZWdvcnkubmFtZX0gIFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj4oe2NhdGVnb3J5LmNvdW50fSk8L2E+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIH0pfVxuICAgICAgICAgICBcbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICBcbiAgICAgIDwvYXNpZGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nU2lkZWJhcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJnZXRUb3BQb3N0cyIsIkJsb2dTaWRlYmFyIiwiZXJyb3IiLCJsb2FkaW5nIiwiZGF0YSIsInAiLCJjb25zb2xlIiwibG9nIiwiYXNpZGUiLCJjbGFzc05hbWUiLCJkaXYiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJpIiwiaDMiLCJwb3N0cyIsIm5vZGVzIiwibWFwIiwicG9zdCIsImFydGljbGUiLCJocmVmIiwic2x1ZyIsImEiLCJzcGFuIiwicm9sZSIsImg0IiwidGl0bGUiLCJkYXRlIiwidWwiLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnkiLCJuYW1lIiwibGkiLCJjb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Blog/BlogSidebar.js\n");

/***/ })

});