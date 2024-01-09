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
    {/* <Suspense
      fallback={
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      }
    > */}
    <App />
    {/* </Suspense> */}
  </Router>
  // <React.StrictMode>

  // </React.StrictMode>
);
//reportWebVitals();
