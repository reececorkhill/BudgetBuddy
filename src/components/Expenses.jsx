import Card from 'react-bootstrap/Card';
import { VictoryPie } from 'victory'; // Import VictoryPie

const Expenses = () => {
    let savedTransactions = JSON.parse(localStorage.getItem('transactionObject')) || [];
    let expensesData = {}; // Object to store expenses categorized by type

    // income categorising and calculating total
    for (var i = 0; i < savedTransactions.length; i++) {
        var transaction = savedTransactions[i];
        if (transaction.type === 'Expense') {
            if (expensesData[transaction.category]) {
                expensesData[transaction.category] += parseInt(transaction.amount);
            } else {
                expensesData[transaction.category] = parseInt(transaction.amount);
            }
        }
    }

    // converts expenses into an array to sort into a pie chart
    const data = Object.keys(expensesData).map(category => ({
        x: category,
        y: expensesData[category]
    }));

    const colorPalette = ["#FF5733", "#FFC300", "#DAF7A6", "#A0E7E5", "#B39DDB", "#FF5733", "#FFC300", "#DAF7A6", "#A0E7E5", "#B39DDB"];

    return (
        <>
            <Card data-testid="cypress-expenses" style={{ width: '25rem', marginBottom:'20px' }}>
                <Card.Body>
                    <Card.Title>Expenses</Card.Title>
                    {/* render piechart, with colour options and font size */}
                    <VictoryPie
                        data={data}
                        colorScale={colorPalette}
                        style={{ labels: { fontSize: 20} }}
                    />
                    {/* displaying total expenses */}
                    <Card.Text>Total Expenses: £{Object.values(expensesData).reduce((acc, val) => acc + val, 0)}</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default Expenses;
