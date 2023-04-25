import React from "react";
import style from "./Header.module.scss";
import {NavLink} from "react-router-dom";

export default function Header() {
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
            >
              About me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({isActive}) =>
                isActive ? style.active_link : style.link
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className={({isActive}) =>
                isActive ? style.active_link : style.link
              }
            >
              Contacts
            </NavLink>
          </li>
        </div>
      </div>
    </div>
  );
}
