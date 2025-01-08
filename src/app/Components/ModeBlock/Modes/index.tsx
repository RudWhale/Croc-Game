import styles from "../../../Styles/modeBlock.module.scss"
import ElementModes from "./Element";

export default function Modes() {
  return (
    <div className={styles.modeBlock_modes}>
      <ElementModes />
      <ElementModes />
      <ElementModes />
      <ElementModes />
      <ElementModes />
      <ElementModes />
      <ElementModes />
      <ElementModes />
      <ElementModes/>
      <ElementModes/>
    </div>
  );
}