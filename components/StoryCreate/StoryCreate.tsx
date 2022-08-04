import styles from "./StoryCreate.module.css";

import { Button } from "../../ui";

const StoryCreate = () => {
  return (
    <>
      <h1 className={styles.dialog__heading}>What&#39;s your story?</h1>
      <form className={styles.dialog__form}>
        <label className={styles.dialog__label} htmlFor="company">
          Company:
          <input id="company" type="text" required />
        </label>
        <label className={styles.dialog__label} htmlFor="level">
          Level:
          <input id="level" type="text" required />
        </label>
        <label className={styles.dialog__label} htmlFor="offer">
          Offer:
          <input id="offer" type="checkbox" required />
        </label>
        <label className={styles.dialog__label} htmlFor="timeline">
          Timeline:
          <input min={0} id="timeline" type="number" required />
          weeks
        </label>
        <h3 className={styles.dialog__heading}>
          What&#39;s your total compensation?
        </h3>
        <div className={styles.dialog__compensations}>
          <label className={styles.dialog__compensation} htmlFor="base">
            Base:
            <input min={0} id="base" type="number" required />
          </label>
          <label className={styles.dialog__compensation} htmlFor="stock">
            Stock:
            <input min={0} id="stock" type="number" required />
          </label>
          <label className={styles.dialog__compensation} htmlFor="bonus">
            Bonus:
            <input min={0} id="bonus" type="number" required />
          </label>
        </div>
        <div className={styles.dialog__controls}>
          <Button>Next</Button>
        </div>
      </form>
    </>
  );
};

export default StoryCreate;
