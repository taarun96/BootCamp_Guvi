import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.js';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <>
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} {`-${transaction.type}`}
        {`-${transaction.nature}`}
        <span>
          {sign} <span>&#8377;</span>
          {Math.abs(transaction.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(transaction._id)}
          className="delete-btn"
        >
          X
        </button>
      </li>
    </>
  );
};
