import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [dark, setDark] = useState(() => {
		if (typeof window === "undefined") return false;
		return (
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		);
	});

	useEffect(() => {
		const body = document.body;
		body.classList.toggle("theme-dark", dark);
	}, [dark]);

	const toggleTheme = () => setDark((d) => !d);

	return (
		<ThemeContext.Provider value={{ dark, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
