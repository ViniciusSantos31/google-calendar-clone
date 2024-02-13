import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

export const useSidebar = () => {
	const sidebarContext = useContext(SidebarContext);

	if (!sidebarContext) {
		throw new Error(
			"CalendarContext not found. Make sure you are using the useSidebar hook inside a CalendarContextProvider."
		);
	}

	return sidebarContext;
};
