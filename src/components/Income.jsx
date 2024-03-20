import React from 'react';
import Card from 'react-bootstrap/Card';
import { VictoryPie } from 'victory'; // Import VictoryPie

const Income = () => {
    let savedTransactions = JSON.parse(localStorage.getItem('transactionObject')) || [];
    let incomeData = {}; // Object to store income categorized by type

    // Categorize income and calculate total for each category
    for (var i = 0; i < savedTransactions.length; i++) {
        var transaction = savedTransactions[i];
        if (transaction.type === 'Income') {
            if (incomeData[transaction.category]) {
                incomeData[transaction.category] += parseInt(transaction.amount);
            } else {
                incomeData[transaction.category] = parseInt(transaction.amount);
            }
        }
    }

    // Convert incomeData to an array of objects for VictoryPie
    const data = Object.keys(incomeData).map(category => ({
        x: category,
        y: incomeData[category]
    }));

    const colorPalette = ["#FF5733", "#FFC300", "#DAF7A6", "#A0E7E5", "#B39DDB", "#FF5733", "#FFC300", "#DAF7A6", "#A0E7E5", "#B39DDB"];

    return (
        <>
        <Card style={{ width: '24rem' }}>
            <Card.Body>
                <Card.Title>Income</Card.Title>
                {/* Render VictoryPie component */}
                <VictoryPie 
                    data={data} 
                    colorScale={colorPalette} 
                    style={{ labels: { fontSize: 20 } }} // Adjust font size of labels
                />
                {/* Display total income */}
                <Card.Text>Total Income: £{Object.values(incomeData).reduce((acc, val) => acc + val, 0)}</Card.Text>
            </Card.Body>
        </Card>
        </>
    );
}

export default Income;
