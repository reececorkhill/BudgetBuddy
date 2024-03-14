import React from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

const Transactions = () => {
    return (
        <div>
            <ListGroup as="ol" numbered>
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Monthly Salary</div> {/* <-- PLACEHOLDER TEXT: This will be the Transaction Name - from localstorage. */}
                    </div>
                    <Badge bg="primary" pill>+£2500.00</Badge> {/* <-- PLACEHOLDER TEXT: This will be the Transaction Amount - from localstorage. */}
                </ListGroup.Item>
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Takeaway</div>
                    </div>
                    <Badge bg="primary" pill>-£25.00</Badge>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default Transactions;