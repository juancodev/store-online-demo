import React, { useContext, useEffect } from 'react';
import { AppContext } from 'contexts/AppContext';
import 'styles/ProductItem.scss';
import buttonAddToCart from 'icons/bt_add_to_cart.svg';
import buttonAddedToCart from 'icons/bt_added_to_cart.svg';

const ProductItem = ({ handleDetailToggle, product }) => {
  const { addToCart, addToDetail, state } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  }

  const handleProductDetail = (product) => {
    addToDetail(product);
    handleDetailToggle('open');
  }

  return (
    <div className="ProductItem">
      <img src={product.image} alt={product.name} onClick={() => handleProductDetail(product)} />
      <div className="dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div className="product-info">
        <p>{product.price}$</p>
        <p>{product.name}</p>
        <figure onClick={() => handleClick(product)} role="presentation">
          {state.cart.includes(product) ? (
            <img src={buttonAddedToCart} />
          ) : (
            <img src={buttonAddToCart} alt="cart" className='add-to-cart-button' />
          )}
        </figure>
      </div>
    </div>
  );
};

export { ProductItem };