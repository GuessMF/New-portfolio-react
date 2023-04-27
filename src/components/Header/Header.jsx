import {React, useState} from "react";
import style from "./Header.module.scss";
import {NavLink} from "react-router-dom";

export default function Header() {
  const actived = document.querySelector('[class*="active_link"]');
  console.log(actived);

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
              <span>About me</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({isActive}) =>
                isActive ? style.active_link : style.link
              }
            >
              <span>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className={({isActive}) =>
                isActive ? style.active_link : style.link
              }
            >
              <span>Contacts</span>
            </NavLink>
          </li>
        </div>
      </div>
    </div>
  );
}
