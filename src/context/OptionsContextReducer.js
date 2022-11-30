export const OptionsContextReducer = (state, { type, data }) => {
	switch (type) {
		case "SHOW_MOBILE_MENU": {
			return { ...state, isMobileMenuVisible: data };
		}

		default: {
			return state;
		}
	}
};
