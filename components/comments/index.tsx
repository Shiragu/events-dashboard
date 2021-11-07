/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from "react";
import { css } from "@emotion/css";

import CommentList from "./commentList";
import NewComment, { Comment } from "./newComment";
import NotificationContext from "../../store/notification-context";

type Comments = {
  _id: string;
  text: string;
  name: string;
}[];

function Comments({ eventId }: { eventId: string }) {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<Comments>([]);
  const [isFetching, setIsFetching] = useState(false);
  const notificationCtx = useContext(NotificationContext);

  useEffect(() => {
    if (showComments) {
      setIsFetching(true);
      fetch(`/api/comments/${eventId}`)
        .then((response) => response.json())
        .then((data) => {
          setComments(data.comments);
          setIsFetching(false);
        });
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData: Comment) {
    notificationCtx.showNotification({
      title: "Подождите...",
      message: "Добавляем комментарий...",
      status: "pending",
    });

    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json().then((data) => {
          throw new Error(data.message || "Что-то пошло не так!");
        });
      })
      .then((data) =>
        notificationCtx.showNotification({
          title: "Успех!",
          message: "Ваш комментарий добавлен!",
          status: "success",
        })
      )
      .catch((error) => {
        notificationCtx.showNotification({
          title: "Ошибка!",
          message: error.message || "Что-то пошло не так!",
          status: "error",
        });
      });
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
      {showComments && !isFetching && <CommentList comments={comments} />}
      {showComments && isFetching && <p>Подгружаем комменты...</p>}
    </section>
  );
}

export default Comments;
