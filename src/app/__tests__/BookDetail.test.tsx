import { render } from "@testing-library/react";
import React from "react";
import { BookDetail } from "../BookDetail";

describe("render BookDetail", () => {
  it("given name", () => {
    const props = {
      name: "detail",
    };
    const { container } = render(<BookDetail {...props}></BookDetail>);
    const content = container.querySelector(`p[data-test="book-detail-name"]`);
    expect(content).not.toBeNull();
    expect(content!.innerHTML).toContain("detail");
  });

  it("not given name", () => {
    const { container } = render(<BookDetail></BookDetail>);
    const content = container.querySelector(`p[data-test="book-detail-name"]`);
    expect(content).not.toBeNull();
    expect(content!.innerHTML).toContain("-");
  });
});
