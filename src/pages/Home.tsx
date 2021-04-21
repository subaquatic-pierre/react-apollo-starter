import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TODOS } from "../graphql/queries";
import { Todo } from "../components/Todo";

export interface ITodo {
  id: number;
  title: string;
  content: string;
  completed: boolean;
}

export const Home: React.FC = () => {
  const [editTodoId, setEditTodoId] = React.useState(-1);
  const { data, loading, error } = useQuery(GET_TODOS, {
    onError: (error) => {
      console.log(error.message);
    },
  });

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
        <h3 className="todo-container__heading">Todos:</h3>
        <div className="divider"></div>
        <ul className="todo-container__list">
          {data &&
            data.todos.map((todo: ITodo) => {
              return (
                <Todo
                  key={todo.id}
                  setEditing={setEditTodoId}
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
