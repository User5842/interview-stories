import styles from "./Stories.module.css";

import Story from "../Story/Story";

const Stories = () => (
  <main className={styles.stories}>
    <Story
      company="DoorDash"
      offer={true}
      position="Front-End Engineer"
      totalCompensation={{
        base: 160,
        bonus: 100,
        stock: 200,
      }}
    />
    <Story
      company="Reddit"
      offer={false}
      position="Senior Front-End Engineer"
    />
    <Story company="Atlassian" offer={false} position="Front-End Engineer" />
    <Story company="Atlassian" offer={false} position="Front-End Engineer" />
  </main>
);

export default Stories;
