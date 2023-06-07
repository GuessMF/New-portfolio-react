import React from "react";
import {useSpring, animated} from "@react-spring/web";
import style from "./Contacts.module.scss";
import telegram_img from "./images/telegram.webp";
import gitHub_logo from "./images/github.webp";
import {useTranslation} from "react-i18next";

export default function Contacts() {
  const springs = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
  });
  const {t, i18n} = useTranslation();
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
        <div className={style.contacts}>
          <h4 className={style.title}>{t("contactMe")}</h4>
          <button
            onClick={() => (window.location = "https://t.me/sergey_pankow")}
          >
            Telegram <img src={telegram_img} alt="telegram_img"></img>
          </button>
          <h4 className={style.title}>{t("checkMyRepo")}</h4>
          <button
            onClick={() => (window.location = "https://github.com/GuessMF")}
          >
            GitHub{" "}
            <img
              src={gitHub_logo}
              className={style.github_logo}
              alt="gitHub_logo"
            ></img>
          </button>
        </div>
      </animated.div>
    </div>
  );
}
