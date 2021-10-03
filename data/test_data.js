const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Путешествие на Азоры",
    description:
      "Это путешествие оставит у вас самые лучшие впечатления! Путешествие на Азоры.",
    location: "Страна Город, Азоры",
    date: "2021-05-12",
    image: "images/azore.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Дорога на Гранд Каньон",
    description:
      "Это путешествие оставит у вас самые лучшие впечатления! Гранд Каньон.",
    location: "Страна Город, Гранд Каньон",
    date: "2021-05-30",
    image: "images/canyon.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Поездка к озеру Рица",
    description:
      "Это путешествие оставит у вас самые лучшие впечатления! Озеро Рица.",
    location: "Страна Город, озеро Рица",
    date: "2022-04-10",
    image: "images/ritsa.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
