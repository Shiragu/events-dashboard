import { useContext } from "react";
import { css } from "@emotion/css";

import NotificationContext from "../../store/notification-context";

function Notification({ title, message, status }) {
  const notificationCtx = useContext(NotificationContext);

  let statusColor = "#1b1b1b";

  if (status === "success") {
    statusColor = "#10be58";
  }

  if (status === "error") {
    statusColor = "#e65035";
  }

  if (status === "pending") {
    statusColor = "#177cbe";
  }

  const notification = css`
    position: fixed;
    bottom: 0;
    left: 0;
    height: 5rem;
    width: 100%;
    background-color: ${statusColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 0.5rem 10%;
    box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.2);
    & h2 {
      margin: 0;
      font-size: 1.25rem;
      color: white;
    }
  `;

  return (
    <div className={notification} onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
