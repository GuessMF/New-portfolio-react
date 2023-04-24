import {React} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ScrllToTop from "../../utils/scrollToTop";

import AboutMe from "../pages/AboutMe/AboutMe";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Project from "../Project/Project";
import Projects from "../pages/Projects/Projects";
import Footer from "../Footer/Footer";

import style from "./App.module.scss";

function App() {
  return (
    <div className={style.app}>
      <Router>
        <ScrllToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
