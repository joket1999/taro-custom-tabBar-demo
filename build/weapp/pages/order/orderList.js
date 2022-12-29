(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/order/orderList"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/order/orderList.jsx":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/order/orderList.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_joe_Documents_git_demo_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_joe_Documents_git_demo_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_joe_Documents_git_demo_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_joe_Documents_git_demo_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_joe_Documents_git_demo_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_joe_Documents_git_demo_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);










var ENV_TYPE = _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.getEnv();
var Page3 = /*#__PURE__*/function (_PureComponent) {
  Object(_Users_joe_Documents_git_demo_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Page3, _PureComponent);
  var _super = Object(_Users_joe_Documents_git_demo_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Page3);
  function Page3(props) {
    var _this;
    Object(_Users_joe_Documents_git_demo_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Page3);
    _this = _super.call(this, props);
    Object(_Users_joe_Documents_git_demo_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_joe_Documents_git_demo_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "$instance", Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__["getCurrentInstance"])());
    return _this;
  }
  Object(_Users_joe_Documents_git_demo_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Page3, [{
    key: "componentDidShow",
    value: function componentDidShow() {
      if (ENV_TYPE === 'WEAPP') {
        var page = this.$instance.page;
        var tabbar = _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.getTabBar(page);
        tabbar.setSelected(2);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "a"], {
        children: "3"
      });
    }
  }]);
  return Page3;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);
/* harmony default export */ __webpack_exports__["a"] = (Page3);

/***/ }),

/***/ "./src/pages/order/orderList.jsx":
/*!***************************************!*\
  !*** ./src/pages/order/orderList.jsx ***!
  \***************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_orderList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./orderList.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/order/orderList.jsx");


var config = {"navigationBarTitleText":"我的订单","enablePullDownRefresh":true,"backgroundTextStyle":"dark","usingComponents":{}};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_orderList_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/order/orderList', {root:{cn:[]}}, config || {}))




/***/ })

},[["./src/pages/order/orderList.jsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=orderList.js.map