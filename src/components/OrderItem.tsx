import { useContext } from "react";
import AppContext from "@/context/AppContext";
import closeIcon from "@/icons/icon_close.png";
import styles from "@/styles/OrderItem.module.scss";

const OrderItem = ({ product, indexValue }: any) => {
  const { removeFromCart }: any = useContext(AppContext);

  const handleRemove = (product: unknown) => {
    removeFromCart(product);
  };
  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image
          src={product?.images[0]}
          className="product-img"
          alt={product?.title}
          width={50}
          height={50}
        />
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image
        src={closeIcon}
        alt="close"
        onClick={() => handleRemove(indexValue)}
      />
    </div>
  );
};

export default OrderItem;
