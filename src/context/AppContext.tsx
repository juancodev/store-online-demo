import React from "react";

type ContextProps = {
  state: {
    cart: unknown[];
  };
  addToCart: (item: unknown) => void;
  addToDetail: (product: object) => void;
};

const AppContext = React.createContext<ContextProps>({
  state: { cart: [] },
  addToCart: () => {},
  addToDetail: () => {},
});

export default AppContext;
