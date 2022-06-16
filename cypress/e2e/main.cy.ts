describe("react application", function () {
  it("Visits the bookish", function () {
    cy.visit("https://localhost:8118/");
    cy.get('div[data-test="book-list"]').should("exist");
    cy.get(".book-item").should("have.length", 2);
  });
});
