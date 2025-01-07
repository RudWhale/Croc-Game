import styles from "../../Styles/firstBlock.module.scss";

export default function FirstBlock() {
    return (
        <div className={styles.firstBlock}>
            <div className={styles.firstBlock_firstTitle}>блок 1</div>
            <div className={styles.firstBlock_secondTitle}>блок 2</div>
            <div className={styles.firstBlock_workBlock}>
                <div className={styles.firstBlock_workBlock_info}>
                    <div className={styles.firstBlock_workBlock_info_text}>инфо</div>
                    <div className={styles.firstBlock_workBlock_btn}>кнопка</div>
                </div>
                <div className={styles.firstBlock_workBlock_img}>крокодил</div>
            </div>
        </div>
    );
}