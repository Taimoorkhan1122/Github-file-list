import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import FileList from "./FileList";
import { testFiles } from "./testFiles";
// import reportWebVitals from './reportWebVitals';
console.log(testFiles);
ReactDOM.render(
  <React.StrictMode>
    <FileList files={testFiles} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
