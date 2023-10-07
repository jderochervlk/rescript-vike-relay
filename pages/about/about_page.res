%%raw("import './code.css'")

module Content = {
  @react.component
  let make = () => {
    let t = Character.ListQuery.use(~variables=(), ())

    {
      switch t.characters->Option.flatMap(t => t.results) {
      | Some(results) =>
        results->Array.map(c =>
          switch c {
          | Some(c) => {
              let id = c.id->Option.getWithDefault("-")
              <Character key={`character-details-${id}`} id />
            }
          | None => React.null
          }
        )
      | None => []
      }
    }->React.array
  }
}

@react.component
let make = () => {
  <React.Fragment>
    <h1> {React.string("About")} </h1>
    <React.Suspense>
      <Content />
    </React.Suspense>
  </React.Fragment>
}
