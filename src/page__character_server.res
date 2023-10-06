// type page = {url: string}

// module Query = %relay(`
//   query pageCharacterServerQuery {
//   characters {
//     results {
//       id
//     }
//   }
// }
// `)

// let makePrerender = async (environment: RescriptRelay.Environment.t) => {
//   let t = await Query.fetchPromised(~environment, ~variables=(), ())
//   switch t.characters->Option.flatMap(t => t.results) {
//   | Some(results) =>
//     results->Array.map(c =>
//       switch c {
//       | Some(c) => {url: `/character/${c.id->Option.getWithDefault("")}`}
//       | None => {url: "character/0"}
//       }
//     )
//   | None => []
//   }
// }

let makePrerender = async () => []
