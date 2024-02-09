import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { CalendarContextProvider } from "./contexts/CalendarContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<CalendarContextProvider>
			<App />
		</CalendarContextProvider>
	</React.StrictMode>
);
