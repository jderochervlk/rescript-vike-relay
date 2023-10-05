export { render };
// See https://vike.dev/data-fetching
export const passToClient = ["pageProps", "urlPathname"];

import ReactDOMServer, { renderToString } from "react-dom/server";
import { make as PageShell } from "../src/PageShell";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import logoUrl from "../src/logo.svg";
import pkg from "react-relay";
import { makeEnvironment } from "./RelayEnvironment";
import ssrPrepass from "react-ssr-prepass";
import { createElement } from 'react'
import RelayServerSSR from "react-relay-network-modern-ssr/lib/server";
import { Environment, Network, RecordSource, Store } from "relay-runtime";
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

  await renderApp(
    <RelayEnvironmentProvider environment={makeEnvironment(relayServerSSR)}>
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>
    </RelayEnvironmentProvider>
  )

  let relayData = await relayServerSSR.getCache()

  const source = new RecordSource();
  const store = new Store(source);

  console.log(relayData)

  let pageHtml = await renderApp(
    <RelayEnvironmentProvider environment={new Environment({
      network: Network.create(() => relayData[0][1]),
      store
    })}>
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>
    </RelayEnvironmentProvider>)

  // See https://vike.dev/head
  const { documentProps } = pageContext.exports;
  const title = (documentProps && documentProps.title) || "Vite SSR app";
  const desc =
    (documentProps && documentProps.description) || "App using Vite + Vike";

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
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
