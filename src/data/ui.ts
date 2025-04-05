import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export enum UIState{
	Idle,
	WelcomePage,
	QueryWithdraw,
	WithdrawPopup,
	QueryDeposit,
	DepositPopup,
	ConfirmPopup,
	ErrorPopup,
}

export interface PropertiesUI {
	uiState: UIState;
}

const initialState: PropertiesUI = {
	uiState: UIState.WelcomePage,
};

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		setUIState: (state, action) => {
			state.uiState = action.payload.uIState;
		},
	},
});

export const selectUIState = (state: RootState) => state.uiux.uiState;

export const { setUIState } = uiSlice.actions;
export default uiSlice.reducer;
