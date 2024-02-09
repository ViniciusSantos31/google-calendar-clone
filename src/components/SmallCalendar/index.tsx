import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useCalendar } from "../../hooks/useCalendar";
import { getMonth } from "../../utils/getMonth";
import Day from "./Day";
import Week from "./Week";

function SmallCalendar() {
	const [currentMonthIndexSmallCalendar, setCurrentMonthIndexSmallCalendar] =
		useState(dayjs().month());

	const [activeDay, setActiveDay] = useState<dayjs.Dayjs | null>(null);

	const { currentMonthIndex, setCurrentMonthIndex } = useCalendar();

	const labelMonth = dayjs()
		.month(currentMonthIndexSmallCalendar)
		.format("MMMM YYYY");

	const handleNextMonth = () => {
		setCurrentMonthIndexSmallCalendar(currentMonthIndexSmallCalendar + 1);
	};

	const handlePreviousMonth = () => {
		setCurrentMonthIndexSmallCalendar(currentMonthIndexSmallCalendar - 1);
	};

	const handleClickDay = (day: dayjs.Dayjs) => {
		setCurrentMonthIndex(day.month());
		setActiveDay(day);
	};

	useEffect(() => {
		setCurrentMonthIndexSmallCalendar(currentMonthIndex);
	}, [currentMonthIndex]);

	return (
		<div className="mt-6">
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
				<Week week={getMonth(currentMonthIndexSmallCalendar)[0]} />
				{getMonth(currentMonthIndexSmallCalendar).map((week, idx) => (
					<>
						{week.map((day) => {
							const isDiffMonth = week.some(
								() => day.month() !== currentMonthIndexSmallCalendar
							);
							const active =
								activeDay?.format("YYYY-MM-DD") === day.format("YYYY-MM-DD");

							return (
								<Day
									onClick={() => handleClickDay(day)}
									active={active}
									day={day}
									className={isDiffMonth ? `text-gray-400` : ""}
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
