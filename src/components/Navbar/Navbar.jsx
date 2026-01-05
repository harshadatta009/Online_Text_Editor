import React from "react";
import ThemeToggle from "../ThemeToggle";
import SaveFileButton from "../SaveFileButton";
import { Container, Navbar as BsNavbar, Nav } from "react-bootstrap";

const Navbar = () => {
	return (
		<BsNavbar expand="md" className="app-navbar">
			<Container fluid className="app-container">
				<BsNavbar.Brand
					href="/"
					className="app-brand"
				>
					<span className="brand-icon">
						<i className="bi bi-pencil-square" />
					</span>
					<span className="brand-text">
						<span className="brand-title">Online Text Editor</span>
						<span className="brand-subtitle">Plain-text editor</span>
					</span>
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
