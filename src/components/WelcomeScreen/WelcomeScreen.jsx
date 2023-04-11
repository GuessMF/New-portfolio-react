import React from "react";
import avatar_img from "./images/avatar.png";
// import github_img from "./images/github.png";
import telegram_img from "./images/telegram.png";

import style from "./WelcomeScreen.module.scss";

export default function WelcomeScreen() {
  return (
    <div className={style.welcome_screen}>
      <div className={style.portfolio_information}>
        <div className={style.portfolio_top}>
          <div className={style.portfolio_img}>
            <img src={avatar_img} alt="avatar_img"></img>
          </div>
          <div className={style.portfolio_block}>
            <h1>Sergey Pankov</h1>
            <h3>Web-Developer</h3>
          </div>
        </div>

        <div className={style.portfolio_bottom}>
          <div className={style.buttons}>
            <button>Download Cv</button>
            <button>
              Contact me <img src={telegram_img} alt="telegram_img"></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
