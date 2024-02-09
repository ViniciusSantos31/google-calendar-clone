import dayjs from "dayjs";

type WeekProps = {
	week: dayjs.Dayjs[];
};

function Week({ week }: WeekProps) {
	return week.map((day) => (
		<div className="text-center font-sans cursor-default font-semibold text-gray-500 text-xs">
			{day.format("dd")[0]}
		</div>
	));
}

export default Week;
