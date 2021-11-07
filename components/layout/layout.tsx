import { ReactChild, useContext } from "react";
import Header from "./header";
import Notification from "../notification";
import NotificationContext from "../../store/notification-context";

export type NotificationItem = {
  title: string;
  message: string;
  status: string;
};

function Layout({ children }: { children: ReactChild }) {
  const context = useContext(NotificationContext);

  const activeNotification =
    context.notification as unknown as NotificationItem;

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
