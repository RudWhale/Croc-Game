import styles from "../../../../Styles/footer.module.scss";

export default function SosialEL(props:any) {
    return (
            <div className={styles.footer_upBlock_contacts_sosial_el}>
                <img src={props.src} alt="" />
            </div>

    );
}
