import { CreateEventButton } from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";

function SideBar() {
	return (
		<aside className="flex flex-col items-start justify-start p-4">
			<CreateEventButton />
			<SmallCalendar />
		</aside>
	);
}

export default SideBar;
