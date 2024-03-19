describe('cypress Message component testing', () => {
  it('Check Welcome message', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-testid="cypress-message"]').should("exist")
        .should("have.text","Welcome to BudgetBuddy");
  });
})