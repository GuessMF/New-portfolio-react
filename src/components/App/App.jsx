import {React} from "react";
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  // useLocation,
} from "react-router-dom";

//import {animated, useTransition} from "react-spring";
import ScrllToTop from "../../utils/scrollToTop";

import AboutMe from "../pages/AboutMe/AboutMe";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Project from "../Project/Project";
import Projects from "../pages/Projects/Projects";
import Footer from "../Footer/Footer";

import style from "./App.module.scss";
import Contacts from "../pages/Contacts/Contacts";

function App() {
  // const location = useLocation();

  //console.log("pathname", location.pathname);
  // const transitions = useTransition(location, {
  //  unique: true,
  //   from: {opacity: 0, transform: "translateY(100%)"},
  //   enter: {opacity: 1, transform: "translateY(0%)"},
  //   leave: {
  //     width: "100%",
  //     transform: "translateY(0px)",
  //     position: "absolute",
  //   },
  // });
  return (
    <div className={style.app}>
      <ScrllToTop />
      <Header />
      {/* {transitions.map(({item, props, key}) => (
        <animated.div key={key} style={props}> */}
      {/* location={item} */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/React-Blog" element={<Main />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      {/* </animated.div>
      ))} */}

      <Footer />
    </div>
  );
}

export default App;
