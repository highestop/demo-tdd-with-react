import { SearchBox } from "../SearchBox";
import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("SearchBox", () => {
  it("search box reacts to input", () => {
    const props = {
      onChange: jest.fn(),
    };
    const { container } = render(<SearchBox {...props} />);
    const input = container.querySelector('input[type="text"]');
    expect(input).not.toBeNull();
    userEvent.type(input!, "test");
    expect(props.onChange).toHaveBeenCalled();
  });
});
