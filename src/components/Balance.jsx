import React from 'react';
import Card from 'react-bootstrap/Card';

const Balance = () => {

    let savedTransactions = JSON.parse(localStorage.getItem('transactionObject')) || [];
    let balance = 0;

    for (var i = 0; i < savedTransactions.length; i++) {
        var transaction = savedTransactions[i];

        if (transaction.type === 'Income') {
            balance += parseInt(transaction.amount);
        }
    }

    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Balance</Card.Title>
                <Card.Text>£{balance}</Card.Text>
            </Card.Body>
        </Card>
        </>
    );
}

export default Balance;