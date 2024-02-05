import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";
import App from "./components/App/App";
import {HashRouter as Router} from "react-router-dom";
import {Audio} from "react-loader-spinner";
//import {createMemoryHistory} from "history";
//import reportWebVitals from './reportWebVitals';

import "./utils/18n.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
//const history = createMemoryHistory();

root.render(
  <Router basename={process.env.PUBLIC_URL}>
    <App />
  </Router>
);
//reportWebVitals();
