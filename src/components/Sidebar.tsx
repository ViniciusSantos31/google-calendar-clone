import { CreateEventButton } from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";

function SideBar() {
	return (
		<aside className="flex flex-col items-start justify-start p-4 z-10 bg-white border-r">
			<CreateEventButton />
			<SmallCalendar />
		</aside>
	);
}

export default SideBar;
