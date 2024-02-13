import { useEffect, useState } from "react";
import { Month } from "../components/Calendar";
import CalendarHeader from "../components/Calendar/CalendarHeader";
import SideBar from "../components/Sidebar";
import { SidebarContextProvider } from "../contexts/SidebarContext";
import { useCalendar } from "../hooks/useCalendar";
import { getMonth } from "../utils/getMonth";

export function Home() {
	const [currentMonth, setCurrentMonth] = useState(getMonth());
	const { currentMonthIndex } = useCalendar();

	useEffect(() => {
		setCurrentMonth(getMonth(currentMonthIndex));
	}, [currentMonthIndex]);
	return (
		<SidebarContextProvider>
			<div className="h-screen flex flex-col">
				<CalendarHeader />
				<div className="flex flex-1 overflow-x-hidden">
					<SideBar />
					<Month month={currentMonth} />
				</div>
			</div>
		</SidebarContextProvider>
	);
}
