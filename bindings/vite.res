module Client = {
  module Router = {
    @module("vike/client/router") external navigate: string => unit = "navigate"
  }
}
