import {React, useState} from "react";
import style from "./Header.module.scss";
import {NavLink} from "react-router-dom";

export default function Header() {
  const [click, setClick] = useState("");
  function checkClick() {
    console.log(click);
  }
  checkClick();
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
              onClick={() => setClick()}
            >
              <a>About me</a>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({isActive}) =>
                isActive ? style.active_link : style.link
              }
            >
              <a>Projects</a>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className={({isActive}) =>
                isActive ? style.active_link : style.link
              }
              // onMouseOver={() => alert(isActive)}
            >
              <a>Contacts</a>
            </NavLink>
          </li>
        </div>
      </div>
    </div>
  );
}
