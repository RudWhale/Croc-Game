import styles from "../../../Styles/firstBlock.module.scss";
import ImageWB from "./Image";
import InfoBlock from "./Info Block";

export default function WorkBlock() {
    return (
        <div className={styles.firstBlock_workBlock}>
            <InfoBlock />
            <ImageWB />
        </div>
    );
}