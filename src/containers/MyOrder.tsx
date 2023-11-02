import { useContext } from "react";
import OrderItem from "@/components/OrderItem";
import AppContext from "@/context/AppContext";
import arrow from "@/icons/flechita.svg";
import styles from "@/styles/MyOrder.module.scss";

const MyOrder = () => {
  const { state }: any = useContext(AppContext);

  const sumTotal = (): number => {
    const reducer = (accumulator: number, currentValue: any): number => {
      return accumulator + currentValue.price;
    };
    const sum: number = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className={styles.MyOrder}>
      <div className={styles["title-container"]}>
        <Image src={arrow} alt="arrow" />
        <p className={styles.title}>My order</p>
      </div>
      <div className={styles["my-order-content"]}>
        {state.cart.map((product: any, indexValue: number) => {
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
        <Link className={styles["primary-button"]} href="/checkout">
          Checkout
        </Link>
      </div>
    </aside>
  );
};

export default MyOrder;
