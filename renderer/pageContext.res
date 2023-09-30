// `usePageContext` allows us to access `pageContext` in any React component.
// See https://vike.dev/pageContext-anywhere

let context = React.createContext(Some(0))

module Provider = {
  let t = React.Context.provider(context)
  @react.component
  let make = (~pageContext, ~children) => {
    <t value={pageContext}> {children} </t>
  }
}

let usePageContext = () => {
  React.useContext(context)
}
