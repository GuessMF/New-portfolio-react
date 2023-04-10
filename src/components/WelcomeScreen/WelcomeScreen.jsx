import React from "react";
import github_img from "./images/github.png";
import telegram_img from "./images/telegram.png";
import html_icon from "./images/html-5.png";
import css_icon from "./images/css-3.png";
import scss_icon from "./images/sass.png";
import bootstrap_icon from "./images/bootstrap.png";
import tailwind_icon from "./images/tailwind.png";
import js_icon from "./images/js.png";
import ts_icon from "./images/typescript.png";
import react_icon from "./images/react.png";
import git_icon from "./images/git.png";
import style from "./WelcomeScreen.module.scss";

export default function WelcomeScreen() {
  return (
    <div className={style.welcome_screen}>
      <div className={style.portfolio_information}>
        <div className={style.portfolio_top}>
          <div className={style.portfolio_img}></div>
          <div className={style.portfolio_block}>
            <h1>Sergey Pankov</h1>
            <h3>Web-Developer</h3>
            <div className={style.portfolio_links}>
              <li>
                <img src={github_img} className={github_img}></img>
              </li>
              <li></li>
            </div>
          </div>
        </div>
        <div className={style.about_me}>
          loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren
          ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum
          loren ipsumloren ipsum loren ipsum loren ipsum loren ipsum loren ipsum
          loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren
          ipsum loren ipsum loren ipsum loren ipsums loren ipsum loren ipsum
          loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren
          ipsum loren ipsum loren ipsum loren ipsum loren ipsumloren ipsum loren
          ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum
          loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren
          ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum
          loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren
          ipsum loren ipsum loren ipsumloren ipsum loren ipsum loren ipsum loren
          ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum
          loren ipsum loren ipsum loren ipsum loren ipsum loren ipsums loren
          ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum
        </div>
        <div className={style.stack}>
          <li>
            <img src={html_icon}></img>
          </li>
          <li>
            <img src={css_icon}></img>
          </li>
          <li>
            <img src={scss_icon}></img>
          </li>
          <li>
            <img src={bootstrap_icon}></img>
          </li>
          <li>
            <img src={tailwind_icon}></img>
          </li>
          <li>
            <img src={js_icon}></img>
          </li>
          <li>
            <img src={ts_icon}></img>
          </li>
          <li>
            <img src={react_icon}></img>
          </li>
          <li>
            <img src={git_icon}></img>
          </li>
        </div>
        <div className={style.portfolio_center}>
          <div className={style.statistic}>
            <div className={style.landings_stat}>
              <span>2</span>
              <h3>Landings</h3>
            </div>
            <div className={style.js_stat}>
              <span>6</span>
              <h3>Java Script</h3>
            </div>
            <div className={style.freelance_stat}>
              <span>3</span>
              <h3>Freelance</h3>
            </div>
          </div>
        </div>
        <div className={style.portfolio_bottom}>
          <div className={style.buttons}>
            <button>Download Cv</button>
            <button>
              Contact me <img src={telegram_img}></img>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
