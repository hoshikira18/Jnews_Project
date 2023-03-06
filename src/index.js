import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from "react-i18next";
import i18n from "./translation/i18n";
ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
