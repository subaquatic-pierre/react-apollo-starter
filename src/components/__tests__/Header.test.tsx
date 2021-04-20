import React from "react";
import { render } from "@testing-library/react";
import { Header } from "../Header";

test("Renders Header component", () => {
  const { getByText } = render(<Header />);
  const heading = getByText("Header");
  expect(heading).toBeInTheDocument();
});
