import React from "react";
import style from "./Main.module.scss";

export default function Main() {
  return (
    <div className={style.main}>
      <div className={style.main_wrapper}>
        <div className={style.welcome_screen}>
          <div className={style.portfolio_information}>
            <div className={style.portfolio_top}>
              <div className={style.portfolio_img}></div>
              <div className={style.portfolio_block}>
                <h1>Sergey Pankov</h1>
                <h3>Web-Developer</h3>
                <div className={style.portfolio_links}>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                </div>
              </div>
            </div>
            <div className={style.portfolio_center}>center</div>
            <div className={style.portfolio_bottom}>bottom</div>
          </div>
        </div>
      </div>
    </div>
  );
}
