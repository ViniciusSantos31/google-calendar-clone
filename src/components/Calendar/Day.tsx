import dayjs, { Dayjs } from "dayjs";
import { useCallback, useEffect, useState } from "react";
import { useCalendar } from "../../hooks/useCalendar";
import { Event, eventService } from "../../services/event";
import CalendarEvent from "../Event";

type Props = {
	day: Dayjs;
	isFirstWeek: boolean;
};

function Day({ day, isFirstWeek }: Props) {
	const { currentMonthIndex } = useCalendar();

	const isToday =
		day.format("YYYY-MM-DD") === dayjs(new Date()).format("YYYY-MM-DD");
	const getCurrentDayClass = () => {
		return isToday ? "bg-blue-600 text-white font-bold hover:bg-blue-500" : "";
	};

	const [events, setEvents] = useState<Event[]>([]);

	const getEventsTheDay = useCallback(async () => {
		await eventService
			.getEvents(day.month())
			.then((res) =>
				setEvents(
					res.filter((event) => dayjs(event.date).date() === day.date())
				)
			);
	}, [currentMonthIndex]);

	useEffect(() => {
		getEventsTheDay();
	}, [getEventsTheDay]);

	return (
		<div className="border-b border-r border-gray-200 flex flex-col pr-1">
			<header className="flex flex-col items-center">
				{isFirstWeek && (
					<p className="text-xs mt-1 text-gray-500 uppercase">
						{day.format("ddd")}
					</p>
				)}
				<p
					className={`flex items-center justify-center text-sm py-1 px-2 my-1 aspect-square text-gray-600 rounded-full cursor-pointer hover:bg-slate-200 ${getCurrentDayClass()}`}>
					{day.format("DD")}
				</p>
			</header>
			<body className="flex flex-col">
				{events.map((event) => (
					<CalendarEvent key={event.id} event={event} />
				))}
			</body>
		</div>
	);
}

export default Day;
