import React from 'react'
import 'styles/ShoppingCartItem';

const ShoppingCartItem = () => {
  return (
    <div className='ShoppingCartItem'>
      <figure>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="product-img" alt="Bike" />
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
    </div>
  );
}

export { ShoppingCartItem };