"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Posts = function Posts(_ref) {
  var props = _ref.props,
      posts = _ref.posts;

  if (posts.length > 0) {
    var x = 0;
    return _react["default"].createElement(_react["default"].Fragment, null, posts.map(function (itm) {
      return _react["default"].createElement("div", {
        className: props.customClass,
        key: x++
      }, props.container(itm));
    }));
  } else {
    return _react["default"].createElement("div", {
      className: props.customClass,
      style: {
        textAlign: "center"
      }
    }, "- No Data -");
  }
};

var _default = Posts;
exports["default"] = _default;