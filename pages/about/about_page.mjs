// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as JsxRuntime from "react/jsx-runtime";
import * as Character$MyRescriptViteApp from "../../src/Character.mjs";

import './code.css'
;

function About_page(props) {
  return JsxRuntime.jsxs(React.Fragment, {
              children: [
                JsxRuntime.jsx("h1", {
                      children: "About"
                    }),
                JsxRuntime.jsxs(React.Suspense, {
                      children: [
                        JsxRuntime.jsx(Character$MyRescriptViteApp.make, {
                              id: "1"
                            }),
                        JsxRuntime.jsx(Character$MyRescriptViteApp.make, {
                              id: "2"
                            }),
                        JsxRuntime.jsx(Character$MyRescriptViteApp.make, {
                              id: "3"
                            })
                      ]
                    })
              ]
            });
}

var make = About_page;

export {
  make ,
}
/*  Not a pure module */
