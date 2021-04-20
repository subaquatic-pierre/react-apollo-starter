import React from "react";
import { render } from "@testing-library/react";
import { Contact } from "../Contact";

test("Contact Page renders correctly", () => {
  const { getByText } = render(<Contact />);
  const heading = getByText("Contact Us!");
  expect(heading).toBeInTheDocument();
});
