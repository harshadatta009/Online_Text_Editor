import React, { useContext } from "react";
import { EditorContext } from "../../context/EditorContext";
import "./Toolbar.module.css";

const Toolbar = ({ editorRef }) => {
	const {
		content,
		setContent,
		undo,
		redo,
		canUndo,
		canRedo,
		showNotification,
	} = useContext(EditorContext);

	const focusEditor = () => editorRef.current && editorRef.current.focus();

	const handleUndo = () => {
		if (!canUndo) return;
		undo();
		showNotification("Undo", "info");
		focusEditor();
	};

	const handleRedo = () => {
		if (!canRedo) return;
		redo();
		showNotification("Redo", "info");
		focusEditor();
	};

	const handleUpperCase = () => {
		const text = content.toUpperCase();
		setContent(text);
		showNotification("Converted to UPPERCASE", "success");
		focusEditor();
	};

	const handleLowerCase = () => {
		const text = content.toLowerCase();
		setContent(text);
		showNotification("Converted to lowercase", "success");
		focusEditor();
	};

	const handleRemoveSpaces = () => {
		const text = content
			.split(/\r?\n/)
			.map((line) => line.replace(/[ \t]+/g, " ").trimEnd())
			.join("\n")
			.replace(/\n{3,}/g, "\n\n")
			.trim();
		setContent(text);
		showNotification("Extra spaces removed", "info");
		focusEditor();
	};

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(content);
			showNotification("Copied to clipboard!", "success");
			focusEditor();
		} catch {
			showNotification("Failed to copy", "danger");
		}
	};

	const handleClear = () => {
		setContent("");
		showNotification("Editor cleared", "info");
		focusEditor();
	};

	return (
		<div
			className="editor-toolbar"
			role="toolbar"
			aria-label="Editor tools"
		>
			<button
				className="btn btn-outline-secondary btn-sm"
				title="Undo"
				onClick={handleUndo}
				disabled={!canUndo}
			>
				<i className="bi-arrow-counterclockwise" />
			</button>
			<button
				className="btn btn-outline-secondary btn-sm"
				title="Redo"
				onClick={handleRedo}
				disabled={!canRedo}
			>
				<i className="bi-arrow-clockwise" />
			</button>
			{/* Text utilities */}
			<button
				className="btn btn-outline-secondary btn-sm"
				title="UPPERCASE"
				onClick={handleUpperCase}
			>
				Aa
			</button>
			<button
				className="btn btn-outline-secondary btn-sm"
				title="lowercase"
				onClick={handleLowerCase}
			>
				aa
			</button>
			<button
				className="btn btn-outline-secondary btn-sm"
				title="Remove Extra Spaces"
				onClick={handleRemoveSpaces}
			>
				<i className="bi bi-filter" /> Spaces
			</button>
			<button
				className="btn btn-outline-secondary btn-sm"
				title="Copy to Clipboard"
				onClick={handleCopy}
			>
				<i className="bi bi-clipboard" /> Copy
			</button>
			<button
				className="btn btn-outline-danger btn-sm"
				title="Clear Editor"
				onClick={handleClear}
			>
				<i className="bi bi-trash" /> Clear
			</button>
		</div>
	);
};

export default Toolbar;
