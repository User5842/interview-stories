import Link from "next/link";

import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.header__heading}>Interview Stories</h1>
    <nav className={styles.header__controls}>
      <Link href="/">
        <a className={styles.header__control}>View Stories</a>
      </Link>
      <button className={styles.header__control}>Create Story</button>
    </nav>
  </header>
);

export default Header;
