import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { OrderItem } from 'components/OrderItem';
import { AppContext } from 'contexts/AppContext';
import { useAuth } from "hooks/useAuth";
import arrow from 'icons/flechita.svg'
import 'styles/MyOrder.scss';

const MyOrder = () => {
  const { state } = useContext(AppContext);
  const { userAuth } = useAuth();
  const navigate = useNavigate();


  console.log(userAuth);
  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  }

  const handleCheckout = () => {
    if (!userAuth.user) {
      navigate('/login');
    } else {
      navigate('/checkout');
    }
  }

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((product, indexValue) => {
          return <OrderItem indexValue={indexValue} product={product} key={`orderItem-${product.id}`} />
        })}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>{sumTotal()}$</p>
        </div>
        <button className="primary-button" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </aside>
  );
}

export { MyOrder };