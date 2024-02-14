import dayjs from "dayjs";
import { HTMLAttributes, useCallback } from "react";
import { cn } from "../../lib/utils";

type DayProps = {
	day: dayjs.Dayjs;
	active?: boolean;
};

function Day({
	day,
	active,
	className,
	...rest
}: DayProps & HTMLAttributes<HTMLDivElement>) {
	const getTodayClassStyle = useCallback(() => {
		const isToday =
			day.format("YYYY-MM-DD") === dayjs(new Date()).format("YYYY-MM-DD");
		return isToday ? "bg-blue-600 text-white hover:bg-blue-400" : "";
	}, [day]);

	return (
		<div
			className={cn(`flex items-center justify-center px-2 aspect-square rounded-full text-xs text-center font-sans font-semibold text-gray-600 cursor-pointer transition-all hover:bg-blue-200 
      ${className}
      ${active && "bg-blue-100 text-blue-500 hover:bg-blue-300"}
      ${getTodayClassStyle()} 
      `)}
			{...rest}>
			{day.format("DD")}
		</div>
	);
}

export default Day;
