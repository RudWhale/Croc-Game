import styles from "../../../../Styles/modeBlock.module.scss"

export default function ElementModes(props:any) {
    return (
            <div className={styles.modeBlock_modes_element}>
                <div className={styles.modeBlock_modes_element_header}>
                        <div>{props.age}</div>
                        <div>???</div>
                </div>
                <div className={styles.modeBlock_modes_element_icon}>
                        <img src={props.icon} alt="" />
                </div>
                <div className={styles.modeBlock_modes_element_name}>{props.name}</div>
                <div className={styles.modeBlock_modes_element_btn}>button</div>
            </div>
    );
  }