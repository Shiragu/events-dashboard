import { useContext } from "react";
import Header from "./header";
import Notification from "../../components/notification";
import NotificationContext from "../../store/notification-context";

function Layout({ children }) {
  const context = useContext(NotificationContext);

  const activeNotification = context.notification;

  return (
    <>
      <Header />
      <main>{children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </>
  );
}

export default Layout;
