import React from "react";
import { ITodo } from "../../pages/Home";

interface ITodoControls {
  editing: boolean;
}

export const TodoControls: React.FC<ITodoControls> = ({ editing }) => {
  return (
    <div className="todo-container__item-control">
      {editing ? <div>Editing</div> : <div>NotEditing</div>}
    </div>
  );
};
