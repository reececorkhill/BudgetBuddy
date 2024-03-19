import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Message from './components/Message.jsx';
import AddTransaction from './components/AddTransaction.jsx';
import Transactions from './components/Transactions.jsx';
import Interface from './components/Interface.jsx';
import Balance from './components/Balance.jsx';
import Expenses from './components/Expenses.jsx';

function App() {

  return (
    <>

      <div className="Interface-section" data-testid="cypress-interface-section">
        <Interface />
      </div>

      <div className="welcome-section" data-testid="cypress-welcome-section">
        <Message /> {/* This is the welcome message. */}
      </div>

      <Balance />
      <Expenses />

      <div className="transactions-section" data-testid="cypress-transaction-section">
        <Transactions /> {/* This component displays list of added transactions. */}
      </div>

      <div className="add-transaction-section" data-testid="cypress-add-transaction-section">
        <AddTransaction /> {/*This component allows the user to add a transaction. */}
      </div>
    </>
  )
}

export default App;