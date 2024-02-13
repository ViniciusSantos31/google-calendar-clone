import dayjs from "dayjs";
import { Fragment, useEffect, useState } from "react";
import Day from "./Day";

import "animate.css";
import { useCalendar } from "../../hooks/useCalendar";

type Props = {
	month: dayjs.Dayjs[][];
};

function Month({ month }: Props) {
	const { currentMonthIndex } = useCalendar();
	const [preventMonthIndex, setPreventMonthIndex] = useState(currentMonthIndex);

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
			className={`flex-1 border-collapse grid grid-cols-7 grid-rows-[${month.length}] -z-0`}>
			{month.map((week, idxWeek) => (
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
