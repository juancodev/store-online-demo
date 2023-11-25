import { useContext } from "react";
import { Link } from "react-router-dom";
import OrderItem from "@/components/OrderItem";
import AppContext from "@/context/AppContext";
import arrow from "@/assets/icons/flechita.svg";
import styles from "@/styles/MyOrder.module.scss";

type ReduceValues = {
  price: number;
};

const MyOrder = () => {
  const { state } = useContext(AppContext);

  const sumTotal = (): number => {
    const reducer = (
      accumulator: number,
      currentValue: ReduceValues
    ): number => {
      return accumulator + currentValue.price;
    };
    const sum: number = state.cart?.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className={styles.MyOrder}>
      <div className={styles["title-container"]}>
        <img src={arrow} alt="arrow" />
        <p className={styles.title}>My order</p>
      </div>
      <div className={styles["my-order-content"]}>
        {state.cart?.map((product, indexValue: number): JSX.Element => {
          return (
            <OrderItem
              indexValue={indexValue}
              product={product}
              key={`orderItem-${product.id}`}
            />
          );
        })}
        <div className={styles.order}>
          <p>
            <span>Total</span>
          </p>
          <p>{sumTotal()}$</p>
        </div>
        <Link className={styles["primary-button"]} to="/checkout">
          Checkout
        </Link>
      </div>
    </aside>
  );
};

export default MyOrder;
