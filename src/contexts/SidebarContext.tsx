import React, { createContext, useState } from "react";

type SidebarContextValue = {
	visible: boolean;
	toggleVisibility: () => void;
};

export const SidebarContext = createContext<SidebarContextValue | null>(null);

export const SidebarContextProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [visible, setVisible] = useState(true);

	const toggleVisibility = () => {
		setVisible(!visible);
	};

	return (
		<SidebarContext.Provider
			value={{
				visible,
				toggleVisibility,
			}}>
			{children}
		</SidebarContext.Provider>
	);
};

export default SidebarContext;
