import styles from "../../Styles/header.module.scss";

export default function HeaderBtn(props:any) {
  return (
    <div className={styles.header_menu_button}>
      {props.name}
    </div>
  );
}