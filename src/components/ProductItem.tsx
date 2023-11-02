import { useContext } from "react";
import AppContext from "@/context/AppContext";
import buttonAddToCart from "@/assets/icons/bt_add_to_cart.svg";
import buttonAddedToCart from "@/assets/icons/bt_added_to_cart.svg";
import styles from "@/styles/ProductItem.module.scss";

type ProductItemProps = {
  handleDetailToggle: (action: string) => void;
  product: {
    id?: number;
    title?: string;
    price?: number;
    description?: string;
    category?: string;
    images: string[];
  };
};

const ProductItem = ({ handleDetailToggle, product }: ProductItemProps) => {
  const { addToCart, addToDetail, state } = useContext(AppContext);

  const handleClick = (item: unknown) => {
    addToCart(item);
  };

  const handleProductDetail = (product: object) => {
    addToDetail(product);
    handleDetailToggle("open");
  };

  return (
    <div className={styles.ProductItem}>
      <figure
        className={styles["product-card-img"]}
        onClick={() => handleProductDetail(product)}
        role="presentation"
      >
        <img
          src={product?.images[0]}
          alt={product?.title}
          width={640}
          height={480}
        />
        <div className={styles.dots}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </figure>
      <div className={styles["product-info"]}>
        <p>${product.price}</p>
        <p>{product.title}</p>
        <figure onClick={() => handleClick(product)} role="presentation">
          {state?.cart.includes(product) ? (
            <img
              className={`${styles.disabled} ${styles["add-to-cart-btn"]}`}
              src={buttonAddedToCart}
              alt="added to cart"
            />
          ) : (
            <img
              className={`${styles["add-to-cart-btn"]} ${styles.pointer}`}
              src={buttonAddToCart}
              alt="add to cart"
            />
          )}
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
