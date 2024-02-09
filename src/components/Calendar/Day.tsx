import dayjs, { Dayjs } from "dayjs";

type Props = {
	day: Dayjs;
	isFirstWeek: boolean;
};

function Day({ day, isFirstWeek }: Props) {
	const getCurrentDayClass = () => {
		return day.format("YYYY-MM-DD") === dayjs(new Date()).format("YYYY-MM-DD")
			? "bg-blue-600 text-white font-bold hover:bg-blue-500"
			: "";
	};

	return (
		<div className="border-b border-r border-gray-200 flex flex-col">
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
		</div>
	);
}

export default Day;
