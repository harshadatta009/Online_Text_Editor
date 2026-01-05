import React, { useContext } from "react";
import { EditorContext } from "../../context/EditorContext";

const Preview = () => {
	const { content } = useContext(EditorContext);
	const previewText = content || "Start typing above...";

	return (
		<div className="card preview-card">
			<div className="card-header">Live Preview</div>
			<div className="card-body">
				<div className="preview-body">{previewText}</div>
			</div>
		</div>
	);
};

export default Preview;
