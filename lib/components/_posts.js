"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Posts = function Posts(props) {
  console.log(props);
  var data = props.data.data;
  var cards = props.data.cards;

  if (data.length > 0) {
    var x = 0;
    return _react["default"].createElement("div", {
      className: "row d-flex justify-content-center  mb-5"
    }, data.map(function (itm) {
      return _react["default"].createElement("div", {
        className: "col-12 col-md-8 mt-3 rc",
        key: x++
      }, cards.map(function (c, i) {
        return _react["default"].createElement("div", {
          key: i
        }, c.card(itm, i));
      }));
    }));
  } else {
    return _react["default"].createElement("div", null, "- No Data -");
  }
};

var _default = Posts;
exports["default"] = _default;