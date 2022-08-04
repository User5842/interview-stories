import Link from "next/link";
import { useRef } from "react";
import StoryCreate from "../StoryCreate/StoryCreate";

import styles from "./Header.module.css";

const Header = () => {
  /**
   * Used to reference the `HTMLDialogElement`.
   */
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  /**
   * Opens the create story dialog.
   * @returns {void}
   */
  const onCreateStory = (): void => dialogRef.current?.showModal();

  return (
    <>
      <dialog className={styles.dialog} ref={dialogRef}>
        <StoryCreate />
      </dialog>
      <header className={styles.header}>
        <h1 className={styles.header__heading}>Interview Stories</h1>
        <nav className={styles.header__controls}>
          <Link href="/">
            <a className={styles.header__control}>View Stories</a>
          </Link>
          <button className={styles.header__control} onClick={onCreateStory}>
            Create Story
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
