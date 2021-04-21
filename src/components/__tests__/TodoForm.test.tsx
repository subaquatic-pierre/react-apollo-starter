import React from "react";
import { render } from "@testing-library/react";
import { IForm, TodoForm } from "../TodoForm";

const formData: IForm = {
  title: "This",
  content: "Some content",
  completed: false,
};

const handleFormChange = jest.fn();

describe("Test Todo controls", () => {
  test("Renders correct todo controls", () => {
    const { getByText } = render(
      <TodoForm handleSetFormData={handleFormChange} formData={formData} />
    );
  });
});
