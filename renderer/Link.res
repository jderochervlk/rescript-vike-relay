@react.component
let make = (~className, ~to, ~children) => {
  // pageContext.urlPathname === props.href && 'is-active'].filter(Boolean).join(' ')

  let onClick = _ => Vite.Client.Router.navigate(to)

  <a className onClick style={{cursor: "pointer"}}> {children} </a>
}
