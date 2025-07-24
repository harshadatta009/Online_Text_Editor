import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
const ThemeToggle = () => {
	const { isDark, toggleTheme } = useContext(ThemeContext);

	return (
		<OverlayTrigger
			placement="bottom"
			overlay={
				<Tooltip id="tt-theme-toggle">
					{isDark ? "Switch to light mode" : "Switch to dark mode"}
				</Tooltip>
			}
		>
			<Button
				variant={isDark ? "outline-light" : "outline-dark"}
				onClick={toggleTheme}
				aria-label="Toggle theme"
				className="me-2"
			>
				<i className={isDark ? "bi bi-sun-fill" : "bi bi-moon-fill"} />
			</Button>
		</OverlayTrigger>
	);
};

export default ThemeToggle;
