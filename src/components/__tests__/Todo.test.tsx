import React from "react";
import { render } from "@testing-library/react";
import { ITodo } from "../../pages/Home";
import { Todo } from "../Todo";

const todo: ITodo = {
  id: 1,
  title: "The best",
  content: "The best content available",
  completed: false,
};

const setEditing = (id: any) => jest.fn(id);

describe("Test Todo list item", () => {
  test("Renders correct todo item", () => {
    const { getByText } = render(
      <Todo todo={todo} editing={false} setEditing={setEditing} />
    );
    expect(getByText("The Best")).toBeInTheDocument();
    expect(getByText("The best content available")).toBeInTheDocument();
  });
});
