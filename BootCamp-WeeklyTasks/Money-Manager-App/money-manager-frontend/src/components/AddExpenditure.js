import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.js';

import '../styles/AddExpenditure.css';

export const AddExpenditure = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [nature, setNature] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransactions = {
      text,
      amount: +amount,
      type,
      nature,
    };

    addTransaction(newTransactions);
  };

  return (
    <>
      <hr />

      <div className="container">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Text</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">
              Amount <br />
              (negative - expense, positive - income)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Where you have spent?</label>
            <select
              className="form-control required"
              type="select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option selected>Select a Value</option>
              <option>Fuel</option>
              <option>Education</option>
              <option>Entertainment</option>
              <option>Food</option>
              <option>Miscellaneous</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="type">Personal/Professional</label>
            <select
              className="form-control required"
              type="select"
              value={nature}
              onChange={(e) => setNature(e.target.value)}
              required
            >
              <option>Select a Value</option>
              <option selected>Personal</option>
              <option>Professional</option>
            </select>
          </div>

          <button className="btn">Add to store the transaction</button>
        </form>
      </div>
    </>
  );
};
