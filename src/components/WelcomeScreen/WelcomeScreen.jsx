import React from "react";
import {NavLink} from "react-router-dom";
import {useSpring, animated} from "@react-spring/web";

import {useTranslation} from "react-i18next";

import cv from "./files/Pankov_Segey_React_Frontend_Developer.pdf";
import avatar_img from "./images/avatar.webp";
import download_icon from "./images/download_icon.webp";
import download_i from "./images/download.svg";

import style from "./WelcomeScreen.module.scss";

export default function WelcomeScreen() {
  const springs = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
  });

  const {t, i18n} = useTranslation();
  return (
    <>
      <animated.div
        style={{
          // background: "rgba(14, 18, 41, 0.926)",
          height: "100%",
          borderRadius: "10px",
          margin: "0px 5px ",
          ...springs,
        }}
      >
        <div className={style.welcome_screen}>
          <div className={style.portfolio_information}>
            <div className={style.portfolio_top}>
              <div className={style.portfolio_img}>
                <img src={avatar_img} alt="avatar_img"></img>
              </div>
              <div className={style.portfolio_block}>
                {/* <h1>Sergey Pankov</h1> */}
                <h1>{t("name")}</h1>
                <h3>{t("post")}</h3>
                {/* <h3>Frontend Web-Developer</h3> */}
              </div>
            </div>

            <div className={style.portfolio_bottom}>
              <NavLink
                to="/projects"
                className={({isActive}) =>
                  isActive ? style.active_link : style.link
                }
              >
                {t("myProjects")}
              </NavLink>
              <a href={cv} download>
                {t("downloadCv")}
                {/* <img src={download_icon} alt="download_icon"></img> */}
                <img src={download_i}></img>
              </a>
            </div>
          </div>
        </div>
      </animated.div>
    </>
  );
}
