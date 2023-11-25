import { useState } from "react";

type InitialState = {
  cart: Array<unknown>;
  currentProduct: object;
};

const initialState: InitialState = {
  cart: [],
  currentProduct: {},
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload: unknown) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (indexValue: number) => {
    setState({
      ...state,
      cart: state.cart.filter(
        (_: unknown, index: number) => index !== indexValue
      ),
    });
  };

  const addToDetail = (payload: object) => {
    setState({
      ...state,
      cart: [...state.cart],
      currentProduct: payload,
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    addToDetail,
  };
};

export default useInitialState;
