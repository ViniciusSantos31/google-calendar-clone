import { useEffect, useState } from "react";
import { Month } from "../components/Calendar";
import CalendarHeader from "../components/Calendar/CalendarHeader";
import SideBar from "../components/Sidebar";
import { useCalendar } from "../hooks/useCalendar";
import { getMonth } from "../utils/getMonth";

export function Home() {
	const [currentMonth, setCurrentMonth] = useState(getMonth());
	const { currentMonthIndex } = useCalendar();

	useEffect(() => {
		setCurrentMonth(getMonth(currentMonthIndex));
	}, [currentMonthIndex]);
	return (
		<>
			<div className="h-screen flex flex-col">
				<CalendarHeader />
				<div className="flex flex-1">
					<SideBar />
					<Month month={currentMonth} />
				</div>
			</div>
		</>
	);
}
