// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as JsxRuntime from "react/jsx-runtime";

function Counter(props) {
  var match = React.useState(function (param) {
    return 0;
  });
  var setCount = match[1];
  return JsxRuntime.jsxs("button", {
    children: ["Counter: ", match[0].toString()],
    type: "button",
    onClick: function (param) {
      Curry._1(setCount, function (count) {
        return (count + 1) | 0;
      });
    },
  });
}

var make = Counter;

export { make };
/* react Not a pure module */
