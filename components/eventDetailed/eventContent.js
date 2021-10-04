import React from "react";
import { css } from "@emotion/css";

function EventContent(props) {
  return (
    <section
      className={css`
        font-size: 1.5rem;
        color: #3a3a3a;
        width: 90%;
        max-width: 40em;
        margin: auto;
        margin-top: 8rem;
        text-align: center;
      `}
    >
      {props.children}
    </section>
  );
}

export default EventContent;
