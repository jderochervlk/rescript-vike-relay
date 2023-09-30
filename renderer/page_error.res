@react.component
let make = (~is404) => {
  if is404 {
    <React.Fragment>
      <h1> {"404 Page Not Found"->React.string} </h1>
      <p> {"This page could not be found."->React.string} </p>
    </React.Fragment>
  } else {
    <React.Fragment>
      <h1> {"500 Internal Error"->React.string} </h1>
      <p> {"Something went wrong."->React.string} </p>
    </React.Fragment>
  }
}
