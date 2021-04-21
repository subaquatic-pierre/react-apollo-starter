import React from "react";
import { ITodo } from "../pages/Home";
import { TodoControls } from "./TodoControls";
import { TodoForm, IForm } from "./TodoForm";

interface ITodoProps {
  todo: ITodo;
  editing: boolean;
  setEditing: (id: number) => void;
}

export const Todo: React.FC<ITodoProps> = ({ todo, editing, setEditing }) => {
  const [formData, setFormData] = React.useState<IForm>({
    title: todo.title,
    content: todo.content,
    completed: todo.completed,
  });

  const submitForm = () => {
    console.log(formData);
    console.log("Handle submit form here");
    setEditing(-1);
  };

  const deleteTodo = () => {
    console.log("Handle delete todo here");
  };

  return (
    <li className="todo-container__list__item">
      {editing ? (
        <TodoForm formData={formData} handleSetFormData={setFormData} />
      ) : (
        <>
          <h4>{todo.title}</h4>
          <p>{todo.content}</p>
          <p>Completed: {todo.completed ? "Yes" : "No"}</p>
        </>
      )}
      <TodoControls
        editing={editing}
        todoId={todo.id}
        handleSetEditingTodo={setEditing}
        handleSubmitForm={submitForm}
        handleDeleteTodo={deleteTodo}
      />
    </li>
  );
};
