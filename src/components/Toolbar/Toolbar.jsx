import React, { useContext } from "react";
import { EditorContext } from "../../context/EditorContext";
import "./Toolbar.module.css";

const formatActions = [
	{ label: "B", cmd: "bold", icon: <b>B</b>, title: "Bold (Ctrl+B)" },
	{ label: "I", cmd: "italic", icon: <i>I</i>, title: "Italic (Ctrl+I)" },
	{ label: "U", cmd: "underline", icon: <u>U</u>, title: "Underline (Ctrl+U)" },
	{
		label: "List",
		cmd: "insertUnorderedList",
		icon: <i className="bi-list-ul" />,
		title: "Bulleted list",
	},
	{
		label: "Numbered",
		cmd: "insertOrderedList",
		icon: <i className="bi-list-ol" />,
		title: "Numbered list",
	},
	// Add more formatting actions as needed
];

export default function Toolbar({ editorRef }) {
	const { content, setContent, showNotification } = useContext(EditorContext);

	const exec = (cmd) => {
		document.execCommand(cmd);
		showNotification(`${cmd} applied!`, "success");
		editorRef.current && editorRef.current.focus();
	};

	const handleUndo = () => {
		document.execCommand("undo");
		showNotification(`Undo`, "info");
	};

	const handleRedo = () => {
		document.execCommand("redo");
		showNotification(`Redo`, "info");
	};

	// Helpers for text manipulation
	// All operate on plain text (strip HTML)
	const getPlainText = () => {
		if (!editorRef.current) return "";
		const div = document.createElement("div");
		div.innerHTML = editorRef.current.innerHTML;
		return div.textContent || "";
	};

	const handleUpperCase = () => {
		const text = getPlainText().toUpperCase();
		editorRef.current.innerHTML = text;
		setContent(text);
		showNotification("Converted to UPPERCASE", "success");
		editorRef.current.focus();
	};

	const handleLowerCase = () => {
		const text = getPlainText().toLowerCase();
		editorRef.current.innerHTML = text;
		setContent(text);
		showNotification("Converted to lowercase", "success");
		editorRef.current.focus();
	};

	const handleRemoveSpaces = () => {
		const text = getPlainText().replace(/\s+/g, " ").trim();
		editorRef.current.innerHTML = text;
		setContent(text);
		showNotification("Extra spaces removed", "info");
		editorRef.current.focus();
	};

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(getPlainText());
			showNotification("Copied to clipboard!", "success");
			editorRef.current.focus();
		} catch {
			showNotification("Failed to copy", "danger");
		}
	};

	return (
		<div className="btn-toolbar mb-2 gap-2 flex-wrap">
			{formatActions.map((action) => (
				<button
					key={action.cmd}
					type="button"
					className="btn btn-outline-primary btn-sm"
					title={action.title}
					onClick={() => exec(action.cmd)}
				>
					{action.icon}
				</button>
			))}
			<button
				className="btn btn-outline-secondary btn-sm"
				title="Undo"
				onClick={handleUndo}
			>
				<i className="bi-arrow-counterclockwise" />
			</button>
			<button
				className="btn btn-outline-secondary btn-sm"
				title="Redo"
				onClick={handleRedo}
			>
				<i className="bi-arrow-clockwise" />
			</button>
			{/* Text utilities */}
			<button
				className="btn btn-outline-secondary btn-sm"
				title="UPPERCASE"
				onClick={handleUpperCase}
			>
				Aa↑
			</button>
			<button
				className="btn btn-outline-secondary btn-sm"
				title="lowercase"
				onClick={handleLowerCase}
			>
				Aa↓
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
		</div>
	);
}
