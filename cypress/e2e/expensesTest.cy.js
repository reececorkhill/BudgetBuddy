describe('Expenses Component Tests', () => {
    beforeEach(() => {
        // Assuming you have a route in your application that displays the Expenses component
        // Replace '/your-Expenses-page-route' with the actual route where the Expenses component is rendered
        cy.visit('http://localhost:5173/');
    });

    it('should display the Expenses title correctly', () => {
        // Select the Expenses card by its data-testid and check the title
        cy.get('[data-testid=cypress-expenses]')
            .find('.card-title') // The correct class based on your HTML structure
            .should('have.text', 'Expenses'); // Verify the exact text
    });

    it('should display the correct total Expenses description', () => {
        // For checking the total Expenses description
        cy.get('[data-testid=cypress-expenses]')
            .find('.card-text') // Correct class for the description based on your HTML
            .should('contain', 'Total Expenses:'); // Assuming £10 is the correct total Expenses to be verified
    });

    // Add more tests as needed for other aspects of the Expenses component
});
