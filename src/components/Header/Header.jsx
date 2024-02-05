import {React, useState} from "react";
import style from "./Header.module.scss";
import {NavLink} from "react-router-dom";
import DarkModeBtn from "./../DarkModeBtn/DarkModeBtn";
import {useTranslation} from "react-i18next";
import SelectHeader from "react-select";
import "./custom-select-header.scss";

export default function Header() {
  const actived = document.querySelector('[class*="active_link"]');
  // console.log(actived);

  const {t, i18n} = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "en");
  const langs = ["en", "ru"];

  const langOptions = langs.map((value, i) => ({
    value: value,
    label: value,
    index: i,
  }));
  const changeLang = (lang) => {
    setLang(lang);
    changeLanguage(lang.value);
    //console.log(lang.value);
  };

  return (
    <div className={style.header}>
      <div className={style.header__wrapper}>
        <NavLink to="/" className={style.brand_name}>
          <div>Sergey Pankov</div>
        </NavLink>

        <div className={style.right_content}>
          <li>
            <NavLink
              to="/aboutme"
              className={({isActive}) =>
                isActive ? style.active_link : style.link
              }
            >
              <span>{t("aboutMe")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({isActive}) =>
                isActive ? style.active_link : style.link
              }
            >
              <span>{t("projects")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className={({isActive}) =>
                isActive ? style.active_link : style.link
              }
            >
              <span>{t("contacts")}</span>
            </NavLink>
          </li>
          <li>
            <DarkModeBtn />
          </li>
          <li></li>
          <SelectHeader
            classNamePrefix="custom-select-header"
            isSearchable={false}
            name="color"
            options={langOptions}
            placeholder={lang}
            value={lang}
            onChange={changeLang}
          />
        </div>
      </div>
    </div>
  );
}
