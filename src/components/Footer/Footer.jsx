import React from "react";
import style from "./Footer.module.scss";
import github_img from "./images/github.webp";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className={style.footer}>
      <div className={style.footer_wrapper}>
        <div className={style.block_1}>
          <h1>Sergey Pankov</h1>
        </div>
        <div className={style.block_2}>
          <img src={github_img} alt="github_img"></img>
        </div>
        <div className={style.block_3}>
          <h3>2023-{currentYear}</h3>
        </div>
      </div>
    </div>
  );
}
