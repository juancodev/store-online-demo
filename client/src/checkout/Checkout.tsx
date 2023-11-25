import { useContext } from "react";
import { Header } from "@/components/Header";
import OrderItem from "@/components/OrderItem";
import AppContext from "@/context/AppContext";
import styles from "@/styles/Checkout.module.scss";
import { Product } from "@/types";

const Checkout = () => {
  const { state } = useContext(AppContext);
  console.log(state);
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
                console.log(product.id);
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
          </div>
        </div>
      </>
    );
  }
};

export { Checkout };
