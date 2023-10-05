// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Core__Option from "@rescript/core/src/Core__Option.mjs";
import * as JsxRuntime from "react/jsx-runtime";
import * as RescriptRelay_Query from "rescript-relay/src/RescriptRelay_Query.mjs";
import ReactLoadingSkeleton from "react-loading-skeleton";
import * as CharacterQuery_graphql$MyRescriptViteApp from "./__generated__/CharacterQuery_graphql.mjs";

var convertVariables = CharacterQuery_graphql$MyRescriptViteApp.Internal.convertVariables;

var convertResponse = CharacterQuery_graphql$MyRescriptViteApp.Internal.convertResponse;

function useLoader(param) {
  return RescriptRelay_Query.useLoader(convertVariables, CharacterQuery_graphql$MyRescriptViteApp.node, (function (prim) {
                return prim;
              }), param);
}

function usePreloaded(param) {
  return RescriptRelay_Query.usePreloaded(CharacterQuery_graphql$MyRescriptViteApp.node, convertResponse, (function (prim) {
                return prim;
              }), param);
}

function Character$Card(props) {
  var data = usePreloaded(props.queryRef);
  var match = Core__Option.map(data.character, (function (c) {
          return [
                  c.name,
                  c.image
                ];
        }));
  if (match !== undefined) {
    var name = match[0];
    if (name !== undefined) {
      var image = match[1];
      if (image !== undefined) {
        return JsxRuntime.jsxs("div", {
                    children: [
                      JsxRuntime.jsx("h2", {
                            children: name
                          }),
                      JsxRuntime.jsx("img", {
                            src: image
                          })
                    ]
                  });
      }
      
    }
    
  }
  return JsxRuntime.jsx("p", {
              children: "We couldn't find character details for id " + props.id
            });
}

function Character(props) {
  var id = props.id;
  var match = useLoader(undefined);
  var cleanup = match[2];
  var load = match[1];
  var queryRef = match[0];
  React.useMemo((function (param) {
          Curry._4(load, {
                characterId: id
              }, undefined, undefined, undefined);
        }), []);
  React.useEffect((function (param) {
          return (function (param) {
                    Curry._1(cleanup, undefined);
                  });
        }), []);
  if (queryRef !== undefined) {
    return JsxRuntime.jsx(Character$Card, {
                id: id,
                queryRef: Caml_option.valFromOption(queryRef)
              });
  } else {
    return JsxRuntime.jsx(ReactLoadingSkeleton, {
                count: 1,
                style: {
                  height: "45px"
                }
              });
  }
}

var make = Character;

export {
  make ,
}
/* react Not a pure module */
