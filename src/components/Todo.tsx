import { useMutation } from "@apollo/client";
import React from "react";
import { DELETE_TODO, EDIT_TODO } from "../graphql/mutations";
import { ITodo } from "../pages/Home";
import { TodoControls } from "./TodoControls";
import { TodoForm, IForm } from "./TodoForm";

interface ITodoProps {
  todo: ITodo;
  editing: boolean;
  setEditing: (id: number) => void;
}

export const Todo: React.FC<ITodoProps> = ({ todo, editing, setEditing }) => {
  const [editTodo] = useMutation(EDIT_TODO, {
    onCompleted: (data) => {
      window.location.reload();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const [deleteTodo] = useMutation(DELETE_TODO, {
    onCompleted: (data) => {
      window.location.reload();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const [formData, setFormData] = React.useState<IForm>({
    title: todo.title,
    content: todo.content,
    completed: todo.completed,
  });

  const submitForm = () => {
    console.log(formData);
    editTodo({
      variables: {
        ...formData,
        id: todo.id,
      },
    });
    setEditing(-1);
  };

  const handleDeleteTodo = () => {
    deleteTodo({ variables: { id: todo.id } });
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
        handleDeleteTodo={handleDeleteTodo}
      />
    </li>
  );
};
