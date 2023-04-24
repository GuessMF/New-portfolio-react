import React from "react";

import html_icon from "./images/html-5.png";
import css_icon from "./images/css-3.png";
import scss_icon from "./images/sass.png";
import bootstrap_icon from "./images/bootstrap.png";
import tailwind_icon from "./images/tailwind.png";
import js_icon from "./images/js.png";
import ts_icon from "./images/typescript.png";
import react_icon from "./images/react.png";
import git_icon from "./images/git.png";

import style from "./AboutMe.module.scss";

export default function AboutMe() {
  return (
    <div className={style.about_me}>
      <div className={style.title}>
        О себе: ьькмьзук мзбукмбукй бмдуби ббуейиь ькмьзу кмзбукмб укйбмд
        убиббуе йиееь ькмь зукмз букмб укйбм дубибб уейиееьь кмьзук мзбук
        мбукйбмду бибб уейиееьь кмьзу кмз букмбук йбмдуб иббуе йиееь ькм ьзук
        мзбукм букй бмдубибб уейиееьькм ьзукмзбу кмбу кйбмд убибб уейиее
      </div>
      <div className={style.stack}>
        <li>
          <img src={html_icon} alt="html_icon"></img>
        </li>
        <li>
          <img src={css_icon} alt="css_icon"></img>
        </li>
        <li>
          <img src={scss_icon} alt="scss_icon"></img>
        </li>
        <li>
          <img src={bootstrap_icon} alt="bootstrap_icon"></img>
        </li>
        <li>
          <img src={tailwind_icon} alt="tailwind_icon"></img>
        </li>
        <li>
          <img src={js_icon} alt="js_icon"></img>
        </li>
        <li>
          <img src={ts_icon} alt="ts_icon"></img>
        </li>
        <li>
          <img src={react_icon} alt="react_icon"></img>
        </li>
        <li>
          <img src={git_icon} alt="git_icon"></img>
        </li>
      </div>
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
      <div className={style.portfolio_center}></div>
    </div>
  );
}
