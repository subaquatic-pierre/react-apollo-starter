import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat,
} from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./components/Layout";
import { BaseRouter } from "./routes";
import "./styles/index.scss";

function getCookie(name: string) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

const devEnv = process.env.REACT_APP_DEV_ENV;
let uri;
uri = process.env.REACT_APP_URI;
// uri = "https://api.ballot-online.com/graphql/";

if (devEnv === "True") {
  uri = "http://localhost:8000/graphql/";
} else {
  uri = process.env.REACT_APP_URI;
}

const csrfMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      "X-CSRFToken": getCookie("csrftoken"),
    },
  });

  return forward(operation);
});

console.log(uri);

const httpLink = new HttpLink({
  uri: uri,
});

const client = new ApolloClient({
  link: concat(csrfMiddleware, httpLink),
  cache: new InMemoryCache(),
});

export const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Layout>
          <BaseRouter />
        </Layout>
      </Router>
    </ApolloProvider>
  );
};
