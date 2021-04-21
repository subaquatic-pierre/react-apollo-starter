import React from "react";
import { render } from "@testing-library/react";
import { TodoForm } from "../TodoForm";

describe("Test Todo controls", () => {
  test("Renders correct todo controls", () => {
    const { getByText } = render(
      <TodoForm title="The Title" content="Some content" completed={false} />
    );
  });
});
