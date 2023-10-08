type routeParams = {id: string}

@react.component
let make = (~routeParams) => {
  <React.Suspense>
    <Character id=routeParams.id />
  </React.Suspense>
}
