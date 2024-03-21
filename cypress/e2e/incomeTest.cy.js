describe('Income Component Tests', () => {
    beforeEach(() => {
        // Assuming you have a route in your application that displays the income component
        // Replace '/your-income-page-route' with the actual route where the Income component is rendered
        cy.visit('http://localhost:5173/');
    });

    it('should display the income title correctly', () => {
        // Select the Income card by its data-testid and check the title
        cy.get('[data-testid=cypress-income]')
            .find('.card-title') // The correct class based on your HTML structure
            .should('have.text', 'Income'); // Verify the exact text
    });

    it('should display the correct total income description', () => {
        // For checking the total income description
        cy.get('[data-testid=cypress-income]')
            .find('.card-text') // Correct class for the description based on your HTML
            .should('contain', 'Total Income:'); // Assuming £10 is the correct total income to be verified
    });

    // Add more tests as needed for other aspects of the Income component
});
