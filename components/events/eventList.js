import EventItem from "./eventItem";
import { css } from "@emotion/css";

function EventList({ events }) {
  return (
    <ul
      className={css`
        width: 90%;
        max-width: 40rem;
        margin: 5rem auto;
      `}
    >
      {events.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          date={event.date}
          location={event.location}
          image={event.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
