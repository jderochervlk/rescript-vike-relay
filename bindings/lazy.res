module Image = {
  type props = {src: string, className: string}
  @module("react-lazy-load-image-component") @react.component
  external make: t => React.element = "LazyLoadImage"
}
