import { css } from "@emotion/css";

import EventList from "../components/events/eventList";
import { getFeaturedEvents } from "../utils/api-util";
import NewsletterRegistration from "../components/newsLetter";

function HomePage({ events }) {
  return (
    <div>
      <h1
        className={css`
          text-align: center;
        `}
      >
        Ближайшие события
      </h1>
      <NewsletterRegistration />
      <EventList events={events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
