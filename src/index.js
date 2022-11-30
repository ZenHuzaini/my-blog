import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { OptionsContextProvider } from "./context/OptionsContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<OptionsContextProvider>
			<App />
		</OptionsContextProvider>
	</React.StrictMode>
);
