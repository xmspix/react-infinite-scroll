"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_moment["default"].updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "%d seconds",
    m: "1 minute",
    mm: "%d minutes",
    h: "1 hour",
    hh: "%d hours",
    d: "1 day",
    dd: "%d days",
    M: "1 month",
    MM: "%d months",
    y: "1 year",
    yy: "%d years"
  }
}); // const Jobs = ({ jobs }) => {
//   return (
//     <ul className="list-group mb-4">
//       {jobs.map(post => (
//         <li key={post.id} className="list-group-item">
//           {post.title}
//         </li>
//       ))}
//     </ul>
//   );
// };


function strip(html) {
  var doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}

var Jobs = function Jobs(_ref) {
  var jobs = _ref.jobs,
      currentPage = _ref.currentPage;
  // console.log(jobs);
  return _react["default"].createElement("div", {
    className: "row d-flex justify-content-center  mb-5"
  }, jobs.map(function (itm) {
    return _react["default"].createElement("div", {
      className: "col-12 col-md-8 mt-3 rc",
      key: itm.id
    }, _react["default"].createElement(_reactRouterDom.NavLink, {
      className: "job-link",
      to: {
        pathname: "/view/" + itm.id,
        pageNumber: currentPage
      },
      data: "itm"
    }, _react["default"].createElement("div", {
      className: "card"
    }, itm.img ? _react["default"].createElement("img", {
      srcSet: itm.img,
      className: "card-img-top card-main",
      alt: "",
      hight: "5rem"
    }) : null, _react["default"].createElement("div", {
      className: "card-body"
    }, _react["default"].createElement("h5", {
      className: "card-title"
    }, itm.title), _react["default"].createElement("p", {
      className: "card-text"
    }, itm.description.length > 200 ? strip(itm.description.substr(0, 200)) + " >> Read More..." : strip(itm.description))), _react["default"].createElement("ul", {
      className: "list-group list-group-flush"
    }, _react["default"].createElement("li", {
      className: "list-group-item"
    }, _react["default"].createElement("div", {
      className: "row"
    }, _react["default"].createElement("div", {
      className: "col-6 d-flex"
    }, "Full Time"), _react["default"].createElement("div", {
      className: "col-6 d-flex"
    }, "".concat((0, _moment["default"])(parseInt(itm.createdAt)).fromNow()))))))));
  }));
};

var _default = Jobs;
exports["default"] = _default;