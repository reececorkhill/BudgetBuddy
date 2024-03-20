describe('Menu Options Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/');
    });

    it('contains the menu options with specific icons and labels', () => {
        // Check for the menu container
        cy.get('[data-testid="cypress-menu"]').within(() => {
            // Home
            cy.get('li').contains('Home').should('exist');
            cy.get('li').find('svg[data-icon="home"]').should('exist');

            // Income
            cy.get('li').contains('Income').should('exist');
            cy.get('li').find('svg[data-icon="wallet"]').should('exist');

            // Transactions
            cy.get('li').contains('Transactions').should('exist');
            cy.get('li').find('svg[data-icon="interaction"]').should('exist');

            // Graph
            cy.get('li').contains('Graph').should('exist');
            cy.get('li').find('svg[data-icon="bar-chart"]').should('exist');

            // Recommendations
            cy.get('li').contains('Recommendations').should('exist');
            cy.get('li').find('svg[data-icon="book"]').should('exist');
        });
    });
});
