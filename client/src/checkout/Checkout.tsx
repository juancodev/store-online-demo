import { useContext, useEffect } from "react";
import { Header } from "@/components/Header";
import OrderItem from "@/components/OrderItem";
import AppContext from "@/context/AppContext";
import styles from "@/styles/Checkout.module.scss";
import { Product } from "@/types";
import { useSetProducts } from "@/hooks/useGetProducts";

const API = "http://localhost:3200/api/v1/orders";
const productsDestructuring: any = [];

const Checkout = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  //TODO: Fix this line quit the useSetProducts and create a new fetch to the API
  useEffect(() => {
    if (cart.length > 0) {
      const listProducts = cart.map((product: Product) => {
        return product;
      });
      productsDestructuring.push(...listProducts);
    }
    console.log(productsDestructuring);
  }, [cart]);
  const order = useSetProducts(API, productsDestructuring);
  console.log(order);
  // console.log(state);

  const handleSetProducts = (product: object): any => {
    console.log(product);
    return product;
  };

  if (state.cart.length === 0) {
    return (
      <>
        <Header />
        <div className={styles.Checkout}>
          <div className={styles["Checkout-container"]}>
            <h1 className={styles.title}>My order</h1>
            <p className={styles.title}>There are not orders</p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <div className={styles.Checkout}>
          <div className={styles["Checkout-container"]}>
            <h1 className={styles.title}>My order</h1>
            {state.cart.map((product: Product) => {
              if (product.id) {
                const date: string = new Date().toString();
                return (
                  <>
                    <OrderItem product={product} indexValue={product.id} />
                    <div className={styles["Checkout-content"]}>
                      <div className={styles.order}>
                        <p>
                          <span>{date.slice(0, 15)}</span>
                          <span>6 articles</span>
                        </p>
                        <p>${product?.price}</p>
                      </div>
                    </div>
                  </>
                );
              } else {
                return null;
              }
            })}
            <button onClick={() => handleSetProducts(productsDestructuring)}>
              Buy
            </button>
          </div>
        </div>
      </>
    );
  }
};

export { Checkout };
