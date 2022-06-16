describe("react application", function () {
  it("Visits the bookish", function () {
    cy.visit("https://localhost:8118/");
    cy.get('h1[data-test="heading"]').contains("Hello World");
  });
});
