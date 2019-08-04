webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/WeatherWidget/DayCard/DayCard.js":
/*!*****************************************************!*\
  !*** ./components/WeatherWidget/DayCard/DayCard.js ***!
  \*****************************************************/
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
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/Row.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/Col.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DayCard_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DayCard.scss */ "./components/WeatherWidget/DayCard/DayCard.scss");
/* harmony import */ var _DayCard_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_DayCard_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "G:\\programowanie\\zadanie rekrutacyjne - coffee mug\\Weather-widget\\components\\WeatherWidget\\DayCard\\DayCard.js";







var DayCard = function DayCard(_ref) {
  var day = _ref.day,
      i = _ref.i,
      setActiveDayIndex = _ref.setActiveDayIndex,
      activeDayIndex = _ref.activeDayIndex;
  var dayCardWrapperStyle = activeDayIndex === i ? 'day-card-wrapper day-card-wrapper--active' : 'day-card-wrapper';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    xs: "12",
    md: true,
    className: dayCardWrapperStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "day-card",
    onClick: function onClick() {
      return setActiveDayIndex(i);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    noGutters: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    xs: "4",
    sm: "3",
    md: "12",
    className: "day-card__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "day-card__day-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, i === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Today") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, moment__WEBPACK_IMPORTED_MODULE_2___default()(day.date).format('dddd')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    xs: "3",
    sm: "3",
    md: "12",
    className: "day-card__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "day-card__weather-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/assets/images/".concat(day.type, ".png"),
    alt: "weather icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    xs: "2",
    sm: "3",
    md: "12",
    className: "day-card__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "day-card__short-info-temp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, day.temperature, "\xB0"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    xs: "3",
    sm: "3",
    md: "12",
    className: "day-card__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "day-card__short-info-pollen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "short-info-pollen__name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Pollen "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "short-info-pollen__count",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, day.pollenCount))))));
};

DayCard.propTypes = {
  day: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  i: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  setActiveDayIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  activeDayIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (DayCard);

/***/ })

})
//# sourceMappingURL=index.js.c6819df9967062b0efd7.hot-update.js.map