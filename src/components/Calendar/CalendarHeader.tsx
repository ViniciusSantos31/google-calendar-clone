import dayjs from "dayjs";
import { Menu } from "lucide-react";
import { useCalendar } from "../../hooks/useCalendar";
import { useSidebar } from "../../hooks/useSidebar";

function CalendarHeader() {
	const { currentMonthIndex, setCurrentMonthIndex, navigateToToday } =
		useCalendar();

	const { toggleVisibility } = useSidebar();

	const labelMonth = dayjs().month(currentMonthIndex).format("MMMM YYYY");

	const handlePreviewMonth = () => {
		setCurrentMonthIndex(currentMonthIndex - 1);
	};

	const handleNextMonth = () => {
		setCurrentMonthIndex(currentMonthIndex + 1);
	};

	return (
		<div className="w-full p-3 flex items-center border-b">
			<div className="flex items-center space-x-10">
				<div className="flex items-center">
					<button
						onClick={toggleVisibility}
						className="p-2 size-auto cursor-pointer rounded-full mr-4 hover:bg-gray-200">
						<Menu />
					</button>
					<div className="flex space-x-2 items-center">
						<img
							src={`https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_${dayjs().date()}_2x.png`}
							alt="Agenda logo"
							className="size-10"
						/>
						<p className="font-sans font-normal text-xl">Calendar</p>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<button
						onClick={navigateToToday}
						className="border px-4 py-2 font-sans text-sm font-semibold text-gray-500 hover:bg-[#f1f3f4] transition-all rounded">
						Today
					</button>
					<div className="flex items-center">
						<button
							onClick={handlePreviewMonth}
							disabled={currentMonthIndex === 0}
							className="material-icons-outlined cursor-pointer text-gray-600 rounded-full p-1 select-none hover:bg-gray-100">
							chevron_left
						</button>
						<button
							onClick={handleNextMonth}
							disabled={currentMonthIndex === 11}
							className="material-icons-outlined cursor-pointer text-gray-600 rounded-full p-1 select-none hover:bg-gray-100">
							chevron_right
						</button>
					</div>
					<p className="text-xl">{labelMonth}</p>
				</div>
			</div>
		</div>
	);
}

export default CalendarHeader;
