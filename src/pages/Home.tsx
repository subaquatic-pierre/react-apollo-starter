import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TODOS } from "../graphql/queries";
import { Todo } from "../components/Todo";
import { CreateTodo } from "../components/CreateTodo";

export interface ITodo {
  id: number;
  title: string;
  content: string;
  completed: boolean;
}

export const Home: React.FC = () => {
  const [editTodoId, setEditTodoId] = React.useState(-1);
  const [creatingTodo, setCreatingTodo] = React.useState(false);
  const { data, loading, error } = useQuery(GET_TODOS, {
    onError: (error) => {
      console.log(error.message);
    },
  });

  const handleSetEditingTodo = (id: number) => {
    console.log("Handle set editing todo here");
    setEditTodoId(id);
  };

  const handleCreateTodoButtonClick = () => {
    setCreatingTodo(true);
  };

  if (loading)
    return (
      <div className="page">
        <h3>Home</h3>
        Loading ...
      </div>
    );

  if (error)
    return (
      <div className="page">
        <h3>Home</h3>
        Error: {JSON.stringify(error)}
      </div>
    );

  return (
    <div className="page">
      <h3>Home</h3>
      <div className="todo-container">
        <div className="todo-container__heading">
          <h3>Todos:</h3>
          <button onClick={handleCreateTodoButtonClick}>Create Todo</button>
        </div>
        <div className="divider"></div>
        <ul className="todo-container__list">
          {creatingTodo && <CreateTodo setCreateTodo={setCreatingTodo} />}
          {data &&
            data.todos.map((todo: ITodo) => {
              return (
                <Todo
                  key={todo.id}
                  setEditing={handleSetEditingTodo}
                  editing={editTodoId === todo.id}
                  todo={todo}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
};
