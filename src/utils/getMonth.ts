import dayjs from "dayjs";

export const getMonth = (month: number = dayjs().month()) => {
	const year = dayjs().year();

	const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
	let currentMonthCount = 0 - firstDayOfMonth;

	const daysMatrix = new Array(5).fill([]).map(() => {
		return new Array(7).fill(1).map(() => {
			currentMonthCount++;
			return dayjs(new Date(year, month, currentMonthCount)).date();
		});
	});

	return daysMatrix;
};
