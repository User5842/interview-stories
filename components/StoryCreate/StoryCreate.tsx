import { useState } from "react";

import styles from "./StoryCreate.module.css";

import { Button } from "../../ui";
import Chapter from "../Chapter/Chapter";

const StoryCreate = () => {
  /**
   * Represents the current chapter of the story.
   */
  const [chapter, setChapter] = useState(0);

  /**
   * Adds a chapter to the story.
   * @returns {void}
   */
  const onAddClick = (): void => {
    // Only add a new chapter if we're at the end of the story.
    if (chapter !== story.length - 1) return;
    setStory((currentStory) => [
      ...currentStory,
      <Chapter
        onAddClick={onAddClick}
        onBackClick={onBackClick}
        key={chapter}
      />,
    ]);
    setChapter((previousChapter) => previousChapter + 1);
    console.log(chapter);
  };

  /**
   * Goes back a chapter.
   * @returns {void}
   */
  const onBackClick = (): void => {
    setChapter((previousChapter) => previousChapter - 1);
    console.log(chapter);
  };

  /**
   * Represents the introduction of the story.
   */
  const intro = (
    <>
      <h1 className={styles.dialog__heading}>What&#39;s your story?</h1>
      <label className={styles.dialog__label} htmlFor="company">
        Company:
        <input id="company" name="company" type="text" required />
      </label>
      <label className={styles.dialog__label} htmlFor="level">
        Level:
        <input id="level" name="level" type="text" required />
      </label>
      <label className={styles.dialog__label} htmlFor="offer">
        Offer:
        <input id="offer" name="offer" type="checkbox" />
      </label>
      <label className={styles.dialog__label} htmlFor="timeline">
        Timeline:
        <input min={0} id="timeline" name="timeline" type="number" required />
        weeks
      </label>
      <h3 className={styles.dialog__heading}>
        What&#39;s your total compensation?
      </h3>
      <div className={styles.dialog__compensations}>
        <label className={styles.dialog__compensation} htmlFor="base">
          Base:
          <input min={0} id="base" name="compensation" type="number" required />
        </label>
        <label className={styles.dialog__compensation} htmlFor="stock">
          Stock:
          <input
            min={0}
            id="stock"
            name="compensation"
            type="number"
            required
          />
        </label>
        <label className={styles.dialog__compensation} htmlFor="bonus">
          Bonus:
          <input
            min={0}
            id="bonus"
            name="compensation"
            type="number"
            required
          />
        </label>
      </div>
      <div className={styles.dialog__controls}>
        <Button onClick={onAddClick}>Add Chapter</Button>
      </div>
    </>
  );

  /**
   * Represents the complete story.
   */
  const [story, setStory] = useState<JSX.Element[]>([intro]);

  return <div className={styles.dialog__form}>{story[chapter]}</div>;
};

export default StoryCreate;
