import * as Components from "components";
import styles from "./styles.module.scss";
import plant1 from "assets/picture/png/plant-1.png";
import plant2 from "assets/picture/png/plant-2.png";
import catAll from "assets/picture/png/cat-all.png";

const Introduce = () => {
  const onClickStart = () => {};

  return (
    <>
      <Components.LayOut completed={155}>
        <div className={styles.content}>
          <p className={styles.title}>哈囉~歡迎進入「SCRUM 新手村」</p>
          在正式加入專案開發之前，需要請你先了解 Scrum 的流程與精神！
          請接受挑戰任務，成功通過 Scrum 新手村的挑戰任務吧～～
          <Components.Button
            className={styles.button}
            color={"#acd271"}
            width={"350px"}
            onClick={onClickStart}
            children={<div className={styles.word}>接受挑戰</div>}
          />
        </div>

        <img src={plant1} className={styles.plant1} />
        <img src={catAll} className={styles.allCats} />
        <img src={plant2} className={styles.plant2} />
      </Components.LayOut>
    </>
  );
};

export default Introduce;
