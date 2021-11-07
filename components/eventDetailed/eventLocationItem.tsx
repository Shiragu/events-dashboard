import React from "react";
import { css } from "@emotion/css";
import { AddressIcon } from "../../ui/icons";

function LocationItem({ children }: { children: React.ReactElement }) {
  const locationItem = css`
    display: flex;
    font-size: 1.5rem;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: #aefff8;
    & span {
      display: block;
    }
  `;

  const locationIcon = css`
    margin-right: 1rem;
    color: #18e0d0;
    & svg {
      width: 2rem;
      height: 2rem;
    }
  `;

  return (
    <li className={locationItem}>
      <span className={locationIcon}>
        <AddressIcon />
      </span>
      <span>{children}</span>
    </li>
  );
}

export default LocationItem;
