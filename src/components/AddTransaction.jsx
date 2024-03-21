import React from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

class AddTransaction extends React.Component {
    constructor(props) {
        super(props);
        // Set the default transactionType to "Income"
        this.state = {
            transactionType: "Income", // Default to "Income"
            transactionCategory: "Select Category",
            transactionAmount: "" // Empty string makes more sense for an input field
        };
    }

    handleTransactionChange = (e) => {
        this.setState({ transactionAmount: e.target.value });
    }

    addTransaction = () => {
        const { transactionType, transactionCategory, transactionAmount } = this.state;
        const transactionObject = { type: transactionType, category: transactionCategory, amount: transactionAmount };

        let savedTransactions = JSON.parse(localStorage.getItem('transactionObject')) || [];
        localStorage.setItem('transactionObject', JSON.stringify([...savedTransactions, transactionObject]));
        // Consider using state management for UI updates instead of reloading the page
        window.location.reload();
    }

    renderCategoryOptions = () => {
        const incomeCategories = ["Salary", "Bonus", "Refund", "Cheque"];
        const expenseCategories = ["Saving", "Food", "Debt", "Holiday", "Other"];

        const { transactionType } = this.state;
        const categories = transactionType === "Income" ? incomeCategories : expenseCategories;

        return categories.map((category, index) => (
            <Dropdown.Item key={index} href="#" onClick={() => this.setState({ transactionCategory: category })}>
                {category}
            </Dropdown.Item>
        ));
    }

    render() {
        const { transactionType, transactionCategory, transactionAmount } = this.state;
        return (
            <>
                <div className="transaction-buttons" data-testid="cypress-add-transaction" style={{ width: '99.5%' }}>
                    <InputGroup>
                        <DropdownButton variant="outline-secondary" title={transactionType} id="input-group-dropdown-3">
                            <Dropdown.Item href="#" onClick={() => this.setState({ transactionType: "Income", transactionCategory: "Select Category" })}>Income</Dropdown.Item>
                            <Dropdown.Item href="#" onClick={() => this.setState({ transactionType: "Expense", transactionCategory: "Select Category" })}>Expense</Dropdown.Item>
                        </DropdownButton>
                        <Form.Control
                            value={transactionAmount}
                            placeholder="Enter Amount"
                            onChange={this.handleTransactionChange}
                            type="number"
                            style={{ textAlign: 'right' }} // Add this line to align text to the right
                        />
                        <DropdownButton variant="outline-secondary" title={transactionCategory} id="input-group-dropdown-4" alignRight>
                            {this.renderCategoryOptions()}
                        </DropdownButton>
                    </InputGroup>
                    <div className="d-grid gap-2" style={{ marginTop: '20px' }}>
                        <Button variant="primary" size="lg" onClick={this.addTransaction}>Add Transaction</Button>
                    </div>
                </div>
            </>
        );
    }
}

export default AddTransaction;
