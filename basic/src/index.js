import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import AppProfile from "./AppProfile";
// import AppCount from "./AppCount";
import AppProduct from "./AppProduct";
// import AppXY from "./AppXY";
// import AppReducer from "./AppReducer";
// import AppMentors from "./AppMentors";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProduct />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
