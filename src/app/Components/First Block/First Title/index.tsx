import styles from "../../../Styles/firstBlock.module.scss";

export default function FirstTitle() {
    return (
            <div className={styles.firstBlock_firstTitle}>
                <div className={styles.firstBlock_firstTitle_down}>тот самый</div>
                <div className={styles.firstBlock_firstTitle_up}>КРОКОДИЛ</div>
            </div>

    );
}