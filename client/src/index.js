import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

import * as Sentry from '@sentry/browser';

import App from "./components/App";
import { Provider } from "react-redux";
import store from "./redux/store";
import registerServiceWorker from "./registerServiceWorker";

Sentry.init({dsn: "https://62c80dd142bd43e0972854e765018523@sentry.io/1802914"})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
