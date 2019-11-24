"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _posts = _interopRequireDefault(require("./components/posts"));

var _infiniteScroll3 = _interopRequireDefault(require("./components/infiniteScroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var InfiniteScroll = function InfiniteScroll(props) {
  var _useState = (0, _react.useState)({
    isLoaded: false,
    data: [],
    currentPage: 0,
    postsPerLoad: props.postsPerLoad ? props.postsPerLoad : 20
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      listItems = _useState4[0],
      setListItems = _useState4[1];

  var _infiniteScroll = (0, _infiniteScroll3["default"])(fetchMoreListItems),
      _infiniteScroll2 = _slicedToArray(_infiniteScroll, 2),
      isFetching = _infiniteScroll2[0],
      setIsFetching = _infiniteScroll2[1];

  (0, _react.useEffect)(function () {
    setListItems(function () {
      return _toConsumableArray(props.data.slice(state.currentPage, state.postsPerLoad, true));
    });
    state.isLoaded = true;
    setState(_objectSpread({}, state, {
      data: _toConsumableArray(props.data)
    }));
  }, []);

  function fetchMoreListItems() {
    if (state.data.length !== listItems.length) {
      setListItems(function (prevState) {
        return [].concat(_toConsumableArray(prevState), _toConsumableArray(props.data.slice(state.currentPage * state.postsPerLoad, state.currentPage * state.postsPerLoad + state.postsPerLoad, true)));
      });
      state.currentPage++;
      setIsFetching(false);
    } else {
      return null;
    }
  }

  if (!state.isLoaded) {
    return null;
  } else {
    return _react["default"].createElement("div", {
      className: "container "
    }, _react["default"].createElement(_posts["default"], {
      posts: listItems,
      currentPage: state.currentPage,
      props: props
    }), isFetching && state.data.length !== listItems.length && _react["default"].createElement("div", {
      className: "fixed-top row d-flex justify-content-center mb-5 "
    }, _react["default"].createElement("div", {
      className: "spinner-border",
      role: "status"
    }, _react["default"].createElement("span", {
      className: "sr-only"
    }, "Loading..."))));
  }
};

var _default = InfiniteScroll;
exports["default"] = _default;