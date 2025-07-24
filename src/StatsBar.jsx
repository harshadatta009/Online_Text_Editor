import React, { useContext } from "react";
import { EditorContext } from "./context/EditorContext";
import { getStats } from "./utils/textStats";

const StatsBar = () => {
	const { content } = useContext(EditorContext);
	const stats = getStats(content);

	return (
		<div className="d-flex gap-3 my-1 small">
			<span>Words: {stats.words}</span>
			<span>Characters: {stats.chars}</span>
			<span>Lines: {stats.lines}</span>
		</div>
	);
};

export default StatsBar;
