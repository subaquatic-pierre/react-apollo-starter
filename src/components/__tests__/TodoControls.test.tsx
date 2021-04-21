import React from "react";
import { render } from "@testing-library/react";
import { TodoControls } from "../TodoControls";

const setEditing = (id: any) => jest.fn(id);
const deleteTodo = () => jest.fn();
const submitForm = () => jest.fn();

describe("Test Todo controls", () => {
  test("Renders correct todo controls", () => {
    const { getByText } = render(
      <TodoControls
        editing={false}
        todoId={1}
        handleSetEditingTodo={setEditing}
        handleSubmitForm={submitForm}
        handleDeleteTodo={deleteTodo}
      />
    );
  });
});
