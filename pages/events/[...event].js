import { useRouter } from "next/router";
import { getFilteredEvents } from "../../data/test_data";

import ResultsTitle from "../../components/resultsTitle";
import EventList from "../../components/events/eventList";
import ErrorAlert from "../../ui/errorAlert";
import Button from "../../ui/button";

function FilteredEventsPage() {
  const router = useRouter();

  const filteredData = router.query.event;

  if (!filteredData) {
    return <p className="center">Подгружаем...</p>;
  }

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

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

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

  const date = new Date(filteredYear, filteredMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
}

export default FilteredEventsPage;
