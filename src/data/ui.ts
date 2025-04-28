import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export enum UIStateType{
	Idle,
	WelcomePage,
	WithdrawPopup,
	DepositPopup,
	ConfirmPopup,
	ErrorPopup,
  TemplatePopup,
}

export type UIState = 
  { type: UIStateType.Idle} |
  { type: UIStateType.WelcomePage} |
  { type: UIStateType.TemplatePopup} |
  { type: UIStateType.WithdrawPopup} |
  { type: UIStateType.DepositPopup} |
  { type: UIStateType.ConfirmPopup} |
  { type: UIStateType.ErrorPopup};

export interface PropertiesUI {
	uiState: UIState;
}

const initialState: PropertiesUI = {
	uiState: {type: UIStateType.WelcomePage},
};

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
    setUIState: (state, d: PayloadAction<UIState>) => {
      state.uiState = d.payload;
    },
	},
});

export const selectUIState = (state: RootState) => state.ui.uiState;

export const { setUIState } = uiSlice.actions;
export default uiSlice.reducer;
