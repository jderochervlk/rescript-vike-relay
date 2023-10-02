// `usePageContext` allows us to access `pageContext` in any React component.
// See https://vike.dev/pageContext-anywhere

type pageContext = {urlPathname: string}

let empty: option<{.}> = None

let context: React.Context.t<option<{.}>> = React.createContext(empty)

module Provider = {
  let t = React.Context.provider(context)
  @react.component
  let make = (~pageContext, ~children) => {
    Console.log2(202, pageContext)
    <t value={pageContext}> {children} </t>
  }
}

let usePageContext = () => {
  React.useContext(context)
}
