import React, { useContext, useEffect } from "react";
import { AppContext } from "contexts/AppContext";
import add_to_cart from 'icons/bt_add_to_cart.svg';
import 'styles/ProductInfo.scss';

const ProductInfo = () => {
  const { state, addToCart } = useContext(AppContext);
  const productCurrent = state.currentProduct;

  useEffect(() => {
    console.log(productCurrent)
  }, [productCurrent])
  return (
    <>
      <img src={productCurrent.image} alt={productCurrent.name} width={400} height={400} />
      <div className="ProductInfo">
        <p>{productCurrent.price}</p>
        <p>{productCurrent.name}</p>
        <p>{productCurrent.description}</p>
        <button className="primary-button add-to-cart-button" onClick={() => addToCart(productCurrent)}>
          <img src={add_to_cart} alt="add to cart" />
          Add to cart
        </button>
      </div>
    </>
  );
}

export { ProductInfo };