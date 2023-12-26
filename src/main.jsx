import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { FetchContextProivider } from "./Context/Fectchcontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FetchContextProivider>
    <App />
  </FetchContextProivider>
);
