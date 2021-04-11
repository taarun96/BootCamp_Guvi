import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.js';
const initialState = {
  transactions: [
    {
      id: 1,
      text: 'Flower',
      amount: -20,
      type: 'Entertainment',
      nature: 'Personal',
    },
    {
      id: 2,
      text: 'Salary',
      amount: 300,
      type: 'Education',
      nature: 'Personal',
    },
    { id: 3, text: 'Book', amount: -10, type: 'Education', nature: 'Personal' },
    {
      id: 4,
      text: 'Camera',
      amount: 150,
      type: 'Entertainment',
      nature: 'Personal',
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
