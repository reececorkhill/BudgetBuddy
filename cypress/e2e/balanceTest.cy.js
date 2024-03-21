describe('Balance Component Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/');
    });

    it('should display the balance title correctly', () => {

        cy.get('[data-testid=cypress-balance]')
            .find('.card-title') // The correct class based on your HTML structure
            .should('have.text', 'Balance'); // Verify the exact text
    });

});
