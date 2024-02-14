import { Fragment, useEffect, useState } from "react";
import Day from "./Day";

import "animate.css";
import { useCalendar } from "../../hooks/useCalendar";
import { useSidebar } from "../../hooks/useSidebar";
import { getMonth } from "../../utils/getMonth";

function Month() {
	const { currentMonthIndex } = useCalendar();
	const { visible } = useSidebar();

	const [preventMonthIndex, setPreventMonthIndex] = useState(currentMonthIndex);
	const [currentMonth, setCurrentMonth] = useState(getMonth());

	useEffect(() => {
		setCurrentMonth(getMonth(currentMonthIndex));
	}, [currentMonthIndex]);

	useEffect(() => {
		const month = document.getElementById("calendar_month");

		const animationClass =
			currentMonthIndex > preventMonthIndex
				? "animate-slide-left"
				: "animate-slide-right";

		if (month) {
			month.classList.add("animate__animated", animationClass);
		}

		const animationInterval = setInterval(() => {
			if (month) {
				month.classList.remove("animate__animated", animationClass);
			}
		}, 200);

		setPreventMonthIndex(currentMonthIndex);

		return () => {
			clearInterval(animationInterval);
		};
	}, [currentMonthIndex]);

	return (
		<div
			id="calendar_month"
			className={`flex-1 border-collapse grid grid-cols-7 grid-rows-[${
				currentMonth.length
			}] z-0 transition-all ${!visible && "border-l"}`}>
			{currentMonth.map((week, idxWeek) => (
				<Fragment key={idxWeek}>
					{week.map((day, idxDay) => (
						<Day day={day} isFirstWeek={idxWeek === 0} key={idxDay} />
					))}
				</Fragment>
			))}
		</div>
	);
}
export default Month;
