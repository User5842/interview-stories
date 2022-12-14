import { useRef } from "react";

import styles from "./Header.module.css";

import { Button } from "../../ui";
import StoryCreate from "../StoryCreate/StoryCreate";

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
          <Button onClick={onCreateStory}>Create Story</Button>
        </nav>
      </header>
    </>
  );
};

export default Header;
