import {
  useState
} from 'react'

const initialState = {
  cart: [],
  currentProduct: {}
}

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [
        ...state.cart,
        payload
      ]
    })
  };

  const removeFromCart = (indexValue) => {
    setState({
      ...state,
      cart: state.cart.filter((_, index) => index !== indexValue)
    })
  }

  const addToDetail = (payload) => {
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
    addToDetail
  }
}

export {
  useInitialState
};