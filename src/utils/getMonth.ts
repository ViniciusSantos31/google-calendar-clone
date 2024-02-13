import dayjs from "dayjs";

export const getMonth = (month = dayjs().month(), year = dayjs().year()) => {
	const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
	let currentMonthCount = 0 - firstDayOfMonth;

	const daysMatrix = new Array(6).fill([]).map(() => {
		return new Array(7).fill(1).map(() => {
			currentMonthCount++;
			return dayjs(new Date(year, month, currentMonthCount));
		});
	});

	const doesNotHaveFiveWeeks = daysMatrix[5].every(
		(day) => day.month() !== month
	);

	if (doesNotHaveFiveWeeks) return daysMatrix.slice(0, 5);

	return daysMatrix;
};

export const getMonthSmallCalendar = (
	month = dayjs().month(),
	year = dayjs().year()
) => {
	const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
	let currentMonthCount = 0 - firstDayOfMonth;

	const daysMatrix = new Array(6).fill([]).map(() => {
		return new Array(7).fill(1).map(() => {
			currentMonthCount++;
			return dayjs(new Date(year, month, currentMonthCount));
		});
	});

	return daysMatrix;
};
