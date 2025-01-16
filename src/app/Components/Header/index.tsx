import styles from "../../Styles/header.module.scss";
import Logo from "../Logo";
import HeaderBtn from "./Button Menu"

export default function Header() {
    return (
        <div className={styles.header} id="header">
            <Logo />
            <div className={styles.header_menu}>
                <HeaderBtn name="Режимы" link="modes" />
                <HeaderBtn name="Правила" link="rules"/>
                <HeaderBtn name="Контакты" link="contacts"/>
            </div>
        </div>
    )
}