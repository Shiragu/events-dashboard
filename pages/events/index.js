import EventList from '../../components/events/eventList';
import { getAllEvents } from '../../data/test_data';
import { css } from "@emotion/css";

function EventsPage() {
  const allEvents = getAllEvents();

  return (
    <div>
      <h1 className={css`
          text-align: center;
        `}>Все события</h1>
      <EventList events={allEvents}  />
    </div>
  );
}

export default EventsPage;
