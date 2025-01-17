import styles from "../../Styles/blockRules.module.scss";

export default function BlockRules() {
  return (
    <div className={styles.blockRules} id="rules">
      <div className={styles.blockRules_title}>Общие Правила</div>
      <div className={styles.blockRules_info}>
        <div>Участники разделяются на команды или играют индивидуально.</div>
        <div>Среди игроков выбирается человек, который будет показывать слово или словосочетание.</div>
        <div>Слово или словосочетание, отображается на мониторе только для показывающего. Он начинает изображать слово с помощью жестов и мимики, не используя слов и звуков.</div>
        <div>Остальные игроки пытаются угадать слово, задавая вопросы. Показывающий отвечает только кивком или отрицанием головы. Угадывать могут все команды.</div>
        <div>Если время истекло и игроки не угадали слово, игрок или команда показывающего теряет балл. А если кто-то угадал слово, то игрок или команды получают балл.</div>
      </div>

      <div className={styles.blockRules_title}>Cпециальные Правила</div>
      <div className={styles.blockRules_info}>
        <div>Слова или словосочетания будут показываться из выбранного вами режима и из классического.</div>
        <div>Во всех режимах на мониторе периодически будут появляться задания, которые показывающий должен выполнять, пока изображает слово. Это могут быть различные действия или дополнительные ограничения, усложняющие задачу. Задания могут иметь как тематику выбранного режима так и чего-то обычного.</div>
        <div>Во в всех режимах можно включить функцию "Задание Отстающим", в которой будет задание для команды или игрока набравшего меньше баллов по истечению 5,10 или 15 раундов. Задание будет с тематикой выбранного режима.</div>
      </div>

      <div className={styles.blockRules_img}>
        <img src="croc-rules.png" alt="" />
      </div>
    </div>
  );
}
