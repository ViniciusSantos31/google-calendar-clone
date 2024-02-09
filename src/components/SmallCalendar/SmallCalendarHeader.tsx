import dayjs from "dayjs";
import {
	forwardRef,
	useCallback,
	useImperativeHandle,
	useMemo,
	useState,
} from "react";
import { getMonth } from "../../utils/getMonth";

export interface SmallCalendarHeaderProps {
	nextMonth: () => void;
	previousMonth: () => void;
	getCurrentMonth: () => dayjs.Dayjs[][];
	setCurrentMonthIndexSmallCalendar: React.Dispatch<
		React.SetStateAction<number>
	>;
}

const SmallCalendarHeader: React.ForwardRefRenderFunction<
	SmallCalendarHeaderProps
> = (_, ref) => {
	const [currentMonth, setCurrentMonth] = useState(getMonth());
	const [currentMonthIndexSmallCalendar, setCurrentMonthIndexSmallCalendar] =
		useState(dayjs().month());

	const labelMonth = useMemo(() => {
		return dayjs().month(currentMonthIndexSmallCalendar).format("MMMM YYYY");
	}, [currentMonthIndexSmallCalendar]);

	const nextMonth = () => {
		setCurrentMonthIndexSmallCalendar(currentMonthIndexSmallCalendar + 1);
		setCurrentMonth(getMonth(currentMonthIndexSmallCalendar));
	};

	const previousMonth = () => {
		setCurrentMonthIndexSmallCalendar(currentMonthIndexSmallCalendar - 1);

		setCurrentMonth(getMonth(currentMonthIndexSmallCalendar));
	};

	const getCurrentMonth = useCallback(() => {
		return currentMonth;
	}, [currentMonth]);

	useImperativeHandle(
		ref,
		() => ({
			nextMonth,
			previousMonth,
			getCurrentMonth,
			setCurrentMonthIndexSmallCalendar,
		}),
		[
			nextMonth,
			previousMonth,
			getCurrentMonth,
			setCurrentMonthIndexSmallCalendar,
			currentMonthIndexSmallCalendar,
		]
	);

	return (
		<header className="flex w-full items-center justify-start space-x-2">
			<h2 className="text-sm font-semibold text-gray-800 font-sans">
				{labelMonth}
			</h2>
			<div className="flex gap-2">
				<button onClick={previousMonth}>
					<div className="material-icons-outlined cursor-pointer text-gray-600 rounded-full p-1 select-none hover:bg-gray-100">
						chevron_left
					</div>
				</button>
				<button onClick={nextMonth}>
					<div className="material-icons-outlined cursor-pointer text-gray-600 rounded-full p-1 select-none hover:bg-gray-100">
						chevron_right
					</div>
				</button>
			</div>
		</header>
	);
};

export default forwardRef(SmallCalendarHeader);
