import React, { useContext, useEffect } from 'react';
import '../styles/HistoryList.css';
import { Transaction } from './Transaction.js';

import { GlobalContext } from '../context/GlobalState.js';

export const HistoryList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container">
        <h3>History</h3>
        <ul className="list">
          {transactions.map((transaction) => (
            <Transaction key={transaction._id} transaction={transaction} />
          ))}
        </ul>
      </div>
    </>
  );
};
