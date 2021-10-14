import { getFilteredEvents } from "../../utils/api-util";

import ResultsTitle from "../../components/resultsTitle";
import EventList from "../../components/events/eventList";
import ErrorAlert from "../../ui/errorAlert";
import Button from "../../ui/button";

function FilteredEventsPage({ hasError, events, date }) {
  if (hasError) {
    return (
      <>
        <ErrorAlert>
          <p>
            Неверные параметры фильтра. Пожалуйста, задайте корректный месяц и
            год!
          </p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events/">К списку всех событий</Button>
        </div>
      </>
    );
  }

  const filteredEvents = events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>События в этом диапазоне дат отсутствуют!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events/">К списку всех событий</Button>
        </div>
      </>
    );
  }

  const filteredDate = new Date(date.year, date.month - 1);

  return (
    <>
      <ResultsTitle date={filteredDate} />
      <EventList events={filteredEvents} />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const filteredData = params.event;

  const filteredYear = +filteredData[0];
  const filteredMonth = +filteredData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2000 ||
    filteredMonth > 12 ||
    filteredMonth < 1
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: filteredYear,
        month: filteredMonth,
      },
    },
  };
}

export default FilteredEventsPage;
