/// <reference types="Cypress" />

context("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
  });

  it("cy.get() - query DOM elements", () => {
    cy.get('[data-test-id="dataContent"]').should($p => {
      const length = $p.length;
      expect(length).to.greaterThan(5);
    });
    cy.get('[data-test-id="textSearch"]').type("su");
    cy.wait(1000);
    cy.get('[data-test-id="dataContent"]').should($p => {
      const length = $p.length;
      expect(length).equal(1);
    });
  });
});
