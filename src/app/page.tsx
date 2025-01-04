import Header from "./Components/Header";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
    </div>
  );
}
