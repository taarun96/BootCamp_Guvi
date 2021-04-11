import React from 'react';
import { CarouselContainer } from './CarouselContainer';

export const Header = () => {
  return (
    <>
      <h1 className="display-4">Welcome To Money Manager!</h1>
      <CarouselContainer />
      <br />
      <p className="lead">
        All your Expenditure and Income Managed in One Go😎!!!
      </p>
      <hr />
    </>
  );
};
