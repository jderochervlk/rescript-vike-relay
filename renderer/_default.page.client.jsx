export { render };

import { createRoot, hydrateRoot } from "react-dom/client";
import 'react-loading-skeleton/dist/skeleton.css';
import { RelayEnvironmentProvider } from "react-relay";
import RelayClientSSR from 'react-relay-network-modern-ssr/lib/client';
import { make as PageShell } from "../src/PageShell";
import { makeEnvironment } from "./RelayEnvironment";


let root;
// This render() hook only supports SSR, see https://vike.dev/render-modes for how to modify render() to support SPA
async function render(pageContext) {
  const relayClientSSR = new RelayClientSSR(JSON.parse(window.__RELAY_BOOTSTRAP_DATA__))

  const { Page, pageProps, urlPathname } = pageContext;

  const page = (
    <RelayEnvironmentProvider environment={makeEnvironment(relayClientSSR)}>
      <PageShell pageContext={pageContext} url={urlPathname}>
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
