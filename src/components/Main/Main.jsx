import React from "react";
import style from "./Main.module.scss";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";

export default function Main() {
  return (
    <div className={style.main}>
      <div className={style.main_wrapper}>
        <WelcomeScreen />
      </div>
    </div>
  );
}
