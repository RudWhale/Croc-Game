import styles from "../../Styles/firstBlock.module.scss";
import FirstTitle from "./First Title";
import SecondTitle from "./Second Title";
import WorkBlock from "./Work Block";

export default function FirstBlock() {
    return (
        <div className={styles.firstBlock}>
            <FirstTitle/>
            <SecondTitle/>
            <WorkBlock/>
        </div>
    );
}