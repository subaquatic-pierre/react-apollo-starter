import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TODOS } from "../graphql/queries";

export const Home: React.FC = () => {
  const { data, loading, error } = useQuery(GET_TODOS);

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
        Error: {JSON.stringify(error.message)}
      </div>
    );

  return (
    <div className="page">
      <h3>Home</h3>
      <ul>
        <li>{JSON.stringify(data)}</li>
      </ul>
    </div>
  );
};
