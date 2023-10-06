import RelayServerSSR from 'react-relay-network-modern-ssr/lib/server';
import { makeEnvironment } from '../../../renderer/RelayEnvironment';
import { makePrerender } from '../../../src/page__character_server.mjs';

export async function prerender() {
    const relayServerSSR = new RelayServerSSR()

    return makePrerender(makeEnvironment(relayServerSSR))
}