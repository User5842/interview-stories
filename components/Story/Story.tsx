import { FunctionComponent } from "react";

import styles from "./Story.module.css";
import { StoryProps } from "./Story.props";

const Story: FunctionComponent<StoryProps> = ({
  company,
  offer,
  position,
  totalCompensation,
}) => (
  <div className={styles.story}>
    <h1>{company}</h1>
    <div className={styles.story__meta}>
      <p>{position}</p>
      {totalCompensation && (
        <p>
          TC: ${totalCompensation.base} | ${totalCompensation.stock} | $
          {totalCompensation.bonus}{" "}
        </p>
      )}
      <p>Offer: {offer ? "✔️" : "❌"}</p>
    </div>
  </div>
);

export default Story;
