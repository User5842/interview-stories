import { FunctionComponent } from "react";

import styles from "./Chapter.module.css";
import { ChapterProps } from "./Chapter.props";

import { Button } from "../../ui";

const Chapter: FunctionComponent<ChapterProps> = ({
  onAddClick,
  onBackClick,
  onDoneClick,
}) => (
  <div className={styles.chapter}>
    <h1 className={styles.dialog__heading}>How&#39;d it go?</h1>
    <label className={styles.dialog__label} htmlFor="type">
      Type:
      <select name="type" id="type">
        <option value="">--Please choose an option--</option>
        <option value="phone-screen">Phone Screen</option>
        <option value="algo">Data Structures & Algorithms</option>
        <option value="system-design">System Design</option>
        <option value="behavioral">Behavioral / Values</option>
      </select>
    </label>
    <label className={styles.dialog__label} htmlFor="details">
      Details:
      <textarea cols={30} name="details" rows={10}></textarea>
    </label>
    <div className={styles.chapter__controls}>
      <Button onClick={onBackClick}>Back</Button>
      <Button onClick={onAddClick}>Add Chapter</Button>
      <Button onClick={onDoneClick}>Done</Button>
    </div>
  </div>
);

export default Chapter;
