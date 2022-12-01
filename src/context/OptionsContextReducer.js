import { contextType } from "./contextTypes";

export const OptionsContextReducer = (state, { type, data }) => {
	switch (type) {
		case contextType.SHOW_MOBILE_MENU: {
			return { ...state, isMobileMenuVisible: data };
		}

		case contextType.SHOW_POP_UP_SEARCH: {
			return { ...state, isSearchPopupVisible: data };
		}

		case contextType.WINDOW_SIZE: {
			return { ...state, windowSize: data };
		}

		default: {
			return state;
		}
	}
};
