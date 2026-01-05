import React, { useContext, useRef } from "react";
import { EditorContext } from "../../context/EditorContext";
import Toolbar from "../Toolbar/Toolbar";

const Editor = () => {
	const { content, setContent } = useContext(EditorContext);
	const editorRef = useRef(null);

	const handleChange = (e) => {
		setContent(e.target.value);
	};

	return (
		<div className="card editor-card">
			<div className="card-header">
				<Toolbar editorRef={editorRef} />
			</div>
			<div className="card-body">
				<textarea
					id="editor"
					ref={editorRef}
					className="form-control editor-input"
					spellCheck={true}
					onChange={handleChange}
					value={content}
					placeholder="Start typing here..."
					aria-label="Text editor"
				/>
			</div>
		</div>
	);
};

export default Editor;
