import React from "react";

interface ITodoControls {
  editing: boolean;
  todoId: number;
  handleSetEditingTodo: (id: number) => void;
  handleDeleteTodo: () => void;
  handleSubmitForm: () => void;
}

export const TodoControls: React.FC<ITodoControls> = ({
  editing,
  todoId,
  handleDeleteTodo,
  handleSetEditingTodo,
  handleSubmitForm,
}) => {
  return (
    <div className="todo-container__button-container">
      {editing ? (
        <div className="todo-container__button-container__buttons">
          <button onClick={() => handleSetEditingTodo(-1)}>Cancel</button>
          <button onClick={handleSubmitForm}>Submit</button>
        </div>
      ) : (
        <div className="todo-container__button-container__buttons">
          <button onClick={() => handleSetEditingTodo(todoId)}>Edit</button>
          <button onClick={handleDeleteTodo}>Delete</button>
        </div>
      )}
    </div>
  );
};
