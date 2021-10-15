import { css } from "@emotion/css";

function CommentList({ comments }) {
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
      {comments.map((comment) => (
        <li key={comment.id}>
          <p>{comment.text}</p>
          <div>
            Написал <address>{comment.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
