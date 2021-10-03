import Image from "next/image";
import { css } from "@emotion/css";

import Button from "../../ui/button";
import { DateIcon, AddressIcon, ArrowRightIcon } from "../../ui/icons";

function EventItem({ id, date, image, location, title }) {
  const convertedDate = new Date(date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const convertedAddress = location.replace(", ", "\n");
  const eventsLink = `/events/${id}`;

  const information = css`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    & svg {
      width: 1.25rem;
      height: 1.25rem;
      color: #666;
    }
  `;

  const eventCard = css`
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    overflow: hidden;
    background-color: white;
    margin: 1rem;
    display: flex;
    flex-direction: row;
    gap: 1rem;
  `;

  const eventCardImage = css`
    width: 100%;
    object-fit: cover;
    height: 10rem;
  `;

  const eventCardContent = css`
    width: 100%;
    padding: 0 1rem;
    text-align: center;
  `;

  const eventCardTitle = css`
    margin: 0.5rem 0;
  `;

  const eventCardButton = css`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    & a {
      display: block;
    }
    & a span {
      vertical-align: middle;
    }
  `;

  const eventCardButtonIcon = css`
    margin-left: 0.5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    & svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  `;

  return (
    <li className={eventCard}>
      <Image
        src={"/" + image}
        alt={title}
        width="300"
        height="300"
        className={eventCardImage}
      />
      <div className={eventCardContent}>
        <div>
          <h2 className={eventCardTitle}>{title}</h2>
          <div className={information}>
            <DateIcon />
            <time
              className={css`
                color: #666666;
                font-weight: bold;
              `}
            >
              {convertedDate}
            </time>
          </div>
          <div className={information}>
            <AddressIcon />
            <address
              className={css`
                margin: 0.5rem 0;
                color: #666666;
                white-space: pre;
              `}
            >
              {convertedAddress}
            </address>
          </div>
        </div>
        <div className={eventCardButton}>
          <Button link={eventsLink}>
            <span>Подробнее о событии</span>
            <span className={eventCardButtonIcon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
