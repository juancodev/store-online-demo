import React, { useState } from "react";
import { Product } from "@/types/index";

type ContextProps = {
  state: {
    cart: Product[];
    currentProduct: {
      title?: string;
      price?: number;
      description?: string;
      image?: string;
      creationAt?: string;
    };
  };
  addToCart: (item: Product) => void;
  addToDetail: (product: Product) => void;
  removeFromCart: (indexProduct: number) => void;
};

type ProviderProps = {
  children: JSX.Element | JSX.Element[];
};

const AppContext = React.createContext<ContextProps>({
  state: {
    cart: [],
    currentProduct: {
      title: "",
      price: 0,
      description: "",
      image: "",
      creationAt: Date().toString(),
    },
  },
  addToCart: () => {},
  addToDetail: () => {},
  removeFromCart: () => {},
});

export const AppProvider = ({ children }: ProviderProps) => {
  const [state, setState] = useState({
    cart: [],
    currentProduct: {
      title: "",
      price: 0,
      description: "",
      image: "",
      creationAt: Date().toString(),
    },
  });

  const addToCart = (item: unknown) => {
    setState((prevState) => ({
      ...prevState,
      cart: [...prevState.cart, item],
    }));
  };

  const addToDetail = (product: object) => {
    setState((prevState) => ({
      ...prevState,
      currentProduct: product,
    }));
  };

  const removeFromCart = (indexProduct: number) => {
    setState((prevState) => ({
      ...prevState,
      cart: prevState.cart.filter((_, index: number) => {
        return index !== indexProduct;
      }),
    }));
  };

  return (
    <AppContext.Provider
      value={{ state, addToCart, addToDetail, removeFromCart }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
