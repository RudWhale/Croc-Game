import styles from "../../../../Styles/firstBlock.module.scss"

export default function ImageWB() {
    return (
        <div className={styles.firstBlock_workBlock_blockImage}>
            <img className={styles.firstBlock_workBlock_blockImage_img} src="croc.png"></img>
        </div>
    );
}