@react.component
let make = () => {
  let (count, setCount) = React.useState(_ => 0)

  <button type_="button" onClick={_ => setCount(count => count + 1)}>
    {React.string("Counter: ")}
    {count->Int.toString->React.string}
  </button>
}

let counter = make
