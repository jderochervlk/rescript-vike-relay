type t = {
  name: option<string>,
  image: option<string>,
}

module Query = %relay(`
  query CharacterQuery($characterId: ID!) {
    character(id: $characterId) {
      name
      image
    }
  }
`)

module ListQuery = %relay(`
  query CharacterListQuery {
  characters {
    results {
      id
    }
  }
}
`)

module Card = {
  @react.component
  let make = (~id, ~queryRef) => {
    let data = Query.usePreloaded(~queryRef)
    switch data.character->Option.map(c => (c.name, c.image)) {
    | Some((Some(name), Some(image))) =>
      <div>
        <h2> {name->React.string} </h2>
        <img src=image />
      </div>
    | _ => <p> {`We couldn't find character details for id ${id}`->React.string} </p>
    }
  }
}

@react.component
let make = (~id: string) => {
  let (queryRef, load, cleanup) = Query.useLoader()
  let _ = React.useMemo0(() => {
    load(~variables={characterId: id}, ())
  })
  React.useEffect0(() => {
    Some(() => cleanup())
  })
  switch queryRef {
  | Some(queryRef) => <Card id queryRef />
  | None => <LoadingSkeleton count=1 style={height: "45px"} />
  }
}
