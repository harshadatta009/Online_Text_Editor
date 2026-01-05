import { getStats } from "./textStats";

test("counts words, characters, and lines for plain text", () => {
	const sample = "Hello world\nThis is a test";
	const stats = getStats(sample);

	expect(stats.words).toBe(6);
	expect(stats.chars).toBe(sample.length);
	expect(stats.lines).toBe(2);
});
