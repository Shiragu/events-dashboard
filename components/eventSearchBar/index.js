import { useRef } from "react";
import { css } from "@emotion/css";
import Button from "../../ui/button";

function EventSearchBar({ onSearch }) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    onSearch(selectedYear, selectedMonth);
  }

  const form = css`
    margin: 2rem auto;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    background-color: white;
    border-radius: 6px;
    width: 90%;
    max-width: 40rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 1rem;
    & button {
      min-width: fit-content;
      font: inherit;
      padding: 0.25rem 0.5rem;
      background-color: #03be9f;
      border: 1px solid #03be9f;
      color: #dafff7;
      border-radius: 4px;
    }
  `;

  const control = css`
    flex: 1;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    & label {
      font-weight: bold;
    }
    & select {
      font: inherit;
      background-color: white;
      border-radius: 6px;
      width: 70%;
      padding: 0.25rem;
    }
  `;

  return (
    <form className={form} onSubmit={submitHandler}>
      <div
        className={css`
          width: 100%;
          display: flex;
          gap: 1rem;
        `}
      >
        <div className={control}>
          <label htmlFor="year">Год</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={control}>
          <label>Месяц</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">Январь</option>
            <option value="2">Февраль</option>
            <option value="3">Март</option>
            <option value="4">Апрель</option>
            <option value="5">Май</option>
            <option value="6">Июнь</option>
            <option value="7">Июль</option>
            <option value="8">Август</option>
            <option value="9">Сентябрь</option>
            <option value="10">Октябрь</option>
            <option value="11">Ноябрь</option>
            <option value="12">Декабрь</option>
          </select>
        </div>
      </div>
      <Button>Искать события</Button>
    </form>
  );
}

export default EventSearchBar;
