export { render };

import { hydrateRoot, createRoot } from "react-dom/client";
import { make as PageShell } from "../src/PageShell";
import { RelayEnvironmentProvider } from "react-relay";
import Environment, { makeEnvironment } from "./RelayEnvironment";

let root;
// This render() hook only supports SSR, see https://vike.dev/render-modes for how to modify render() to support SPA
async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const page = (
    <RelayEnvironmentProvider environment={makeEnvironment()}>
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

export const clientRouting = true;
export const hydrationCanBeAborted = true;
