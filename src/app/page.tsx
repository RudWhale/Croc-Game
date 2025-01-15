import Header from "./Components/Header";
import FirstBlock from "./Components/First Block";
import BlockRules from "./Components/Block Rules";
import ModeBlock from "./Components/ModeBlock";
import Footer from "./Components/Footer";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <FirstBlock/>
      <BlockRules/>
      <ModeBlock/>
      <Footer/>
    </div>
  );
}
