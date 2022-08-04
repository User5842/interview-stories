import styles from "./StoryCreate.module.css";

const StoryCreate = () => {
  return (
    <>
      <h1 className={styles.dialog__heading}>What&#39;s your story?</h1>
      <form>
        <label htmlFor="company">
          Company:
          <input id="company" type="text" />
        </label>
        <label htmlFor="level">
          Level:
          <input id="level" type="text" />
        </label>
        <label htmlFor="offer">
          Offer:
          <input id="offer" type="checkbox" />
        </label>
      </form>
    </>
  );
};

export default StoryCreate;
