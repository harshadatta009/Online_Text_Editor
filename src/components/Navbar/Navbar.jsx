import React, { useContext } from "react";
import ThemeToggle from "../ThemeToggle";
import SaveFileButton from "../SaveFileButton";
import { Container, Navbar as BsNavbar, Nav } from "react-bootstrap";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
	const { dark } = useContext(ThemeContext);

	const navbarBg = dark ? "bg-dark navbar-dark" : "bg-white navbar-light";
	const style = {
		borderBottom: dark ? "1px solid #222" : "1px solid #eee",
		fontFamily: "Segoe UI, Roboto, Arial, sans-serif",
		letterSpacing: ".01em",
		transition: "background .2s",
		background: dark ? "#15181b" : "#fff",
	};

	return (
		<BsNavbar
			expand="md"
			className={`shadow-sm py-2 ${navbarBg}`}
			style={style}
		>
			<Container fluid>
				<BsNavbar.Brand
					href="#"
					style={{
						fontWeight: "bold",
						fontSize: "1.3rem",
						letterSpacing: ".02em",
						display: "flex",
						alignItems: "center",
						color: dark ? "#fff" : "#222",
					}}
				>
					<i
						className="bi bi-pencil-square me-2"
						style={{ fontSize: "1.5em", color: dark ? "#70b5ff" : "#3571e0" }}
					/>
					Online Text Editor
				</BsNavbar.Brand>
				<BsNavbar.Toggle aria-controls="main-navbar" />
				<BsNavbar.Collapse id="main-navbar">
					<Nav className="ms-auto align-items-center gap-2">
						<div className="d-inline">
							<ThemeToggle />
						</div>
						<SaveFileButton />
					</Nav>
				</BsNavbar.Collapse>
			</Container>
		</BsNavbar>
	);
};

export default Navbar;
