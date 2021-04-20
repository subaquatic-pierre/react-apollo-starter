import React from "react";
import { render } from "@testing-library/react";
import { Layout } from "../Layout";

test("Renders Layout component", () => {
  const { getByText } = render(<Layout />);
  const heading = getByText("Layout");
  expect(heading).toBeInTheDocument();
});
