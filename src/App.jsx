import { ThemeProvider } from "./context/ThemeContext";
import { EditorProvider } from "./context/EditorContext";
import Navbar from "./components/Navbar/Navbar";
import MainApp from "./MainApp";

const App = () => {
	return (
		<ThemeProvider>
			<EditorProvider>
				<Navbar />
				<MainApp />
			</EditorProvider>
		</ThemeProvider>
	);
};

export default App;
