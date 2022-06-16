import React from "react";
import { render } from "@testing-library/react";
import { BookList } from "./BookList";

describe("render Book", () => {
  it("loading", () => {
    const { container } = render(<BookList></BookList>);
    const content = container.querySelector("p");
    expect(content).not.toBeNull();
    expect(content!.innerHTML).toContain("Loading");
  });
});
