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

    switch data.character {
    | Some({name: Some(name), image: Some(image)}) =>
      <div>
        <h2> {name->React.string} </h2>
        <img src=image />
      </div>
    | _ => <p> {`We couldn't find character details for id ${id}`->React.string} </p>
    }
  })
}

@react.component
let make = (~id: string) => {
  <React.Suspense fallback={<LoadingSkeleton count=1 style={height: "45px"} />}>
    <Content id />
  </React.Suspense>
}

type x = {one: option<int>}

type t2 = {two: option<x>}

let fn = (f: t2) =>
  switch f {
  | {two: Some({one: Some(y)})} => y
  | _ => 0
  }
