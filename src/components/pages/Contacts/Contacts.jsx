import React from "react";
import {useSpring, animated} from "@react-spring/web";
import style from "./Contacts.module.scss";
import telegram_img from "./images/telegram.png";

export default function Contacts() {
  const springs = useSpring({
    from: {y: 0},
    to: {y: 80},
  });

  return (
    <>
      <animated.div
        style={{
          background: "rgba(14, 18, 41, 0.926)",
          // height: "fit-content",
          height: "50%",
          borderRadius: "10px",
          margin: "0 5px 30px 5px",
          marginTop: "0px",

          ...springs,
        }}
      >
        <button
          onClick={() => (window.location = "https://t.me/sergey_pankow")}
        >
          Contact me <img src={telegram_img} alt="telegram_img"></img>
        </button>
      </animated.div>
    </>

    // <div className={style.contacts}>
    //   <button onClick={() => (window.location = "https://t.me/sergey_pankow")}>
    //     Contact me <img src={telegram_img} alt="telegram_img"></img>
    //   </button>
    // </div>
  );
}
