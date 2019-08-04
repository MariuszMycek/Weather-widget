webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/WeatherWidget/WidgetBody/WidgetBody.js":
/*!***********************************************************!*\
  !*** ./components/WeatherWidget/WidgetBody/WidgetBody.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/Container.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/Row.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/Col.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _DayCard_DayCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DayCard/DayCard */ "./components/WeatherWidget/DayCard/DayCard.js");
/* harmony import */ var _WidgetBody_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WidgetBody.scss */ "./components/WeatherWidget/WidgetBody/WidgetBody.scss");
/* harmony import */ var _WidgetBody_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_WidgetBody_scss__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "G:\\programowanie\\zadanie rekrutacyjne - coffee mug\\Weather-widget\\components\\WeatherWidget\\WidgetBody\\WidgetBody.js";









function formatType(type) {
  var withSpace = type !== 'RainLight' ? type.replace(/([a-z])(?=[A-Z])/g, '$1 ') : type.replace(/([a-z])(?=[A-Z])/g, '$1 ').split(' ').reverse().join(' ');
  var toLowerCase = withSpace.toLowerCase();
  var capitalized = toLowerCase.charAt(0).toUpperCase() + toLowerCase.slice(1);
  return capitalized;
}

var WidgetBody = function WidgetBody(_ref) {
  var cityData = _ref.cityData,
      activeCity = _ref.activeCity,
      setActiveDayIndex = _ref.setActiveDayIndex,
      activeDayIndex = _ref.activeDayIndex,
      cityDataLoading = _ref.cityDataLoading;

  if (!cityDataLoading && !cityData) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Sorry, we cannot get city data");
  }

  if (cityData && cityData.length) {
    var dailyData = cityData[activeDayIndex];
    var date = moment__WEBPACK_IMPORTED_MODULE_2___default()(dailyData.date).format('dddd[, ]MMMM[ ]Do');
    var weatherType = formatType(dailyData.type);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "widget-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default.a, {
      fluid: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "widget-body__city-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, activeCity.name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "daily-weather-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: "daily-weather-info__basic-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "daily-weather-info__date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "daily-weather-info__weather-type",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, weatherType))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: "daily-weather-info__detailed-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default.a, {
      xs: "6",
      className: "daily-weather-info__img-and-temp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "daily-weather-info__weather-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "/static/assets/images/".concat(dailyData.type, ".png"),
      alt: "weather icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "daily-weather-info__temperature",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "temperature__count",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, dailyData.temperature), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "temperature__degree-type",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "\xB0C"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default.a, {
      xs: "6",
      className: "daily-weather-info__additional-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "daily-weather-info__additional-info-item-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "daily-weather-info__additional-info-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "Precipitation:", ' '), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "daily-weather-info__additional-info-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, dailyData.precipitation, "%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "daily-weather-info__additional-info-item-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "daily-weather-info__additional-info-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "Humidity:", ' '), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "daily-weather-info__additional-info-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, dailyData.humidity, "%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "daily-weather-info__additional-info-item-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "daily-weather-info__additional-info-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "Wind:", ' '), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "daily-weather-info__additional-info-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, dailyData.windInfo.speed, " mph", ' ', dailyData.windInfo.direction)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "daily-weather-info__additional-info-item-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "daily-weather-info__additional-info-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "Pollen Count:", ' '), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "daily-weather-info__additional-info-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, dailyData.pollenCount))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "multi-day-forecast",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, cityData.map(function (day, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DayCard_DayCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: day.date,
        day: day,
        i: i,
        setActiveDayIndex: setActiveDayIndex,
        activeDayIndex: activeDayIndex,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      });
    })))));
  }

  return null;
};

WidgetBody.propTypes = {
  cityData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  activeCity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  setActiveDayIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  activeDayIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  cityDataLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (WidgetBody);

/***/ })

})
//# sourceMappingURL=index.js.1674169a92c5d49a9946.hot-update.js.map