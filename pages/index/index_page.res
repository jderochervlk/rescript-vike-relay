@react.component
let make = () => {
  <React.Fragment>
    <h1 className="text-3xl"> {React.string("Rick and Morty characters")} </h1>
    <p className="mt-2">
      {"Please use the sidebar to learn more about your favorite characters."->React.string}
    </p>
    <hr />
    <p className="text-l mt-5">
      {"This is a demo application created using "->React.string}
      <a
        title="ReScript"
        href="https://rescript-lang.org/"
        className="underline text-blue-500 hover:text-blue-900">
        {"ReScript"->React.string}
      </a>
      {"."->React.string}
      <a href="https://github.com/jderochervlk/rescript-vike-relay" title="GitHub repo">
        <img
          alt="GitHub repository"
          className="w-10 mt-5"
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        />
      </a>
    </p>
  </React.Fragment>
}
