import { css } from "@emotion/css";

function CommentList() {
  return (
    <ul
      className={css`
        display: flex;
        flex-direction: column;
        gap: 1rem;
        & li {
          text-align: left;
          padding: 0.5rem 0;
          border-bottom: 2px solid #ccc;
        }
        & p {
          margin: 0;
        }
        & li div {
          text-align: right;
          font-style: italic;
        }
        & address {
          display: inline;
        }
      `}
    >
      {/* комментарии будем подтягивать из апи */}
      <li>
        <p>Как же я хорош!</p>
        <div>
          Написал <address>Кто-то</address>
        </div>
      </li>
      <li>
        <p>Как же я хорош!</p>
        <div>
          Написал <address>Кто-то</address>
        </div>
      </li>
    </ul>
  );
}

export default CommentList;
