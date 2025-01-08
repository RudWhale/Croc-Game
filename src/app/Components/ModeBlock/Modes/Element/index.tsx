import styles from "../../../../Styles/modeBlock.module.scss"

export default function ElementModes() {
    return (
            <div className={styles.modeBlock_modes_element}>
                <div className={styles.modeBlock_modes_element_imgBlock}>img</div>
                <div className={styles.modeBlock_modes_element_workBlock}>
                    <div className={styles.modeBlock_modes_element_workBlock_name}>name</div>
                    <div className={styles.modeBlock_modes_element_workBlock_info}>info</div>
                    <div className={styles.modeBlock_modes_element_workBlock_btn}>button</div>
                </div>
            </div>
    );
  }