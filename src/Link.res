@react.component
let make = (~className, ~href="", ~children) => {
  <a className href style={{cursor: "pointer"}}> {children} </a>
}
