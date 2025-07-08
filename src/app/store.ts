import { ThunkAction, Action } from '@reduxjs/toolkit';
import { createDelphinusStore } from 'zkwasm-minirollup-browser';
import stateReducer from "../data/state";
import uiReducer from "../data/ui";

export const store = createDelphinusStore({
    state: stateReducer,
    ui: uiReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
