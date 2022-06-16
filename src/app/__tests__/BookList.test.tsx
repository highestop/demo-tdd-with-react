import React from "react";
import { render } from "@testing-library/react";
import { BookList } from "../BookList";

describe("render BookList", () => {
  it("given loading status", () => {
    const props = {
      loading: true,
    };
    const { container } = render(<BookList {...props}></BookList>);
    const content = container.querySelector(`p[data-test="book-list-loading"]`);
    expect(content).not.toBeNull();
    expect(content!.innerHTML).toContain("Loading");
  });

  it("given error status", () => {
    const props = {
      error: true,
    };
    const { container } = render(<BookList {...props}></BookList>);
    const content = container.querySelector(`p[data-test="book-list-error"]`);
    expect(content).not.toBeNull();
    expect(content!.innerHTML).toContain("Error");
  });

  it("given normal data", () => {
    const props = {
      data: [],
    };
    const { container } = render(<BookList {...props}></BookList>);
    const content = container.querySelector(`div[data-test="book-list"]`);
    expect(content).not.toBeNull();
    expect(content!.children).toHaveLength(0);
  });
});
