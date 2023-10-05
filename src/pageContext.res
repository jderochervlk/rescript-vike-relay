// `usePageContext` allows us to access `pageContext` in any React component.
// See https://vike.dev/pageContext-anywhere

type pageContext = {urlPathname: string}

let empty: option<{.}> = None

let context: React.Context.t<option<{.}>> = React.createContext(empty)

module Provider = {
  let provider = React.Context.provider(context)
  @react.component
  let make = (~pageContext, ~children) => {
    <provider value={pageContext}> {children} </provider>
  }
}

let usePageContext = () => {
  React.useContext(context)
}
