import React from "react";
import Slider from "react-slick";
import style from "./CorouselSlider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import html_icon from "./images/html-5.webp";
import css_icon from "./images/css-3.webp";
import scss_icon from "./images/sass.webp";
import bootstrap_icon from "./images/bootstrap.webp";
import tailwind_icon from "./images/tailwind.webp";
import js_icon from "./images/js.webp";
import ts_icon from "./images/typescript.webp";
import react_icon from "./images/react.webp";
import git_icon from "./images/git.webp";

export default function CorouselSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    easing: "linear",
    cssEase: "linear",
    arrows: false,
    swipe: false,
    draggable: false,
    useTransform: true,
    slickPause: 0,
    responsive: [
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  };
  return (
    <div className={style.corousel}>
      <Slider {...settings}>
        <li>
          <img src={html_icon} alt="html_icon"></img>
        </li>
        <li>
          <img src={css_icon} alt="css_icon"></img>
        </li>
        <li>
          <img src={scss_icon} alt="scss_icon"></img>
        </li>
        <li>
          <img src={bootstrap_icon} alt="bootstrap_icon"></img>
        </li>
        <li>
          <img src={tailwind_icon} alt="tailwind_icon"></img>
        </li>
        <li>
          <img src={js_icon} alt="js_icon"></img>
        </li>
        <li>
          <img src={ts_icon} alt="ts_icon"></img>
        </li>
        <li>
          <img src={react_icon} alt="react_icon"></img>
        </li>
        <li>
          <img src={git_icon} alt="git_icon"></img>
        </li>
      </Slider>
    </div>
  );
}
