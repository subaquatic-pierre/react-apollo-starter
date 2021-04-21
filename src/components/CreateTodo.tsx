import React from "react";
import { TodoControls } from "./TodoControls";
import { TodoForm, IForm } from "./TodoForm";

interface ICreateTodoProps {
  setCreateTodo: (value: boolean) => void;
}

export const CreateTodo: React.FC<ICreateTodoProps> = ({ setCreateTodo }) => {
  const [formData, setFormData] = React.useState<IForm>({
    title: "",
    content: "",
    completed: false,
  });

  const submitForm = () => {
    console.log(formData);
    console.log("Handle submit form here");
  };

  const deleteTodo = () => {
    console.log("Handle delete todo here");
  };

  const cancelCreateTodo = () => {
    setCreateTodo(false);
  };

  return (
    <li className="todo-container__list__item">
      <TodoForm formData={formData} handleSetFormData={setFormData} />
      <TodoControls
        editing={true}
        todoId={-1}
        handleSetEditingTodo={(id: number) => {}}
        handleSubmitForm={submitForm}
        handleDeleteTodo={deleteTodo}
        handleCancelCreateTodo={cancelCreateTodo}
      />
    </li>
  );
};
