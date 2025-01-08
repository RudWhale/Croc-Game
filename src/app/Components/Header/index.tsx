import styles from "../../Styles/header.module.scss";
import HeaderBtn from "./Button Menu"

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header_logo}>
                CROCGAME
            </div>
            <div className={styles.header_menu}>
                <HeaderBtn name="Режимы" />
                <HeaderBtn name="Правила" />
                <HeaderBtn name="Контакты" />
            </div>
        </div>
    )
}