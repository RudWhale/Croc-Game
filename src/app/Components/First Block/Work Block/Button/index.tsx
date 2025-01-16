"use client"
import styles from "../../../../Styles/firstBlock.module.scss"

export default function ButtonWB() {

    const toGO:any = () => {
        const BlockToGo: any = document.getElementById("modes");
    
        BlockToGo.scrollIntoView({ block: "center", behavior: "smooth" });
      }

    return (
        <div className={styles.firstBlock_workBlock_btn} onClick={toGO} >ВЫБРАТЬ РЕЖИМ</div>
    );
}