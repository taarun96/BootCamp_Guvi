import React, { useState } from 'react';
import { IncomeExpenses } from './IncomeExpenses.js';

export const ToggleIncomeExpenses = () => {
  const [toggle, setToggle] = useState(false);
  const [buttonText, setButtonText] = useState('Show My Expenditure');
  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => {
          setToggle(!toggle);

          toggle
            ? setButtonText('Show My Expenditure')
            : setButtonText('Hide My Expenditure');
        }}
      >
        {buttonText}
      </button>
      {toggle ? <IncomeExpenses /> : ''}
    </>
  );
};
