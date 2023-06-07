import React from "react";
import style from "./Main.module.scss";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";

export default function Main() {
  return (
    <div className={style.main}>
      <WelcomeScreen />
    </div>
  );
}
