@react.component
let make = () => {
  <React.Fragment>
    <h1> {React.string("Welcome")} </h1>
    {React.string("This page is:")}
    <ul>
      <li> {React.string("Rendered to HTML.")} </li>
      <li>
        {React.string("Interactive ")}
        <Counter />
      </li>
    </ul>
  </React.Fragment>
}
