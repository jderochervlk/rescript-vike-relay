@react.component
let make = (~className, ~href, ~children) => {
  let context = PageContext.usePageContext()

  let isActive = false

  // let (state, _) = PageState.useAtom()

  // let url = state->Object.get("urlOriginal")

  // let isActive = switch url {
  // | None => href == "/"
  // | Some(u) => href->String.includes("/" ++ u)
  // }

  // Console.log4(400, url, href, isActive)

  // console.log2()

  <a
    className={className ++ (isActive ? " is-active" : "")}
    // onClick
    href
    style={{cursor: "pointer"}}>
    {children}
  </a>
}
