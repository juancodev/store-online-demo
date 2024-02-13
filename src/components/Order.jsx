import React from 'react';
import 'styles/Order.scss';

const Order = () => {
  return (
    <div className="order">
      <p>
        <span>04.25.21</span>
        <span>6 article</span>
      </p>
      <p>$560,00</p>
      <img src="icons/flechita.svg" alt="arrow" />
    </div>
  );
}

export { Order };