describe('Add Transaction Component Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/');
    });

    it('should display the add transaction button', () => {
        cy.get('[data-testid="cypress-add-transaction"]').find('.btn-primary').should('exist');
    });

    it('should display the transaction type dropdown', () => {
        cy.get('#input-group-dropdown-3').should('exist');
    });

    it('should display the transaction category dropdown', () => {
        cy.get('#input-group-dropdown-4').should('exist');
    });

});
