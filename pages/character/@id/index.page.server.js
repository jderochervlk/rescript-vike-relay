import { makeEnvironment } from '../../../renderer/RelayEnvironment'
import { makePrerender } from '../../../src/page__character_server.mjs'
import RelayClientSSR from 'react-relay-network-modern-ssr/lib/client';
import { window } from 'browser-monads'
import RelayServerSSR from 'react-relay-network-modern-ssr/lib/server';

export async function prerender() {
    const relayClientSSR = new RelayClientSSR(window.__RELAY_BOOTSTRAP_DATA__);
    const relayServerSSR = new RelayServerSSR()

    let isClient = typeof window !== undefined
    return makePrerender(isClient ?
        makeEnvironment(relayClientSSR)
        : makeEnvironment(relayServerSSR))
}