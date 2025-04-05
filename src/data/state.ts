import { createStateSlice, PropertiesState, ConnectState } from "zkwasm-minirollup-browser";
import {RootState} from '../app/store';

export interface PlayerInfo {
  nonce: number;
  data: {
    /* */
  }
}

export interface GlobalState {
  counter: number,
}

const initialState: PropertiesState<PlayerInfo, GlobalState, any> = {
		connectState: ConnectState.Init,
		isConnected: false,
		userState: null,
		lastError: null,
		config: null,
};


export const stateSlice = createStateSlice(initialState);

export const selectConnectState = (state: RootState) => state.state.connectState;
export const selectNullableUserState = (state: RootState) => state.state.userState;
export const selectUserState = (state: RootState) => state.state.userState!;
export const selectLastError = (state: RootState) => state.state.lastError;
export const selectNullableConfig = (state: RootState) => state.state.config;
export const selectConfig = (state: RootState) => state.state.config!;

export const { setConnectState } = stateSlice.actions;
export default stateSlice.reducer;