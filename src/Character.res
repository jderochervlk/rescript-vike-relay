type t = {
  name: string,
  image: string,
}

module Query = %relay(`
  query CharacterQuery($characterId: ID!) {
    character(id: $characterId) {
      name
      image
      gender
      species
      status
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
    | Some({
        name: Some(name),
        image: Some(image),
        gender: Some(gender),
        species: Some(species),
        status: Some(status),
      }) =>
      <div>
        <h1 className="text-2xl"> {name->React.string} </h1>
        <React.Suspense>
          <Lazy.Image
            src=image
            placeholder={<div className="bg-slate-300 h-[300px] w-[300px] rounded" />}
            className="my-5 rounded max-w-100"
          />
        </React.Suspense>
        <ul>
          <li> {`Gender: ${gender}`->React.string} </li>
          <li> {`Species: ${species}`->React.string} </li>
          <li> {`Status: ${status}`->React.string} </li>
        </ul>
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
