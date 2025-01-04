import styles from "../../Styles/header.module.scss";
import HeaderBtn from "../Header Button"

export default function Header() {
return (
<div className={styles.header}>
    <div className={styles.header_logo}>
    Logo
    </div>
    <div className={styles.header_menu}>
    <HeaderBtn name="Игры"/>
    <HeaderBtn name="Правила"/>
    <HeaderBtn name="???"/>
    <HeaderBtn name="О нас"/>
    </div>
</div>
)
}