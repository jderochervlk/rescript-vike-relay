module Image = {
  // type props = {src: string, className: string}
  @module("react-lazy-load-image-component") @react.component
  external make: (
    ~src: string,
    ~className: string=?,
    ~height: int=?,
    ~width: int=?,
    ~placeholder: React.element=?,
  ) => React.element = "LazyLoadImage"
}
