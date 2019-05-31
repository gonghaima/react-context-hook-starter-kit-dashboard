/// <reference types="Cypress" />

context("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
  });

  it("cy.get() - query mode switch button elements", () => {
    cy.get('[data-test-id="switchMode"]').should($p => {
      const length = $p.length;
      expect(length).to.greaterThan(0);
    });
    cy.get('[data-test-id="switchMode"]').click();
    cy.wait(1000);

    cy.get("#root div").should($p => {
      const isDarkMode = $p[0].getAttribute("class").includes("Header_dark");
      expect(isDarkMode).to.be.true;
    });

    cy.wait(1000);
    cy.get('[data-test-id="switchMode"]').click();
    cy.wait(1000);

    cy.get("#root div").should($p => {
      const isDarkMode = $p[0].getAttribute("class").includes("Header_dark");
      expect(isDarkMode).to.be.false;
    });
  });
});
