import { useEffect, useRef } from "react";
import { STORAGE_KEY, saveDraft } from "../utils/storage";

const useAutosave = (content, options = {}) => {
	const { storageKey = STORAGE_KEY, delay = 800, onNotify } = options;
	const hasMounted = useRef(false);
	const lastSavedRef = useRef(content);

	useEffect(() => {
		if (!hasMounted.current) {
			hasMounted.current = true;
			return;
		}
		if (content === lastSavedRef.current) return;

		const timeout = setTimeout(() => {
			const ok = saveDraft(storageKey, content);
			if (ok) {
				lastSavedRef.current = content;
				if (onNotify) onNotify("Draft autosaved", "info");
			}
		}, delay);

		return () => clearTimeout(timeout);
	}, [content, delay, onNotify, storageKey]);
};

export default useAutosave;
