import { render } from "@testing-library/react";
import { BookDetail } from "../BookDetail";
import React from "react";
import { BookItem } from "../BookItem";
import { renderWithRouter } from "./renderWithRouter";

describe("render BookItem", () => {
  it("given book item", () => {
    const props = {
      name: "name",
      id: 1,
      desc: "desc",
    };
    const { container } = render(
      renderWithRouter(<BookItem {...props}></BookItem>)
    );
    const name = container.querySelector(`[data-test="book-item-name"]`);
    const desc = container.querySelector(`[data-test="book-item-desc"]`);
    const link = container.querySelector(`[data-test="book-item-link"]`);
    expect(name).not.toBeNull();
    expect(desc).not.toBeNull();
    expect(link).not.toBeNull();
  });
});
