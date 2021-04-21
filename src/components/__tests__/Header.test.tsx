import React from "react";
import { render } from "@testing-library/react";
import { Header } from "../Header";
import { BrowserRouter as Router } from "react-router-dom";

test("Renders Header component", () => {
  const { getByText } = render(
    <Router>
      <Header />
    </Router>
  );
  const homeLink = getByText("Home");
  expect(homeLink).toBeInTheDocument();
  const contactLink = getByText("Contact");
  expect(contactLink).toBeInTheDocument();
});
