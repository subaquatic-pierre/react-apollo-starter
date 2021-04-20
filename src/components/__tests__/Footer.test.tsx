import React from "react";
import { render } from "@testing-library/react";
import { Footer } from "../Footer";

test("Renders Footer component", () => {
  const { getByText } = render(<Footer />);
  const heading = getByText("Footer");
  expect(heading).toBeInTheDocument();
});
