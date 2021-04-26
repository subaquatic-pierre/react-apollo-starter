import Cookies from "js-cookie";
import { ApolloLink } from "@apollo/client";

export const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: localStorage.getItem("token") || null,
    },
  }));

  return forward(operation);
});

export const csrfMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      "X-CSRFToken": Cookies.get("csrftoken"),
    },
  }));

  return forward(operation);
});
