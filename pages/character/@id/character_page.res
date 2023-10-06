type routeParams = {id: string}

@react.component
let make = (~routeParams) => {
  <div>
    <React.Suspense>
      <Character id=routeParams.id />
    </React.Suspense>
  </div>
}
