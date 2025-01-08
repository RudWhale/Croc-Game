import styles from "../../Styles/logo.module.scss";

export default function Logo(props: any) {
  return (
    <div className={styles.logo}>
      <div className={styles.logo_first}>CROC</div>
      <div className={styles.logo_second}>GAME</div>
    </div>
  );
}