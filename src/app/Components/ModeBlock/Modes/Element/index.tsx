"use client"
import { useRouter } from 'next/navigation'
import styles from "../../../../Styles/modeBlock.module.scss"

type params = {
        icon: string,
        age: string,
        link: string,
        name: string
}

export default function ElementModes(props: params) {
        const router = useRouter()
        return (
                <div className={styles.modeBlock_modes_element} onClick={() => router.push('/modes/' + props.link)}>
                        <div className={styles.modeBlock_modes_element_header}>
                                <div>{props.age}</div>
                                <div>???</div>
                        </div>
                        <div className={styles.modeBlock_modes_element_icon}>
                                <img src={props.icon} alt="" />
                        </div>
                        <div className={styles.modeBlock_modes_element_name}>{props.name}</div>
                        <div className={styles.modeBlock_modes_element_btn}>button</div>
                </div>
        );
}