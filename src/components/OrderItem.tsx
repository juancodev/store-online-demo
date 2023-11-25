import { useContext } from "react";
import AppContext from "@/context/AppContext";
import { Product } from "@/types/index";
import closeIcon from "@/assets/icons/icon_close.png";
import styles from "@/styles/OrderItem.module.scss";

type OrderItemProps = {
  product: Product;
  indexValue: number;
};

const OrderItem = ({ product, indexValue }: OrderItemProps) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (indexProduct: number) => {
    removeFromCart(indexProduct);
  };
  return (
    <div className={styles.OrderItem}>
      <figure>
        <img
          src={product?.image}
          className="product-img"
          alt={product?.title}
          width={50}
          height={50}
        />
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <img
        src={closeIcon}
        alt="close"
        onClick={() => handleRemove(indexValue)}
      />
    </div>
  );
};

export default OrderItem;
