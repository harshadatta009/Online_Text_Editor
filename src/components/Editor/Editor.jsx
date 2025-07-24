import React, { useEffect, useContext, useRef } from "react";
import { EditorContext } from "../../context/EditorContext";
import Toolbar from "../Toolbar/Toolbar";

export default function Editor() {
	const { content, setContent } = useContext(EditorContext);
	const editorRef = useRef(null);

	const handleInput = (e) => {
		setContent(e.currentTarget.innerHTML);
	};
	useEffect(() => {
		if (
			editorRef.current &&
			content &&
			editorRef.current.innerHTML !== content
		) {
			editorRef.current.innerHTML = content;
		}
		// eslint-disable-next-line
	}, []);

	return (
		<div className="card shadow">
			<div className="card-header">
				<Toolbar editorRef={editorRef} />
			</div>
			<div className="card-body">
				<div
					id="editor"
					ref={editorRef}
					className="form-control"
					style={{
						minHeight: 240,
						background: "inherit",
						border: "none",
						outline: "none",
						fontFamily: "inherit",
						fontSize: "1rem",
					}}
					contentEditable
					suppressContentEditableWarning
					spellCheck={true}
					onInput={handleInput}
					tabIndex={0} // makes div focusable by tab
					aria-label="Text Editor (content editable region)"
				/>
			</div>
		</div>
	);
}
