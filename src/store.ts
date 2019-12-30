import { init, RematchRootState } from "@rematch/core";
import * as models from "./models";
import createLoadingPlugin from "@rematch/loading";

const loadingPlugin = createLoadingPlugin({});
export const store = init({
  models,
  plugins: [loadingPlugin]
});
export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
interface ILoadingPlugin {
  loading: {
    models: RematchRootState<typeof models>;
    effects: Dispatch;
  };
}
export type iRootState = RematchRootState<typeof models> & ILoadingPlugin;
