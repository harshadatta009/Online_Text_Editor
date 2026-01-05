export const saveTextAsFile = (content, filename = "my-document.txt") => {
	const safeContent = typeof content === "string" ? content : "";
	const blob = new Blob([safeContent], { type: "text/plain" });
	const link = document.createElement("a");
	link.download = filename;
	link.href = URL.createObjectURL(blob);
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(link.href);
};
