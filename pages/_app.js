import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { NotificationProvider } from "../store/notification-context";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NotificationProvider>
  );
}

export default MyApp;
