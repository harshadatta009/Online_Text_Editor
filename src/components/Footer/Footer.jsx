// src/components/Footer/Footer.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaReact } from "react-icons/fa"; // <-- React icon

export const Footer = () => {
	const { dark } = useContext(ThemeContext);
	const year = new Date().getFullYear();
	return (
		<footer
			className={`text-center py-3 mt-4`}
			style={{
				background: dark ? "#181a1b" : "#f8f9fa",
				color: dark ? "#858c91" : "#6c757d",
				fontFamily: "Segoe UI, Arial, sans-serif",
				fontSize: "1rem",
				borderTop: dark ? "1px solid #232425" : "1px solid #e6e6e6",
				letterSpacing: ".02em",
			}}
		>
			<span>
				&copy; {year} Harsha Datta. Made with{" "}
				<FaReact
					style={{
						verticalAlign: "middle",
						color: dark ? "#61dafb" : "#007bff",
						fontSize: "1.1em",
						marginBottom: "2px",
					}}
					title="React"
				/>{" "}
				React &amp; Bootstrap.
			</span>{" "}
			<a
				href="https://github.com/harshadatta009/Text-Utils"
				target="_blank"
				rel="noopener noreferrer"
				style={{
					color: dark ? "#61dafb" : "#007bff",
					textDecoration: "underline",
					fontWeight: 500,
					marginLeft: 6,
				}}
			>
				GitHub Repo
			</a>
		</footer>
	);
};
