import styles from "../../../Styles/modeBlock.module.scss"
import ElementModes from "./Element";
import modes from '../../../assets/modes.json'

export default function Modes() {
  return (
    <div className={styles.modeBlock_modes}>
      {modes.map((el,i) => (
        <ElementModes age={el.age} name={el.name} icon={el.icon} key={i} link={el.link}/>
      ))}
    </div>
  );
}