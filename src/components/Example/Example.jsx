import React from "react";
import {NavLink} from "react-router-dom";

import style from "./Example.module.scss";

export default function Example({
  title,
  img,
  gitHubLink,
  stack,
  stackIcon,
  index,
}) {
  console.log();
  return (
    <NavLink to={`/project/${index}`}>
      <div className={style.example}>
        <div
          className={style.example_img}
          style={{backgroundImage: `url(${img})`}}
        >
          <div className={style.subtitle}>
            <h4>{title}</h4>
            <p>
              Skills:
              {stackIcon.map((icon, i) => {
                return <img src={icon} alt="icon" key={i}></img>;
              })}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
