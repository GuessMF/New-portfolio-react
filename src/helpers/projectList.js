import Ecars from "./../components/Example/images/Ecars.webp";
import Kema from "./../components/Example/images/Kema-fitness.webp";
import Rilab from "./../components/Example/images/Rilab.webp";

import Araney from "./../components/Example/images/Araney.webp";
import Like_Me from "./../components/Example/images/Like_Me.webp";
import PassGen from "./../components/Example/images/PassGen.webp";
import HeadPhones from "./../components/Example/images/HeadPhones.webp";
import TextFinder from "./../components/Example/images/TextFinder.webp";
import Armstrong_Canvas from "./../components/Example/images/Armstrong_Canvas.webp";
import Armstrong_Css from "./../components/Example/images/Armstrong_Css.webp";
import Maze from "./../components/Example/images/Maze.webp";
import ToDo from "./../components/Example/images/ToDo.webp";
import TicTacToe from "./../components/Example/images/TicTacToe.webp";
import Recording from "./../components/Example/images/Recording.webp";

//import HTML_icon from "./../components/Slider/AboutMe/images/html-5.webp";
import HTML_icon from "./../components/Slider/images/html-5.webp";
import CSS_icon from "./../components/Slider/images/css-3.webp";
import SCSS_icon from "./../components/Slider/images/sass.webp";
import JS_icon from "./../components/Slider/images/js.webp";
import TS_icon from "./../components/Slider/images/typescript.webp";
import TAILWIND_icon from "./../components/Slider/images/tailwind.webp";
import React_icon from "./../components/Slider/images/react.webp";
import Firebase_icon from "./../components/Slider/images/firebase.png";
import Gsap_icon from "./../components/Slider/images/gsap.svg";

const projects = [
  {
    title: "Ecars",
    category: "React",
    img: Ecars,
    stack: "React, TS, SCSS, Redux Toolkit, React Router, Firebase",
    stackIcon: [React_icon, TS_icon, SCSS_icon, Firebase_icon],
    commercial: false,
    description: "ecars",
    link: "https://guessmf.github.io/Ecars/",
    gitHubLink: "https://github.com//GuessMf/Ecars",
  },
  {
    title: "Kema Fitness",
    category: "Landings",
    img: Kema,
    stack: "HTML, CSS, JS, Jquery, GSAP",
    stackIcon: [HTML_icon, CSS_icon, JS_icon, Gsap_icon],
    link: "https://kema.fitness/OZ_ver/",
    commercial: true,
    gitHubLink: "https://github.com//GuessMf/KEMA-Fitness",
  },
  {
    title: "Rilab",
    category: "Landings",
    img: Rilab,
    stack: "HTML,CSS, JS",
    stackIcon: [HTML_icon, CSS_icon, JS_icon],
    commercial: true,
    link: "https://rilab.ru",
    gitHubLink: "https://github.com//GuessMf/Araney-main",
  },
  {
    title: "Araney",
    category: "Landings",
    img: Araney,
    stack: "HTML, SCSS, JS",
    stackIcon: [HTML_icon, SCSS_icon, JS_icon],
    commercial: true,
    link: "https://guessmf.github.io/Araney-main/",
    gitHubLink: "https://github.com//GuessMf/Araney-main",
  },
  {
    title: "LikeMe",
    category: "Landings",
    img: Like_Me,
    stack: "HTML, SCSS",
    stackIcon: [HTML_icon, SCSS_icon],
    commercial: true,
    link: "https://guessmf.github.io/Likeme_landing/",
    gitHubLink: "https://github.com//GuessMf/Likeme_landing",
  },
  {
    title: "Recording",
    category: "Landings",
    img: Recording,
    stack: "HTML, SCSS, Gulp, JS",
    stackIcon: [HTML_icon, SCSS_icon, JS_icon],
    commercial: false,
    link: "https://guessmf.github.io/Recording-landing/",
    gitHubLink: "https://github.com/GuessMF/Recording-landing",
  },
  {
    title: "PassGen",
    category: "TS",
    img: PassGen,
    stack: "HTML, TAILWIND, TS",
    stackIcon: [HTML_icon, TAILWIND_icon, TS_icon],
    commercial: false,
    link: "https://guessmf.github.io/TAILWIND/",
    gitHubLink: "https://github.com/GuessMF/TAILWIND",
  },
  {
    title: "HeadPhones",
    category: "Landings",
    img: HeadPhones,
    stack: "HTML, SCSS",
    stackIcon: [HTML_icon, SCSS_icon],
    commercial: false,
    link: "https://guessmf.github.io/Landing_Headphones/",
    gitHubLink: "https://github.com/GuessMF/Landing_Headphones",
  },

  {
    title: "Armdstrong_Calculator_CSS_JS",
    category: "JS",
    img: Armstrong_Css,
    stack: "HTML, CSS, JS",
    stackIcon: [HTML_icon, CSS_icon, JS_icon],
    commercial: false,
    link: "https://guessmf.github.io/Armdstrong_Calculator_CSS_JS/",
    gitHubLink: "https://github.com/GuessMF/Armdstrong_Calculator_CSS_JS",
  },
  {
    title: "Armstrong Canvas",
    category: "JS",
    img: Armstrong_Canvas,
    stack: "HTML, CSS, JS",
    stackIcon: [HTML_icon, CSS_icon, JS_icon],
    commercial: false,
    link: "https://guessmf.github.io/Armstrong_Calculator_JS/",
    gitHubLink: "https://github.com/GuessMF/Armstrong_Calculator_JS",
  },
  {
    title: "Maze js",
    category: "JS",
    img: Maze,
    stack: "HTML, CSS, JS",
    stackIcon: [HTML_icon, CSS_icon, JS_icon],
    commercial: false,
    link: "https://guessmf.github.io/Maze_JS/",
    gitHubLink: "https://guessmf.github.io/Maze_JS/",
  },
  {
    title: "ToDo",
    category: "JS",
    img: ToDo,
    stack: "HTML, CSS, JS",
    stackIcon: [HTML_icon, CSS_icon, JS_icon],
    commercial: false,
    link: "https://guessmf.github.io/ToDo-list-v1/",
    gitHubLink: "https://github.com/GuessMF/ToDo-list-v1",
  },
  {
    title: "Tic Tac Toe",
    category: "JS",
    img: TicTacToe,
    stack: "HTML, CSS, JS",
    stackIcon: [HTML_icon, CSS_icon, JS_icon],
    commercial: false,
    link: "https://guessmf.github.io/Tic-Tac-Toe/",
    gitHubLink: "https://github.com/GuessMF/Tic-Tac-Toe",
  },
];
export {projects};
