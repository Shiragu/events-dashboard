import { useState } from "react";
import { css } from "@emotion/css";

import CommentList from "./commentList";
import NewComment from "./newComment";

function Comments({ eventId }) {
  const [showComments, setShowComments] = useState(false);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    // отправляем данные через апи
  }

  return (
    <section
      className={css`
        margin: 3rem auto;
        width: 90%;
        max-width: 40rem;
        text-align: center;
        & button {
          font: inherit;
          border-radius: 6px;
          padding: 0.5rem 1rem;
          background-color: transparent;
          color: #03be9f;
          border: 1px solid #03be9f;
          cursor: pointer;
        }
        & button:hover,
        & button:active {
          background-color: #dcfff9;
        }
      `}
    >
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Скрыть" : "Показать"} комментарии
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList />}
    </section>
  );
}

export default Comments;
