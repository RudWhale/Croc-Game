import styles from "../../Styles/modeBlock.module.scss"
import Modes from "./Modes";
import TitleMB from "./Title";

export default function ModeBlock() {
    return (
      <div className={styles.modeBlock}>
        <TitleMB/>
        <Modes/>
      </div>
    );
  }