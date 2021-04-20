import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TODOS } from "../graphql/queries";
import { Todo } from "../components/Todo";

export interface ITodo {
  title: String;
  content: String;
  completed: Boolean;
}

export const Home: React.FC = () => {
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
      <ul>
        {data &&
          data.todos.map((todo: ITodo) => {
            return <Todo todo={todo} />;
          })}
      </ul>
    </div>
  );
};
