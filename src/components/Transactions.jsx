import React from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

const Transactions = () => {
    let savedTransactions = JSON.parse(localStorage.getItem('transactionObject')) || []; // fetching data from localstorage

    return (
        <div>
            <ListGroup as="ol" numbered>
                {savedTransactions.map((data, index) => (
                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" key={index}>
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{data.category}</div>
                        </div>
                        <Badge className={data.type === 'Income' ? 'bg-success' : 'bg-danger'} pill>£{data.amount}</Badge> {/* class based on transaction type for colour coding*/}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}

export default Transactions;
