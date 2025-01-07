import FirstBlock from "./Components/First Block";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <FirstBlock/>
    </div>
  );
}
