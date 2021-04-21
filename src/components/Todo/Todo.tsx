import React from "react";
import { ITodo } from "../../pages/Home";
import { TodoControls } from "./TodoControls";
import { TodoForm, IFormProps } from "./TodoForm";

interface ITodoProps {
  todo: ITodo;
  editing: boolean;
  setEditing: (id: number) => void;
}

export const Todo: React.FC<ITodoProps> = ({
  todo,
  editing,
  setEditing,
  submitForm,
}) => {
  const [formData, setFormData] = React.useState<IFormProps>({
    title: todo.title,
    content: todo.content,
    completed: todo.completed,
  });

  return (
    <li className="todo-container__list__item">
      {editing ? (
        <TodoForm {...formData} />
      ) : (
        <>
          <h4>{todo.title}</h4>
          <p>{todo.content}</p>
          <p>Completed: {todo.completed ? "Yes" : "No"}</p>
        </>
      )}
      <TodoControls
        todoId={todo.id}
        handleSetEditing={setEditing}
        handleSubmitForm={submitForm}
      />
    </li>
  );
};
