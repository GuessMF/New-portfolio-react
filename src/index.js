import React from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";
import App from "./components/App/App";
import {BrowserRouter as Router} from "react-router-dom";
//import {createMemoryHistory} from "history";
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
//const history = createMemoryHistory();
root.render(
  <Router>
    <App />
  </Router>
  // <React.StrictMode>

  // </React.StrictMode>
);
//reportWebVitals();
