import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaReact } from "react-icons/fa";
import styles from "./Footer.module.css";

export const Footer = () => {
	const { dark } = useContext(ThemeContext);
	const year = new Date().getFullYear();

	return (
		<footer className={`${styles.footer} ${dark ? styles["footer-dark"] : ""}`}>
			<div className={styles.content}>
				<span>
					&copy; {year} Harsha Datta. Made with{" "}
					<FaReact
						style={{
							verticalAlign: "middle",
							color: dark ? "#61dafb" : "#1d4ed8",
							fontSize: "1.1em",
							marginBottom: "2px",
						}}
						title="React"
					/>{" "}
					React &amp; Bootstrap.
				</span>
				<a
					href="https://github.com/harshadatta009/Text-Utils"
					target="_blank"
					rel="noopener noreferrer"
					className={`${styles.link} ${dark ? styles["link-dark"] : ""}`}
				>
					GitHub Repo
				</a>
			</div>
		</footer>
	);
};

export default Footer;
