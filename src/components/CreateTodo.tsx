import React from "react";
import { useMutation } from "@apollo/client";
import { TodoControls } from "./TodoControls";
import { TodoForm, IForm } from "./TodoForm";
import { CREATE_TODO } from "../graphql/mutations";

interface ICreateTodoProps {
  setCreateTodo: (value: boolean) => void;
}

export const CreateTodo: React.FC<ICreateTodoProps> = ({ setCreateTodo }) => {
  const [createTodo] = useMutation(CREATE_TODO, {
    onCompleted: (data) => {
      window.location.reload();
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
  const [formData, setFormData] = React.useState<IForm>({
    title: "",
    content: "",
    completed: false,
  });

  const submitForm = () => {
    createTodo({
      variables: {
        title: formData.title,
        content: formData.content,
        completed: formData.completed,
      },
    });
    setCreateTodo(false);
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
