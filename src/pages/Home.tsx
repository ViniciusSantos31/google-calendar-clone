import { Month } from "../components/Calendar";
import Header from "../components/Header";
import SideBar from "../components/Sidebar";
import { SidebarContextProvider } from "../contexts/SidebarContext";

export function Home() {
	return (
		<SidebarContextProvider>
			<div className="h-screen flex flex-col">
				<Header />
				<div className="flex flex-1 overflow-x-hidden">
					<SideBar />
					<Month />
				</div>
			</div>
		</SidebarContextProvider>
	);
}
