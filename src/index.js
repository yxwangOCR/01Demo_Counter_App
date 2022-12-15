import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store"; // Import "store" for <Provider>'s prop use

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Wrap all app components with <Provider>
  // Provider contain a prop : store
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
