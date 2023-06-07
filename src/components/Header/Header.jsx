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
  console.log(lang + " lang");

  return (
    <div className={style.header}>
      <div className={style.header__wrapper}>
        <NavLink to="/" className={style.brand_name}>
          <div>Blog Name</div>
        </NavLink>

        <div className={style.right_content}>
          <li>
            <NavLink
              to="/aboutme"
              className={({isActive}) =>
                isActive ? style.active_link : style.link
              }
              onClick={() => console.log("test2")}
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
          <li>
            {/* <button onClick={() => changeLanguage("en")}>en</button>
            <button onClick={() => changeLanguage("ru")}>ru</button> */}
          </li>
          <SelectHeader
            classNamePrefix="custom-select-header"
            isSearchable={false}
            name="color"
            options={langOptions}
            placeholder={lang}
            value={lang}
            onChange={changeLang}
            // defaultValue={lang}
            // isMulti={true}
            // isOptionSelected={true}
            //isLoading={true}
            // menuIsOpen={true}
          />
        </div>
      </div>
    </div>
  );
}
