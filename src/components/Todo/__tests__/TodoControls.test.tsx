import React from "react";
import { render } from "@testing-library/react";
import { TodoControls } from "../TodoControls";

const setEditing = (id: number) => jest.mock(id);

describe("Test Todo controls", () => {
  test("Renders correct todo controls", () => {
    const { getByText } = render(<TodoControls editing={false} />);
  });
});
