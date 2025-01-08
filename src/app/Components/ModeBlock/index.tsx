import styles from "../../Styles/modeBlock.module.scss"

export default function ModeBlock() {
    return (
      <div className={styles.modeBlock}>
        <div className={styles.modeBlock_title}>РЕЖИМЫ</div>
        <div className={styles.modeBlock_modes}>
            <div className={styles.modeBlock_modes_element}>1</div>
            <div className={styles.modeBlock_modes_element}>1</div>
            <div className={styles.modeBlock_modes_element}>1</div>
            <div className={styles.modeBlock_modes_element}>1</div>
            <div className={styles.modeBlock_modes_element}>1</div>
            <div className={styles.modeBlock_modes_element}>1</div>
            <div className={styles.modeBlock_modes_element}>1</div>
            <div className={styles.modeBlock_modes_element}>1</div>
            <div className={styles.modeBlock_modes_element}>1</div>
        </div>
      </div>
    );
  }