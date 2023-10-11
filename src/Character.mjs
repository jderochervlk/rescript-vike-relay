// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as JsxRuntime from "react/jsx-runtime";
import * as RescriptRelay_Query from "rescript-relay/src/RescriptRelay_Query.mjs";
import ReactLoadingSkeleton from "react-loading-skeleton";
import * as ReactLazyLoadImageComponent from "react-lazy-load-image-component";
import * as CharacterQuery_graphql$MyRescriptViteApp from "./__generated__/CharacterQuery_graphql.mjs";
import * as CharacterListQuery_graphql$MyRescriptViteApp from "./__generated__/CharacterListQuery_graphql.mjs";

var convertVariables = CharacterQuery_graphql$MyRescriptViteApp.Internal.convertVariables;

var convertResponse = CharacterQuery_graphql$MyRescriptViteApp.Internal.convertResponse;

var convertWrapRawResponse = CharacterQuery_graphql$MyRescriptViteApp.Internal.convertWrapRawResponse;

function use(param, param$1, param$2, param$3, param$4) {
  return RescriptRelay_Query.useQuery(convertVariables, CharacterQuery_graphql$MyRescriptViteApp.node, convertResponse, param, param$1, param$2, param$3, param$4);
}

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

function $$fetch(param, param$1, param$2, param$3, param$4, param$5) {
  return RescriptRelay_Query.$$fetch(CharacterQuery_graphql$MyRescriptViteApp.node, convertResponse, convertVariables, param, param$1, param$2, param$3, param$4, param$5);
}

function fetchPromised(param, param$1, param$2, param$3, param$4) {
  return RescriptRelay_Query.fetchPromised(CharacterQuery_graphql$MyRescriptViteApp.node, convertResponse, convertVariables, param, param$1, param$2, param$3, param$4);
}

function retain(param, param$1) {
  return RescriptRelay_Query.retain(CharacterQuery_graphql$MyRescriptViteApp.node, convertVariables, param, param$1);
}

var Query = {
  Operation: undefined,
  Types: undefined,
  convertVariables: convertVariables,
  convertResponse: convertResponse,
  convertWrapRawResponse: convertWrapRawResponse,
  use: use,
  useLoader: useLoader,
  usePreloaded: usePreloaded,
  $$fetch: $$fetch,
  fetchPromised: fetchPromised,
  retain: retain
};

var convertVariables$1 = CharacterListQuery_graphql$MyRescriptViteApp.Internal.convertVariables;

var convertResponse$1 = CharacterListQuery_graphql$MyRescriptViteApp.Internal.convertResponse;

var convertWrapRawResponse$1 = CharacterListQuery_graphql$MyRescriptViteApp.Internal.convertWrapRawResponse;

function use$1(param, param$1, param$2, param$3, param$4) {
  return RescriptRelay_Query.useQuery(convertVariables$1, CharacterListQuery_graphql$MyRescriptViteApp.node, convertResponse$1, param, param$1, param$2, param$3, param$4);
}

function useLoader$1(param) {
  return RescriptRelay_Query.useLoader(convertVariables$1, CharacterListQuery_graphql$MyRescriptViteApp.node, (function (prim) {
                return prim;
              }), param);
}

function usePreloaded$1(param) {
  return RescriptRelay_Query.usePreloaded(CharacterListQuery_graphql$MyRescriptViteApp.node, convertResponse$1, (function (prim) {
                return prim;
              }), param);
}

function $$fetch$1(param, param$1, param$2, param$3, param$4, param$5) {
  return RescriptRelay_Query.$$fetch(CharacterListQuery_graphql$MyRescriptViteApp.node, convertResponse$1, convertVariables$1, param, param$1, param$2, param$3, param$4, param$5);
}

function fetchPromised$1(param, param$1, param$2, param$3, param$4) {
  return RescriptRelay_Query.fetchPromised(CharacterListQuery_graphql$MyRescriptViteApp.node, convertResponse$1, convertVariables$1, param, param$1, param$2, param$3, param$4);
}

function retain$1(param, param$1) {
  return RescriptRelay_Query.retain(CharacterListQuery_graphql$MyRescriptViteApp.node, convertVariables$1, param, param$1);
}

var ListQuery = {
  Operation: undefined,
  Types: undefined,
  convertVariables: convertVariables$1,
  convertResponse: convertResponse$1,
  convertWrapRawResponse: convertWrapRawResponse$1,
  use: use$1,
  useLoader: useLoader$1,
  usePreloaded: usePreloaded$1,
  $$fetch: $$fetch$1,
  fetchPromised: fetchPromised$1,
  retain: retain$1
};

var make = React.memo(function (props) {
      var id = props.id;
      var data = use({
            characterId: id
          }, undefined, undefined, undefined, undefined);
      var match = data.character;
      if (match !== undefined) {
        var gender = match.gender;
        if (gender !== undefined) {
          var image = match.image;
          if (image !== undefined) {
            var name = match.name;
            if (name !== undefined) {
              var species = match.species;
              if (species !== undefined) {
                var status = match.status;
                if (status !== undefined) {
                  return JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsx("h1", {
                                      children: name,
                                      className: "text-2xl"
                                    }),
                                JsxRuntime.jsx(React.Suspense, {
                                      children: Caml_option.some(JsxRuntime.jsx(ReactLazyLoadImageComponent.LazyLoadImage, {
                                                src: image,
                                                className: "my-5 rounded max-w-100",
                                                placeholder: Caml_option.some(JsxRuntime.jsx("div", {
                                                          className: "bg-slate-300 h-[300px] w-[300px] rounded"
                                                        }))
                                              }))
                                    }),
                                JsxRuntime.jsxs("ul", {
                                      children: [
                                        JsxRuntime.jsx("li", {
                                              children: "Gender: " + gender
                                            }),
                                        JsxRuntime.jsx("li", {
                                              children: "Species: " + species
                                            }),
                                        JsxRuntime.jsx("li", {
                                              children: "Status: " + status
                                            })
                                      ]
                                    })
                              ]
                            });
                }
                
              }
              
            }
            
          }
          
        }
        
      }
      return JsxRuntime.jsx("p", {
                  children: "We couldn't find character details for id " + id
                });
    });

var Content = {
  make: make
};

function Character(props) {
  return JsxRuntime.jsx(React.Suspense, {
              children: Caml_option.some(JsxRuntime.jsx(make, {
                        id: props.id
                      })),
              fallback: Caml_option.some(JsxRuntime.jsx(ReactLoadingSkeleton, {
                        count: 1,
                        style: {
                          height: "45px"
                        }
                      }))
            });
}

var make$1 = Character;

export {
  Query ,
  ListQuery ,
  Content ,
  make$1 as make,
}
/* make Not a pure module */
