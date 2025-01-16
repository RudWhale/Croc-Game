"use client"
import styles from "../../Styles/footer.module.scss";
import LogoPWL from "./LogoPWL";
import Sosial from "./Sosial";

export default function Footer() {

    const toGO: any = () => {
        const BlockToGo: any = document.getElementById("header");

        BlockToGo.scrollIntoView({ block: "center", behavior: "smooth" });
    }


    return (
        <div className={styles.footer} id="contacts">
            <div className={styles.footer_upBlock}>
                <LogoPWL />
                <div className={styles.footer_upBlock_contacts}>
                    <div className={styles.footer_upBlock_contacts_title}>КОНТАКТЫ</div>
                    <div className={styles.footer_upBlock_contacts_email}>rudkouski.web@gmail.com</div>
                    <Sosial />
                </div>
            </div>
            <div className={styles.footer_line}></div>
            <div className={styles.footer_downBlock}>
                <div className={styles.footer_downBlock_btn} onClick={toGO}>ВВЕРХ</div>
            </div>
        </div>
    );
}
