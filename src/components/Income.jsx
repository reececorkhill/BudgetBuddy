import React from 'react';
import Card from 'react-bootstrap/Card';
import { VictoryPie } from 'victory';

const Income = () => {
    let savedTransactions = JSON.parse(localStorage.getItem('transactionObject')) || [];
    let incomeData = {}; // object for storing income

    // income categorising and calculating total
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

    // converts income into an array to sort into a pie chart
    const data = Object.keys(incomeData).map(category => ({
        x: category,
        y: incomeData[category]
    }));

    const colorPalette = ["#FF5733", "#FFC300", "#DAF7A6", "#A0E7E5", "#B39DDB", "#FF5733", "#FFC300", "#DAF7A6", "#A0E7E5", "#B39DDB"];

    return (
        <>
        <Card style={{ width: '45rem' }}>
            <Card.Body>
                <Card.Title>Income</Card.Title>
                {/* render piechart, with colour options and font size */}
                <VictoryPie 
                    data={data} 
                    colorScale={colorPalette} 
                    style={{ labels: { fontSize: 10 } }}
                />
                {/* displaying total income */}
                <Card.Text>Total Income: £{Object.values(incomeData).reduce((acc, val) => acc + val, 0)}</Card.Text>
            </Card.Body>
        </Card>
        </>
    );
}

export default Income;
