import React from "react";
import { render } from "@testing-library/react";
import { Layout } from "../Layout";
import { BaseRouter } from "../../routes";
import { BrowserRouter as Router } from "react-router-dom";
import { MockedProvider } from "@apollo/client/testing";

test("Renders Layout component", () => {
  const { getByText } = render(
    <MockedProvider addTypename={false}>
      <Router>
        <BaseRouter>
          <Layout />
        </BaseRouter>
      </Router>
    </MockedProvider>
  );
});
