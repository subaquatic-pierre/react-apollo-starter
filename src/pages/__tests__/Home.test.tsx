import React from "react";
import { render } from "@testing-library/react";
import { Home } from "../Home";

test("Home page", () => {
  const { getByText } = render(<Home />);
  const heading = getByText("This is Home Page");
  expect(heading).toBeInTheDocument();
});
