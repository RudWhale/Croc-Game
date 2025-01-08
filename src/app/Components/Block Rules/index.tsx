import styles from "../../Styles/blockRules.module.scss";

export default function BlockRules() {
  return (
    <div className={styles.blockRules}>
      <div className={styles.blockRules_title}>Общие Правила</div>
      <div className={styles.blockRules_info}>info</div>
      <div className={styles.blockRules_img}>img</div>
    </div>
  );
}
