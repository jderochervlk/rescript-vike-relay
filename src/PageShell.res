%%raw("import './PageShell.css'")

@module("./logo.svg") external logoSvg: string = "default"
module Sidebar = {
  @react.component
  let make = (~children) => {
    <div
      style={{
        padding: "20px",
        flexShrink: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: "1.8em",
      }}>
      {children}
    </div>
  }
}

module Content = {
  @react.component
  let make = (~children) => {
    <div
      style={{
        padding: "20px",
        paddingBottom: "50px",
        borderLeft: "2px solid #eee",
        minHeight: "100vh",
      }}>
      {children}
    </div>
  }
}

module Logo = {
  @react.component
  let make = () =>
    <div
      style={{
        marginTop: "20px",
        marginBottom: "10px",
      }}>
      <a href="/">
        <img src={logoSvg} height="64px" width={"64px"} alt="logo" />
      </a>
    </div>
}

module Layout = {
  @react.component
  let make = (~children) => {
    <div
      style={{
        display: "flex",
        maxWidth: "900px",
        margin: "auto",
      }}>
      {children}
    </div>
  }
}

@react.component
let make = (~pageContext, ~children, ~url) => {
  let (_, setUrl) = Url.useAtom()
  React.useEffect0(() => {
    let _ = setUrl(_ => url)
    None
  })
  <React.StrictMode>
    <Layout>
      <Sidebar>
        <Logo />
        <Link className="navitem" href="/"> {React.string("Home")} </Link>
        <Link className="navitem" href="/about"> {React.string("About")} </Link>
      </Sidebar>
      <Content> {children} </Content>
    </Layout>
  </React.StrictMode>
}
