import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { AccountSliceReducer } from 'zkwasm-minirollup-browser';
import stateReducer from "../data/state";
import uiReducer from "../data/ui";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['acccount/deriveL2Account/fulfilled'],
        ignoredActionPaths: ['payload.web3', 'payload.seed', 'payload.injector', 'meta.arg.cmd'],
        ignoredPaths: [
          "acccount/fetchAccount/fulfilled",
          "account.l1Account.web3",
          "endpoint.zkWasmServiceHelper",
          "status.config.latest_server_checksum",
          "account.l2account",
          "puppyParty.properties.player.data.action"
        ],
      },
    }),
  reducer: {
    account: AccountSliceReducer,
    state: stateReducer,
    ui: uiReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
