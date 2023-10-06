export { render };
// See https://vike.dev/data-fetching
export const passToClient = ["pageProps", "urlPathname", "urlPagename"];
import 'react-loading-skeleton/dist/skeleton.css'

import { renderToString } from "react-dom/server";
import pkg from "react-relay";
import RelayServerSSR from "react-relay-network-modern-ssr/lib/server";
import ssrPrepass from "react-ssr-prepass";
import { dangerouslySkipEscape, escapeInject } from "vike/server";
import { make as PageShell } from "../src/PageShell";
import logoUrl from "../src/logo.svg";
import { makeEnvironment } from "./RelayEnvironment";
import serialize from 'serialize-javascript'

const { RelayEnvironmentProvider } = pkg;

async function renderApp(app) {
  await ssrPrepass(app)
  return renderToString(app)
}

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  // This render() hook only supports SSR, see https://vike.dev/render-modes for how to modify render() to support SPA
  if (!Page)
    throw new Error("My render() hook expects pageContext.Page to be defined");

  const relayServerSSR = new RelayServerSSR()

  let pageHtml = await renderApp(
    <RelayEnvironmentProvider environment={makeEnvironment(relayServerSSR)}>
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>
    </RelayEnvironmentProvider>
  )

  const { documentProps } = pageContext.exports;
  const title = (documentProps && documentProps.title) || "Vite SSR app";
  const desc =
    (documentProps && documentProps.description) || "App using Vite + Vike";

  const cache = await relayServerSSR.getCache()

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
        <script>
          window.__RELAY_BOOTSTRAP_DATA__="${serialize(cache)}"
        </script>
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vike.dev/page-redirection
    },
  };
}
