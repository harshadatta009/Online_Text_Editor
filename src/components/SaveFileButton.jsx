import { useContext } from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { EditorContext } from "../context/EditorContext";
import { saveTextAsFile } from "../utils/exportUtils";

 SaveFileButton=()=> {
	const { content, showNotification } = useContext(EditorContext);

	const handleSave = () => {
		saveTextAsFile(content);
		showNotification?.("File downloaded!", "success");
	};

	return (
		<OverlayTrigger
			placement="bottom"
			overlay={<Tooltip id="tt-save-file">Download as .txt</Tooltip>}
		>
			<Button
				variant="outline-success"
				onClick={handleSave}
				aria-label="Download file"
			>
				<i className="bi bi-download" />
			</Button>
		</OverlayTrigger>
	);
}

export default SaveFileButton;