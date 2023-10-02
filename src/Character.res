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
  let make = (~id) => {
    let data = Query.use(~variables={characterId: id}, ())

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

@react.component
let make = (~id) =>
  <React.Suspense>
    <Card id />
  </React.Suspense>
