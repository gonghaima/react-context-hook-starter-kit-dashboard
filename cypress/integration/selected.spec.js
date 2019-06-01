/// <reference types="Cypress" />

context("Selected item in Nav", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/nonAdmins");
    cy.wait(1000);
  });

  it("cy.get() - query DOM elements", () => {
    cy.get('[data-test-id="nonAdmins"]').should($p => {
      expect($p.hasClass("active")).equal(true);
    });
  });
});
