import EventList from "../components/events/eventList";
import { getFeaturedEvents } from "../data/test_data";
import { css } from "@emotion/css";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1
        className={css`
          text-align: center;
        `}
      >
        Ближайшие события
      </h1>
      <EventList events={featuredEvents} />
    </div>
  );
}

export default HomePage;
