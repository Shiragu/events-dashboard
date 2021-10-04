import Link from "next/link";
import { css } from "@emotion/css";

function Header() {
  const header = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 1rem 10%;
    height: 5rem;
    background-color: #202020;
  `;

  const headerLogo = css`
    font-size: 1.5rem;
    color: white;
    font-family: "Fira", sans-serif;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #94fdfd;
    & a {
      text-decoration: none;
      color: #94fdfd;
    }
  `;

  const headerNavigation = css`
    & a {
      text-decoration: none;
      color: #74dacc;
      font-size: 1rem;
    }
  `;

  return (
    <header className={header}>
      <div className={headerLogo}>
        <Link href="/">EvenTABoard</Link>
      </div>
      <nav className={headerNavigation}>
        <ul>
          <li>
            <Link href="/events">Все события</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
