import React, { useContext } from "react";
import { EditorContext } from "../../context/EditorContext";

Preview = () => {
	const { content } = useContext(EditorContext);

	return (
		<div className="card mt-3">
			<div className="card-header">Live Preview</div>
			<div className="card-body">
				<div
					style={{ minHeight: 240 }}
					dangerouslySetInnerHTML={{
						__html: content || "<p><em>Start typing above…</em></p>",
					}}
				/>
			</div>
		</div>
	);
};

export default Preview;
