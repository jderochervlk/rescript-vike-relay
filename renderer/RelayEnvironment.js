import { Environment, Network, RecordSource, Store } from "relay-runtime";
// import { Environment, Store, RecordSource } from "relay-runtime";
import {
  RelayNetworkLayer,
  urlMiddleware,
  retryMiddleware,
  errorMiddleware,
  loggerMiddleware,
} from "react-relay-network-modern/lib/index.js";

export const makeEnvironment = () => {
  return new Environment({
    store: new Store(new RecordSource(), {
      gcReleaseBufferSize: 10,
    }),
    network: new RelayNetworkLayer(
      [
        urlMiddleware({
          url: `https://rickandmortyapi.com/graphql`,
        }),
        retryMiddleware(),
        process.env.NODE_ENV !== "development" ? undefined : errorMiddleware(),
        process.env.NODE_ENV !== "development"
          ? undefined
          : loggerMiddleware({
              logger: (name, req) => {
                console.info(
                  `[RELAY] ${name}\n\t* variables: ${JSON.stringify(
                    req.variables
                  )}`
                );
              },
            }),
      ].filter((middleware) => !!middleware)
    ),
  });
};

// function createEnv(cache) {
//   const isServer = typeof window === "undefined";

//   const relaySSRMiddleware = isServer
//     ? new RelayServerSSR()
//     : new RelayClientSSR(cache);
// }

export default new Environment({
  network: Network.create(makeEnvironment()),
  store: new Store(new RecordSource()),
});
