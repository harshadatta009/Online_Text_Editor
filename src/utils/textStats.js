export function getStats(text = "") {
	const normalized = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
	const trimmed = normalized.trim();
	const words = trimmed ? trimmed.split(/\s+/).length : 0;
	const chars = normalized.length;
	const lines = normalized.length ? normalized.split("\n").length : 0;

	return { words, chars, lines };
}

