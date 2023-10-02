%%raw("import './code.css'")

@react.component
let make = () => {
  <React.Fragment>
    <h1> {React.string("About")} </h1>
    <Character id="1" />
    <Character id="2" />
    <Character id="3" />
  </React.Fragment>
}
