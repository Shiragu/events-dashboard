import { css } from "@emotion/css";

function ErrorAlert(props) {
  return (
    <div
      className={css`
        margin: 1rem auto;
        padding: 1rem 2rem;
        width: 90%;
        max-width: 40rem;
        background-color: #f0bdbd;
        color: #8c3131;
        font-weight: bold;
        font-size: 1.5rem;
        text-align: center;
        border-radius: 6px;
      `}
    >
      {props.children}
    </div>
  );
}

export default ErrorAlert;
