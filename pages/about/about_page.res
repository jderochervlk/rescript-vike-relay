%%raw("import './code.css'")

@react.component
let make = () => {
  let t = Character.ListQuery.use(~variables=(), ())

  <React.Fragment>
    <h1> {React.string("About")} </h1>
    <React.Suspense>
      {switch t.characters->Option.flatMap(t => t.results) {
      | Some(results) =>
        results->Array.map(c =>
          switch c {
          | Some(c) => <Character id={c.id->Option.getWithDefault("")} />
          | None => React.null
          }
        )
      | None => []
      }}
    </React.Suspense>
  </React.Fragment>
}
