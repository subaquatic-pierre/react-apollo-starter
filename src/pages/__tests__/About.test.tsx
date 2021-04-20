import React from "react";
import { render } from "@testing-library/react";
import { About } from "../About";

test("Renders about page correctly", () => {
  const { getByText } = render(<About />);
  const heading = getByText("About Us!");
  expect(heading).toBeInTheDocument();
});
