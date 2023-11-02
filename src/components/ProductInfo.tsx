import { useContext } from "react";
import AppContext from "@/context/AppContext";
import btnAddToCart from "@/assets/icons/bt_add_to_cart.svg";
import styles from "@/styles/ProductInfo.module.scss";

const ProductInfo = () => {
  const { state, addToCart }: any = useContext(AppContext);
  const productCurrent: any = state.currentProduct;
  console.log(state);
  return (
    <>
      <img
        src={productCurrent.images[0]}
        alt={productCurrent.title}
        width={400}
        height={400}
      />
      <div className={styles.ProductInfo}>
        <p>${productCurrent.price}</p>
        <p>{productCurrent.title}</p>
        <p>{productCurrent.description}</p>
        <button
          className={`${styles["primary-button"]} ${styles["add-to-cart-button"]}`}
          onClick={() => addToCart(productCurrent)}
        >
          <img src={btnAddToCart} alt="add to cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;
