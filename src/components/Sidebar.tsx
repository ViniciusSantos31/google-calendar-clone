import { useMemo } from "react";
import { useSidebar } from "../hooks/useSidebar";
import { CreateEventButton } from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";

function SideBar() {
	const { visible } = useSidebar();

	const sidebarStylesVisible = useMemo(() => {
		return visible ? "translate-x-0" : "-translate-x-full";
	}, [visible]);

	return (
		<aside
			className={`flex flex-col items-start justify-start p-4 z-10 bg-white border-r transition-transform ${sidebarStylesVisible}`}>
			<CreateEventButton
				hiddenLabel={!visible}
				className={`${!visible && "absolute top-4 left-12 aspect-square"}`}
			/>
			<SmallCalendar hidden={!visible} />
		</aside>
	);
}

export default SideBar;
