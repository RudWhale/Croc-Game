import styles from "../../../Styles/footer.module.scss";
import SosialEL from "./Sosial Element";

export default function Sosial() {
    return (
        <div className={styles.footer_upBlock_contacts_sosial}>
            <SosialEL src="iGitHub.png"/>
            <SosialEL src="iInst.png"/>
            <SosialEL src="iTG.png"/>
        </div>
    );
}
