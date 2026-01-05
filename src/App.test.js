import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the app header", () => {
	render(<App />);
	const title = screen.getByText(/online text editor/i);
	expect(title).toBeInTheDocument();
});
