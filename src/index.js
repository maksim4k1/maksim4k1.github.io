import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import store from "./redux";
import App from "./App";
import ScrollToTop from "./utils/ScrollToTop";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <React.StrictMode>
        <ScrollToTop />
        <App />
      </React.StrictMode>
    </HashRouter>
  </Provider>,
  document.getElementById("root"),
);
