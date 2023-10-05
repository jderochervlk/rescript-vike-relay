export { render };

import { hydrateRoot, createRoot } from "react-dom/client";
import { make as PageShell } from "../src/PageShell";
import { RelayEnvironmentProvider } from "react-relay";
import { RelayNetworkLayer } from 'react-relay-network-modern';
import RelayClientSSR from 'react-relay-network-modern-ssr/lib/client';
import { Environment, RecordSource, Store } from "relay-runtime";

const relayClientSSR = new RelayClientSSR(window.__RELAY_BOOTSTRAP_DATA__);

const network = new RelayNetworkLayer([
  relayClientSSR.getMiddleware({
    lookup: true // Will preserve cache rather than purge after mount.
  }),
]);
let root;
// This render() hook only supports SSR, see https://vike.dev/render-modes for how to modify render() to support SPA
async function render(pageContext) {
  const { Page, pageProps } = pageContext;

  const source = new RecordSource();
  const store = new Store(source);

  const page = (
    <RelayEnvironmentProvider environment={new Environment({
      store,
      network
    })}>
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>
    </RelayEnvironmentProvider>
  );
  const container = document.getElementById("react-root");
  if (!Page)
    throw new Error(
      "Client-side render() hook expects pageContext.Page to be defined",
    );
  if (pageContext.isHydration) {
    root = hydrateRoot(container, page);
  } else {
    if (!root) {
      root = createRoot(container);
    }
    root.render(page);
  }
}

// export const clientRouting = true;
export const hydrationCanBeAborted = true;
