module ChunkQuery = %relay(`
  fragment ChunkSingle_Country on Country {
    name
  }
`)

@react.component
let make = () => {
  // let data = ChunkQuery.use(ticketRef)

  // Console.log(data)

  <p> {React.string("hey there")} </p>
}
