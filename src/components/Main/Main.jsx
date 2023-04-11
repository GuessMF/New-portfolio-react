import React from "react";
import style from "./Main.module.scss";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import Example from "../Example/Example";

export default function Main() {
  return (
    <div className={style.main}>
      <div className={style.main_wrapper}>
        <WelcomeScreen />
        <AboutMe />
        <Projects />
      </div>
    </div>
  );
}
