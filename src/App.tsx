import dayjs from "dayjs";
import { useEffect } from "react";
import { Home } from "./pages/Home";

function App() {
	useEffect(() => {
		let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
		if (!link) {
			link = document.createElement("link");
			link.rel = "icon";
			document.getElementsByTagName("head")[0].appendChild(link);
		}
		link.href = `https://calendar.google.com/googlecalendar/images/favicons_2020q4/calendar_${dayjs().date()}.ico`;
	}, []);

	return <Home />;
}

export default App;
