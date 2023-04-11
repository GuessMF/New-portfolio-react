import React from "react";
import style from "./Example.module.scss";
import Araney from "./images/Araney.png";

export default function Example() {
  return (
    <div className={style.example}>
      <div
        className={style.example_img}
        style={{backgroundImage: `url(${Araney})`}}
      >
        {/* <img style='background-image: url({});' src={Araney} alt="Araney"></img> */}
      </div>
      <div className={style.subtitle}>
        <h4>Project Name</h4>
      </div>
    </div>
  );
}
