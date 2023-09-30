%%raw("import './code.css'")

@react.component
let make = () => {
  <React.Fragment>
    <h1> {React.string("About")} </h1>
    <p> {React.string("Example of using Vike...")} </p>
  </React.Fragment>
}
