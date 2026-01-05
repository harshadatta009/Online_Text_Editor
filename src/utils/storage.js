export const STORAGE_VERSION = "v1";
export const STORAGE_KEY = `text-utils:${STORAGE_VERSION}:content`;

export const loadDraft = (storageKey = STORAGE_KEY) => {
	if (typeof window === "undefined") return "";
	try {
		const value = localStorage.getItem(storageKey);
		return typeof value === "string" ? value : "";
	} catch {
		return "";
	}
};

export const saveDraft = (storageKey = STORAGE_KEY, content = "") => {
	if (typeof window === "undefined") return false;
	try {
		localStorage.setItem(storageKey, content);
		return true;
	} catch {
		return false;
	}
};
