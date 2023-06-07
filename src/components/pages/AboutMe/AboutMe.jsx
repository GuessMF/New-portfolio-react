import React from "react";
import {useSpring, animated} from "@react-spring/web";
import {projects} from "../../../helpers/projectList";
import CorouselSlider from "../../Slider/CorouselSlider";
import style from "./AboutMe.module.scss";
import {useTranslation} from "react-i18next";
export default function AboutMe() {
  const springs = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
  });

  const {t, i18n} = useTranslation();

  let landings = 0;
  let javaScript = 0;
  let typeScript = 0;
  let react = 0;

  projects.forEach((project) => {
    if (project.category === "Landings") {
      landings++;
    }
    if (project.category === "JS") {
      javaScript++;
    }
    if (project.category === "TS") {
      typeScript++;
    }
    if (project.category === "React") {
      react++;
    }
  });

  return (
    <div className={style.wrapper}>
      <animated.div
        style={{
          background: "rgba(14, 18, 41, 0.926)",
          height: "100%",
          borderRadius: "10px",
          margin: "0px 5px ",
          ...springs,
        }}
      >
        <div className={style.about_me}>
          <h4 className={style.title}>{t("aboutMe")}:</h4>
          <div className={style.information}>
            {t("aboutMeText1")}
            {t("aboutMeText2")}
            {t("aboutMeText3")}
            {t("aboutMeText4")}
            {t("aboutMeText5")}
            {t("aboutMeText6")}
          </div>
          <h4>{t("allMyStack")}</h4>

          <CorouselSlider />
          {/* <h4>Works in my portfolio:</h4> */}
          <h4>{t("worksInPortfolio")}</h4>
          <div className={style.statistic}>
            <div className={style.landings_stat}>
              <span>{landings}</span>
              <h3>Landings</h3>
            </div>
            <div className={style.js_stat}>
              <span>{javaScript}</span>
              <h3>Java Script</h3>
            </div>
            <div className={style.ts_stat}>
              <span>{typeScript}</span>
              <h3>TypeScript</h3>
            </div>
            <div className={style.react_stat}>
              <span>{react}</span>
              <h3>React</h3>
            </div>
          </div>
          <div className={style.portfolio_center}></div>
        </div>
      </animated.div>
    </div>
  );
}
