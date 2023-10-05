@react.component @module("react-loading-skeleton")
external make: (
  ~count: int=?,
  ~baseColor: string=?,
  ~highlightColor: string=?,
  ~circle: bool=?,
  ~className: string=?,
  ~style: ReactDOM.style,
) => React.element = "default"
