import ReactDOM from "react-dom";

import { RequestStatus } from "../contact/contact-from";

import classes from "./notification.module.css";

export interface NotificationProps {
  title: string;
  message: string | null;
  status: RequestStatus;
}

export default function Notification({
  title,
  message,
  status,
}: NotificationProps) {
  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  const notificationElement = document.getElementById("notifications");

  return notificationElement
    ? ReactDOM.createPortal(
        <div className={cssClasses}>
          <h2>{title}</h2>
          <p>{message}</p>
        </div>,
        notificationElement
      )
    : null;
}
