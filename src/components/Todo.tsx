import React from "react";
import { ITodo } from "../pages/Home";

interface ITodoProps {
  todo: ITodo;
}

export const Todo: React.FC<ITodoProps> = ({ todo }) => {
  return (
    <li className="todo-container__list__item">
      <h4>{todo.title}</h4>
      <p>{todo.content}</p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
    </li>
  );
};
