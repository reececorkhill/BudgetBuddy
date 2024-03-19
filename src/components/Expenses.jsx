import React from 'react';
import Card from 'react-bootstrap/Card';

const Expenses = () => {

    let savedTransactions = JSON.parse(localStorage.getItem('transactionObject')) || [];
    let expenses = 0;

    for (var i = 0; i < savedTransactions.length; i++) {
        var transaction = savedTransactions[i];

        if (transaction.type === 'Expense') {
            expenses += parseInt(transaction.amount);
        }
    }

    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Expenses</Card.Title>
                <Card.Text>£{expenses}</Card.Text>
            </Card.Body>
        </Card>
        </>
    );
}

export default Expenses;