import styles from "../../../../Styles/firstBlock.module.scss"
import ButtonWB from "../Button";

export default function InfoBlock() {
    return (
        <div className={styles.firstBlock_workBlock_info}>
            <div className={styles.firstBlock_workBlock_info_text}>инфо</div>
            <ButtonWB/>
        </div>
    );
}