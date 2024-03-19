describe('cypress App testing', () => {
  it('App check main page and sections', () => {
    cy.visit('http://localhost:5173/');

    cy.get('[data-testid="cypress-welcome-section"]').should("exist");
    cy.get('[data-testid="cypress-transactions-section"]').should("exist");
    cy.get('[data-testid="cypress-add-transaction-section"]').should("exist");
  });
})