import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
const ThemeToggle = () => {
	const { dark, toggleTheme } = useContext(ThemeContext);

	return (
		<OverlayTrigger
			placement="bottom"
			overlay={
				<Tooltip id="tt-theme-toggle">
					{dark ? "Switch to light mode" : "Switch to dark mode"}
				</Tooltip>
			}
		>
			<Button
				variant="light"
				onClick={toggleTheme}
				aria-label="Toggle theme"
				className="app-icon-button me-2"
			>
				<i className={dark ? "bi bi-sun-fill" : "bi bi-moon-fill"} />
			</Button>
		</OverlayTrigger>
	);
};

export default ThemeToggle;
