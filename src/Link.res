@react.component
let make = (~className, ~href="", ~children) => {
  let (url, setUrl) = Url.useAtom()

  let isActive = url == href

  <a
    className={className ++ (isActive ? " is-active" : "")}
    href
    style={{cursor: "pointer"}}
    onClick={_ => setUrl(_ => href)}>
    {children}
  </a>
}
