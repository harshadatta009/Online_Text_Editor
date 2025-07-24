import { ThemeProvider } from "./context/ThemeContext";
import { EditorProvider } from "./context/EditorContext";
import Navbar from "./components/Navbar/Navbar";
import MainApp from "./MainApp";

export default function App() {
	return (
		<ThemeProvider>
			<EditorProvider>
				<Navbar />
				<MainApp />
			</EditorProvider>
		</ThemeProvider>
	);
}
