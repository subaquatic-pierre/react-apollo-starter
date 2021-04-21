import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";
import { Home } from "../Home";

test("Home page", () => {
  const { getByText } = render(
    <MockedProvider addTypename={false}>
      <Home />
    </MockedProvider>
  );
  const heading = getByText("Home");
  expect(heading).toBeInTheDocument();
});
