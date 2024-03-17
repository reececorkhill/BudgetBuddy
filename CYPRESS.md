
# Cypress Testing for BudgetBudy

## Setup and Installation

### Prerequisites
Ensure you have Node.js and npm installed on your system. These are required to run Cypress.

### Installing Cypress

1. Navigate to your project directory:
```bash
cd BudgetBudy
```

2. Install Cypress via npm:
```bash
npm install cypress --save-dev
```

This command installs Cypress locally as a dev dependency for your project.

## Opening Cypress

After installation, you can open Cypress using the following command:

```bash
npx cypress open
```

This command opens the Cypress Test Runner, a graphical user interface that allows you to run tests interactively.

## Adding Your First Test

1. Cypress automatically creates a `cypress` folder in your project, containing example tests. You can modify these or add new test files in the `cypress/integration` directory.

2. To create a new test for BudgetBudy, add a new file in the `cypress/integration` directory. For example, `budget_test.spec.js`.

3. Write your first test. Here's an example that visits the homepage:

```javascript
describe('BudgetBudy Homepage', () => {
  it('successfully loads', () => {
    cy.visit('/') // change this to your app's URL
  })
})
```

## Running Tests

- To run tests headlessly (without the GUI), use:
```bash
npx cypress run
```

- To run a specific test file with the GUI, use:
```bash
npx cypress open --spec "cypress/integration/budget_test.spec.js"
```

Adjust the commands according to your project structure and preferences.

## Adding Cypress to Your CI Pipeline

You can integrate Cypress with your Continuous Integration (CI) pipeline. Here's an example for GitHub Actions:

1. Create a `.github/workflows/cypress.yml` file in your repository.
2. Add the following configuration to run Cypress tests:

```yaml
name: Cypress Tests
on: [push]
jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v2
    - name: Cypress run
      uses: cypress-io/github-action@v2
      with:
        start: npm start
        wait-on: 'http://localhost:3000'
        wait-on-timeout: 300
```

This setup runs your Cypress tests every time you push changes to your repository.

**Note:** Adjust the configuration as needed for your project setup and hosting platform.
