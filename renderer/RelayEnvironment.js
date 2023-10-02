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
          url: `https://countries.trevorblades.com/graphql`,
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

function fetchQuery(operation, variables, cacheConfig, uploadables) {
  return fetch("https://countries.trevorblades.com/graphql", {
    method: "POST",
    headers: {
      // Add authentication and other headers here
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
}

function createEnv(cache) {
  const isServer = typeof window === "undefined";

  const relaySSRMiddleware = isServer
    ? new RelayServerSSR()
    : new RelayClientSSR(cache);
}

export default new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});
