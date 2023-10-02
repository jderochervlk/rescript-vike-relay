// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as JsxRuntime from "react/jsx-runtime";
import * as RescriptRelay_Query from "rescript-relay/src/RescriptRelay_Query.mjs";
import * as CharacterQuery_graphql$MyRescriptViteApp from "./__generated__/CharacterQuery_graphql.mjs";

var convertVariables = CharacterQuery_graphql$MyRescriptViteApp.Internal.convertVariables;

var convertResponse = CharacterQuery_graphql$MyRescriptViteApp.Internal.convertResponse;

function use(param, param$1, param$2, param$3, param$4) {
  return RescriptRelay_Query.useQuery(convertVariables, CharacterQuery_graphql$MyRescriptViteApp.node, convertResponse, param, param$1, param$2, param$3, param$4);
}

function Character$Card(props) {
  var id = props.id;
  var data = use({
        characterId: id
      }, undefined, undefined, undefined, undefined);
  var character = data.character;
  if (character === undefined) {
    return JsxRuntime.jsx("p", {
                children: "We couldn't find a character with an id of " + id
              });
  }
  var match = character.name;
  var match$1 = character.image;
  if (match !== undefined && match$1 !== undefined) {
    return JsxRuntime.jsxs("div", {
                children: [
                  JsxRuntime.jsx("h2", {
                        children: match
                      }),
                  JsxRuntime.jsx("img", {
                        src: match$1
                      })
                ]
              });
  }
  return JsxRuntime.jsx("p", {
              children: "No name found"
            });
}

function Character(props) {
  return JsxRuntime.jsx(React.Suspense, {
              children: Caml_option.some(JsxRuntime.jsx(Character$Card, {
                        id: props.id
                      }))
            });
}

var make = Character;

export {
  make ,
}
/* react Not a pure module */
