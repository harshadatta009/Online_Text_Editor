import { useContext, useEffect } from "react";
import Editor from "./components/Editor/Editor";
import PreviewPane from "./components/PreviewPane/PreviewPane";
import Notification from "./components/Notification";
import StatsBar from "./StatsBar";
import { EditorContext } from "./context/EditorContext";
import useAutosave from "./hooks/useAutosave";
import { Footer } from "./components/Footer/Footer";

const MainApp = () => {
	const { content, setContent, showNotification } = useContext(EditorContext);

	useEffect(() => {
		const saved = localStorage.getItem("editor-content");
		if (saved && saved.length > 0) {
			setContent(saved);
			showNotification &&
				showNotification("Loaded draft from local storage.", "success");
		}
		// eslint-disable-next-line
	}, []);
	useAutosave(content, showNotification);

	return (
		<>
			<div className="container mx-auto p-4">
				{/* <h1 className="mb-3">Online Text Editor</h1> */}
				<Editor />
				<StatsBar />
				<PreviewPane />
				<Notification />
			</div>
			<Footer />
		</>
	);
};

export default MainApp;
