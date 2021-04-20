import React from "react";
import { ITodo } from "../pages/Home";

interface ITodoProps {
  todo: ITodo;
}

export const Todo: React.FC<ITodoProps> = ({ todo }) => {
  return (
    <div className="todo-container">
      <h4>{todo.title}</h4>
      <p>{todo.content}</p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
    </div>
  );
};
