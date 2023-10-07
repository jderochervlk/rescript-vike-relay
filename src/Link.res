open Classnames

@react.component
let make = (~className="", ~href="", ~children) => {
  let (url, setUrl) = Url.useAtom()

  let (isActive, setIsActive) = React.useState(_ => false)
  // Console.log3(url, href, isActive)

  React.useEffect1(() => {
    setIsActive(_ => url == href)
    None
  }, [url])

  let class = classnames([className, isActive ? "text-blue-500" : "", "cursor-pointer"])

  <a className={class} href style={{cursor: "pointer"}} onClick={_ => setUrl(_ => href)}>
    {children}
  </a>
}
