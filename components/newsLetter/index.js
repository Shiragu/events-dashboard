import { css } from "@emotion/css";
import { useRef, useContext } from "react";
import NotificationContext from "../../store/notification-context";

function NewsletterRegistration() {
  const emailInputRef = useRef();

  const notificationCtx = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();

    const userEmail = emailInputRef.current.value;

    notificationCtx.showNotification({
      title: "Подождите...",
      message: "Подписываемся на рассылку...",
      status: "pending",
    });

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: userEmail }),
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
          message: "Вы успешно подписались на рассылку!",
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

  const newsletter = css`
    margin: 3rem auto;
    max-width: 30rem;
    & h2 {
      text-align: center;
    }
    & button {
      background-color: #03be9f;
      border: 1px solid #03be9f;
      border-radius: 6px;
      color: #dafff7;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      font: inherit;
      cursor: pointer;
    }
    & button:hover,
    & button:active {
      background-color: #02afa1;
      border-color: #02afa1;
    }
  `;

  const control = css`
    display: flex;
    margin: 0 2rem;
    & input {
      font: inherit;
      padding: 0.25rem;
      border-radius: 4px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border: 1px solid #ccc;
      flex: 1;
    }
  `;

  return (
    <section className={newsletter}>
      <h2>Подпишись и всегда будь в курсе!</h2>
      <form onSubmit={registrationHandler}>
        <div className={control}>
          <input
            type="email"
            id="email"
            placeholder="Ваш email"
            aria-label="Ваш email"
            ref={emailInputRef}
          />
          <button>Подписаться</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
