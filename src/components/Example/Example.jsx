import React from "react";
import style from "./Example.module.scss";

export default function Example({title, img, gitHubLink, stack, stackIcon}) {
  return (
    <div className={style.example}>
      <div
        className={style.example_img}
        style={{backgroundImage: `url(${img})`}}
      >
        <div className={style.subtitle}>
          <h4>{title}</h4>
          <p>
            Stack:
            {stackIcon.map((icon) => {
              return <img src={icon}></img>;
            })}
          </p>

          {/* <p>Stack: {stackIcon}</p> */}
          <p>{/* Stack: <img src={stackIcon}></img> */}</p>
        </div>
      </div>
    </div>
  );
}
