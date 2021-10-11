import { getEventById, getAllEvents } from "../../utils/api-util";

import EventSummary from "../../components/eventDetailed/eventSummary";
import EventLocation from "../../components/eventDetailed/eventLocation";
import EventContent from "../../components/eventDetailed/eventContent";
import ErrorAlert from "../../ui/errorAlert";

function SingleEventPage({ event }) {
  const { title, description, location, image, date } = event;

  return !event ? (
    <ErrorAlert>
      <p>Увы, такого события не существует! (по крайней мере пока)</p>
    </ErrorAlert>
  ) : (
    <>
      <EventSummary title={title} />
      <EventLocation
        date={date}
        address={location}
        image={image}
        imageAlt={title}
      />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      event,
    },
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths,
    fallback: false,
  };
}

export default SingleEventPage;
