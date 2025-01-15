import Header from "./Components/Header";
import FirstBlock from "./Components/First Block";
import BlockRules from "./Components/Block Rules";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <FirstBlock/>
      <BlockRules/>
    </div>
  );
}
