import { useContext, useEffect } from "react";
import Editor from "./components/Editor/Editor";
import Preview from "./components/Preview/Preview";
import Notification from "./components/Notification";
import StatsBar from "./StatsBar";
import { EditorContext } from "./context/EditorContext";
import useAutosave from "./hooks/useAutosave";
import { Footer } from "./components/Footer/Footer";
import { STORAGE_KEY, loadDraft } from "./utils/storage";

const MainApp = () => {
	const { content, setContent, showNotification } = useContext(EditorContext);

	useEffect(() => {
		const saved = loadDraft(STORAGE_KEY);
		if (saved && saved.length > 0) {
			setContent(saved, { recordHistory: false, resetHistory: true });
			showNotification?.("Loaded draft from local storage.", "success");
		}
	}, [setContent, showNotification]);
	useAutosave(content, { storageKey: STORAGE_KEY, delay: 800 });

	return (
		<>
			<main className="app-shell">
				<div className="container app-container">
					<section className="app-stack">
						<Editor />
						<StatsBar />
						<Preview />
					</section>
					<Notification />
				</div>
			</main>
			<Footer />
		</>
	);
};

export default MainApp;
