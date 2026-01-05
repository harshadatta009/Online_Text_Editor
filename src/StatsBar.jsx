import React, { useContext } from "react";
import { EditorContext } from "./context/EditorContext";
import { getStats } from "./utils/textStats";

const StatsBar = () => {
	const { content } = useContext(EditorContext);
	const stats = getStats(content);

	return (
		<div className="stats-bar" aria-live="polite">
			<span className="stats-pill">
				<i className="bi bi-type" aria-hidden="true" />
				<span>Words</span>
				<span className="stats-value">{stats.words}</span>
			</span>
			<span className="stats-pill">
				<i className="bi bi-123" aria-hidden="true" />
				<span>Characters</span>
				<span className="stats-value">{stats.chars}</span>
			</span>
			<span className="stats-pill">
				<i className="bi bi-list-task" aria-hidden="true" />
				<span>Lines</span>
				<span className="stats-value">{stats.lines}</span>
			</span>
		</div>
	);
};

export default StatsBar;
