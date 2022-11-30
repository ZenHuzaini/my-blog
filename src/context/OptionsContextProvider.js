import { createContext, useReducer } from "react";
import { OptionsContextReducer } from "./OptionsContextReducer";

const INITIAL_STATE = {
	isMobileMenuVisible: false,
};

export const OptionsContext = createContext(INITIAL_STATE);

export const OptionsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(OptionsContextReducer, INITIAL_STATE);

	return (
		<OptionsContext.Provider value={{ ...state, dispatch }}>{children}</OptionsContext.Provider>
	);
};
