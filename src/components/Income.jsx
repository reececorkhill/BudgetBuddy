import React from 'react';
import Card from 'react-bootstrap/Card';


const Income = () => {
    let savedTransactions = JSON.parse(localStorage.getItem('transactionObject')) || [];
    let income = 0;
    for (var i = 0; i < savedTransactions.length; i++) {
        var transaction = savedTransactions[i];
        if (transaction.type === 'Income') {
            income+= parseInt(transaction.amount);
        }
    }
    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Income</Card.Title>
                <Card.Text>£{income}</Card.Text>
            </Card.Body>
        </Card>
        </>
    );
}
export default Income;