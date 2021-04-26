import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from,
} from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./components/Layout";
import { BaseRouter } from "./routes";
import "./styles/index.scss";
import { getApiUri } from "./utils";
import { csrfMiddleware, authMiddleware } from "./middleware";

const httpLink = new HttpLink({
  uri: getApiUri(),
});

const client = new ApolloClient({
  link: from([csrfMiddleware, authMiddleware, httpLink]),
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
