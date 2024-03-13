import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state 
const initialstate = {
  transaction: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 }, 
    { id: 4, text: ' Camera', amount: 150 },
  ]
}

// create context 
export const Globalcontext = createContext (initialState);

// provider component 
export const Globalprovider = ({ children }) => {
const [state, dispatch] = useReducer(AppReducer, initialState):

return (<Globalcontext.provider value={{
  transactions:state.transactions
}}>
 {children}
</Globalcontext.provider>);
}