import React, {
	createContext,
	useCallback,
	useEffect,
	useReducer,
	useRef,
	useState,
} from "react";

export const EditorContext = createContext();

const MAX_HISTORY = 100;

const initialState = {
	content: "",
	history: [],
	future: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case "set": {
			const value = typeof action.value === "string" ? action.value : "";
			if (value === state.content) return state;
			if (action.resetHistory) {
				return { content: value, history: [], future: [] };
			}
			if (action.recordHistory === false) {
				return { ...state, content: value };
			}
			const nextHistory = [...state.history, state.content];
			if (nextHistory.length > MAX_HISTORY) nextHistory.shift();
			return { content: value, history: nextHistory, future: [] };
		}
		case "undo": {
			if (state.history.length === 0) return state;
			const previous = state.history[state.history.length - 1];
			return {
				content: previous,
				history: state.history.slice(0, -1),
				future: [state.content, ...state.future],
			};
		}
		case "redo": {
			if (state.future.length === 0) return state;
			const next = state.future[0];
			const nextHistory = [...state.history, state.content];
			if (nextHistory.length > MAX_HISTORY) nextHistory.shift();
			return {
				content: next,
				history: nextHistory,
				future: state.future.slice(1),
			};
		}
		default:
			return state;
	}
};

export const EditorProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [notification, setNotification] = useState(null);
	const timeoutRef = useRef(null);

	const showNotification = useCallback((msg, type = "info") => {
		setNotification({ msg, type });
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => setNotification(null), 1800);
	}, []);

	const setContent = useCallback((value, options = {}) => {
		dispatch({
			type: "set",
			value,
			recordHistory: options.recordHistory !== false,
			resetHistory: options.resetHistory === true,
		});
	}, []);

	const undo = useCallback(() => dispatch({ type: "undo" }), []);
	const redo = useCallback(() => dispatch({ type: "redo" }), []);

	useEffect(() => {
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, []);

	return (
		<EditorContext.Provider
			value={{
				content: state.content,
				setContent,
				undo,
				redo,
				canUndo: state.history.length > 0,
				canRedo: state.future.length > 0,
				notification,
				showNotification,
			}}
		>
			{children}
		</EditorContext.Provider>
	);
};
