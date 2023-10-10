@module("./relayNetwork")
external makeNetwork: 'a => RescriptRelay.Network.t = "makeNetwork"

let source = RescriptRelay.RecordSource.make()
let store = RescriptRelay.Store.make(~source, ~gcReleaseBufferSize=10, ())

let makeEnvironment = relayServerSSR =>
  RescriptRelay.Environment.make(~store, ~network=makeNetwork(relayServerSSR), ())
