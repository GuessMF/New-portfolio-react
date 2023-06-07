import {React} from "react";
import {Routes, Route} from "react-router-dom";

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
  return (
    <div className={style.app}>
      <ScrllToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/React-Blog" element={<Main />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/aboutme"
          element={<AboutMe props={"Hello this is props"} />}
        />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
