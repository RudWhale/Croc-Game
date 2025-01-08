import BlockRules from "./Components/Block Rules";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <BlockRules/>
    </div>
  );
}
