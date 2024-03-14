import React, { useState } from 'react';

const AddTransaction = () => {

    const [transactionName, setTransactionName] = useState(''); // Initial state of Transaction Name (Empty String)
    const [transactionAmount, setTransactionAmount] = useState(0); // Initial state of Transaction Amount (Number 0)

    return (
    <>
        <div>
            <h1>Add Income</h1> 
            <div className="input-group mb-3">
                <span className="input-group-text">Enter Amount </span>
                <input type="text" className="form-control" placeholder="0.00" />
                <select className="form-select">
                    <option defaultValue>Select Category</option>
                    <option value="1">Salary</option>
                    <option value="2">Bonus</option>
                    <option value="3">Refund</option>
                    <option value="4">Cheque</option>
                </select>
            </div>
        </div>
        <div>
            <h1>Add Bill</h1> 
            <div className="input-group mb-3">
                <span className="input-group-text">Enter Amount </span>
                <input type="text" className="form-control" placeholder="-0.00" />
                <select className="form-select">
                    <option defaultValue>Select Category</option>
                    <option value="1">Saving</option>
                    <option value="2">Food</option>
                    <option value="3">Debt</option>
                    <option value="4">Holiday</option>
                </select>
            </div>
        </div>
    </> 
    );
}

export default AddTransaction;