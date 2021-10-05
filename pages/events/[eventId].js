import { useRouter } from "next/router";
import { getEventById } from "../../data/test_data";

import EventSummary from "../../components/eventDetailed/eventSummary";
import EventLocation from "../../components/eventDetailed/eventLocation";
import EventContent from "../../components/eventDetailed/eventContent";
import ErrorAlert from "../../ui/errorAlert";

function SingleEventPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  return !event ? (
    <ErrorAlert>
      <p>Увы, такого события не существует! (по крайней мере пока)</p>
    </ErrorAlert>
  ) : (
    <>
      <EventSummary title={event.title} />
      <EventLocation
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export default SingleEventPage;
