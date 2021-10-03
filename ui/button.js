import Link from "next/link";
import { css } from "@emotion/css";

function Button({ children, link }) {
  return (
    <Link href={link}>
      <a
        className={css`
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
        `}
      >
        {children}
      </a>
    </Link>
  );
}

export default Button;
