"use client"
import styles from "../../../Styles/header.module.scss";


export default function HeaderBtn(props: any) {


  const toGO:any = () => {
    const BlockToGo: any = document.getElementById(props.link);

    BlockToGo.scrollIntoView({ block: "center", behavior: "smooth" });
  }


  return (
    <div className={styles.header_menu_button} onClick={toGO}>
      {props.name}
    </div>
  );
}