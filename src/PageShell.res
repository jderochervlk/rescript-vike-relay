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

module Links = {
  @react.component
  let make = () => {
    let t = Character.ListQuery.use(~variables=(), ())

    {
      switch t.characters->Option.flatMap(t => t.results) {
      | Some(results) =>
        results->Array.map(c =>
          switch c {
          | Some(c) => {
              let id = c.id->Option.getWithDefault("-")
              let name = c.name->Option.getWithDefault("unknown")
              <Link key={`character-details-${id}`} href={`/character/${id}`}>
                {name->React.string}
              </Link>
            }
          | None => React.null
          }
        )
      | None => []
      }
    }->React.array
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
      key="site-logo"
      style={{
        marginTop: "20px",
        marginBottom: "10px",
      }}>
      <a href="/" title="home">
        <img src={logoSvg} height="64px" width={"64px"} alt="logo" key="logo-svg" />
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
let make = (~children, ~url) => {
  let (_, setUrl) = Url.useAtom()
  React.useEffect0(() => {
    let _ = setUrl(_ => url)
    None
  })

  <React.StrictMode>
    <Layout key="site-layout">
      <Sidebar key="site-sidebar">
        <Logo />
        <React.Suspense>
          <Links />
        </React.Suspense>
      </Sidebar>
      <Content> {children} </Content>
    </Layout>
  </React.StrictMode>
}
