import styles from "../../../../Styles/firstBlock.module.scss"
import ButtonWB from "../Button";

export default function InfoBlock() {
    return (
        <div className={styles.firstBlock_workBlock_info}>
            <div className={styles.firstBlock_workBlock_info_text}>Добро пожаловать в мир Крокодила, где каждый жест — это ключ к разгадке, 
                а каждая мимика — путь к веселью! Собирайте друзей и близких для увлекательного вечера смеха и загадок. Выберите один из 10 
                уникальных режимов, где каждый сможет проявить свои творческие способности и актерский талант. Кто знает, какие загадки и 
                сюрпризы вас ждут за каждым углом? Погрузитесь в волшебный мир невербальной коммуникации и станьте настоящими мастерами Крокодила!</div>
            <ButtonWB />
        </div>
    );
}