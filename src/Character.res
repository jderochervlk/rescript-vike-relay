type t = {
  name: string,
  image: string,
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
      name
    }
  }
}
`)

module Content = {
  @react.component
  let make = React.memo((~id) => {
    let data = Query.use(~variables={characterId: id}, ())

    switch data.character->Option.flatMap(({name, image}) =>
      O.map2(name, image, (name, image) => {name, image})
    ) {
    | Some({name, image}) =>
      <div>
        <h2> {name->React.string} </h2>
        <img src=image />
      </div>
    | None => <p> {`We couldn't find character details for id ${id}`->React.string} </p>
    }
  })
}

@react.component
let make = (~id: string) => {
  <React.Suspense fallback={<LoadingSkeleton count=1 style={height: "45px"} />}>
    <Content id />
  </React.Suspense>
}
