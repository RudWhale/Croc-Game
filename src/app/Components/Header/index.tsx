import styles from "../../Styles/header.module.scss";
import Logo from "../Logo";
import HeaderBtn from "./Button Menu"

export default function Header() {
    return (
        <div className={styles.header}>
            <Logo />
            <div className={styles.header_menu}>
                <HeaderBtn name="Режимы" />
                <HeaderBtn name="Правила" />
                <HeaderBtn name="Контакты" />
            </div>
        </div>
    )
}