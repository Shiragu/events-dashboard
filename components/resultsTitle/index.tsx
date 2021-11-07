import Button from "../../ui/button";
import { css } from "@emotion/css";

function ResultsTitle({ date }: { date: Date }) {
  const humanReadableDate = new Date(date).toLocaleDateString("ru-RU", {
    month: "long",
    year: "numeric",
  });

  return (
    <section
      className={css`
        margin: 2rem auto;
        width: 90%;
        max-width: 40rem;
        text-align: center;
      `}
    >
      <h1>Список событий на {humanReadableDate}</h1>
      <Button link="/events">
        <>Ко всем событиям</>
      </Button>
    </section>
  );
}

export default ResultsTitle;
