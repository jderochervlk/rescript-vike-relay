// `usePageContext` allows us to access `pageContext` in any React component.
// See https://vike.dev/pageContext-anywhere

type pageContext = {urlPathname: string}

let empty: option<{.}> = None

let context: React.Context.t<option<{.}>> = React.createContext(empty)

module Provider = {
  let p = React.Context.provider(context)
  @react.component
  let make = (~pageContext, ~children) => {
    <p value={pageContext}> {children} </p>
  }
}

let usePageContext = () => {
  React.useContext(context)
}
