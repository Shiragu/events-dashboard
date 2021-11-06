import React from "react";
import Link from "next/link";
import { css } from "@emotion/css";

function Button({
  children,
  link,
  onClick,
}: {
  children: React.ReactElement;
  link?: string;
  onClick?: () => void;
}): JSX.Element {
  const button = css`
    text-decoration: none;
    cursor: pointer;
    font: inherit;
    background-color: #03be9f;
    border: 1px solid #03be9f;
    border-radius: 6px;
    color: #dafff7;
    padding: 0.5rem 1.5rem;
    text-align: center;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    &:active,
    &:hover {
      background-color: #02afa1;
      border-color: #02afa1;
    }
  `;

  return link ? (
    <Link href={link}>
      <a className={button}>{children}</a>
    </Link>
  ) : (
    <button className={button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
