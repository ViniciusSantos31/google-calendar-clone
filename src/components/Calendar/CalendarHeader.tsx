import dayjs from "dayjs";
import { Menu } from "lucide-react";
import { useCalendar } from "../../hooks/useCalendar";

function CalendarHeader() {
	const { currentMonthIndex, setCurrentMonthIndex, navigateToToday } =
		useCalendar();

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
					<div className="p-2 size-auto cursor-pointer rounded-full mr-4 hover:bg-gray-200">
						<Menu />
					</div>
					<div className="flex space-x-2 items-center">
						<img
							src="https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_9_2x.png"
							alt="Agenda logo"
							className="size-10"
						/>
						<p className="font-sans font-normal text-xl">Agenda</p>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<button
						onClick={navigateToToday}
						className="rounded-md border px-4 py-2 font-sans text-sm font-semibold text-gray-500 hover:bg-[#f1f3f4] transition-all">
						Hoje
					</button>
					<div className="flex items-center">
						<div
							onClick={handlePreviewMonth}
							className="material-icons-outlined cursor-pointer text-gray-600 rounded-full p-1 select-none hover:bg-gray-100">
							chevron_left
						</div>
						<div
							onClick={handleNextMonth}
							className="material-icons-outlined cursor-pointer text-gray-600 rounded-full p-1 select-none hover:bg-gray-100">
							chevron_right
						</div>
					</div>
					<p className="text-xl">{labelMonth}</p>
				</div>
			</div>
		</div>
	);
}

export default CalendarHeader;
