import EventItem from "./eventItem";
import { css } from "@emotion/css";
import { ImageProps } from "next/image";

function EventList({
  events,
}: {
  events: {
    id: string;
    title: string;
    date: number;
    location: string;
    image: ImageBitmapSource;
  }[];
}) {
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
