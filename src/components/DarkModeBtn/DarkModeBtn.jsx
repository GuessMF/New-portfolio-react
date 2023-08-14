import {React} from "react";
import {useEffect, useRef, useState} from "react";
import {useLocalStorage} from "./../../utils/useLocalStorage";
import detectDarkMode from "../../utils/detectDarkMode";
import style from "./DarkModeBtn.module.scss";

const DarkModeBtn = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectDarkMode());
  const [checked, setChecked] = useState(false);
  const btnRef = useRef(null);
  const metaThemeColorTag = document.querySelector("meta[name='theme-color']");
  // const lightStatusBar = #ececf1
  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      metaThemeColorTag.setAttribute("content", "#050509");
      setChecked(false);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      metaThemeColorTag.setAttribute("content", "#ececf1");
      setChecked(true);
    }
  }, [darkMode]);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme:dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setDarkMode(newColorScheme);
      });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === "light" ? "dark" : "light";
    });
  };
  const onClickCheck = () => {
    setChecked(!checked);
  };

  return (
    <div className={style.switch}>
      <input
        ref={btnRef}
        type="checkbox"
        className={style.switch__input}
        id="Switch"
        checked={checked}
        onClick={onClickCheck}
        onChange={toggleDarkMode}
      />
      <label className={style.switch__label} htmlFor="Switch">
        <span className={style.switch__indicator}></span>
        <span className={style.switch__decoration}></span>
      </label>
    </div>
  );
};

export default DarkModeBtn;
