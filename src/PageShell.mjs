// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import LogoSvg from "./logo.svg";
import * as JsxRuntime from "react/jsx-runtime";
import * as Url$MyRescriptViteApp from "./url.mjs";
import * as Link$MyRescriptViteApp from "./Link.mjs";

import './PageShell.css'
;

var logoSvg = LogoSvg;

function PageShell$Sidebar(props) {
  return JsxRuntime.jsx("div", {
              children: props.children,
              style: {
                display: "flex",
                lineHeight: "1.8em",
                padding: "20px",
                alignItems: "center",
                flexDirection: "column",
                flexShrink: "0"
              }
            });
}

var Sidebar = {
  make: PageShell$Sidebar
};

function PageShell$Content(props) {
  return JsxRuntime.jsx("div", {
              children: props.children,
              style: {
                borderLeft: "2px solid #eee",
                minHeight: "100vh",
                padding: "20px",
                paddingBottom: "50px"
              }
            });
}

var Content = {
  make: PageShell$Content
};

function PageShell$Logo(props) {
  return JsxRuntime.jsx("div", {
              children: JsxRuntime.jsx("a", {
                    children: JsxRuntime.jsx("img", {
                          alt: "logo",
                          height: "64px",
                          src: logoSvg,
                          width: "64px"
                        }),
                    href: "/"
                  }),
              style: {
                marginTop: "20px",
                marginBottom: "10px"
              }
            });
}

var Logo = {
  make: PageShell$Logo
};

function PageShell$Layout(props) {
  return JsxRuntime.jsx("div", {
              children: props.children,
              style: {
                display: "flex",
                margin: "auto",
                maxWidth: "900px"
              }
            });
}

var Layout = {
  make: PageShell$Layout
};

function PageShell(props) {
  var url = props.url;
  var match = Url$MyRescriptViteApp.useAtom(undefined);
  var setUrl = match[1];
  React.useEffect((function (param) {
          Curry._1(setUrl, (function (param) {
                  return url;
                }));
        }), []);
  return JsxRuntime.jsx(React.StrictMode, {
              children: JsxRuntime.jsxs(PageShell$Layout, {
                    children: [
                      JsxRuntime.jsxs(PageShell$Sidebar, {
                            children: [
                              JsxRuntime.jsx(PageShell$Logo, {}),
                              JsxRuntime.jsx(Link$MyRescriptViteApp.make, {
                                    className: "navitem",
                                    href: "/",
                                    children: "Home"
                                  }),
                              JsxRuntime.jsx(Link$MyRescriptViteApp.make, {
                                    className: "navitem",
                                    href: "/about",
                                    children: "About"
                                  })
                            ]
                          }),
                      JsxRuntime.jsx(PageShell$Content, {
                            children: props.children
                          })
                    ]
                  })
            });
}

var make = PageShell;

export {
  logoSvg ,
  Sidebar ,
  Content ,
  Logo ,
  Layout ,
  make ,
}
/*  Not a pure module */
