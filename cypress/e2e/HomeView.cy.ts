describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");

    cy.findByRole("button", { name: /log in/i }).click();

    cy.findByText(/hello mike/i);
  });
});
