import { useEffect } from "react";
import { Month } from "../components/Calendar";
import Header from "../components/Header";
import SideBar from "../components/Sidebar";
import { SidebarContextProvider } from "../contexts/SidebarContext";
import { useCalendar } from "../hooks/useCalendar";
import { eventService } from "../services/event";

export function Home() {
	const { currentMonthIndex } = useCalendar();

	useEffect(() => {
		eventService
			.getEvents(currentMonthIndex)
			.then((res) => console.log("event", res));
	}, [currentMonthIndex]);

	return (
		<SidebarContextProvider>
			<div className="h-screen flex flex-col">
				<Header />
				<div className="flex flex-1 overflow-x-hidden">
					<SideBar />
					<Month />
				</div>
			</div>
		</SidebarContextProvider>
	);
}
