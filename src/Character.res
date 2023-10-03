module Query = %relay(`
  query CharacterQuery($characterId: ID!) {
    character(id: $characterId) {
      name
      image
    }
  }
`)

module Card = {
  @react.component
  let make = (~id, ~queryRef) => {
    let data = Query.usePreloaded(~queryRef)

    switch data.character {
    | Some(character) =>
      switch (character.name, character.image) {
      | (Some(name), Some(image)) =>
        <div>
          <h2> {name->React.string} </h2>
          <img src=image />
        </div>
      | _ => <p> {"No name found"->React.string} </p>
      }
    | None => <p> {`We couldn't find a character with an id of ${id}`->React.string} </p>
    }
  }
}

module Wrapper = {
  @react.component
  let make = (~id: string) => {
    let (queryRef, load, cleanup) = Query.useLoader()
    React.useEffect0(() => {
      load(~variables={characterId: id}, ())
      Some(() => cleanup())
    })
    switch queryRef {
    | Some(queryRef) => <Card id queryRef />
    | None => React.null
    }
  }
}

@react.component
let make = (~id) =>
  <React.Suspense>
    <Wrapper id />
  </React.Suspense>
