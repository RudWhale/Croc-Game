import styles from "../../../../Styles/modeBlock.module.scss"

export default function ElementModes() {
    return (
            <div className={styles.modeBlock_modes_element}>
                <div className={styles.modeBlock_modes_element_header}>
                        <div>age</div>
                        <div>???</div>
                </div>
                <div className={styles.modeBlock_modes_element_icon}>icon</div>
                <div className={styles.modeBlock_modes_element_name}>name</div>
                <div className={styles.modeBlock_modes_element_btn}>button</div>
            </div>
    );
  }