import { ThunkAction, Action } from '@reduxjs/toolkit';
import { createDelphinusStore } from 'zkwasm-minirollup-browser';
import stateReducer from "../data/state";
import uiReducer from "../data/ui";
import errorReducer from "../data/error";
import loadingReducer from "../data/loading";

export const store = createDelphinusStore({
    state: stateReducer,
    ui: uiReducer,
    error: errorReducer,
    loading: loadingReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
