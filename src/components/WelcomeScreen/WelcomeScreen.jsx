import React from "react";
import avatar_img from "./images/avatar.png";
// import github_img from "./images/github.png";
import telegram_img from "./images/telegram.png";
import cv from "./files/test.txt";
import download_icon from "./images/download_icon.png";
import {NavLink} from "react-router-dom";

import style from "./WelcomeScreen.module.scss";

export default function WelcomeScreen() {
  return (
    <div className={style.wrapper}>
      <div className={style.welcome_screen}>
        <div className={style.portfolio_information}>
          <div className={style.portfolio_top}>
            <div className={style.portfolio_img}>
              <img src={avatar_img} alt="avatar_img"></img>
            </div>
            <div className={style.portfolio_block}>
              <h1>Sergey Pankov</h1>
              <h3>Frontend Web-Developer</h3>
            </div>
          </div>

          <div className={style.portfolio_bottom}>
            {/* <button>Download Cv</button> */}
            <NavLink
              to="/projects"
              className={({isActive}) =>
                isActive ? style.active_link : style.link
              }
            >
              My Projects
            </NavLink>
            <a href={cv} download>
              Download Cv <img src={download_icon}></img>
            </a>

            {/* <button
              onClick={() => (window.location = "https://t.me/sergey_pankow")}
            >
              Contact me <img src={telegram_img} alt="telegram_img"></img>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
