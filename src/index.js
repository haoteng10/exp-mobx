import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";
import TodoStore from "./store/TodoStore";

const app = document.getElementById("app")

ReactDOM.render(<TodoList store={TodoStore} />, app)