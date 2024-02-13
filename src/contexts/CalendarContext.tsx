import dayjs from "dayjs";
import React, { createContext, useState } from "react";

type CalendarContextValue = {
	currentMonthIndex: number;
	currentSmallMonthIndex: number;
	setCurrentSmallMonthIndex: (month: number) => void;
	setCurrentMonthIndex: (month: number) => void;
	navigateToToday: () => void;
};

export const CalendarContext = createContext<CalendarContextValue | null>(null);

export const CalendarContextProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
	const [currentSmallMonthIndex, setCurrentSmallMonthIndex] = useState(
		dayjs().month()
	);

	const navigateToToday = () => {
		setCurrentMonthIndex(dayjs().month());
		setCurrentSmallMonthIndex(dayjs().month());
	};

	return (
		<CalendarContext.Provider
			value={{
				currentMonthIndex,
				currentSmallMonthIndex,
				setCurrentSmallMonthIndex,
				setCurrentMonthIndex,
				navigateToToday,
			}}>
			{children}
		</CalendarContext.Provider>
	);
};

export default CalendarContext;
