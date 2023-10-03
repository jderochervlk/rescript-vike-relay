import { GetServerSidePropsContext } from "next";
import RelayModernEnvironment from "relay-runtime/lib/store/RelayModernEnvironment";
import { makeEnvironment } from "./environment";

const storeName = "__relayStore__";

export async function hydrateRelayStore(context, callback) {
  const environment = makeEnvironment();
  const result = await callback(environment);
  return {
    ...(typeof result === "object" ? result : {}),
    [storeName]: environment.getStore().getSource().toJSON(),
  };
}
