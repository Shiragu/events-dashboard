import { FormEvent, MutableRefObject, useRef, useState } from "react";
import { css } from "@emotion/css";

export type Comment = {
  email: string;
  name: string;
  text: string;
};

function NewComment({
  onAddComment,
}: {
  onAddComment: (comment: Comment) => void;
}) {
  const [isInvalid, setIsInvalid] = useState(false);

  const emailInputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const nameInputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const commentInputRef = useRef() as MutableRefObject<HTMLTextAreaElement>;

  function sendCommentHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current?.value;
    const enteredName = nameInputRef.current?.value;
    const enteredComment = commentInputRef.current?.value;

    if (
      !enteredEmail ||
      enteredEmail.trim() === "" ||
      !enteredEmail.includes("@") ||
      !enteredName ||
      enteredName.trim() === "" ||
      !enteredComment ||
      enteredComment.trim() === ""
    ) {
      setIsInvalid(true);
      return;
    }

    onAddComment({
      email: enteredEmail,
      name: enteredName,
      text: enteredComment,
    });
  }

  const control = css`
    margin-bottom: 0.5rem;
    flex: 1;
    min-width: 10rem;
    & label {
      display: block;
      font-weight: bold;
      margin-bottom: 0.5rem;
      color: white;
      text-align: left;
    }
    & input,
    & textarea {
      font: inherit;
      padding: 0.25rem;
      border-radius: 4px;
      border: 1px solid #ccc;
      width: 100%;
      background-color: #dcfff9;
    }
  `;

  return (
    <form
      className={css`
        margin: 2rem auto;
        width: 100%;
        border-radius: 6px;
        background-color: #03be9f;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
        padding: 1rem;
        & button {
          background-color: white;
        }
      `}
      onSubmit={sendCommentHandler}
    >
      <div
        className={css`
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        `}
      >
        <div className={control}>
          <label htmlFor="email">Ваш email</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div className={control}>
          <label htmlFor="name">Как вас зовут?</label>
          <input type="text" id="name" ref={nameInputRef} />
        </div>
      </div>
      <div className={control}>
        <label htmlFor="comment">Чем хотите поделиться?</label>
        <textarea id="comment" rows={5} ref={commentInputRef}></textarea>
      </div>
      {isInvalid && <p>Пожалуйста, введите корректные данные!</p>}
      <button>Отправить</button>
    </form>
  );
}

export default NewComment;
