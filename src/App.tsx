import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./components/Layout";
import { BaseRouter } from "./routes";
import "./styles/index.scss";

const devEnv = process.env.REACT_APP_DEV_ENV;
let uri;
uri = process.env.REACT_APP_URI;
// uri = "https://api.ballot-online.com/graphql/";

if (devEnv === "True") {
  uri = "https://api.ballot-online.com/graphql/";
} else {
  uri = process.env.REACT_APP_URI;
}

console.log(uri);

const httpLink = new HttpLink({
  uri: uri,
  // credentials: "omit",
  // fetchOptions: {
  //   mode: "no-cors",
  // },
});

const client = new ApolloClient({
  link: httpLink,
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
