/* @generated */
@@ocaml.warning("-30")

@live
type enum_CacheControlScope = private [>
  | #PRIVATE
  | #PUBLIC
]

@live
type enum_CacheControlScope_input = [
  | #PRIVATE
  | #PUBLIC
]

@live
type enum_RequiredFieldAction_input = [
  | #NONE
  | #LOG
  | #THROW
]

@live
type rec input_FilterCharacter = {
  name: option<string>,
  status: option<string>,
  species: option<string>,
  @as("type") type_: option<string>,
  gender: option<string>,
}

@live
and input_FilterCharacter_nullable = {
  name?: Js.Null.t<string>,
  status?: Js.Null.t<string>,
  species?: Js.Null.t<string>,
  @as("type") type_?: Js.Null.t<string>,
  gender?: Js.Null.t<string>,
}

@live
and input_FilterEpisode = {
  name: option<string>,
  episode: option<string>,
}

@live
and input_FilterEpisode_nullable = {
  name?: Js.Null.t<string>,
  episode?: Js.Null.t<string>,
}

@live
and input_FilterLocation = {
  name: option<string>,
  @as("type") type_: option<string>,
  dimension: option<string>,
}

@live
and input_FilterLocation_nullable = {
  name?: Js.Null.t<string>,
  @as("type") type_?: Js.Null.t<string>,
  dimension?: Js.Null.t<string>,
}
@live @obj
external make_FilterCharacter: (
  ~name: string=?,
  ~status: string=?,
  ~species: string=?,
  ~_type: string=?,
  ~gender: string=?,
  unit,
) => input_FilterCharacter = ""

@live @obj
external make_FilterEpisode: (
  ~name: string=?,
  ~episode: string=?,
  unit,
) => input_FilterEpisode = ""

@live @obj
external make_FilterLocation: (
  ~name: string=?,
  ~_type: string=?,
  ~dimension: string=?,
  unit,
) => input_FilterLocation = ""

