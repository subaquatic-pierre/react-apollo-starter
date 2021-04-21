import React from "react";

interface ITodoControls {
  editing: boolean;
  todoId: number;
  handleSetEditingTodo: (id: number) => void;
  handleDeleteTodo: () => void;
  handleSubmitForm: () => void;
  handleCancelCreateTodo?: () => void;
}

export const TodoControls: React.FC<ITodoControls> = ({
  editing,
  todoId,
  handleDeleteTodo,
  handleSetEditingTodo,
  handleSubmitForm,
  handleCancelCreateTodo,
}) => {
  const handleCancelButtonClick = () => {
    if (handleCancelCreateTodo) {
      handleCancelCreateTodo();
    } else {
      handleSetEditingTodo(-1);
    }
  };
  return (
    <div className="todo-container__button-container">
      {editing ? (
        <div className="todo-container__button-container__buttons">
          <button onClick={handleCancelButtonClick}>Cancel</button>
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
