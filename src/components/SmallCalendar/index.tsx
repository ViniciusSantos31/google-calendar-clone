import dayjs from "dayjs";
import { HTMLAttributes, useEffect, useState } from "react";
import { useCalendar } from "../../hooks/useCalendar";
import { getMonth, getMonthSmallCalendar } from "../../utils/getMonth";
import Day from "./Day";
import Week from "./Week";

type SmallCalendarProps = HTMLAttributes<HTMLDivElement>;

function SmallCalendar({ className, ...rest }: SmallCalendarProps) {
	const [activeDay, setActiveDay] = useState<dayjs.Dayjs | null>(null);

	const {
		currentMonthIndex,
		currentSmallMonthIndex,
		setCurrentMonthIndex,
		setCurrentSmallMonthIndex,
	} = useCalendar();

	const labelMonth = dayjs().month(currentSmallMonthIndex).format("MMMM YYYY");

	const handleNextMonth = () => {
		setCurrentSmallMonthIndex(currentSmallMonthIndex + 1);
	};

	const handlePreviousMonth = () => {
		setCurrentSmallMonthIndex(currentSmallMonthIndex - 1);
	};

	const handleClickDay = (day: dayjs.Dayjs) => {
		setCurrentMonthIndex(day.month());
		setActiveDay(day);
	};

	useEffect(() => {
		setCurrentSmallMonthIndex(currentMonthIndex);
	}, [currentMonthIndex]);

	return (
		<div className={`mt-6 ${className}`} {...rest}>
			<header className="flex w-full items-center justify-between space-x-2">
				<h2 className="text-sm font-semibold text-gray-800 font-sans ml-2">
					{labelMonth}
				</h2>
				<div className="flex gap-2">
					<button onClick={handlePreviousMonth}>
						<div className="material-icons-outlined cursor-pointer text-gray-600 rounded-full p-1 select-none hover:bg-gray-100">
							chevron_left
						</div>
					</button>
					<button onClick={handleNextMonth}>
						<div className="material-icons-outlined cursor-pointer text-gray-600 rounded-full p-1 select-none hover:bg-gray-100">
							chevron_right
						</div>
					</button>
				</div>
			</header>
			<div className="grid grid-cols-7 grid-rows-6 gap-1 mt-4">
				<Week week={getMonth(currentSmallMonthIndex)[0]} />
				{getMonthSmallCalendar(currentSmallMonthIndex).map((week) => (
					<>
						{week.map((day) => {
							const active =
								activeDay?.format("YYYY-MM-DD") === day.format("YYYY-MM-DD");

							return (
								<Day
									onClick={() => handleClickDay(day)}
									key={day.format("YYYY-MM-DD")}
									active={active}
									day={day}
								/>
							);
						})}
					</>
				))}
			</div>
		</div>
	);
}

export default SmallCalendar;
