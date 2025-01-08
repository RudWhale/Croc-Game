import styles from "../../Styles/footer.module.scss";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_upBlock}>
                <div className={styles.footer_upBlock_logo}>logo</div>
                <div className={styles.footer_upBlock_contacts}>
                    <div className={styles.footer_upBlock_contacts_title}>contacts</div>
                    <div className={styles.footer_upBlock_contacts_email}>email</div>
                    <div className={styles.footer_upBlock_contacts_sosial}>
                        <div className={styles.footer_upBlock_contacts_sosial_el}>GH</div>
                        <div className={styles.footer_upBlock_contacts_sosial_el}>Inst</div>
                        <div className={styles.footer_upBlock_contacts_sosial_el}>TG</div>
                    </div>
                </div>
            </div>
            <div className={styles.footer_line}></div>
            <div className={styles.footer_downBlock}>
                <div className={styles.footer_downBlock_btn}>Back</div>
            </div>
        </div>
    );
}
