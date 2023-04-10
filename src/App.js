import {React, useState} from "react";
import "./style.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <p>Hello</p>
    </div>
  );
}

export default App;
