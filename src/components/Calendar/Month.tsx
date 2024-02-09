import dayjs from "dayjs";
import { Fragment } from "react";
import Day from "./Day";

type Props = {
	month: dayjs.Dayjs[][];
};

function Month({ month }: Props) {
	return (
		<div className="flex-1 border-collapse border-l grid grid-cols-7 grid-rows-5">
			{month.map((week, idxWeek) => (
				<Fragment key={idxWeek}>
					{week.map((day, idxDay) => (
						<Day day={day} isFirstWeek={idxWeek === 0} key={idxDay} />
					))}
				</Fragment>
			))}
		</div>
	);
}
export default Month;
