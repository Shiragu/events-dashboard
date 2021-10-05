import { getAllEvents } from "../../data/test_data";
import { css } from "@emotion/css";
import { useRouter } from "next/dist/client/router";

import EventList from "../../components/events/eventList";
import EventSearchBar from "../../components/eventSearchBar";

function EventsPage() {
  const router = useRouter();
  const allEvents = getAllEvents();

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
      <EventList events={allEvents} />
    </>
  );
}

export default EventsPage;
