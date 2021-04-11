import React, { useContext } from 'react';
import '../styles/HistoryList.css';
import { GlobalContext } from '../context/GlobalState.js';
import { Transaction } from './Transaction.js';

export const HistoryList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <div className="container">
        <h3>History</h3>
        <ul className="list">
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      </div>
    </>
  );
};
