import { useState } from "react";
import { Month } from "../components/Calendar";
import CalendarHeader from "../components/Calendar/CalendarHeader";
import { getMonth } from "../utils/getMonth";

export function Home() {
	const [currentMonth, setCurrentMonth] = useState(getMonth());
	return (
		<>
			<div className="h-screen flex flex-col">
				<CalendarHeader />
				<div className="flex flex-1">
					<Month month={currentMonth} />
				</div>
			</div>
		</>
	);
}
