import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const AddTransaction = () => {

    // Initial state of the Type dropdown button.
    const [transactionType, setTransactionType] = useState("Type")

    // Initial state of the Category dropdown button.
    const [transactionCategory, setTransactionCategory] = useState("Category") 

    // Initial state of Transaction Name (Empty String) - this may not be needed...
    // const [transactionName, setTransactionName] = useState("");

    // Initial state of Transaction Amount (Number 0).
    const [transactionAmount, setTransactionAmount] = useState("Enter Amount");

    // Function to handle the transaction amount input box change.
    const handleTransactionChange = (e) => {
        setTransactionAmount(e.target.value)
    }

    const transactionObject = {
        type: transactionType,
        category: transactionCategory,
        amount: transactionAmount
    };
    
    // Function which will handle the Add Transaction button click.
    const addTransaction = () => {
        let savedTransactions = JSON.parse(localStorage.getItem('transactionObject')) || [];
    
        localStorage.setItem('transactionObject', JSON.stringify([...savedTransactions, transactionObject]));

        location.reload();
    }

    return (
        <>
            <div className="transaction-buttons">
                <InputGroup >
                    <DropdownButton variant="outline-secondary" title={transactionType} id="input-group-dropdown-3">
                        <Dropdown.Item href="#" onClick={() => setTransactionType("Income")}>Income</Dropdown.Item> {/* Dropdown item which, if clicked will update it's state and display "Income". */}
                        <Dropdown.Item href="#" onClick={() => setTransactionType("Expense")}>Expense</Dropdown.Item> {/* Dropdown item which, if clicked will update it's state and display "Expense". */}
                    </DropdownButton>
                    <Form.Control placeholder={transactionAmount} onChange={handleTransactionChange} type="number"/>
                    <DropdownButton variant="outline-secondary" title={transactionCategory} id="input-group-dropdown-4" align="end">
                        <Dropdown.Item href="#" onClick={() => setTransactionCategory("Salary")}>Salary</Dropdown.Item> {/* Dropdown item which, if clicked will update it's state and display "Salary". */}
                        <Dropdown.Item href="#" onClick={() => setTransactionCategory("Bonus")}>Bonus</Dropdown.Item> {/* Dropdown item which, if clicked will update it's state and display "Bonus". */}
                        <Dropdown.Item href="#" onClick={() => setTransactionCategory("Refund")}>Refund</Dropdown.Item> {/* Dropdown item which, if clicked will update it's state and display "Refund". */}
                        <Dropdown.Item href="#" onClick={() => setTransactionCategory("Cheque")}>Cheque</Dropdown.Item> {/* Dropdown item which, if clicked will update it's state and display "Cheque". */}
                        <Dropdown.Divider />
                        <Dropdown.Item href="#" onClick={() => setTransactionCategory("Saving")}>Saving</Dropdown.Item> {/* Dropdown item which, if clicked will update it's state and display "Saving". */}
                        <Dropdown.Item href="#" onClick={() => setTransactionCategory("Food")}>Food</Dropdown.Item> {/* Dropdown item which, if clicked will update it's state and display "Food". */}
                        <Dropdown.Item href="#" onClick={() => setTransactionCategory("Debt")}>Debt</Dropdown.Item> {/* Dropdown item which, if clicked will update it's state and display "Debt". */}
                        <Dropdown.Item href="#" onClick={() => setTransactionCategory("Holiday")}>Holiday</Dropdown.Item> {/* Dropdown item which, if clicked will update it's state and display "Holiday". */}
                        <Dropdown.Item href="#" onClick={() => setTransactionCategory("Other")}>Other</Dropdown.Item> {/* Dropdown item which, if clicked will update it's state and display "Other". */}
                    </DropdownButton>
                </InputGroup>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" onClick={addTransaction}>Add Transaction</Button> {/* Button will have onClick event handler which will call a function to save to localstorage. */}
                </div>
            </div>
        </> 
    );
}

export default AddTransaction;