import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { OptionsContextProvider } from "./context/OptionsContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<HelmetProvider>
			<OptionsContextProvider>
				<App />
			</OptionsContextProvider>
		</HelmetProvider>
	</React.StrictMode>
);
