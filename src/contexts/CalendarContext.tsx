import dayjs from "dayjs";
import React, { createContext, useState } from "react";

type CalendarContextValue = {
	currentMonthIndex: number;
	setCurrentMonthIndex: (month: number) => void;
	navigateToToday: () => void;
};

export const CalendarContext = createContext<CalendarContextValue | null>(null);

export const CalendarContextProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());

	const navigateToToday = () => {
		setCurrentMonthIndex(dayjs().month());
	};

	return (
		<CalendarContext.Provider
			value={{
				currentMonthIndex,
				setCurrentMonthIndex,
				navigateToToday,
			}}>
			{children}
		</CalendarContext.Provider>
	);
};

export default CalendarContext;
