import React from "react";
import Image, { ImageProps } from "next/image";
import { css } from "@emotion/css";

import { AddressIcon, DateIcon } from "../../ui/icons";
import LocationItem from "./eventLocationItem";

function EventLocation({
  date,
  address,
  image,
  imageAlt,
}: {
  date: string;
  address: string;
  image: ImageProps;
  imageAlt: string;
}) {
  const formattedDate = new Date(date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = address.replace(", ", "\n");

  const locationWrapper = css`
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    background-color: #2b2b2b;
    padding: 2rem;
    width: fit-content;
    margin: -5rem auto;
    color: #d5eeeb;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    & address {
      white-space: pre;
    }
  `;

  const locationImage = css`
    width: 12rem;
    height: 12rem;
    border-radius: 40px;
    overflow: hidden;
    border: 2px solid white;
    & img {
      width: 12rem;
      height: 12rem;
      object-fit: cover;
    }
  `;

  const locationDescription = css`
    flex: 3;
    display: flex;
    gap: 5rem;
    justify-content: center;
    align-items: center;
  `;

  return (
    <section className={locationWrapper}>
      <div className={locationImage}>
        <Image src={`/${image}`} alt={imageAlt} width="200" height="200" />
      </div>
      <ul className={locationDescription}>
        <LocationItem icon={DateIcon}>
          Дата события: <time>{formattedDate}</time>
        </LocationItem>
        <LocationItem icon={AddressIcon}>
          <address>{formattedAddress}</address>
        </LocationItem>
      </ul>
    </section>
  );
}

export default EventLocation;
