import axios from "axios";

describe("react application", function () {
  before(() => {
    return axios
      .delete("http://localhost:8119/books?_cleanup=true")
      .catch((err) => err);
  });
  afterEach(() => {
    return axios
      .delete("http://localhost:8119/books?_cleanup=true")
      .catch((err) => err);
  });
  beforeEach(() => {
    const books = [
      { name: "Refactoring", id: 1 },
      { name: "Domain-driven design", id: 2 },
    ];
    return books.reverse().map((item) =>
      axios.post("http://localhost:8119/books", item, {
        headers: { "Content-Type": "application/json" },
      })
    );
  });

  it("Visits the bookish", function () {
    cy.visit("https://localhost:8118/");
    cy.get('div[data-test="book-list"]').should("exist");
    cy.get("div.book-item").should("have.length", 2);
  });

  it("Goes to the detail page", () => {
    cy.visit("https://localhost:8118/");
    cy.get("div.book-item").contains("View Details").eq(0).click();
    cy.url().should("include", "/books/1");
  });
});
