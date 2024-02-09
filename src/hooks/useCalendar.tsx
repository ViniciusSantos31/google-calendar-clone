import { useContext } from "react";
import { CalendarContext } from "../contexts/CalendarContext";

export const useCalendar = () => {
	const calendarContext = useContext(CalendarContext);

	if (!calendarContext) {
		throw new Error(
			"CalendarContext not found. Make sure you are using the useCalendar hook inside a CalendarContextProvider."
		);
	}

	return calendarContext;
};
