import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./components/Layout";
import { BaseRouter } from "./routes";
import "./styles/index.scss";

export const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <BaseRouter />
      </Layout>
    </Router>
  );
};
