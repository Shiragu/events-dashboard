import React from "react";
import { css } from "@emotion/css";

function EventSummary({ title }) {
  const eventSummary = css`
    width: 100%;
    height: 30vh;
    background-image: linear-gradient(to bottom left, #008b79, #1180a1);
    & h1 {
      margin: 0;
      padding-top: 3rem;
      font-size: 2rem;
      text-align: center;
      text-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
      color: white;
    }
  `;

  return (
    <section className={eventSummary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;
