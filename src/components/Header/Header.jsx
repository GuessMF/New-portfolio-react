import React from "react";
import style from "./Header.module.scss";

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.header__wrapper}>
        <div className={style.brand_name}>Blog Name</div>
        <div className={style.right_content}>
          <li>About me</li>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </div>
      </div>
    </div>
  );
}
