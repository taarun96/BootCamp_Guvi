import React, { useState } from 'react';
import { AddExpenditure } from './AddExpenditure.js';
export const ToggleAddExpenditure = () => {
  const [show, setShow] = useState(false);
  const [buttonText1, setButtonText1] = useState('Add an expenditure');

  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => {
          setShow(!show);

          show
            ? setButtonText1('Add a Transaction')
            : setButtonText1('I will Add Later');
        }}
      >
        {buttonText1}
      </button>
      {show ? <AddExpenditure /> : ''}
    </>
  );
};
