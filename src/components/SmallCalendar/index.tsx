import dayjs from "dayjs";
import { Fragment, HTMLAttributes, useEffect, useState } from "react";
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
					<button
						onClick={handlePreviousMonth}
						disabled={currentSmallMonthIndex === 0}
						className="group group-hover:text-gray-600 cursor-pointer text-gray-600 rounded-full select-none hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50">
						<div className=" group-disabled:cursor-default material-icons-outlined cursor-pointer text-gray-600 rounded-full p-1 select-none hover:bg-gray-100">
							chevron_left
						</div>
					</button>
					<button
						onClick={handleNextMonth}
						disabled={currentSmallMonthIndex === 11}
						className="group group-hover:text-gray-600 cursor-pointer text-gray-600 rounded-full select-none hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50">
						<div className="group-disabled:cursor-default material-icons-outlined cursor-pointer text-gray-600 rounded-full p-1 select-none hover:bg-gray-100">
							chevron_right
						</div>
					</button>
				</div>
			</header>
			<div className="grid grid-cols-7 grid-rows-6 gap-1 mt-4">
				<Week week={getMonth(currentSmallMonthIndex)[0]} />
				{getMonthSmallCalendar(currentSmallMonthIndex).map((week) => (
					<Fragment>
						{week.map((day) => {
							const active =
								activeDay?.format("YYYY-MM-DD") === day.format("YYYY-MM-DD");

							const isNotThisMonth = day.month() !== currentSmallMonthIndex;

							return (
								<Day
									onClick={() => handleClickDay(day)}
									key={day.format("YYYY-MM-DD")}
									active={active}
									day={day}
									className={
										isNotThisMonth
											? "text-gray-400 font-normal hover:bg-blue-300 hover:text-white"
											: ""
									}
								/>
							);
						})}
					</Fragment>
				))}
			</div>
		</div>
	);
}

export default SmallCalendar;
