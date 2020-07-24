import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TodoStore from "./stores/TodoStore";

const app = document.getElementById("app")
ReactDOM.render(<App store={TodoStore} />, app)