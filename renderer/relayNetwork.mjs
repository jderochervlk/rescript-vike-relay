import { Environment, RecordSource, Store } from "relay-runtime";
import {
  RelayNetworkLayer,
  batchMiddleware,
  cacheMiddleware,
  errorMiddleware,
  loggerMiddleware,
  retryMiddleware,
  urlMiddleware
} from "react-relay-network-modern/lib/index.js";

export const makeNetwork = (relayServerSSR) => new RelayNetworkLayer(
  [
    relayServerSSR?.getMiddleware(),
    cacheMiddleware(),
    batchMiddleware(),
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
              req.variables,
            )}`,
          );
        },
      }),
  ],
)