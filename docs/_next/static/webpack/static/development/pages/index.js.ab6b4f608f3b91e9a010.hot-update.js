webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/WeatherWidget/WeatherWigdet.js":
/*!***************************************************!*\
  !*** ./components/WeatherWidget/WeatherWigdet.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/DropdownButton */ "./node_modules/react-bootstrap/DropdownButton.js");
/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "./node_modules/react-bootstrap/Dropdown.js");
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/Container.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Spinner_Spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Spinner/Spinner */ "./components/Spinner/Spinner.js");
/* harmony import */ var _WidgetBody_WidgetBody__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./WidgetBody/WidgetBody */ "./components/WeatherWidget/WidgetBody/WidgetBody.js");
/* harmony import */ var _WeatherWidget_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./WeatherWidget.scss */ "./components/WeatherWidget/WeatherWidget.scss");
/* harmony import */ var _WeatherWidget_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_WeatherWidget_scss__WEBPACK_IMPORTED_MODULE_15__);







var _jsxFileName = "G:\\programowanie\\zadanie rekrutacyjne - coffee mug\\Weather-widget\\components\\WeatherWidget\\WeatherWigdet.js";









var API = 'https://dev-weather-api.azurewebsites.net/api/city';

var WeatherWidget =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(WeatherWidget, _Component);

  function WeatherWidget(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WeatherWidget);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(WeatherWidget).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSelectHandler", function (activeCity) {
      var date = moment__WEBPACK_IMPORTED_MODULE_9___default()().format('YYYY[-]MM[-]DD');

      _this.setState({
        activeCity: activeCity,
        cityDataLoading: true
      });

      _this.setActiveDayIndex(0);

      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()("".concat(API, "/").concat(activeCity.id, "/weather?date=").concat(date)).then(function (res) {
        return res.json();
      }).then(function (cityData) {
        _this.setState({
          cityData: cityData,
          cityDataLoading: false
        });
      })["catch"](function () {
        return _this.setState({
          cityData: null,
          cityDataLoading: false
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setActiveDayIndex", function (activeDayIndex) {
      _this.setState({
        activeDayIndex: activeDayIndex
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderSpinner", function () {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "widget-loader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_13__["default"], {
        height: 50,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderWidget", function () {
      var _this$state = _this.state,
          citiesData = _this$state.citiesData,
          activeCity = _this$state.activeCity,
          cityData = _this$state.cityData,
          activeDayIndex = _this$state.activeDayIndex,
          cityDataLoading = _this$state.cityDataLoading;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_12___default.a, {
        fluid: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "weather-widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "dropdown-basic-button",
        title: "Choose a city ",
        variant: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, citiesData.map(function (city) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
          key: city.id,
          onClick: function onClick() {
            return _this.onSelectHandler(city);
          },
          active: activeCity.id === city.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, city.name);
      })), cityDataLoading ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "weather-widget__spinner-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_13__["default"], {
        height: 26,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      })) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "weather-widget__widget-body-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_WidgetBody_WidgetBody__WEBPACK_IMPORTED_MODULE_14__["default"], {
        cityData: cityData,
        activeCity: activeCity,
        setActiveDayIndex: _this.setActiveDayIndex,
        activeDayIndex: activeDayIndex,
        cityDataLoading: cityDataLoading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }))));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderErrorInfo", function () {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "widget-no-data-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Sorry, we cannot get cities list");
    });

    _this.state = {
      citiesData: null,
      isLoading: true,
      cityDataLoading: false,
      activeCity: {
        id: null,
        name: null
      },
      cityData: [],
      activeDayIndex: 0
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(WeatherWidget, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()(API).then(function (res) {
        return res.json();
      }).then(function (data) {
        return _this2.setState({
          citiesData: data,
          isLoading: false
        });
      })["catch"](function () {
        return _this2.setState({
          citiesData: null,
          isLoading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          isLoading = _this$state2.isLoading,
          citiesData = _this$state2.citiesData;

      if (isLoading) {
        return this.renderSpinner();
      }

      if (citiesData) {
        return this.renderWidget();
      }

      return this.renderErrorInfo();
    }
  }]);

  return WeatherWidget;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (WeatherWidget);

/***/ })

})
//# sourceMappingURL=index.js.ab6b4f608f3b91e9a010.hot-update.js.map