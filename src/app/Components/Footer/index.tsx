import styles from "../../Styles/footer.module.scss";
import LogoPWL from "./LogoPWL";
import Sosial from "./Sosial";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_upBlock}>
                <LogoPWL/>
                <div className={styles.footer_upBlock_contacts}>
                    <div className={styles.footer_upBlock_contacts_title}>contacts</div>
                    <div className={styles.footer_upBlock_contacts_email}>email</div>
                    <Sosial />
                </div>
            </div>
            <div className={styles.footer_line}></div>
            <div className={styles.footer_downBlock}>
                <div className={styles.footer_downBlock_btn}>Back</div>
            </div>
        </div>
    );
}
