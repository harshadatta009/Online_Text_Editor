import React, { useContext } from "react";
import { EditorContext } from "../context/EditorContext";

export default function Notification() {
	const { notification } = useContext(EditorContext);
	if (!notification) return null;

	let alertType = "info";
	if (notification.type === "success") alertType = "success";
	if (notification.type === "danger") alertType = "danger";

	return (
		<div
			className={`alert alert-${alertType} position-fixed top-0 end-0 m-3 shadow`}
			style={{ zIndex: 10 }}
		>
			{notification.msg}
		</div>
	);
}
