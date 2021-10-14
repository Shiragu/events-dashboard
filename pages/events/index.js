import { css } from "@emotion/css";
import { useRouter } from "next/dist/client/router";

import EventList from "../../components/events/eventList";
import EventSearchBar from "../../components/eventSearchBar";
import { getAllEvents } from "../../utils/api-util";

function EventsPage({ events }) {
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <h1
        className={css`
          text-align: center;
        `}
      >
        Все события
      </h1>
      <EventSearchBar onSearch={findEventsHandler} />
      <EventList events={events} />
    </>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}

export default EventsPage;
