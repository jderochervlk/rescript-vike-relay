type page = {url: string}

let makePrerender = async (environment: RescriptRelay.Environment.t) => {
  let t = await Character.ListQuery.fetchPromised(~environment, ~variables=(), ())
  switch t.characters->Option.flatMap(t => t.results) {
  | Some(results) =>
    results->Array.map(c =>
      switch c {
      | Some(c) => Some({url: `/character/${c.id->Option.getWithDefault("")}`})
      | None => None
      }
    )
  | None => []
  }
}
